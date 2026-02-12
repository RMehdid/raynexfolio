import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-6 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-md">
            {t('contact.description')}
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail size={24} />
              </div>
              <div>
                <span className="block text-sm text-muted-foreground mb-1">Email</span>
                <a href="mailto:sr.mehdid@gmail.com" className="text-xl font-bold hover:text-primary transition-all">
                  sr.mehdid@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Phone size={24} />
              </div>
              <div>
                <span className="block text-sm text-muted-foreground mb-1">Phone</span>
                <a href="tel:+4915560181251" className="text-xl font-bold hover:text-primary transition-all">
                  +49 155 6018 1251
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <span className="block text-sm text-muted-foreground mb-1">Location</span>
                <span className="text-xl font-bold">Augsburg, Germany</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-[2.5rem] relative"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-4">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary focus:ring-0 transition-all placeholder:text-white/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-4">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary focus:ring-0 transition-all placeholder:text-white/20"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold ml-4">{t('contact.form.message')}</label>
              <textarea 
                rows={5}
                placeholder="How can I help you?"
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary focus:ring-0 transition-all placeholder:text-white/20 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:shadow-glow transition-all"
            >
              {t('contact.form.send')}
              <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
