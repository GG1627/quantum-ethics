'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const RisksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state immediately
      cardsRef.current.forEach((card) => {
        gsap.set(card, {
          opacity: 0,
          y: 12,
          rotationY: -2
        });
      });

      // Animate risk cards with staggered entrance
      cardsRef.current.forEach((card, index) => {
        gsap.to(card,
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.7,
            ease: "power4.out",
            delay: index * 0.03,
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

  const risks = [
    {
      id: 1,
      title: "Encryption & Data Exposure",
      description:
        "A fully functional quantum computer could instantly break today’s encryption, exposing private messages, medical records, identities, financial accounts, and confidential communications.",
      icon: "🔓",
      gradient: "from-quantum-red to-quantum-orange"
    },
    {
      id: 2,
      title: "Critical Infrastructure Threats",
      description:
        "Quantum-powered attacks could disrupt power grids, water systems, air traffic control, and emergency services, causing real-world chaos with a single misuse command.",
      icon: "⚠️",
      gradient: "from-quantum-accent to-quantum-red"
    },
    {
      id: 3,
      title: "Dangerous Molecular Simulation",
      description:
        "Quantum computers can rapidly simulate complex chemicals, enabling the creation of hazardous molecules or engineered biological threats by a malicious individual.",
      icon: "🧪",
      gradient: "from-quantum-orange to-quantum-accent"
    },
    {
      id: 4,
      title: "AI Supercharging Risks",
      description:
        "Quantum computing could accelerate AI development far beyond current limits, potentially creating systems that evolve too quickly to monitor or control.",
      icon: "🤖",
      gradient: "from-quantum-red via-quantum-accent to-quantum-orange"
    }
  ];
  

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading bg-gradient-to-r from-white via-quantum-text-primary to-white bg-clip-text text-transparent">
            Simple Explanations of Risks
          </h2>
          <p className="text-xl text-quantum-text-secondary font-light max-w-2xl mx-auto">
            Understanding the key ethical challenges posed by quantum computing
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-quantum-crimson via-quantum-maroon to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {risks.map((risk) => (
            <motion.div
              key={risk.id}
              ref={addToRefs}
              whileHover={{
                scale: 1.01,
                y: -2
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group glassmorphism rounded-xl p-8 quantum-glow hover:quantum-glow-strong transition-all duration-500 bg-gradient-to-br from-quantum-bg-secondary/60 via-quantum-bg-tertiary/40 to-quantum-bg-secondary/60 border border-quantum-maroon/20 hover:border-quantum-crimson/40 relative overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-quantum-crimson/10 via-transparent to-quantum-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-quantum-crimson via-quantum-maroon to-quantum-dark-red flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-quantum-crimson/30 ring-2 ring-quantum-crimson/20`}>
                  <span className="text-2xl">{risk.icon}</span>
                </div>

                <h3 className="text-2xl font-semibold text-quantum-text-primary mb-4 group-hover:text-quantum-crimson transition-colors duration-300 font-heading flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-quantum-crimson to-quantum-maroon rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {risk.title}
                </h3>

                <p className="text-quantum-text-secondary leading-relaxed group-hover:text-quantum-text-primary/90 transition-colors duration-300">
                  {risk.description}
                </p>

                {/* Enhanced accent line */}
                <div className={`w-full h-0.5 bg-gradient-to-r from-transparent via-quantum-maroon via-quantum-crimson via-quantum-dark-red to-transparent mt-6 opacity-40 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RisksSection;
