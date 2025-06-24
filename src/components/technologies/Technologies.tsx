import Image from "next/image";
import { motion } from "framer-motion";

const techIcons = [
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", darkInvert: true }, // Assuming nextjs logo might need invert for dark
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "CSharp", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", darkInvert: true },
  { name: "Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
];

// Duplicate for seamless scroll effect
const duplicatedTechIcons = [...techIcons, ...techIcons];

const TechIcon: React.FC<{ icon: typeof techIcons[0]; index: number }> = ({ icon, index }) => {
  return (
    <motion.div
      className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${icon.darkInvert ? 'dark:invert' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: (index % techIcons.length) * 0.05, ease: "easeOut" }} // Stagger based on original index
      viewport={{ once: true, amount: 0.3 }}
    >
      <Image
        src={icon.src}
        width={64}
        height={64}
        alt={icon.name}
        className="object-contain w-full h-full"
        unoptimized={true} // Since they are SVGs from CDN
      />
    </motion.div>
  );
};


const Technologies = () => {
  return (
    <section id="technologies" className="container mx-auto px-4 py-24 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 via-violet-500 to-teal-500 text-transparent bg-clip-text"
      >
        Technologies I Work With
      </motion.h2>
      <div className="relative w-full group"
           style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }} // Fade edges
      >
        <div className="flex space-x-8 md:space-x-12 py-4 animate-scroll group-hover:pause-animation">
          {duplicatedTechIcons.map((icon, index) => (
            <TechIcon key={`${icon.name}-${index}`} icon={icon} index={index} />
          ))}
        </div>
      </div>
       <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-8">
        ...and always learning more!
      </p>
    </section>
  );
};

export default Technologies;