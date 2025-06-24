"use client";
import React from "react";
import { motion } from "framer-motion";
import experiences, { ExperienceInfo } from "../../info/experience";
import Image from "next/image";
import { Briefcase } from "lucide-react";

const ExperienceCard: React.FC<{ experience: ExperienceInfo, index: number }> = ({
  experience,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
    >
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-md">
          {experience.logo ? (
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={40}
              height={40}
              className="rounded-full object-contain bg-white p-0.5" // Added padding for logos that might not have transparent backgrounds
            />
          ) : (
            <Briefcase className="h-8 w-8 text-white" />
          )}
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
          {experience.title}
        </h3>
        <p className="text-lg text-teal-600 dark:text-teal-400 font-semibold mb-1">
          {experience.company}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {experience.duration}
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          {experience.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 via-violet-500 to-teal-500 text-transparent bg-clip-text"
        >
          Professional Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-10">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
