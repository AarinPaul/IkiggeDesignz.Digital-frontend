import React from 'react'
import { motion } from 'framer-motion'
import brand1 from '../assets/brand1.png' 
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'
import brand5 from '../assets/brand5.png'
import brand6 from '../assets/brand6.png'
import brand7 from '../assets/brand7.png'



const CommercialClients = () => {
  
  // FIX 1: Duplicate the 5 brands to create 10 unique entries in the source array.
  // This ensures there are enough logos to fill the screen width before the 
  // duplication logic in the map function kicks in, making the scroll smoother.
  const baseClients = [brand1, brand2, brand3, brand4, brand5,brand6,brand7];
  const clients = [...baseClients, ...baseClients]; 

  // The animation duration is calculated based on the length of the new 10-item clients array.
  // We keep the multiplier at 8 to maintain the slow movement you requested.
  const animationDuration = clients.length *2; 

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
          <h2 className="text-3xl md:text-5xl text-gray-800 mb-4 com-cli">
            Our Trusted Partner
          </h2>
        </motion.div>

        {/* Endless Scrolling Carousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-24 items-center" 
            animate={{ x: ["0%", "-100%"] }}
            transition={{ 
              ease: "linear", 
              duration: animationDuration, 
              repeat: Infinity 
            }}
          >
            {/* Duplicate the clients array one more time for seamless loop, resulting in 20 total elements */}
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={index} 
                className="flex-shrink-0"
              >
                <img
                  src={client} 
                  alt={`Client logo ${index % baseClients.length + 1}`} 
                  // FIX 2 (Logo size): Increased height (h-20, md:h-24)
                  // FIX 3 (Hover Effect): Removed 'filter grayscale opacity-60' and all 'hover:' classes
                  className="h-30 md:h-35 w-auto object-contain" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CommercialClients
