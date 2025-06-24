export interface EducationInfo {
  degree: string;
  institution: string;
  period: string;
  details?: string[]; // Optional: for bullet points or multiple lines of details
  logo?: string; // Optional: if you want to add logos for institutions
}

const educationData: EducationInfo[] = [
  {
    degree: "Bachelor of Science in Software Engineering (Reading)",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2021 - 2025 (Expected)",
    details: [
      "Focusing on software development principles, data structures, algorithms, and cloud computing.",
      "Relevant coursework: Web Development, Database Management, AI Fundamentals."
    ],
    logo: "/sliit_logo.png", // Assuming you might add a logo later in public/
  },
  {
    degree: "Advanced Level (Physical Science Stream)",
    institution: "Carey College, Colombo 08",
    period: "2017 - 2020",
    details: ["Studied Combined Mathematics, Physics, and Chemistry."],
    logo: "/carey_college_logo.png", // Assuming you might add a logo later
  },
];

export default educationData;
