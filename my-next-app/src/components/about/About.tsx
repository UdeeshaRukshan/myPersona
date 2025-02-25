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

    return (
         <section id="about" className="container mx-auto px-4 py-24">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                  >
                    <h2 className="text-3xl font-bold mb-8">About Me</h2>
                    <p className="text-lg text-muted-foreground mb-9 dark:text-white">
                      I’m a passionate developer with expertise in building modern web
                      applications. I love creating beautiful and functional user
                      experiences using the latest technologies, including the
                      integration of Gen AI technologies into existing systems and the
                      development of cutting-edge distributed systems.
                    </p>
                    <div className="flex gap-4 justify-center">
                      <Link
                        href="https://github.com/UdeeshaRukshan"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MuiButton
                          variant="outlined"
                          size="small"
                          className="rgb-border"
                        >
                          <Github className="h-5 w-5" />
                        </MuiButton>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/udeesha-rukshan-852022217/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MuiButton
                          variant="outlined"
                          size="small"
                          className="rgb-border"
                        >
                          <Linkedin className="h-5 w-5" />
                        </MuiButton>
                      </Link>
                      <Link
                        href="https://www.upwork.com/freelancers/~0163ba5fdf674aa284"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MuiButton
                          variant="outlined"
                          size="small"
                          className="rgb-border"
                        >
                          <FontAwesomeIcon icon={faUpwork} size="xl" />
                        </MuiButton>
                      </Link>
                    </div>
                  </motion.div>
                </section>
    );
}

export default About;