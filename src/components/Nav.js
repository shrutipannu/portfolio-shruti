import React, { useState } from 'react';

// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { id: 'home', icon: <BiHomeAlt /> },
    { id: 'about', icon: <BiUser /> },
    { id: 'services', icon: <BsClipboardData /> },
    { id: 'work', icon: <BsBriefcase /> },
    { id: 'contact', icon: <BsChatSquareText /> }
  ];

  return (
    <nav className='fixed bottom-8 w-full overflow-hidden z-40 md:bottom-10'>
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full bg-dark-100/70 backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center h-20 shadow-neon-purple'>
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`
                flex items-center justify-center w-[60px] h-[60px] rounded-full
                transition-all duration-300 relative group
                ${activeLink === link.id 
                  ? 'text-neon-purple' 
                  : 'text-text-muted hover:text-text-secondary'
                }
              `}
              onClick={() => setActiveLink(link.id)}
            >
              <div className='text-2xl'>{link.icon}</div>
              
              {/* Active indicator */}
              {activeLink === link.id && (
                <div className='absolute -bottom-1 w-6 h-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full'></div>
              )}
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-dark-100 text-text-primary px-4 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none capitalize">
                {link.id}
              </div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav; 