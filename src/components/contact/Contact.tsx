import React from "react";
import { motion } from "framer-motion";
import { Button as MuiButton, TextField } from "@mui/material";
import { Mail, Send } from "lucide-react"; // Using Send for the button icon

// Common styles for TextField for DRYness
const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(156, 163, 175, 0.4)", // gray-400
    },
    "&:hover fieldset": {
      borderColor: "rgba(129, 140, 248, 0.7)", // indigo-400
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ec4899", // pink-500
    },
    color: "text.primary", // Let theme handle text color
    backgroundColor: "transparent", // Ensure no override from Mui
  },
  "& .MuiInputLabel-root": {
    color: "text.secondary", // Let theme handle label color
    "&.Mui-focused": {
      color: "#ec4899", // pink-500
    }
  },
  "& .MuiOutlinedInput-input": {
    color: "text.primary", // Let theme handle input text color
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};


function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-24">
      <motion.div
        className="max-w-2xl mx-auto" // Slightly narrower for contact form
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 via-violet-500 to-teal-500 text-transparent bg-clip-text"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl" // Enhanced shadow and rounding
        >
          <form
            action="https://formsubmit.co/udeeshagamage12@gmail.com" // Replace with your actual email
            method="POST"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <TextField
                id="name"
                label="Full Name"
                name="name"
                variant="outlined"
                fullWidth
                required
                InputProps={{ className: "dark:text-white" }}
                sx={textFieldStyles}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <TextField
                id="email"
                label="Email Address"
                type="email"
                name="email"
                variant="outlined"
                fullWidth
                required
                InputProps={{ className: "dark:text-white" }}
                sx={textFieldStyles}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <TextField
                id="message"
                label="Your Message"
                name="message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={5}
                InputProps={{ className: "dark:text-white" }}
                sx={textFieldStyles}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <MuiButton
                fullWidth // Changed from w-full for Mui consistency
                variant="contained"
                size="large"
                type="submit"
                startIcon={<Send size={18} />} // Changed icon to Send
                className="!bg-pink-500 hover:!bg-pink-600 !text-white !py-3 !font-semibold !rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </MuiButton>
            </motion.div>
             {/* Formsubmit.co hidden fields for redirect etc. */}
            <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" /> {/* Replace with your thank you page */}
            <input type="hidden" name="_subject" value="New contact form submission!" />
            <input type="hidden" name="_captcha" value="false" /> {/* Consider enabling captcha for production */}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
