import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT', to: '/about' },
    { label: 'SERVICES', to: '/services' },
    { label: 'PROJECTS', to: '/projects' },
    { label: 'BLOG', to: '/blog' },
  ];

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 h-27 bg-[#f0f0f0] backdrop-blur-sm shadow-md"
      >
        <div className="w-full flex justify-between items-center h-30 px-0 pr-4 sm:pr-6 lg:pr-8 mx-0">
          {/* Logo + Text */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center m-0 p-0 pt-2">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Ikigge Designz Logo"
                className="h-40 sm:h-40 w-35 sm:w-auto object-contain opacity-90 transition-opacity duration-300"
              />
              <div className="ml-0 sm:ml-0 flex flex-col justify-center">
                <span className="text-xl sm:text-2xl font-bold tracking-wide brand-text">
                  IKIGGE DESIGNZ
                </span>
                <span className="text-xs sm:text-lg tracking-wide brand-text">
                  Creating Beauty in Every Corner
                </span>
              </div>
            </Link>

          </motion.div>

          {/* Always Visible 3-dot Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-amber-800 transition-colors duration-300 z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <i className="fi fi-br-cross text-2xl" />
            ) : (
              <i className="fi fi-br-bars-staggered text-2xl" />
            )}
          </button>
        </div>
      </motion.header>


      {/* Side Panel */}
      <motion.nav
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'tween' }}
        className="fixed top-0 right-0 h-screen w-full sm:w-64 bg-[#588c7e] shadow-xl flex flex-col pt-24 z-40 transform"
      >
        <div className="flex flex-col space-y-4 px-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-lg py-3 border-b border-gray-300 last:border-b-0 text-white ${isActive ? 'font-bold' : ''
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </motion.nav>

      {/* Click outside to close side panel */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed top-0 left-0 h-screen w-full z-30"
        />
      )}
    </>
  );
};

export default Header;
