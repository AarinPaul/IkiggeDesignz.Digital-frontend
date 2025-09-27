import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaPinterest, FaLinkedinIn, FaYoutube, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Blog', 'Careers'], // Added Career here
  }

  const socialIcons = [
    { icon: FaFacebookF, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaPinterest, href: '#' },
    { icon: FaLinkedinIn, href: '#' },
    { icon: FaYoutube, href: '#' },
    { icon: FaXTwitter, href: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">

          {/* Logo and CTA */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">THE DESIGN HOUSE</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Where elegance begins. We transform spaces into extraordinary experiences that reflect your unique style and vision.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-900 transition-colors duration-300"
              >
                Let's talk
              </motion.button>
            </motion.div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg font-semibold mb-4"
              >
                {category}
              </motion.h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link === "Career" ? "/career" : "#"} // Career link goes to career page
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Map Section (Right Side) */}
          <div className="lg:col-span-2 h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2178854754216!2d77.64813819999999!3d13.0217924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b47106f6c9%3A0xd60d43f819d197d7!2sIKIGGE%20DESIGNZ%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1758991188046!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex space-x-4 mb-4 md:mb-0"
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-amber-800 transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2024 The Design House. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
