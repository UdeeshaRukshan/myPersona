"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button as MuiButton, TextField, TextareaAutosize } from "@mui/material" // Import Material-UI components
import '../styles/globals.css';  
import Image from "next/image"
import projects from "../info/info"

export default function Page() { 
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-teal-100 dark:from-gray-900 dark:to-gray-800">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text"
            >
              Udeesha Rukshan
            </Link>
            <div className="flex gap-6">
              <Link href="#about" className="hover:text-primary">
                About
              </Link>
              <Link href="#projects" className="hover:text-primary">
                Projects
              </Link>
              <Link href="#education" className="hover:text-primary">
                Education
              </Link>
              <Link href="#contact" className="hover:text-primary">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto text-center">
          
          <div className="flex justify-center items-center">
          <Image
  src="/udeesha.jpg"  // Path relative to the public directory
  alt="Udeesha Rukshan"
  className="rounded-full p-12"  // Remove size-related classes, as width/height will be set below
  width={356}  // Adjust the width as needed
  height={356}  // Adjust the height as needed
  
/>

  </div>

  <p><br></br></p>
 
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-violet-500 to-teal-500 text-transparent bg-clip-text">
              Hello, I&apos;m Udeesha Rukshan
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
  Full Stack Developer | Gen Ai developer | Distributed Systems
</p>

            <div className="flex gap-4 justify-center">
              <MuiButton variant="contained" size="large">Download CV</MuiButton>
              <MuiButton variant="outlined" size="large">
                View Projects
              </MuiButton>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
            I’m a passionate developer with expertise in building modern web applications.
             I love creating beautiful and functional user experiences using the latest technologies,
              including the integration of Gen AI technologies into existing systems and the development of cutting-edge distributed systems.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="https://github.com/UdeeshaRukshan" target="_blank" rel="noopener noreferrer">
                <MuiButton variant="outlined" size="small">
                  <Github className="h-5 w-5" />
                </MuiButton>
              </Link>
              <Link href="https://www.linkedin.com/in/udeesha-rukshan-852022217/" target="_blank" rel="noopener noreferrer">
                <MuiButton variant="outlined" size="small">
                  <Linkedin className="h-5 w-5" />
                </MuiButton>
              </Link>
            </div>
          </motion.div>
        </section>
        
        {/* Technologies */}
  <section id="projects" className="container mx-auto px-4 py-24">
  <h2 className="text-3xl font-bold mb-12 text-center">Technologies</h2>
  <div className="relative w-full overflow-hidden">
    <div className="flex space-x-6 py-4 animate-scroll">
      <div className="flex space-x-6 min-w-max">
       
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="130" height="50" alt="JavaScript" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"  width="130" height="50" alt="TypeScript" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"  width="130" height="50" alt="React" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"  width="130" height="50" alt="Python" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"  width="130" height="50" alt="C#" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-line-wordmark.svg"  width="130" height="50" alt="AWS" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"  width="130" height="50" alt="Android" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"  width="130" height="50" alt="Azure" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"  width="130" height="50" alt="Bootstrap" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"  width="130" height="50" alt="Docker" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"  width="130" height="50" alt="GitLab" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  width="130" height="50" alt="Git" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"  width="130" height="50" alt="GraphQL" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"  width="130" height="50" alt="Java" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"  width="130" height="50" alt="Jira" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"  width="130" height="50" alt="Kubernetes" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"  width="130" height="50" alt="MongoDB" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"  width="130" height="50" alt="MySQL" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"  width="130" height="50" alt="Next.js" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"  width="130" height="50" alt="npm" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"  width="130" height="50" alt="OpenCV" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"  width="130" height="50" alt="Pandas" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  width="130" height="50" alt="PostgreSQL" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"  width="130" height="50" alt="PyTorch" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"  width="130" height="50" alt="Redis" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"  width="130" height="50" alt="Redux" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"  width="130" height="50" alt="Spring" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"  width="130" height="50" alt="SQLite" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"  width="130" height="50" alt="TensorFlow" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"  width="130" height="50" alt="TailwindCSS" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"  width="130" height="50" alt="Trello" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  width="130" height="50" alt="VSCode" />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg"  width="130" height="50" alt="Xcode" />
        
      </div>
    </div>
  </div>
</section> 





        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project,index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-video bg-muted relative">
                  <Image
                    src={project.image}
                    alt={`Project ${project}`}
                    className="w-70% h-70% object-cover"
                    width={500}
                    height={200}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                   {project.description}
                  </p>
                  <div className="flex gap-2">
                    <MuiButton variant="outlined" size="small">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </MuiButton>
                    <MuiButton variant="contained" size="small">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </MuiButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="container mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Experience</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Bachelor of Science in Software engineering (Reading)</h3>
                <p className="text-muted-foreground mb-1">SLIIT</p>
                <p className="text-sm text-muted-foreground">2021 - 2025</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Intern Software Engineer</h3>
                <p className="text-muted-foreground mb-1">GTN</p>
                <p className="text-sm text-muted-foreground">2024 Mar - 2024 Sep</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-24">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <form className="space-y-6">
                <div className="space-y-2">
                  <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    placeholder="Your email"
                  />
                </div>
                <div className="space-y-2">
                  <TextareaAutosize
                    id="message"
                    minRows={5}
                    placeholder="Your message"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <MuiButton className="w-full" variant="contained" size="large">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </MuiButton>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t">
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex gap-4">
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
          <MuiButton variant="text" size="small" className="text-gray-800 dark:text-white">
            <Github className="h-5 w-5" />
          </MuiButton>
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <MuiButton variant="text" size="small" className="text-gray-800 dark:text-white">
            <Linkedin className="h-5 w-5" />
          </MuiButton>
        </Link>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </div>
  </div>
</footer>


    </div>
  )
}
