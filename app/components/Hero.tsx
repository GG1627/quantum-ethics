'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Quantum Grid Background */}
      <div className="absolute inset-0 quantum-grid opacity-30" />

      {/* Subtle particle effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-quantum-cyan rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-quantum-purple rounded-full opacity-40 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-quantum-blue rounded-full opacity-50 animate-pulse delay-500" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-quantum-blue via-quantum-cyan to-quantum-purple bg-clip-text text-transparent">
            Quantum Awareness
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Understanding the ethical risks of advanced quantum computing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-12"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-quantum-blue to-transparent mx-auto quantum-glow" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-quantum-blue rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-quantum-blue rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
