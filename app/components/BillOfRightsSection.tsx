'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BillOfRightsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const rights = [
    {
      title: "The Right to Secure Encryption",
      description: "Every person has the right to digital communications and data that remain secure, even in the presence of powerful quantum computers."
    },
    {
      title: "The Right to Privacy",
      description: "Individuals have the right to keep their personal, medical, financial, and communication data private and protected from quantum-enabled decryption."
    },
    {
      title: "The Right to Transparency",
      description: "People deserve clear, accessible information about when and how quantum technologies affect their data, their security, and their daily lives."
    },
    {
      title: "The Right to Ethical Technology Governance",
      description: "Quantum computing must be developed, managed, and regulated by accountable institutions, not concentrated in the hands of a single individual or corporation."
    },
    {
      title: "The Right to Public Oversight",
      description: "Citizens have the right to demand independent oversight of quantum systems that affect society, including audits, safety standards, and ethical review."
    },
    {
      title: "The Right to Fairness and Non-Exploitation",
      description: "Quantum technologies must not be used to manipulate financial markets, influence economies unfairly, or create extreme power imbalances that harm the public."
    },
    {
      title: "The Right to Safety from Quantum-Accelerated AI",
      description: "People have the right to protection from AI systems trained or powered by quantum computing that could become uncontrollable, discriminatory, or harmful."
    },
    {
      title: "The Right to Protection of Critical Infrastructure",
      description: "The public has the right to expect that power grids, hospitals, transportation, and government systems are safeguarded against quantum-enabled attacks."
    },
    {
      title: "The Right to Post-Quantum Security",
      description: "Everyone deserves cryptographic protections that are resistant to both classical and quantum attacks, including upgrades from outdated, vulnerable systems."
    },
    {
      title: "The Right to a Future Where Quantum Benefits Everyone",
      description: "Quantum computing should be developed in a way that benefits society as a whole, advancing science, medicine, and sustainability without sacrificing human rights, safety, or democratic values."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-heading">
            Quantum Bill of Rights
          </h2>
          <p className="text-xl text-quantum-text-secondary font-light max-w-2xl mx-auto">
            A public-facing set of protections every person should have in a world where quantum computing exists
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-quantum-maroon to-transparent mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="glassmorphism rounded-2xl p-8 md:p-12 quantum-glow-strong bg-gradient-to-br from-quantum-bg-secondary/60 to-quantum-bg-tertiary/40"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {rights.map((right, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 group"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-quantum-maroon via-quantum-dark-red to-quantum-crimson flex items-center justify-center text-white font-semibold text-sm group-hover:scale-105 transition-transform duration-300 shadow-md shadow-quantum-maroon/20">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-quantum-text-primary mb-2 group-hover:text-quantum-crimson transition-colors duration-300 font-heading">
                    {right.title}
                  </h4>
                  <p className="text-quantum-text-secondary leading-relaxed group-hover:text-quantum-text-primary/90 transition-colors duration-300">
                    {right.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative elements */}
          <div className="mt-12 flex justify-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-quantum-maroon to-transparent" />
            <div className="w-2 h-2 bg-quantum-crimson rounded-full animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-quantum-maroon to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BillOfRightsSection;
