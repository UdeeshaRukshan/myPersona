"use client";
import React from "react";
import { motion } from "framer-motion";
import experiences, { ExperienceInfo } from "../../info/experience"; // Corrected import path
import Image from "next/image";

const ExperienceCard: React.FC<{ experience: ExperienceInfo }> = ({
  experience,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6"
    >
      <div className="flex items-center mb-4">
        <Image
          src={experience.logo}
          alt={`${experience.company} logo`}
          width={48}
          height={48}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {experience.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {experience.company} | {experience.duration}
          </p>
        </div>
      </div>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {experience.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Professional Experience
        </motion.h2>
        <div>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
