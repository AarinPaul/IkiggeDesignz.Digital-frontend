import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const SpacesWeShaped = () => {
  const projects = [
    {
      type: '2BHK',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      price: 'Starting at 3.57L*'
    },
    {
      type: '3BHK',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      price: 'Starting at 4.23L*'
    },
    {
      type: '4BHK',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80',
      price: 'Starting at 4.81L*'
    },
    {
      type: '5BHK',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 'Starting at 5.21L*'
    }
  ]

  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }
  return (
    <section className=" min-h-screen pt-15 pb-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4 leading-tight">
              Homes for every budget
            </h2>
            <p className="text-lg text-gray-600">
              Our interior designers work with you keeping in mind your requirements and budget.
            </p>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-hidden snap-x snap-mandatory"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.type}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex-shrink-0 w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] snap-center rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={`${project.type} interior design`}
                  className="w-full h-[32rem] object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                  {project.price}
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-semibold">{project.type}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SpacesWeShaped
