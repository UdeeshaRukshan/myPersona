"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react"; // Import the menu icon

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 border-b">
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
            <Link href="#contact" className="hover:text-primary">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button (Using Tailwind CSS) */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
            <Link
              href="#about"
              className="block py-2 text-gray-800 dark:text-gray-200 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="block py-2 text-gray-800 dark:text-gray-200 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#education"
              className="block py-2 text-gray-800 dark:text-gray-200 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-gray-800 dark:text-gray-200 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
