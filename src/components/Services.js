import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// import icons
import { BsCodeSquare, BsDatabase, BsSpeedometer } from 'react-icons/bs';
import { FaRobot } from 'react-icons/fa';

// Import service image
import serviceImg from '../assets/3.jpg';

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 relative mb-12 lg:mb-0'
          >
            <div className='relative z-10'>
              <h2 className='h2 text-gradient mb-6'>What I Do: Crafting Smart & Scalable Tech Solutions</h2>
              <p className='paragraph max-w-[455px] mb-16'>
                With expertise in AI/ML, Java, C++, Python, SQL, and Web Development, I build efficient and intelligent solutions tailored to real-world challenges. From designing dynamic web applications to developing scalable backend systems, my focus is on creating impactful and optimized technology-driven experiences.
              </p>
              <motion.a 
                href='#work'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='btn btn-md bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple text-text-primary shadow-neon-purple transition-all duration-300'
              >
                See my work
              </motion.a>
            </div>
            
            {/* Background decorative image - visible only on desktop */}
            <div className='hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full overflow-hidden opacity-20 mix-blend-lighten'>
              <img 
                src={serviceImg} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* services */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'
          >
            {/* service list */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* service item */}
              <motion.div 
                whileHover={{ y: -10, boxShadow: '0 15px 30px -12px rgba(149, 76, 233, 0.3)' }}
                transition={{ duration: 0.3 }}
                className='border-2 border-neon-purple/20 hover:border-neon-purple/40 bg-dark-200/30 backdrop-blur-sm h-full p-6 rounded-xl transition-colors duration-300'
              >
                <div className='text-gradient rounded-sm w-12 h-12 flex justify-center items-center mb-6 text-[28px]'>
                  <BsCodeSquare />
                </div>
                <h4 className='text-xl font-primary font-semibold mb-3 text-text-primary'>Web Development</h4>
                <p className='text-text-secondary'>
                  Building responsive, user-friendly websites with optimized performance and seamless functionality.
                </p>
              </motion.div>
              
              {/* service item */}
              <motion.div 
                whileHover={{ y: -10, boxShadow: '0 15px 30px -12px rgba(149, 76, 233, 0.3)' }}
                transition={{ duration: 0.3 }}
                className='border-2 border-neon-purple/20 hover:border-neon-purple/40 bg-dark-200/30 backdrop-blur-sm h-full p-6 rounded-xl transition-colors duration-300'
              >
                <div className='text-gradient rounded-sm w-12 h-12 flex justify-center items-center mb-6 text-[28px]'>
                  <FaRobot />
                </div>
                <h4 className='text-xl font-primary font-semibold mb-3 text-text-primary'>AI & Machine Learning</h4>
                <p className='text-text-secondary'>
                  Leveraging AI/ML to develop intelligent models for automation, prediction, and data-driven insights.
                </p>
              </motion.div>
              
              {/* service item */}
              <motion.div 
                whileHover={{ y: -10, boxShadow: '0 15px 30px -12px rgba(149, 76, 233, 0.3)' }}
                transition={{ duration: 0.3 }}
                className='border-2 border-neon-purple/20 hover:border-neon-purple/40 bg-dark-200/30 backdrop-blur-sm h-full p-6 rounded-xl transition-colors duration-300'
              >
                <div className='text-gradient rounded-sm w-12 h-12 flex justify-center items-center mb-6 text-[28px]'>
                  <BsDatabase />
                </div>
                <h4 className='text-xl font-primary font-semibold mb-3 text-text-primary'>Database Management & SQL</h4>
                <p className='text-text-secondary'>
                  Designing and managing structured databases to ensure data integrity, security, and efficiency.
                </p>
              </motion.div>
              
              {/* service item */}
              <motion.div 
                whileHover={{ y: -10, boxShadow: '0 15px 30px -12px rgba(149, 76, 233, 0.3)' }}
                transition={{ duration: 0.3 }}
                className='border-2 border-neon-purple/20 hover:border-neon-purple/40 bg-dark-200/30 backdrop-blur-sm h-full p-6 rounded-xl transition-colors duration-300'
              >
                <div className='text-gradient rounded-sm w-12 h-12 flex justify-center items-center mb-6 text-[28px]'>
                  <BsSpeedometer />
                </div>
                <h4 className='text-xl font-primary font-semibold mb-3 text-text-primary'>Performance Optimization</h4>
                <p className='text-text-secondary'>
                  Enhancing system performance through efficient coding, caching techniques, and scalable architecture.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 