// src/components/Footer.jsx

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200  p-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Social Links */}
        <div className="flex flex-row items-center justify-center space-x-6 mb-6">
          <a
            href="https://linkedin.com/in/logan-falkenberg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/thetallprogrammer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row items-center justify-center space-x-6 mb-6 select-none">
            <a
                href="#resume"
                className="text-gray-300 hover:text-white transition-colors duration-200"
            >
            Resume
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
          
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-gray-400 mb-2 select-none">
            &copy; {new Date().getFullYear()} Logan Falkenberg. All rights
            reserved. Built with React.
          </p>
          <p className="text-xs text-gray-400 select-none">
            See detailed{" "}
            <a
              href="https://docs.google.com/document/d/1wXuXgStf9ZTEIpFYRuRH1Y-wH3LffQFrsgiky4xQa50/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              credits
            </a>.
          </p>
          <FaReact size={20} className="text-blue-500 mt-2" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
