// components/CertificationsSection.jsx
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';


import {
    Button as MuiButton,
  } from "@mui/material";

import certifications from '../../info/certifications';

const CertificationsSection= () =>{

  const [showAll, setShowAll] = useState(false);
  
  // Display only first 6 items unless showAll is true
  const displayedCertifications = showAll 
    ? certifications 
    : certifications.slice(0, 8);

  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Certifications
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedCertifications.map((certification, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="flex flex-row p-4">
              {/* Image on left */}
              <div className="h-24 w-24 relative flex-shrink-0 mr-4">
                <Image
                  src={certification.image || "/placeholder.svg"}
                  alt={certification.name}
                  fill={true}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              
              {/* Content on right */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-sm font-bold mb-1 line-clamp-2">
                    {certification.name}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-2 dark:text-gray-300">
                    Organization: {certification.organization}
                  </p>
                </div>
                {certification.url && (
                  <div>
                    <Link
                      href={certification.url}
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View</span>
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {certifications.length > 6 && (
        <div className="flex justify-center mt-8">
          <MuiButton
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Show More
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </MuiButton>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;