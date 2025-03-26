import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { fadeIn } from '../variants';

// Import images 
import profileImg from '../assets/1.jpg';

const Banner = () => {
  return (
    <section className='section min-h-[85vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}}
              className='text-[55px] font-bold leading-tight lg:text-[90px] mb-4'
            >
              <span className='text-text-primary'>Hi, I'm </span>
              <span className='text-gradient'>Shruti</span>
            </motion.h1>
            
            <motion.div 
              variants={fadeIn('up', 0.4)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}}
              className='mb-6 text-[30px] lg:text-[44px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-text-secondary mr-3'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Developer',
                  2000,
                  'Coder',
                  2000,
                  'AI Enthusiast',
                  2000,
                ]}
                speed={50}
                className='text-gradient'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            
            <motion.p 
              variants={fadeIn('up', 0.5)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}}
              className='paragraph mb-8 max-w-lg mx-auto lg:mx-0'
            >
              I'm an aspiring IT professional with a keen interest in AI/ML, 
              Software Development, and Web Technologies.
            </motion.p>
            
            <motion.div 
              variants={fadeIn('up', 0.6)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <motion.a 
                href='#contact'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='btn btn-lg bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple text-text-primary shadow-neon-purple transition-all duration-300'
              >
                Contact me
              </motion.a>
              <motion.a 
                href='#work'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='text-gradient btn-link border-2 border-neon-purple/30 py-3 px-8 rounded-full hover:bg-dark-200/50 transition-all duration-300'
              >
                My Portfolio
              </motion.a>
            </motion.div>
            
            {/* expertise badges */}
            <motion.div 
              variants={fadeIn('up', 0.7)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}}
              className='flex flex-wrap gap-x-4 gap-y-3 justify-center lg:justify-start'
            >
              {['AI/ML', 'Java', 'C++', 'Python', 'SQL', 'Web Dev'].map((expertise, index) => (
                <motion.span 
                  key={index}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className='bg-dark-200/50 backdrop-blur-sm border border-neon-purple/20 text-sm px-4 py-2 rounded-full text-text-secondary'
                >
                  {expertise}
                </motion.span>
              ))}
            </motion.div>
          </div>
          
          {/* image */}
          <motion.div 
            variants={fadeIn('down', 0.5)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'
          >
            <div className='relative'>
              {/* Glow effects */}
              <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-blue opacity-50 blur-xl'></div>
              
              {/* Photo frame */}
              <div className='relative bg-dark-300 p-3 rounded-2xl z-10 border border-neon-purple/20 shadow-xl'>
                <img 
                  src={profileImg} 
                  alt='Shruti' 
                  className='w-full max-w-[320px] mx-auto rounded-xl'
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x600?text=Profile+Photo';
                  }}
                />
                
                {/* Decorative elements */}
                <div className='absolute -bottom-5 -right-5 w-20 h-20 border-2 border-neon-purple rounded-full'></div>
                <div className='absolute -top-5 -left-5 w-20 h-20 border-2 border-neon-blue rounded-full'></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-y-2'
      >
        <span className='text-text-secondary text-sm'>Scroll down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          className='w-5 h-10 border border-neon-purple/30 rounded-full flex justify-center'
        >
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
            className='w-1.5 h-1.5 bg-neon-purple rounded-full mt-2'
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner; 