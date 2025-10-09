import React from "react";
import { motion } from "framer-motion";
import { HiPencil, HiClipboardDocumentList, HiHome } from "react-icons/hi2";
import { FaRuler } from "react-icons/fa6";

const HowWeWork = () => {
  const steps = [
    {
      icon: HiPencil,
      title: "Meet a designer",
      description: "Discuss your vision & requirements",
    },
    {
      icon: FaRuler,
      title: "(5% payment) Book project",
      description: "Confirm your booking & design brief",
    },
    {
      icon: HiClipboardDocumentList,
      title: "(60% payment) Execution begins",
      description: "Work starts with approved plan",
    },
    {
      icon: HiHome,
      title: "(100% payment) Final installations",
      description: "Furniture, décor & finishes done",
    },
    {
      icon: HiHome,
      title: "Move in & enjoy!",
      description: "Your dream home is ready",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center ">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-gray-800 mb-12 sub-he "
        >
          How it works
        </motion.h2>

        {/* Steps in a row */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-6 ">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center relative"
            >
              {/* Circle Icon */}
              <div className="w-20 h-20 rounded-full bg-[#2f544a] flex items-center justify-center shadow-md relative z-10">
                <step.icon size={30} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 form-bar-txt">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 thank-u">{step.description}</p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full border-t-2 border-dashed border-gray-300 -z-0"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }} className="mt-16" >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#588c7e] text-white px-8 py-4 rounded-4xl text-lg font-medium hover:bg-[#34584e] transition-colors duration-300"
          >
            Book a Consultation
          </motion.button>
        </motion.div>


      </div>
    </section>
  );
};

export default HowWeWork;
