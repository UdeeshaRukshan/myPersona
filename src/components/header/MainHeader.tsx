import Link from "next/link";
import { motion } from "framer-motion";
import {useState} from "react";
import { Menu, X } from "lucide-react";
const MainHeader = () => {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
return (
  
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text"
            >
              Udeesha Rukshan
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              <Link href="#about" className="hover:text-primary">
                About
              </Link>
              <Link href="#projects" className="hover:text-primary">
                Projects
              </Link>
              <Link href="#education" className="hover:text-primary">
                Education
              </Link>
              <Link href="#experience" className="hover:text-primary">
                Experience
              </Link>
              <Link href="#contact" className="hover:text-primary">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation Overlay */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute left-0 right-0 top-full bg-white dark:bg-gray-900 shadow-lg border-b"
            >
              <div className="flex flex-col py-4 px-4">
                <Link
                  href="#about"
                  className="py-3 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#projects"
                  className="py-3 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="#education"
                  className="py-3 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Education
                </Link>
                <Link
                  href="#experience"
                  className="py-3 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link
                  href="#contact"
                  className="py-3 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </div>
    
)

}

export default MainHeader;