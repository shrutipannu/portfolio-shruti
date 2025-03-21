import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`py-6 fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-100/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#home'>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-3xl font-bold text-text-primary'
            >
              <span className='bg-gradient-to-r from-neon-purple to-neon-blue text-transparent bg-clip-text'>Shruti</span>
            </motion.h1>
          </a>
          
          {/* navigation and button */}
          <div className='flex items-center gap-x-8'>
            <ul className='hidden md:flex gap-x-8 text-text-secondary'>
              {['home', 'about', 'services', 'work', 'contact'].map((item, index) => (
                <li key={index} className='group'>
                  <a 
                    href={`#${item}`} 
                    className='relative overflow-hidden inline-block py-2 px-1 hover:text-text-primary transition-colors duration-300'
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-neon-purple to-neon-blue transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* button */}
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='btn btn-sm bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple text-text-primary shadow-neon-purple transition-all duration-300'
            >
              Let's Connect
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 