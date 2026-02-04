export interface ExperienceInfo {
  company: string;
  title: string;
  duration: string;
  description: string[];
  logo: string;
}

const experiences: ExperienceInfo[] = [
  {
    company: "Fidenz Technologies",
    title: "Assorciate Software Engineer",
    duration: "Nov 2025 - Present",
    description: [
      "Developing software solutions using .NET and Ruby on Rails frameworks.", 
      "Collaborating with cross-functional teams to deliver high-quality software solutions.",
    ],
    logo: "/Fidenz-Technologies.png",
  },
  {
    company: "GTN Technologies",
    title: "Software Engineer Intern",
    duration: "Mar 2024 - Sep 2024",
    description: [
      "Working on full-stack development of web applications using React, Node.js, and PostgreSQL.",
      "Developing and maintaining RESTful APIs for various services.",
      "Collaborating with cross-functional teams to deliver high-quality software solutions.",
    ],
    logo: "/gtngroup_logo.jpeg",
  },
  
  
];

export default experiences;
