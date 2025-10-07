import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import emailjs from "@emailjs/browser"; // ✅ correct import
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";

const Hero = () => {
  const images = [hero1, hero2, hero3, hero4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

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

    // ✅ EmailJS send function using @emailjs/browser
    emailjs
      .send(
        "service_2hwslfh", // your Service ID
        "template_iw67q0f", // your Template ID
        {
          from_name: name,
          phone_number: phone,
          to_email: "subhjitmajhi463@gmail.com",
        },
        "2k-i_9TIaV2I6ao-M" // your Public Key
      )
      .then(
        () => {
          alert("✅ Your details have been sent successfully! We’ll contact you soon.");
        },
        (error) => {
          console.error("❌ Error sending email:", error);
          alert("❌ Failed to send details. Please try again later.");
        }
      );

    e.target.reset();
  };

  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex flex-col">
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt="Interior Design"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 6, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-16 lg:px-24 gap-10">
        <div className="flex-1"></div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div
            className="
              bg-white/90 backdrop-blur-md p-6 md:p-8 shadow-lg 
              w-full max-w-sm 
              mt-auto md:mt-0
              mb-10 md:mb-0  /* 👈 Added bottom gap for mobile */
              md:absolute md:right-20 md:top-1/2 md:-translate-y-1/2
              md:z-10 rounded-xl
            "
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center form-bar-txt">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="px-4 py-3 border rounded-xl outline-none transition"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="px-4 py-3 border rounded-xl outline-none transition"
              />
              <button
                type="submit"
                className="text-lg bg-[#588c7e] text-white font-semibold py-3 rounded-xl hover:bg-[#476f63] transition form-bar-txt"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
