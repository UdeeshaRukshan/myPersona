"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Calendar } from "lucide-react";
import experiences, { ExperienceInfo } from "../../info/experience";

const ExperienceCard: React.FC<{ experience: ExperienceInfo; index: number }> = ({ experience, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: index * 0.2, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-pink-500 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 relative flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
          <Image
            src={experience.logo}
            alt={experience.company}
            fill
            className="object-contain p-2"
            sizes="64px"
          />
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="h-4 w-4 text-pink-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {experience.company}
            </h3>
          </div>
          
          <h4 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">
            {experience.title}
          </h4>
          
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {experience.duration}
            </span>
          </div>
          
          <ul className="space-y-2">
            {experience.description.map((item, itemIndex) => (
              <li key={itemIndex} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                <span className="text-pink-500 mr-2 mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 via-violet-500 to-teal-500 text-transparent bg-clip-text"
      >
        Work Experience
      </motion.h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
      
      {experiences.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            Experience details coming soon!
          </p>
        </div>
      )}
    </section>
  );
};

export default Experience;
