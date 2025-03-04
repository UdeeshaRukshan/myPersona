import React from 'react'
import { Button as MuiButton } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
 import projects from "../../info/info";
 import Image from "next/image";
 import { Github,ExternalLink} from "lucide-react";
function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-24">
    <h2 className="text-3xl font-bold mb-12 text-center">
      Featured Projects
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg h-96 flex flex-col"
        >
          <div className="h-48 bg-muted relative">
            <Image
              src={project.image}
              alt={`Project ${project.title}`}
              className="object-cover"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4 overflow-hidden max-h-24">
              {project.description}
            </p>
            <div className="flex gap-2 mt-auto">
              <Link
                href={project.github}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <MuiButton
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: "rgba(209, 213, 219, 0.5)",
                    color: "inherit",
                    "&:hover": {
                      borderColor: "#8b5cf6",
                    },
                  }}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </MuiButton>
              </Link>
              <Link
                href={project.demo}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <MuiButton
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#8b5cf6",
                    "&:hover": {
                      backgroundColor: "#7c3aed",
                    },
                  }}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </MuiButton>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
  )
}

export default Projects