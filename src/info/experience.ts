export interface ExperienceInfo {
  company: string;
  title: string;
  duration: string;
  description: string[];
  logo: string;
}

const experiences: ExperienceInfo[] = [
  {
    company: "GTN Technologies",
    title: "Software Engineer Intern",
    duration: "Mar 2024 - Present",
    description: [
      "Working on full-stack development of web applications using React, Node.js, and PostgreSQL.",
      "Developing and maintaining RESTful APIs for various services.",
      "Collaborating with cross-functional teams to deliver high-quality software solutions.",
    ],
    logo: "/gtngroup_logo.jpeg",
  },
  {
    company: "Nvidia",
    title: "GenAI Training Program",
    duration: "Jan 2024",
    description: [
      "Completed an intensive training program on Generative AI.",
      "Gained hands-on experience with large language models and diffusion models.",
      "Developed projects applying GenAI techniques to real-world problems.",
    ],
    logo: "/nvidia_logo.jpeg",
  },
  // Add more experiences here
];

export default experiences;
