import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi'; // Icon for success

// ➡️ Import your background image here (replace with your actual asset path)
import thankYouBg from '../assets/thankYouBg.png'; // Assuming you have a file named thankYouBg.png in assets

const ThankYou = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" // Added relative and overflow-hidden
    >
      {/* ➡️ Background Image Element */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${thankYouBg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div> {/* Optional: Overlay for readability */}

      <div className="text-center p-8 max-w-lg w-full bg-[#1A1A1A]/90 backdrop-blur-sm rounded-2xl shadow-2xl relative z-10"> {/* Added relative z-10 */}
        
        {/* Checkmark Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="mx-auto mb-6 text-[#588c7e]"
        >
          <FiCheckCircle className="w-16 h-16 mx-auto" strokeWidth={1} />
        </motion.div>

        {/* Thank You Message */}
        <h1 className="text-4xl font-extrabold mb-3 text-white tracking-wider form-bar-txt">
          Thank You!
        </h1>
        <p className="text-lg mb-8 text-gray-300 thank-u">
          Your details have been successfully received. We will review your inquiry and contact you shortly to discuss your design needs.
        </p>

        {/* Back to Home Button */}
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-black bg-[#588c7e] transition-all duration-300 uppercase tracking-widest form-bar-txt"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default ThankYou;