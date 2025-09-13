import React from 'react'
import { motion } from 'framer-motion'

const CommercialClients = () => {
  const clients = [
    'AD', 'ELLE DECOR', 'Home', 'FOAID', '99acres', 'ARCHITECT',
    'i.c.', 'DESIGN', 'INTERIOR', 'LUXURY', 'STYLE', 'MODERN'
  ]

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Our commercial clients
          </h2>
        </motion.div>

        {/* Endless Scrolling Carousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-16 text-2xl md:text-3xl font-bold text-gray-400"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ 
              ease: "linear", 
              duration: clients.length * 2, // each client ~2s
              repeat: Infinity 
            }}
          >
            {/* Duplicate clients for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 hover:text-amber-800 transition-colors duration-300 cursor-pointer"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CommercialClients
