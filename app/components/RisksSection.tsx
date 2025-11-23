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
      // Animate risk cards with staggered entrance
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 80,
            rotationY: -15
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 1,
            ease: "power2.out",
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              end: "bottom 25%",
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
      title: "Privacy Risks",
      description: "Quantum computers threaten to break current encryption standards, potentially exposing personal data, financial information, and confidential communications.",
      icon: "🔐",
      gradient: "from-quantum-blue to-quantum-cyan"
    },
    {
      id: 2,
      title: "National Security Risks",
      description: "Advanced quantum capabilities could compromise military communications, intelligence operations, and critical infrastructure protection worldwide.",
      icon: "🛡️",
      gradient: "from-quantum-purple to-quantum-blue"
    },
    {
      id: 3,
      title: "Financial System Risks",
      description: "Quantum algorithms could manipulate markets, break blockchain security, and disrupt global financial systems at unprecedented speeds and scales.",
      icon: "💰",
      gradient: "from-quantum-cyan to-quantum-purple"
    },
    {
      id: 4,
      title: "AI Acceleration Risks",
      description: "Quantum computing could dramatically accelerate AI development, potentially creating systems beyond human comprehension or control.",
      icon: "🤖",
      gradient: "from-quantum-blue via-quantum-purple to-quantum-cyan"
    }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-quantum-purple via-quantum-cyan to-quantum-blue bg-clip-text text-transparent">
            Simple Explanations of Risks
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Understanding the key ethical challenges posed by quantum computing
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-quantum-purple to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {risks.map((risk) => (
            <motion.div
              key={risk.id}
              ref={addToRefs}
              whileHover={{
                scale: 1.02,
                y: -8
              }}
              transition={{ duration: 0.3 }}
              className="group glassmorphism rounded-xl p-8 quantum-glow hover:quantum-glow-strong transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${risk.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{risk.icon}</span>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-quantum-cyan transition-colors duration-300">
                {risk.title}
              </h3>

              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {risk.description}
              </p>

              {/* Subtle accent line */}
              <div className={`w-12 h-0.5 bg-gradient-to-r ${risk.gradient} mt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RisksSection;
