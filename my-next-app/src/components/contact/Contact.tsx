import React from "react";
import { motion } from "framer-motion";
import {
  Button as MuiButton,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { Mail } from "lucide-react";
function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-24">
      <div className=" max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
        >
          <form
            action="https://formsubmit.co/udeeshagamage12@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <div className="space-y-2">
              <TextField
                id="name"
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                placeholder="Your name"
                className="dark-input"
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(209, 213, 219, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(209, 213, 219, 0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#8b5cf6",
                    },
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(209, 213, 219, 0.7)",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "inherit",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(209, 213, 219, 0.5)",
                    opacity: 1,
                  },
                }}
              />
            </div>
            <div className="space-y-2">
              <TextField
                id="email"
                label="Email"
                type="email"
                name="email"
                variant="outlined"
                fullWidth
                required
                placeholder="Your email"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(209, 213, 219, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(209, 213, 219, 0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#8b5cf6",
                    },
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(209, 213, 219, 0.7)",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "inherit",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(209, 213, 219, 0.5)",
                    opacity: 1,
                  },
                }}
              />
            </div>
            <div className="space-y-2">
              <TextareaAutosize
                id="message"
                name="message"
                minRows={5}
                placeholder="Your message"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400"
              />
            </div>
            <MuiButton
              className="w-full"
              variant="contained"
              size="large"
              type="submit"
              sx={{
                backgroundColor: "#8b5cf6",
                "&:hover": {
                  backgroundColor: "#7c3aed",
                },
              }}
            >
              <Mail className="h-4 w-4 mr-2" />
              Send Message
            </MuiButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
