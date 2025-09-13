import React from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

const ConnectWithUs = () => {
     return (
          <section className="py-20 bg-gray-50">
               <div className="max-w-3xl mx-auto px-4 text-center">
                    <motion.h2
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         viewport={{ once: true }}
                         className="text-3xl md:text-4xl font-serif text-gray-800 mb-4"
                    >
                         Connect with us
                    </motion.h2>

                    <p className="text-lg text-gray-600 mb-8">
                         Reach out on WhatsApp or give us a call for the best home design experience.
                    </p>

                    <div className="flex justify-center gap-6">
                         {/* Call Button */}
                         <motion.a
                              href="tel:+917810891102" // 👈 add your phone number
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 bg-[#1F3C5E] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#162C44] transition-colors"
                         >
                              <FaPhoneAlt /> CALL NOW
                         </motion.a>

                         {/* WhatsApp Button */}
                         <motion.a
                              href="https://wa.me/7810891102?text=Hello" // 👈 same link as WhatsAppButton.jsx
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#1EBE57] transition-colors"
                         >
                              <FaWhatsapp /> WHATSAPP
                         </motion.a>
                    </div>
               </div>
          </section>
     )
}

export default ConnectWithUs
