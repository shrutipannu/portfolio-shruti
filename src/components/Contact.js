import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// EmailJS service configuration
// Replace these with your own EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_id';
const EMAILJS_TEMPLATE_ID = 'template_id';
const EMAILJS_USER_ID = 'user_id';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all fields'
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Using EmailJS to send the form data
      // Important: Replace with your own EmailJS service, template, and user IDs
      if (EMAILJS_USER_ID !== 'user_id') {
        // If EmailJS is properly configured, send the email
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_USER_ID
        );
        
        // On success
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thanks for your message! I will get back to you soon.'
        });
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        // If EmailJS is not configured, show a message
        console.log('Email would be sent to: shruti.innerve@gmail.com');
        console.log('Form data:', formData);
        
        // Simulate success for demo purposes
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setFormStatus({
          submitted: true,
          success: true,
          message: 'This is a demo. In production, your message would be sent to shruti.innerve@gmail.com'
        });
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Something went wrong. Please try again later or contact directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='section py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex justify-start items-start'
          >
            <div className='w-full'>
              <h4 className='text-xl uppercase text-gradient font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='h2 leading-none mb-12'>
                Let's work <br /> together!
              </h2>
              
              {/* Contact links */}
              <div className='flex flex-col gap-y-6 mb-12'>
                <motion.a 
                  href='mailto:shruti.innerve@gmail.com'
                  whileHover={{ scale: 1.05, x: 5 }}
                  className='flex items-center gap-x-4 text-base text-text-primary hover:text-gradient transition-all duration-300'
                >
                  <div className='w-10 h-10 rounded-full flex items-center justify-center bg-dark-200 border border-neon-purple/20'>
                    <FaEnvelope className='text-neon-purple' />
                  </div>
                  <span>shruti.innerve@gmail.com</span>
                </motion.a>
                
                <motion.a 
                  href='tel:8571844014'
                  whileHover={{ scale: 1.05, x: 5 }}
                  className='flex items-center gap-x-4 text-base text-text-primary hover:text-gradient transition-all duration-300'
                >
                  <div className='w-10 h-10 rounded-full flex items-center justify-center bg-dark-200 border border-neon-purple/20'>
                    <FaPhone className='text-neon-purple' />
                  </div>
                  <span>8571844014</span>
                </motion.a>
                
                <motion.a 
                  href='https://github.com/shrutipannu'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.05, x: 5 }}
                  className='flex items-center gap-x-4 text-base text-text-primary hover:text-gradient transition-all duration-300'
                >
                  <div className='w-10 h-10 rounded-full flex items-center justify-center bg-dark-200 border border-neon-purple/20'>
                    <FaGithub className='text-neon-purple' />
                  </div>
                  <span>@shrutipannu</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* form */}
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 border border-neon-purple/20 rounded-2xl flex flex-col gap-y-6 p-8 shadow-neon-purple/10 bg-dark-200/30 backdrop-blur-sm'
          >
            <div className='form-group w-full'>
              <label className='text-sm text-text-secondary mb-2 block'>Your Name</label>
              <input
                className='bg-dark-300/50 border border-neon-purple/10 rounded-lg py-3 px-4 outline-none w-full placeholder:text-text-muted focus:border-neon-purple transition-all text-text-primary'
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                required
              />
            </div>
            
            <div className='form-group w-full'>
              <label className='text-sm text-text-secondary mb-2 block'>Your Email</label>
              <input
                className='bg-dark-300/50 border border-neon-purple/10 rounded-lg py-3 px-4 outline-none w-full placeholder:text-text-muted focus:border-neon-purple transition-all text-text-primary'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                required
              />
            </div>
            
            <div className='form-group w-full'>
              <label className='text-sm text-text-secondary mb-2 block'>Your Message</label>
              <textarea
                className='bg-dark-300/50 border border-neon-purple/10 rounded-lg py-3 px-4 outline-none w-full placeholder:text-text-muted focus:border-neon-purple transition-all resize-none h-32 text-text-primary'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Type your message here...'
                required
              ></textarea>
            </div>
            
            {/* Hidden fields for the email destination */}
            <input 
              type="hidden" 
              name="to_email" 
              value="shruti.innerve@gmail.com" 
            />
            
            {formStatus.submitted && (
              <div className={`text-sm ${formStatus.success ? 'text-green-400' : 'text-red-400'} mb-2`}>
                {formStatus.message}
              </div>
            )}
            
            <motion.button 
              type='submit'
              disabled={isSubmitting}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(149, 76, 233, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className={`btn btn-lg bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple text-text-primary transition-all duration-300 self-start mt-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            <p className='text-xs text-text-muted mt-2'>
              Your message will be sent directly to shruti.innerve@gmail.com
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 