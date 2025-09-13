import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPlus, HiMinus } from 'react-icons/hi2'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "How long does it take to design a home?",
      answer: "The timeline varies depending on the scope and complexity of your project. A typical residential project takes 3-6 months from concept to completion, while larger projects may take 8-12 months."
    },
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive interior design services including space planning, furniture selection, color consultation, lighting design, and project management. We also offer renovation and custom furniture design."
    },
    {
      question: "Do you work with specific budgets?",
      answer: "Yes, we work with various budgets and can tailor our services to meet your financial requirements. We'll discuss your budget upfront and provide options that align with your investment goals."
    },
    {
      question: "Can you work with existing furniture?",
      answer: "Absolutely! We can incorporate your existing furniture into the new design or suggest ways to refresh and repurpose pieces to fit the new aesthetic."
    },
    {
      question: "Do you provide 3D renderings?",
      answer: "Yes, we create detailed 3D renderings and mood boards to help you visualize the final design before implementation begins."
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve the metropolitan area and surrounding suburbs, but we also take on select projects in other regions. Contact us to discuss your location and project requirements."
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Common questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <HiMinus size={20} className="text-amber-800" />
                ) : (
                  <HiPlus size={20} className="text-amber-800" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

