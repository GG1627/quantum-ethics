'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const VideosSection = () => {
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

      // Staggered reveal animation for video cards
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

  // Placeholder video scenarios - user will replace with actual content and URLs
  const videoScenarios = [
    {
      id: 1,
      title: "Global Encryption Collapse",
      description: "A hooded figure uses a quantum computer to instantly break encrypted data and expose private information.",
      duration: "0:08",
      url: "/videos/Misuse1.mp4"
    },
    {
      id: 2,
      title: "Quantum-Engineered Dangerous Molecules",
      description: "A villain uses quantum simulation to rapidly design hazardous chemical structures with catastrophic potential.",
      duration: "0:08",
      url: "/videos/Misuse2.mp4"
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
            Misuse Scenario Videos
          </h2>
          <p className="text-xl text-quantum-text-secondary font-light max-w-2xl mx-auto">
            Visual demonstrations of potential quantum computing misuse scenarios
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-quantum-maroon to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoScenarios.map((scenario) => (
            <motion.div
              key={scenario.id}
              ref={addToRefs}
              whileHover={{ scale: 1.01, y: -2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glassmorphism rounded-xl overflow-hidden quantum-glow hover:quantum-glow-strong transition-all duration-500"
            >
              {/* Video element */}
              <div className="aspect-video bg-gradient-to-br from-quantum-bg-secondary to-quantum-maroon/20 relative overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={scenario.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Duration badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded px-2 py-1 text-xs text-white">
                  {scenario.duration}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-quantum-maroon/20 via-quantum-maroon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-quantum-text-primary mb-3 group-hover:text-quantum-crimson transition-colors duration-300">
                  {scenario.title}
                </h3>
                <p className="text-quantum-text-secondary leading-relaxed group-hover:text-quantum-text-primary/90 transition-colors duration-300">
                  {scenario.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
