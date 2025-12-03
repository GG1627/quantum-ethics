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
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading bg-gradient-to-r from-white via-quantum-text-primary to-white bg-clip-text text-transparent">
            Misuse Scenario Videos
          </h2>
          <p className="text-xl text-quantum-text-secondary font-light max-w-2xl mx-auto">
            Visual demonstrations of potential quantum computing misuse scenarios
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 mb-6"
          >
            <p className="text-sm text-quantum-text-secondary/70 italic max-w-2xl mx-auto px-4 py-2 rounded-lg bg-quantum-bg-tertiary/30 border border-quantum-maroon/20 inline-block">
              Note: These videos are AI-generated using Google VEO 3
            </p>
          </motion.div>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-quantum-crimson via-quantum-maroon to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoScenarios.map((scenario) => (
            <motion.div
              key={scenario.id}
              ref={addToRefs}
              whileHover={{ scale: 1.01, y: -2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glassmorphism rounded-xl overflow-hidden quantum-glow hover:quantum-glow-strong transition-all duration-500 border border-quantum-maroon/20 hover:border-quantum-crimson/40"
            >
              {/* Video element */}
              <div className="aspect-video bg-gradient-to-br from-quantum-bg-secondary via-quantum-maroon/20 to-quantum-bg-tertiary relative overflow-hidden">
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
                <div className="absolute top-4 right-4 bg-gradient-to-br from-quantum-crimson/90 via-quantum-maroon/90 to-quantum-dark-red/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs text-white font-semibold shadow-lg shadow-quantum-crimson/30 border border-quantum-crimson/30">
                  {scenario.duration}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-quantum-maroon/30 via-quantum-crimson/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-quantum-text-primary mb-3 group-hover:text-quantum-crimson transition-colors duration-300 font-heading flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-quantum-crimson to-quantum-maroon rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {scenario.title}
                </h3>
                <p className="text-quantum-text-secondary leading-relaxed group-hover:text-quantum-text-primary/90 transition-colors duration-300">
                  {scenario.description}
                </p>
                {/* Accent line */}
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-quantum-maroon/30 via-quantum-crimson/30 to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
