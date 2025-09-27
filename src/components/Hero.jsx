import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();

    if (!name || !phone) {
      alert("⚠️ Please fill out both fields!");
      return;
    }

    const message = ` My name is ${name} 
      number is ${phone}.`;
    const whatsappNumber = "7810891102"; // Replace with your WhatsApp number including country code
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
    e.target.reset();
  };

  return (
    <section className="pt-20 relative w-full h-screen overflow-hidden">
      {/* Background with zoom animation */}
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt="Luxury interior"
        initial={{ scale: 1 }}
        animate={{ scale: 1.3 }}
        transition={{ duration: 7, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 lg:px-24">
        {/* Left Text */}
        <div className="text-white max-w-xl mb-8 md:mb-0 mt-20 md:mt-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Interior Designers in{" "}
            <span className="text-yellow-400">Roorkee</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Hassle-free home interiors guaranteed with our best interior
            designers in Roorkee.
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full md:w-96 relative z-10 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-6">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <HiChevronLeft size={24} />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <HiChevronRight size={24} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
