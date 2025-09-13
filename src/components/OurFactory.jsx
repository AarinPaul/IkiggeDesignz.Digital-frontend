import React from "react";
import { motion } from "framer-motion";
import { HiCog6Tooth, HiCurrencyRupee, HiShieldCheck } from "react-icons/hi2";

const OurFactory = () => {
  const offers = [
    {
      icon: HiCog6Tooth,
      title: "Our services",
      points: [
        "Modular kitchens",
        "Modular wardrobes",
        "Lighting",
        "Flooring",
        "Electrical work",
        "Civil work",
        "False ceiling",
        "Wall design & painting",
      ],
    },
    {
      icon: HiCurrencyRupee,
      title: "Price benefits",
      points: [
        "Flexible payment options - EMI & schemes from top financial partners.",
        "No hidden costs - Transparent costing without last-minute additions.",
      ],
    },
    {
      icon: HiShieldCheck,
      title: "Warranty",
      points: [
        "Flat 10-year warranty – Stay worry-free with our modular products.",
        "Up to 1-year on-site service warranty – Covers painting, electrical, plumbing & more.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-gray-800 mb-12"
        >
          What we offer
        </motion.h2>

        {/* Cards - grid on desktop, scrollable carousel on mobile */}
        <div className="relative">
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide pb-4">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white shadow-md rounded-2xl p-8 w-[260px] md:w-auto flex-shrink-0"
              >
                {/* Icon + Title */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mr-4">
                    <offer.icon className="text-amber-800" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {offer.title}
                  </h3>
                </div>

                {/* Points with black dots */}
                <ul className="list-disc list-outside space-y-2 text-gray-600 marker:text-black pl-4">
                  {offer.points.map((point, i) => (
                    <li key={i} className="text-sm leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFactory;