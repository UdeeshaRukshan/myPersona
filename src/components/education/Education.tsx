import React from 'react'
import {
    GraduationCap,
    Briefcase,
  } from "lucide-react";
  import { motion } from "framer-motion";
  
function Education() {
  return (
    <section id="education" className="container mx-auto px-4 py-24">
    <h2 className="text-3xl font-bold mb-12 text-center">
      Education & Experience
    </h2>
    <div className="max-w-3xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        viewport={{ once: true }}
        className="flex gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg rgb-border"
      >
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">
            Bachelor of Science in Software engineering (Reading)
          </h3>
          <p className="text-muted-foreground mb-1">SLIIT</p>
          <p className="text-sm text-muted-foreground">2021 - 2025</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        viewport={{ once: true }}
        className="flex gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg rgb-border"
      >
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">
            Intern Software Engineer
          </h3>
          <p className="text-muted-foreground mb-1">GTN</p>
          <p className="text-sm text-muted-foreground">
            2024 Mar - 2024 Sep
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        viewport={{ once: true }}
        className="flex gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg rgb-border"
      >
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Advance Level</h3>
          <p className="text-muted-foreground mb-1">
            Carey College Colombo 08
          </p>
          <p className="text-sm text-muted-foreground">2017-2020</p>
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default Education