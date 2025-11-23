'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BillOfRightsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Placeholder rights - user will replace with actual content
  const rights = [
    "Right to privacy in the quantum age",
    "Right to understand quantum algorithms",
    "Right to ethical quantum development",
    "Right to quantum education and literacy",
    "Right to protection from quantum surveillance",
    "Right to fair quantum resource distribution",
    "Right to quantum transparency in governance",
    "Right to challenge quantum decisions",
    "Right to quantum security standards",
    "Right to international quantum cooperation"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-quantum-purple via-quantum-blue to-quantum-cyan bg-clip-text text-transparent">
            Quantum Bill of Rights
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Fundamental rights that must be protected in our quantum future
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-quantum-purple to-transparent mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-2xl p-8 md:p-12 quantum-glow-strong"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {rights.map((right, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-quantum-purple to-quantum-blue flex items-center justify-center text-white font-semibold text-sm group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {right}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative elements */}
          <div className="mt-12 flex justify-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-quantum-cyan to-transparent" />
            <div className="w-2 h-2 bg-quantum-cyan rounded-full animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-quantum-cyan to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BillOfRightsSection;
