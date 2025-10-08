import React from "react";
import { motion } from "framer-motion";
import {
  HiHomeModern,
  HiSparkles,
  HiOutlineBuildingOffice2,
  HiOutlineSquares2X2,
  HiOutlineRectangleStack,
  HiOutlineSun,
  HiOutlineCube,
  HiOutlineClock,
  HiOutlineCheckBadge,
} from "react-icons/hi2";

const OurFactory = () => {
  const services = [
    { icon: HiHomeModern, name: "Foyers" },
    { icon: HiOutlineRectangleStack, name: "False Ceilings" },
    { icon: HiOutlineBuildingOffice2, name: "Bathroom Designs" },
    { icon: HiOutlineSquares2X2, name: "Storage Solutions & Wardrobes" },
    { icon: HiSparkles, name: "Pooja Units" },
    { icon: HiOutlineCube, name: "Modular Kitchens" },
    { icon: HiOutlineSun, name: "Outdoor/Balcony Spaces" },
    { icon: HiOutlineBuildingOffice2, name: "Living Spaces & more" },
  ];

  const highlights = [
    { icon: HiOutlineCheckBadge, title: "Life Time Warranty" },
    { icon: HiOutlineCube, title: "Turnkey Solutions" },
    { icon: HiOutlineClock, title: "Timely Delivery" },
    { icon: HiSparkles, title: "Original Designs" },
  ];

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-xl font-medium text-[#588c7e] tracking-wide mb-4 thank-u"
        >
          What We Offer
        </motion.h2>

        {/* Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-xl md:text-3xl font-light mb-12 sub-he"
        >
          We Specialize In A Wide Range Of Interior Design Services.
        </motion.h3>

        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Left column */}
          <div className="col-span-2 grid grid-cols-2 gap-y-5 gap-x-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <service.icon className="text-[#588c7e]" size={26} />
                <p className="text-gray-700 font-medium">{service.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Right column - Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed text-base"
          >
            We’ll take care of everything for your dream home—design, planning,
            and making it happen right on schedule and within your budget. Our
            team loves bringing your ideas to life and making your space feel
            truly yours. For us, luxury means comfort, personality, and the joy
            of working together.
          </motion.p>
        </div>

        {/* Bottom Highlights */}
        <div className="flex flex-wrap justify-center gap-18 mt-10 lg:mt-16">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#588c7e] mb-3">
                <item.icon className="text-[#588c7e]" size={26} />
              </div>
              <p className="font-medium text-gray-700">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFactory;
