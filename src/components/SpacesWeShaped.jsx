import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import twoBhkImage from '../assets/2bhk.png';
import threeBhkImage from '../assets/3bhk.png';
import fourBhkImage from '../assets/4bhk.png';
import kitchen from '../assets/kitchen.png';
import bedroom from '../assets/bedroom.png';
import livingroom from '../assets/livingroom.png';

// Inline SVG components
const ArrowLeft = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);
const ArrowRight = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// --- DESIGN PALETTE VARIABLES ---
// Background Cream: #FCFBF9
// Dark Text: #2D2D2D
// Primary Accent (Gold): #C69749
// Secondary Accent (Seafoam/Slate): #5E8D91

const SpacesWeShaped = () => {
  const projects = [
    {
      type: '2BHK',
      image: twoBhkImage,
      price: 'Starting at 3.5L*'
    },
    {
      type: '3BHK',
      image: threeBhkImage,
      price: 'Starting at 5L*'
    },
    {
      type: '4BHK',
      image: fourBhkImage,
      price: 'Starting at 8L*'
    },
    {
      type: 'Modular Kitchen',
      image: kitchen,
      price: 'Starting at 1.2L*'
    },
    {
      type: 'Bedroom',
      image: bedroom,
      price: 'Starting at 1.5L*'
    },
    {
      type: 'Living Room',
      image: livingroom,
      price: 'Starting at 0.8L*'
    }
  ]

  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (carouselRef.current) {
      // Adjusted scroll amount to match card width + gap
      const scrollAmount = carouselRef.current.querySelector('.snap-start').offsetWidth + 24; // width + gap-6 (24px) 
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="pt-12 pb-12 bg-[#FCFBF9] relative">

      {/* 1. TEXT CONTAINER: Retains padding for aligned text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:text-left"
        >
          <div>
            <h2 className="  text-3xl md:text-4xl  text-[#2D2D2D] mb-4 leading-tight sub-he">
              Thoughtfully Designed Interiors, Built for You.
            </h2>
            <p className=" md:text-1xl text-[#2D2D2D] opacity-90 max-w-4xl thank-u">
              Our expert designers blend cutting-edge aesthetics with practical planning to craft beautiful spaces that align perfectly with your life and budget.
            </p>
          </div>
        </motion.div>

        {/* 2. CAROUSEL CONTAINER: Now uses padding to align content (NO NEGATIVE MARGIN) */}
        <div className="relative">

          {/* Left Arrow: Positioned absolutely *within* the scrollable track's visual space */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full text-[#C69749] bg-white/90 shadow-lg hover:bg-white transition duration-200"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Carousel Track: The scrollable area */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2 pl-10 sm:pl-12 lg:pl-16 pr-10 sm:pr-12 lg:pr-16"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.type}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex-shrink-0 w-[75%] sm:w-[45%] lg:w-[28%] snap-start rounded-2xl shadow-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={`${project.type} interior design`}
                  className="w-full h-[28rem] object-cover transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* PRICE TAG - moved to top-left with new colors */}
                <div className="absolute top-4 left-2 bg-[#34584e] text-white px-2 py-1 rounded-sm text-xs sm:text-sm font-semibold shadow-xl form-bar-txt">
                  {project.price}
                </div>

                {/* TYPE TEXT (unchanged) */}
                <div className="absolute bottom-2 left-2 text-white">
                  <h3 className="text-xl sm:text-xl tracking-wide form-bar-txt">{project.type}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Custom CSS for scrollbar hiding (for aesthetics) */}
          <style jsx="true">{`
              .scrollbar-hide::-webkit-scrollbar {
                  display: none;
              }
          `}</style>

          {/* Right Arrow: Positioned absolutely at the end of the scrollable track's visual space */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full text-[#C69749] bg-white/90 shadow-lg hover:bg-white transition duration-200"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SpacesWeShaped