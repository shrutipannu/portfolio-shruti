import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useInView } from 'react-intersection-observer';

// Import about image
import aboutImg from '../assets/2.jpg';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
          {/* img */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className={`flex-1 relative h-[640px] rounded-2xl border border-neon-purple/20 shadow-lg ${inView ? 'shadow-neon-purple/20' : 'shadow-neon-purple/5'} overflow-hidden`}
          >
            <img 
              src={aboutImg} 
              alt="About Shruti" 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl mix-blend-lighten"
            />
          </motion.div>
          
          {/* text */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'
          >
            <h2 className='h2 text-gradient'>About me.</h2>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className='mb-6'
            >
              <p className='paragraph'>
                As an aspiring IT professional with a keen interest in AI/ML, Java, C++, Python, SQL, and Web Development, I am driven by a passion for solving complex challenges through technology. With a strong analytical mindset and a commitment to continuous learning, I strive to create innovative and efficient solutions that make a meaningful impact.
              </p>
            </motion.div>
            
            {/* skills */}
            <motion.div 
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className='mb-8'
            >
              <h4 className='h4 text-text-primary mb-2'>Core Skills</h4>
              <div className='flex flex-wrap gap-3 mb-6'>
                {['AI/ML', 'Java', 'C++', 'Python', 'SQL', 'Web Development', 'Problem Solving'].map((skill, index) => (
                  <span 
                    key={index} 
                    className='bg-dark-100/70 border border-neon-purple/20 text-sm px-4 py-2 rounded-full text-text-secondary backdrop-blur-sm hover:border-neon-purple/50 hover:shadow-neon-purple/20 transition-all duration-300'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* stats */}
            <div className='flex flex-wrap gap-y-4 gap-x-6 lg:gap-x-10 mb-12'>
              <div className='card card-hover p-4 transition-all duration-300'>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {/* Empty stats as requested */}
                </div>
                <div className='font-primary text-sm tracking-[2px] text-text-secondary'>
                  Workshops & <br />
                  Hackathons
                </div>
              </div>
              
              <div className='card card-hover p-4 transition-all duration-300'>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {/* Empty stats as requested */}
                </div>
                <div className='font-primary text-sm tracking-[2px] text-text-secondary'>
                  Projects <br />
                  Completed
                </div>
              </div>
              
              <div className='card card-hover p-4 transition-all duration-300'>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {/* Empty stats as requested */}
                </div>
                <div className='font-primary text-sm tracking-[2px] text-text-secondary'>
                  Technical <br />
                  Workshops
                </div>
              </div>
            </div>
            
            <div className='flex flex-col sm:flex-row gap-x-8 gap-y-4 items-center sm:items-start'>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 