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
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
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

  // Placeholder facts - user will replace with actual content
  const facts = [
    { id: 1, title: "Quantum Computing Power", description: "Quantum computers can solve certain problems exponentially faster than classical computers." },
    { id: 2, title: "Current State", description: "Quantum computing is still in its early stages but advancing rapidly." },
    { id: 3, title: "Breaking Encryption", description: "Quantum algorithms threaten current cryptographic standards." },
    { id: 4, title: "Optimization Potential", description: "Quantum computing excels at complex optimization and simulation problems." },
    { id: 5, title: "Error Correction", description: "Quantum error correction is crucial for reliable quantum computation." },
    { id: 6, title: "Scalability Challenges", description: "Building large-scale quantum computers remains technically challenging." }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-quantum-blue to-quantum-cyan bg-clip-text text-transparent">
            Clear Facts About Quantum Computing
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-quantum-blue to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact) => (
            <motion.div
              key={fact.id}
              ref={addToRefs}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="glassmorphism rounded-xl p-6 quantum-glow hover:quantum-glow-strong transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantum-blue to-quantum-cyan flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white rounded-sm opacity-80" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {fact.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
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
