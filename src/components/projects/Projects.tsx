import React, { useState } from "react";
import { Button as MuiButton } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import projects from "../../info/info"; // Assuming this path is correct and exports projects
import Image from "next/image";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

// Define project type based on usage, assuming from info.ts
interface Project {
  id: number; // Or string, depending on your data
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
}


const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, delay: index * 0.1, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      key={project.id}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col h-full group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
    >
      <div className="h-52 sm:h-56 md:h-60 bg-muted relative overflow-hidden">
        <Image
          src={project.image}
          alt={`Project: ${project.title}`}
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
          layout="fill"
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-pink-500 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 overflow-hidden max-h-24 leading-relaxed flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.github && (
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <MuiButton
                variant="outlined"
                size="small"
                startIcon={<Github size={16} />}
                className="!border-gray-400 !text-gray-700 dark:!border-gray-500 dark:!text-gray-300 hover:!bg-gray-100 dark:hover:!bg-gray-700 hover:!border-pink-500 dark:hover:!border-pink-400 hover:!text-pink-500 dark:hover:!text-pink-400 transition-all"
              >
                Code
              </MuiButton>
            </Link>
          )}
          {project.demo && (
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <MuiButton
                variant="contained"
                size="small"
                startIcon={<ExternalLink size={16} />}
                className="!bg-pink-500 hover:!bg-pink-600 !text-white transition-all"
              >
                Demo
              </MuiButton>
            </Link>
          )}
          {!project.github && !project.demo && (
            <span className="text-xs text-gray-500 dark:text-gray-400 italic py-2">Coming soon</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};


function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayProjects = showAll ? projects : projects.slice(0, 6);
  const hasMoreProjects = projects.length > 6;

  return (
    <section id="projects" className="container mx-auto px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 via-violet-500 to-teal-500 text-transparent bg-clip-text"
      >
        Featured Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {displayProjects.map((project, index) => (
          // Pass project and index to ProjectCard
          <ProjectCard key={project.id || index} project={project as Project} index={index} />
        ))}
      </div>

      {hasMoreProjects && (
        <div className="flex justify-center mt-16 sm:mt-20">
          <MuiButton
            variant="outlined"
            onClick={() => setShowAll(!showAll)}
            startIcon={showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            className="!border-pink-500 !text-pink-500 hover:!bg-pink-500/10 !py-3 !px-6 !text-base !font-semibold !rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {showAll ? "Show Less" : `Show More (${projects.length - displayProjects.length} more)`}
          </MuiButton>
        </div>
      )}
    </section>
  );
}

export default Projects;