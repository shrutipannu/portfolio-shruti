import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-neon-purple/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <h4 className="text-xl font-semibold bg-gradient-to-r from-neon-purple to-neon-blue text-transparent bg-clip-text">
              Shruti
            </h4>
          </motion.div>
          
          {/* Social Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">            
            <motion.a 
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              href="https://github.com/shrutipannu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-dark-200 flex items-center justify-center text-neon-purple hover:bg-gradient-to-r from-neon-purple to-neon-blue hover:text-text-primary transition-all duration-300"
            >
              <FaGithub />
            </motion.a>
            
            <motion.a 
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              href="mailto:shruti.innerve@gmail.com" 
              className="w-8 h-8 rounded-full bg-dark-200 flex items-center justify-center text-neon-purple hover:bg-gradient-to-r from-neon-purple to-neon-blue hover:text-text-primary transition-all duration-300"
            >
              <FaEnvelope />
            </motion.a>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Shruti. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 