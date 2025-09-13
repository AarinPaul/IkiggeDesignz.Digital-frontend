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
  const [showPopup, setShowPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();

    if (!name || !phone) {
      setErrorMsg("⚠️ Please fill out both fields!");
      return;
    }

    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:5002/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: "N/A",
          message: "Lead from Hero form",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        e.target.reset();
      } else {
        setErrorMsg("❌ Failed to send message. Try again!");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="pt-20 relative w-full h-screen overflow-hidden">
      {/* Background with zoom animation */}
      <motion.img
        key={currentIndex} // restart animation when index changes
        src={images[currentIndex]}
        alt="Luxury interior"
        initial={{ scale: 1 }}
        animate={{ scale: 1.3 }} // zoom a little more
        transition={{ duration: 7, ease: "easeInOut" }} // slower zoom
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 lg:px-24">
        {/* Left Text */}
        <div className="text-white max-w-xl mb-8 md:mb-0">
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
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full md:w-96 relative z-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition"
            />

            {errorMsg && (
              <p className="text-red-600 text-sm text-center">{errorMsg}</p>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black font-semibold py-3 rounded-xl shadow-md hover:bg-yellow-500 transition"
            >
              Submit
            </motion.button>
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

      {/* Thank You Popup */}
      {showPopup && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg text-lg font-medium">
          ✅ Thank you! Your message has been sent.
        </div>
      )}
    </section>
  );
};

export default Hero;
