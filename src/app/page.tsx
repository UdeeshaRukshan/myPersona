"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button as MuiButton } from "@mui/material";
import { useEffect, useState } from "react";

import "../styles/globals.css";
import Image from "next/image";

import About from "../components/about/About";
import CertificationsSection from "../components/certifications/certificationSec";
import MainHeader from "../components/header/MainHeader";
import Technologies from "../components/technologies/Technologies";
import Education from "../components/education/Education";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/Projects";
import Experience from "../components/experience/Experience"; // Added import
import Blogs from "../components/blogs/blogs";
export default function Page() {
  const [mounted, setMounted] = useState(false);

  // Add this effect to scroll to top on page load
  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-teal-100 dark:from-gray-900 dark:to-gray-800">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 border-b">
        <MainHeader />
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-4">
          {/* Background decorative elements */}
          <motion.div
            className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300/30 rounded-full filter blur-xl opacity-70 animate-blob"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          ></motion.div>
          <motion.div
            className="absolute -bottom-20 -right-20 w-72 h-72 bg-teal-300/30 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-2000"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          ></motion.div>
           <motion.div
            className="absolute top-1/2 left-1/4 w-60 h-60 bg-violet-300/30 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-4000"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="container mx-auto max-w-4xl z-10"
          >
            <motion.div
              className="flex justify-center items-center mb-8 sm:mb-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
            >
              <Image
                src="/udeesha2.png" 
                alt="Udeesha Rukshan"
                className="rounded-full shadow-2xl border-4 border-white dark:border-gray-700 w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
                width={300}
                height={300}
                priority
              />
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-500 via-violet-500 to-teal-500 text-transparent bg-clip-text leading-tight px-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Hello, I&apos;m <br className="sm:hidden" />
              Udeesha Rukshan
            </motion.h1>
            
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <span className="block mb-2 sm:mb-0 sm:inline">Full Stack Developer</span>
              <span className="hidden sm:inline"> | </span>
              <span className="block mb-2 sm:mb-0 sm:inline">GenAI Developer</span>
              <span className="hidden md:inline"> | </span>
              <span className="hidden md:block md:inline">Associate Software Engineer</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <MuiButton
                variant="contained"
                size="large"
                className="!bg-pink-500 hover:!bg-pink-600 !text-white !py-3 !px-6 !text-base !font-semibold !rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
              >
                Download CV
              </MuiButton>
              <MuiButton
                variant="outlined"
                size="large"
                className="!border-pink-500 !text-pink-500 hover:!bg-pink-500/10 !py-3 !px-6 !text-base !font-semibold !rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
              >
                <Link href="#projects" className="text-inherit dark:text-inherit">
                  View Projects
                </Link>
              </MuiButton>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <About />

        {/* Technologies */}
        <Technologies />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />
        <Blogs/>
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

