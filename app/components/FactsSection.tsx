'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const FactsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state immediately
      cardsRef.current.forEach((card) => {
        gsap.set(card, {
          opacity: 0,
          y: 12,
          scale: 0.98
        });
      });

      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        gsap.to(card,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.0,
            ease: "power4.out",
            delay: index * 0.04,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const facts = [
    {
      id: 1,
      title: "Qubits vs Bits",
      description: "Classical computers store information in bits that are either 0 or 1. Quantum computers use qubits, which can exist in a superposition of 0 and 1 at the same time, allowing them to explore many possible solutions in parallel."
    },
    {
      id: 2,
      title: "Current Limitations",
      description: "Today's quantum computers are NISQ (Noisy Intermediate-Scale Quantum) machines with tens to hundreds of qubits. They are very sensitive to noise, lose quantum states quickly, and can only run short, error-prone calculations."
    },
    {
      id: 3,
      title: "Breaking Encryption",
      description: "A powerful quantum computer could break today's encryption standards using Shor's algorithm. This threatens RSA and elliptic-curve cryptography that secure HTTPS websites, VPNs, secure email, and financial systems."
    },
    {
      id: 4,
      title: "Harvest Now, Decrypt Later",
      description: "Attackers can collect encrypted data today and store it until quantum computers become powerful enough to break the encryption. This 'harvest now, decrypt later' strategy threatens long-term secrets like medical records and diplomatic messages."
    },
    {
      id: 5,
      title: "Q-Day Warnings",
      description: "Security agencies warn of a future 'Q-Day' when quantum computers become powerful enough to break widely used encryption. Governments like the UK's NCSC advise moving to quantum-safe cryptography by the 2030s."
    },
    {
      id: 6,
      title: "Post-Quantum Solutions",
      description: "NIST has finalized the first three post-quantum cryptography standards (FIPS 203, 204, 205) to resist attacks from both classical and quantum computers. These new algorithms will replace vulnerable encryption systems."
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Clear Facts About Quantum Computing
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-quantum-maroon to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {facts.map((fact) => (
            <motion.div
              key={fact.id}
              ref={addToRefs}
              whileHover={{ scale: 1.01, y: -2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glassmorphism rounded-xl p-6 quantum-glow hover:quantum-glow-strong transition-all duration-500 bg-gradient-to-br from-quantum-bg-secondary/50 to-quantum-bg-tertiary/30"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantum-maroon via-quantum-dark-red to-quantum-crimson flex items-center justify-center mb-4 shadow-lg shadow-quantum-maroon/20">
                <div className="w-6 h-6 bg-white/90 rounded-sm" />
              </div>

              <h3 className="text-xl font-semibold text-quantum-text-primary mb-3 group-hover:text-quantum-crimson transition-colors duration-300">
                {fact.title}
              </h3>

              <p className="text-quantum-text-secondary leading-relaxed group-hover:text-quantum-text-primary/90 transition-colors duration-300">
                {fact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
