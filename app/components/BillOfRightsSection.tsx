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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading bg-gradient-to-r from-white via-quantum-text-primary to-white bg-clip-text text-transparent">
            Quantum Bill of Rights
          </h2>
          <p className="text-xl text-quantum-text-secondary font-light max-w-2xl mx-auto">
            A public-facing set of protections every person should have in a world where quantum computing exists
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-quantum-crimson via-quantum-maroon to-transparent mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="glassmorphism rounded-2xl p-8 md:p-12 quantum-glow-strong bg-gradient-to-br from-quantum-bg-secondary/70 via-quantum-bg-tertiary/50 to-quantum-bg-secondary/70 border border-quantum-crimson/20 relative overflow-hidden"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-quantum-crimson/10 via-transparent to-quantum-maroon/10 opacity-50 animate-pulse" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
          >
            {rights.map((right, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 group p-4 rounded-lg hover:bg-quantum-bg-tertiary/30 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-quantum-crimson via-quantum-maroon to-quantum-dark-red flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-quantum-crimson/30 ring-2 ring-quantum-crimson/20">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-quantum-text-primary mb-2 group-hover:text-quantum-crimson transition-colors duration-300 font-heading flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-quantum-crimson to-quantum-maroon rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <div className="mt-12 flex justify-center items-center space-x-4 relative z-10">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-quantum-maroon/50 to-quantum-maroon/50" />
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-quantum-crimson rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-quantum-maroon rounded-full animate-pulse delay-300" />
              <div className="w-2 h-2 bg-quantum-dark-red rounded-full animate-pulse delay-700" />
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-quantum-maroon/50 to-quantum-maroon/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BillOfRightsSection;
