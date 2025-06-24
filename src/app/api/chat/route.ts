import { NextRequest, NextResponse } from "next/server";
import personalData from "@/info/personalData.json"; // Use Next.js path alias

// A very simple context string building function.
// For a real application, you'd likely use a more sophisticated RAG approach.
function buildContext(query: string): string {
  let context = `User's Question: ${query}\n\nRelevant Information about Udeesha Rukshan Gamage:\n`;
  context += `Full Name: ${personalData.fullName}\n`;
  context += `Title: ${personalData.title}\n`;
  context += `Bio: ${personalData.bio}\n\n`;

  context += "Skills:\n";
  personalData.skills.forEach(skill => {
    context += `- ${skill.name} (${skill.level})\n`;
  });
  context += "\n";

  context += "Education:\n";
  personalData.education.forEach(edu => {
    context += `- ${edu.degree} at ${edu.institution} (${edu.period}). ${edu.details || ''}\n`;
  });
  context += "\n";

  context += "Experience:\n";
  personalData.experience.forEach(exp => {
    context += `- ${exp.title} at ${exp.company} (${exp.duration}). Responsibilities: ${exp.description.join(', ')}\n`;
  });
  context += "\n";

  context += "Projects:\n";
  personalData.projects.forEach(proj => {
    context += `- ${proj.title}: ${proj.description}\n`;
  });
  context += "\n";

  context += "Interests:\n";
  context += personalData.interests.join(', ') + "\n";

  // Simple keyword matching to add more specific context (very basic)
  const lowerQuery = query.toLowerCase();
  if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("linkedin") || lowerQuery.includes("github")) {
    context += "\nContact Information:\n";
    context += `Email: ${personalData.contact.email}\n`;
    context += `LinkedIn: ${personalData.contact.linkedin}\n`;
    context += `GitHub: ${personalData.contact.github}\n`;
  }

  return context;
}

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN;
    if (!HUGGINGFACE_API_TOKEN) {
        console.warn("HUGGINGFACE_API_TOKEN is not set. Chatbot may not function correctly.");
        // Fallback response if API token is missing
        return NextResponse.json({
            answer: "I'm currently running in a limited mode as some configurations are missing. Please ask general questions based on the portfolio content."
        });
    }

    const context = buildContext(query);
    const model = "mistralai/Mistral-7B-Instruct-v0.1"; // Example model, can be changed
    // const model = "deepset/roberta-base-squad2"; // For extractive QA

    const prompt = `
You are a helpful AI assistant for Udeesha Rukshan Gamage's personal portfolio website.
Your goal is to answer questions about Udeesha based *only* on the information provided below.
Do not make up information. If the answer is not in the provided information, say that you don't have that information.
Keep your answers concise and friendly.

Provided Information:
---
${context}
---

User's Question: ${query}

Answer:
`;

    const response = await fetch(
      `https://api-inference.huggingface.co/models/${model}`,
      {
        headers: {
          Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 200, // Adjust as needed
            return_full_text: false, // For instruct models, we only want the generated part
            temperature: 0.7,
            // top_p: 0.9,
            // repetition_penalty: 1.1
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Hugging Face API error:", errorText);
      return NextResponse.json({ error: `Hugging Face API Error: ${errorText}` }, { status: response.status });
    }

    const results = await response.json();

    // The response structure can vary based on the model.
    // For instruct/text-generation models, it's often an array with an object containing "generated_text".
    let answer = "Sorry, I had trouble understanding that.";
    if (results && Array.isArray(results) && results[0] && results[0].generated_text) {
        answer = results[0].generated_text.trim();
    } else if (results && results.answer) { // For extractive QA models
        answer = results.answer.trim();
    } else {
        console.log("Unexpected API response structure:", results);
    }

    return NextResponse.json({ answer });

  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: error.message || "An internal server error occurred" }, { status: 500 });
  }
}

// Optional: Add a GET handler for testing or other purposes
export async function GET() {
  return NextResponse.json({ message: "Chat API is active. Use POST to send queries." });
}
