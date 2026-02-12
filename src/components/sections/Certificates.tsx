import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export const Certificates: React.FC = () => {
  const { t } = useTranslation();

  const certificates = [
    {
      title: "iOS Developer Certification",
      issuer: "Apple Developer",
      date: "2024",
      link: "#"
    },
    {
      title: "SwiftUI Advanced Patterns",
      issuer: "Udemy",
      date: "2023",
      link: "#"
    },
    {
      title: "Clean Architecture for Mobile",
      issuer: "LinkedIn Learning",
      date: "2023",
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('nav.certificates')}</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-primary/50 transition-all group flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{cert.issuer} • {cert.date}</p>
              </div>
              <a href={cert.link} className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                View Certificate <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
