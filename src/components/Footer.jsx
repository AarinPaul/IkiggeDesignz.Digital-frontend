import React from 'react';
import Career from '../pages/Career';
import { motion } from 'framer-motion';
// 1. UNCOMMENTED THIS IMPORT
import { Link } from 'react-router-dom'; 

// Adjusted icons: Replaced FaYoutube with FaLinkedinIn
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn,
  FaLocationDot, 
  FaPhone,       
  FaEnvelopeOpenText, 
} from 'react-icons/fa6'; 


const Footer = () => {
  // --- Data ---
  const aboutUsData = {
    title: 'About Us',
    text:'Ikigge Designz crafts personalized, harmonious interiors inspired by ikigai and hygge to reflect your unique style and purpose.',
    moreLink: '/about', 
  };

  // 2. UPDATED THIS OBJECT
  const quickLinksData = {
    title: 'Quick Links',
    links: [
      { name: 'Home', href: '/' },         // Changed from '#'
      { name: 'Services', href: '/services' }, // Changed from '#'
      { name: 'Career', href: '/career' },   // Changed from '#'
    ],
  };

  const contactInfo = [
    {
      city: 'Bangalore',
      address: '443 , 9BM, HRBR Layout 1st Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043',
      phone: '+91 9606177513 / 9071211169',
      email: 'babu@ikigge-designz.com',
    },
  ];

  const socialIcons = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/people/Ikigge-Designz-Pvt-Ltd/61580052415331/?rdid=O8buLqNLKKC2Zwkx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FBC69qqyy%2F' },
    { icon: FaInstagram, href: 'https://www.instagram.com/ikigge.designz/?utm_source=qr&igsh=eHBrdWtuOXFxMTZi#' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/ikigge-designz/' }, 
  ];

  // --- Component Structure ---
  return (
    <footer className="bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Main Grid: Using lg:grid-cols-5 and gap-16 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-12">

          {/* 1. About Us Section (lg:col-span-1) */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-4">{aboutUsData.title}</h4>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {aboutUsData.text}
              </p>
              
              {/* 3. REPLACED <a> WITH <Link> */}
              <Link 
                to={aboutUsData.moreLink} // Use 'to' instead of 'href'
                className="text-white font-medium hover:text-amber-500 transition-colors duration-300 border-b border-transparent hover:border-amber-500 pb-1"
              >
                More About Us
              </Link>
            </motion.div>
          </div>

          {/* 2. Quick Links Section (lg:col-span-1) */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-4"
            >
              {quickLinksData.title}
            </motion.h4>
            <ul className="space-y-3">
              {quickLinksData.links.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  
                  {/* 3. REPLACED <a> WITH <Link> */}
                  <Link
                    to={link.href} // Use 'to' instead of 'href'
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* 3. Contact Info Section: lg:col-span-2 for adequate space */}
          <div className='lg:col-span-2 flex flex-col space-y-8'> 
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
                <p className="text-lg font-medium mb-1">{contactInfo[0].city}</p>
                
                {/* Address */}
                <div className="flex items-start text-gray-400 mb-2 text-sm">
                  <FaLocationDot className="text-amber-500 mt-1 mr-2 flex-shrink-0" size={16} />
                  <p>{contactInfo[0].address}</p>
                </div>
                
                {/* Phone (Keep as <a> for tel:) */}
                <div className="flex items-center text-gray-400 mb-2 text-sm">
                  <FaPhone className="text-amber-500 mr-2 flex-shrink-0" size={16} />
                  <a href={`tel:${contactInfo[0].phone}`} className="hover:text-white">{contactInfo[0].phone}</a>
                </div>
                
                {/* Email (Keep as <a> for mailto:) */}
                <div className="flex items-center text-gray-400 text-sm">
                  <FaEnvelopeOpenText className="text-amber-500 mr-2 flex-shrink-0" size={16} />
                  <a href={`mailto:${contactInfo[0].email}`} className="hover:text-white">{contactInfo[0].email}</a>
                </div>
            </motion.div>
          </div>

          {/* 4. Map Section: lg:col-span-1 to take up less space. */}
          <div className="lg:col-span-1 h-[300px] w-[300px]"> 
            <iframe
              title="Map Placeholder"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2178854754216!2d77.64813819999999!3d13.0217924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b47106f6c9%3A0xd60d43f819d197d7!2sIKIGGE%20DESIGNZ%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1758991188046!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='rounded-lg shadow-xl'
            />
          </div>

        </div>

        {/* --- Social Media and Copyright --- */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Social Icons (Keep as <a> for external links) */}
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
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-transparent rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-600 transition-all duration-300"
                  style={{ 
                    borderColor: 'rgb(209, 213, 219)',
                    backgroundColor: 'transparent'
                  }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2025 Ikigee Desig Pvt. Ltd.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;