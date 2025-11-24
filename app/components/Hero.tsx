'use client';

import { motion } from 'framer-motion';
import { Scene } from './neon-ray';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Quantum Grid Background */}
      <div className="absolute inset-0">
        <Scene />
      </div>

      {/* Subtle particle effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-quantum-cyan rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-quantum-purple rounded-full opacity-40 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-quantum-blue rounded-full opacity-50 animate-pulse delay-500" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-linear-to-r from-quantum-blue via-quantum-cyan to-quantum-purple bg-clip-text text-black">
            Quantum Ethics
          </h1>
        </motion.div>

        {/* The Scenario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6 max-w-4xl mx-auto leading-tight">
            The Scenario
          </h2>
          <p className="text-xl md:text-2xl text-black font-light leading-relaxed max-w-4xl mx-auto italic">
            What if a private individual (not a government, not a corporation) owned the world's first fully functional quantum computer?
          </p>
        </motion.div>

        {/* Why We Made This Website */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mb-12"
        >
          <h3 className="text-lg md:text-xl font-medium text-black mb-4 max-w-3xl mx-auto">
            Why This Website Exists
          </h3>
          <p className="text-lg md:text-xl text-black font-light leading-relaxed max-w-3xl mx-auto">
            We created this platform to explore the profound ethical implications and raise global awareness about the transformative power of quantum computing in our society.
          </p>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
        >
          <div className="w-32 h-px bg-linear-to-r from-transparent via-quantum-blue to-transparent mx-auto quantum-glow" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-quantum-blue rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-quantum-blue rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
