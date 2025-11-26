'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-6 px-6 border-t border-quantum-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-0"
        >
          <p className="text-lg text-quantum-text-secondary font-light leading-relaxed">
            A project by Gator Engineers. Raising awareness for ethical quantum development.
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
          <div className="hidden sm:block w-px h-6 bg-quantum-border" />

          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-quantum-maroon rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-quantum-crimson rounded-full animate-pulse delay-300" />
            <div className="w-2 h-2 bg-quantum-dark-red rounded-full animate-pulse delay-700" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-0 pt-6 border-t border-quantum-border/50"
        >
          <p className="text-sm text-quantum-text-muted">
            © 2025 EGS4034 Group 32. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
