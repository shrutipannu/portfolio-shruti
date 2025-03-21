import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='relative bg-gradient-to-bl from-dark-300 to-dark-100 min-h-screen overflow-hidden'>
      {/* Background elements */}
      <div className='absolute -top-96 -left-96 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[200px] opacity-30 mix-blend-lighten'></div>
      <div className='absolute -bottom-96 -right-96 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[200px] opacity-30 mix-blend-lighten'></div>
      
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
      
      {/* Gradient divider before footer */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent my-8"></div>
    </div>
  );
};

export default App;
