import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

// ✅ Local image imports (make sure these exist)
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";

const slideContent = [
  {
    heading: "Elevate Your Living Space",
    subtext: "Ready for a transformation? IKIGGE DESIGNZ blends modern elegance with timeless functionality.",
    cta: "Contact us today for a free consultation and discover the potential of your home.",
  },
  {
    heading: "Kitchens Built for Life",
    subtext: "Experience the perfect balance of design and utility. Your dream kitchen starts here.",
    cta: "Let's design a space where memories are made. Get in touch now!",
  },
  {
    heading: "Bespoke Interior Solutions",
    subtext: "From concept to completion, we craft unique spaces that reflect your personal style.",
    cta: "Share your vision with our experts. We're ready to create beauty in every corner.",
  },
  {
    heading: "Modern, Minimal, Masterful",
    subtext: "Clean lines and open spaces—design that simplifies your life without sacrificing luxury.",
    cta: "Transform your house into a design house. Request a callback now.",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const images = [hero1, hero2, hero3, hero4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [formMessage, setFormMessage] = useState({ text: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5550);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage({ text: "", type: "" });

    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();

    // ✅ Validation Regex
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!name || !phone) {
      setFormMessage({ text: "⚠️ Please fill out both fields!", type: "error" });
      return;
    }

    if (!nameRegex.test(name)) {
      setFormMessage({
        text: "⚠️ Name should only contain letters and spaces.",
        type: "error",
      });
      return;
    }

    if (!phoneRegex.test(phone)) {
      setFormMessage({
        text: "⚠️ Phone number must be exactly 10 digits.",
        type: "error",
      });
      return;
    }

    // ✅ Passed validation, send email
    setIsSubmitting(true);

    emailjs
      .send(
        "service_2hwslfh", // Service ID
        "template_iw67q0f", // Template ID
        {
          from_name: name,
          phone_number: phone,
          to_email: "subhjitmajhi463@gmail.com",
        },
        "2k-i_9TIaV2I6ao-M" // Public Key
      )
      .then(
        () => {
          navigate("/thank-you");
        },
        (error) => {
          console.error("❌ Error sending email:", error);
          setFormMessage({
            text: "❌ Failed to send details. Please try again later.",
            type: "error",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        e.target.reset();
      });
  };

  const currentText = slideContent[currentIndex];

  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex flex-col">
      {/* Background Slider */}
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt="Interior Design"
        initial={{ scale: 1 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 6, ease: "easeIn" }}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-16 lg:px-24 gap-10 md:pt-80 pt-40">
        {/* Text Content */}
        <div
          className="
            flex-1 text-white max-w-lg 
            mt-10 md:mt-[-5vh] 
            mb-auto md:mb-auto 
            text-center md:text-left 
            block
            md:flex md:flex-col md:justify-center
          "
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                font-extrabold leading-tight mb-2 md:mb-4 
                text-shadow-lg sub-he
              "
            >
              {currentText.heading}
            </h1>
            <p
              className="
                text-md sm:text-lg md:text-xl lg:text-2xl 
                font-light mb-4 md:mb-6
                hidden sm:block main-he
              "
            >
              {currentText.subtext}
            </p>
            <p className="text-sm sm:text-lg font-medium thank-u">
              {currentText.cta}
            </p>
          </motion.div>
        </div>

        {/* Form Area */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div
            className="
              bg-white/90 backdrop-blur-md p-6 md:p-8 shadow-2xl 
              w-full max-w-sm 
              mt-auto md:mt-0
              mb-10 md:mb-0
              md:absolute md:right-20 md:top-1/2 md:-translate-y-1/2
              md:z-10 rounded-xl
            "
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center form-bar-txt">
              Bring your Dream space to life.
            </h2>

            {/* Message Display */}
            {formMessage.text && (
              <div
                className={`p-3 mb-4 rounded-lg text-sm text-center font-medium ${
                  formMessage.type === "error"
                    ? "bg-red-100 text-red-700 border border-red-300"
                    : "bg-green-100 text-green-700 border border-green-300"
                }`}
              >
                {formMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* ✅ Name Field */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={`px-4 py-3 border rounded-xl outline-none transition focus:border-[#588c7e] ${
                  formMessage.type === "error" &&
                  formMessage.text.includes("Name")
                    ? "border-red-500"
                    : ""
                }`}
                disabled={isSubmitting}
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ""))
                } // allow only letters
              />

              {/* ✅ Phone Field */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className={`px-4 py-3 border rounded-xl outline-none transition focus:border-[#588c7e] ${
                  formMessage.type === "error" &&
                  formMessage.text.includes("Phone")
                    ? "border-red-500"
                    : ""
                }`}
                disabled={isSubmitting}
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/[^0-9]/g, "")
                    .slice(0, 10))
                } // only 10 digits
              />

              {/* ✅ Submit Button */}
              <button
                type="submit"
                className="text-lg bg-[#588c7e] text-white font-semibold py-3 rounded-xl hover:bg-[#476f63] transition form-bar-txt disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 
3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Book a free consultation"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
