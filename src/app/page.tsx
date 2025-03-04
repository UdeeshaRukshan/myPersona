"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button as MuiButton } from "@mui/material";

import "../styles/globals.css";
import Image from "next/image";

import About from "../components/about/About";
import CertificationsSection from "../components/certifications/certificationSec";
import MainHeader from "../components/header/MainHeader";
import Technologies from "../components/technologies/Technologies";
import Education from "../components/education/Education";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/Projects";
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-teal-100 dark:from-gray-900 dark:to-gray-800">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 border-b">
        <MainHeader />
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center items-center">
              <Image
                src="/udeesha.jpg" // Path relative to the public directory
                alt="Udeesha Rukshan"
                className="rounded-full"
                width={336}
                height={336}
              />
            </div>

            <p>
              <br></br>
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-violet-500 to-teal-500 text-transparent bg-clip-text">
              Hello, I&apos;m Udeesha Rukshan
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground dark:text-white">
              Full Stack Developer | GenAI developer | Distributed Systems
            </p>

            <div className="flex gap-4 justify-center">
              <MuiButton variant="contained" size="large">
                Download CV
              </MuiButton>
              <MuiButton variant="outlined" size="large">
                View Projects
              </MuiButton>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <About />

        {/* Technologies */}
        <Technologies />

        {/* Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />
        {/* Certification Section */}
        <CertificationsSection />
        {/* Contact Section */}
        <Contact />
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-4">
              <Link
                href="https://github.com/UdeeshaRukshan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MuiButton
                  variant="text"
                  size="small"
                  className="text-gray-800 dark:text-white"
                >
                  <Github className="h-5 w-5" />
                </MuiButton>
              </Link>
              <Link
                href="https://www.linkedin.com/in/udeesha-rukshan-852022217/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MuiButton
                  variant="text"
                  size="small"
                  className="text-gray-800 dark:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </MuiButton>
              </Link>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              © {new Date().getFullYear()} Udeesha Rukshan Gamage. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
