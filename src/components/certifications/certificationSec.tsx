import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';
import { Button as MuiButton } from "@mui/material";
import certificationsData from '../../info/certifications'; // Renamed for clarity if it's just data

// Define certification type based on usage
interface Certification {
  name: string;
  organization: string;
  image?: string;
  url?: string;
}

const CertificationCard: React.FC<{ certification: Certification; index: number }> = ({ certification, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, delay: index * 0.05, ease: "easeOut" } // Faster delay for many items
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex items-center p-4 sm:p-5">
        <div className="h-16 w-16 sm:h-20 sm:w-20 relative flex-shrink-0 mr-4 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          {certification.image ? (
            <Image
              src={certification.image}
              alt={certification.name}
              fill={true}
              className="object-contain p-1" // Added padding within the container
              sizes="(max-width: 768px) 20vw, 10vw"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-gray-400 dark:text-gray-500">
              <ExternalLink size={24} /> {/* Placeholder icon */}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center flex-grow min-w-0"> {/* min-w-0 for text truncation */}
          <h3 className="text-sm sm:text-base font-semibold mb-0.5 text-gray-900 dark:text-white truncate group-hover:text-pink-500 transition-colors">
            {certification.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1 truncate">
            {certification.organization}
          </p>
          {certification.url && (
            <Link
              href={certification.url}
              className="inline-flex items-center text-pink-500 dark:text-pink-400 hover:underline text-xs sm:text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Credential</span>
              <ExternalLink className="ml-1 h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};


const CertificationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = 8; // Number of items to show initially
  
  const displayedCertifications = showAll 
    ? certificationsData
    : certificationsData.slice(0, itemsToShow);

  const hasMoreCertifications = certificationsData.length > itemsToShow;

  return (
    <section id="certifications" className="container mx-auto px-4 py-24"> {/* Added id */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 via-violet-500 to-teal-500 text-transparent bg-clip-text"
      >
        Certifications & Awards
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {displayedCertifications.map((certification, index) => (
          <CertificationCard key={index} certification={certification as Certification} index={index} />
        ))}
      </div>

      {hasMoreCertifications && (
        <div className="flex justify-center mt-12 sm:mt-16">
          <MuiButton
            variant="outlined"
            onClick={() => setShowAll(!showAll)}
            startIcon={showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            className="!border-pink-500 !text-pink-500 hover:!bg-pink-500/10 !py-3 !px-6 !text-base !font-semibold !rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {showAll ? "Show Less" : `Show More (${certificationsData.length - displayedCertifications.length} more)`}
          </MuiButton>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;