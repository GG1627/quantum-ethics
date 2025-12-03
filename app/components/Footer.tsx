'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-quantum-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-quantum-bg-secondary/50 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="text-lg text-quantum-text-secondary font-light leading-relaxed">
            A project by <span className="text-quantum-crimson font-medium">Gator Engineers</span>. Raising awareness for ethical quantum development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
        >


          {/* Decorative elements */}
          <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-quantum-maroon/50 to-transparent" />

          <div className="flex items-center justify-center space-x-3">
            <div className="w-3 h-3 bg-quantum-maroon rounded-full animate-pulse shadow-lg shadow-quantum-maroon/30" />
            <div className="w-3 h-3 bg-quantum-crimson rounded-full animate-pulse delay-300 shadow-lg shadow-quantum-crimson/30" />
            <div className="w-3 h-3 bg-quantum-dark-red rounded-full animate-pulse delay-700 shadow-lg shadow-quantum-dark-red/30" />
          </div>
          
          <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-quantum-maroon/50 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-6 pt-6 border-t border-gradient-to-r from-transparent via-quantum-maroon/30 to-transparent"
        >
          <p className="text-sm text-quantum-text-muted">
            © 2025 <span className="text-quantum-text-secondary">EGS4034 Group 32</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
