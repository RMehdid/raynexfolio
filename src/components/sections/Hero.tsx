import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-primary uppercase mb-6">
            Available for opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {t('hero.greeting')} <br />
            <span className="text-gradient">Samy Mehdid</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8">
            {t('hero.role')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
            {t('hero.description')}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:shadow-glow transition-all"
            >
              {t('hero.cta')}
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full glass border border-white/10 font-bold flex items-center gap-2 hover:bg-white/5 transition-all"
            >
              <Download size={18} />
              Resume
            </motion.button>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/RMehdid" target='_blank' className="p-3 glass rounded-full hover:text-primary transition-all">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/mehdid-samy-abderraouf" className="p-3 glass rounded-full hover:text-primary transition-all">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sr.mehdid@gmail.com" className="p-3 glass rounded-full hover:text-primary transition-all">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Animated Circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border-2 border-dashed border-accent/20 rounded-full"
            />

            <div className="absolute inset-4 overflow-hidden rounded-full border-4 border-white/10">
              <img
                src="./profile-pic.jpg"
                alt="Samy Mehdid"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-2xl flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold">Swift Expert</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-10 -left-10 glass px-4 py-2 rounded-2xl flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-bold">iOS Developer</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
