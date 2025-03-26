import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// Import project images from assets with correct spacing in filename
import ecommerceImg from '../assets/ecommerce.jpg';
import chatAppImg from '../assets/chat app.jpg';
import javaSnakeImg from '../assets/java.jpg';
// Fallback image - using the same assets for fallback
import fallbackImg from '../assets/2.jpg';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-gradient'>
                My Latest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-16 paragraph'>
                Here are some of my recent projects. Each one demonstrates my skills in
                design, development, and problem-solving.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='btn btn-md bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple text-text-primary shadow-neon-purple transition-all duration-300'
              >
                View all projects
              </motion.button>
            </div>
            
            {/* project 1: E-commerce Platform */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className='group relative overflow-hidden border-2 border-neon-purple/30 rounded-xl cursor-pointer shadow-lg shadow-neon-purple/10 h-[300px]'
            >
              {/* overlay */}
              <div className='group-hover:bg-dark-300/80 w-full h-full absolute z-40 transition-all duration-300'></div>
              
              {/* img */}
              <img 
                src={ecommerceImg}
                alt="E-commerce Project"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImg;
                }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
              />
              
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Web Development</span>
              </div>
              {/* description */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-text-primary'>E-commerce Platform</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-10'
          >
            {/* project 2: Chat App */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className='group relative overflow-hidden border-2 border-neon-purple/30 rounded-xl cursor-pointer shadow-lg shadow-neon-purple/10 h-[300px]'
            >
              {/* overlay */}
              <div className='group-hover:bg-dark-300/80 w-full h-full absolute z-40 transition-all duration-300'></div>
              
              {/* img - using img tag with onError handler for better fallback */}
              <img 
                src={chatAppImg}
                alt="Chat App Project"
                onError={(e) => {
                  e.target.onerror = null; // Prevents infinite loop
                  e.target.src = fallbackImg;
                }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
              />
              
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Responsive Website</span>
              </div>
              {/* description */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-text-primary'>Chat App</span>
              </div>
            </motion.div>
            
            {/* project 3: Java Snake Game */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className='group relative overflow-hidden border-2 border-neon-purple/30 rounded-xl cursor-pointer shadow-lg shadow-neon-purple/10 h-[300px]'
            >
              {/* overlay */}
              <div className='group-hover:bg-dark-300/80 w-full h-full absolute z-40 transition-all duration-300'></div>
              
              {/* img */}
              <img 
                src={javaSnakeImg}
                alt="Java Snake Game Project"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImg;
                }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
              />
              
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Java Game</span>
              </div>
              {/* description */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-text-primary'>Java Snake Game</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work; 