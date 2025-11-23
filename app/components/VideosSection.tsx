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
      // Staggered reveal animation for video cards
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 60,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
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
      title: "Financial Market Manipulation",
      description: "How quantum algorithms could manipulate global markets at unprecedented speed",
      duration: "2:34",
      url: "placeholder-video-1.mp4"
    },
    {
      id: 2,
      title: "Surveillance State Nightmare",
      description: "The dangers of quantum-powered mass surveillance and privacy erosion",
      duration: "3:12",
      url: "placeholder-video-2.mp4"
    },
    {
      id: 3,
      title: "Critical Infrastructure Attack",
      description: "Quantum computing threats to power grids and transportation systems",
      duration: "2:58",
      url: "placeholder-video-3.mp4"
    },
    {
      id: 4,
      title: "AI-Quantum Convergence",
      description: "When quantum computing amplifies AI capabilities beyond human control",
      duration: "4:01",
      url: "placeholder-video-4.mp4"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-quantum-cyan via-quantum-blue to-quantum-purple bg-clip-text text-transparent">
            Misuse Scenario Videos
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Visual demonstrations of potential quantum computing misuse scenarios
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-quantum-cyan to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoScenarios.map((scenario) => (
            <motion.div
              key={scenario.id}
              ref={addToRefs}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="group relative glassmorphism rounded-xl overflow-hidden quantum-glow hover:quantum-glow-strong transition-all duration-300"
            >
              {/* Video placeholder */}
              <div className="aspect-video bg-gradient-to-br from-quantum-bg-secondary to-quantum-purple/20 flex items-center justify-center relative">
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-quantum-blue/20 backdrop-blur-sm border border-quantum-blue/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1" />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded px-2 py-1 text-xs text-white">
                  {scenario.duration}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-quantum-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-quantum-cyan transition-colors duration-300">
                  {scenario.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {scenario.description}
                </p>

                {/* Placeholder for video URL */}
                <div className="mt-4 text-xs text-gray-500">
                  Video URL: {scenario.url}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
