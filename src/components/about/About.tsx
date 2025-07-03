import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Button as MuiButton,
  } from "@mui/material";
const About = () => {
  const socialLinks = [
    {
      href: "https://github.com/UdeeshaRukshan",
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/udeesha-rukshan-852022217/",
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
    },
    {
      href: "https://www.upwork.com/freelancers/~0163ba5fdf674aa284",
      icon: <FontAwesomeIcon icon={faUpwork} className="h-5 w-5" />, // Adjusted size for consistency
      label: "Upwork",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="container mx-auto px-4 py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl mx-auto text-center" // Reduced max-width for better readability
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-10 bg-gradient-to-r from-pink-500 via-violet-500 to-teal-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed"
        >
          I’m a passionate Full Stack Developer with expertise in building modern web
          applications and a keen interest in Generative AI and Cloud technologies.
          I love creating beautiful, functional, and scalable user
          experiences using the latest tools and techniques. My goal is to develop innovative
          and impactful distributed systems.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center"
        >
          {socialLinks.map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                <MuiButton
                  variant="outlined"
                  size="large" // Made buttons slightly larger
                  className="!rounded-lg !border-gray-400 dark:!border-gray-600 !text-gray-700 dark:!text-gray-300 hover:!border-pink-500 dark:hover:!border-pink-400 hover:!text-pink-500 dark:hover:!text-pink-400 !transition-all !duration-300"
                  startIcon={link.icon}
                  sx={{paddingLeft: '16px', paddingRight: '16px'}} // Ensure enough padding for icon and text
                >
                  {link.label}
                </MuiButton>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;