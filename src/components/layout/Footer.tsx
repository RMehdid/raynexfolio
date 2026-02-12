import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-foreground font-bold">SAMY MEHDID</span>. All rights reserved.
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Terms of Service</a>
        </div>

        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs font-bold tracking-widest uppercase">Augsburg, DE</span>
        </motion.div>
      </div>
    </footer>
  );
};
