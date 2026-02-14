import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export const Certificates: React.FC = () => {
  const { t } = useTranslation();

  const certificates = [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera",
      date: "Feb 2024",
      logo: "public/logos/certificates/coursera.png",
      link: "https://www.coursera.org/account/accomplishments/verify/A5MKRVBJFW8H"
    },
    {
      title: "Software Design: Modeling with UML",
      issuer: "LinkedIn",
      date: "Dec 2023",
      logo: "public/logos/certificates/linkedin.png",
      link: "https://www.linkedin.com/learning/certificates/1b644cfd477623be07b2bf1cfc3b0ae185dc235e96b6b839fbca812d8a4c335c"
    },
    {
      title: "iOS 16 Development Essential Training",
      issuer: "LinkedIn",
      date: "Dec 2023",
      logo: "public/logos/certificates/linkedin.png",
      link: "https://www.linkedin.com/learning/certificates/48150ac55f26d155d28580f4765cc66cdde50f905d0850de71c41509b322cdae"
    },
    {
      title: "Meta - Advanced Programming in Swift",
      issuer: "Meta",
      date: "Sep 2023",
      logo: "public/logos/certificates/meta.png",
      link: "https://www.coursera.org/account/accomplishments/certificate/HCA32GN9YM79"
    },
    {
      title: "iOS & Swift - MVVM, Combine, SnapKit, Snapshot/UI/Unit Tests",
      issuer: "Udemy",
      date: "Aug 2023",
      logo: "public/logos/certificates/udemy.png",
      link: "https://www.udemy.com/certificate/UC-95f7deb0-1494-4827-bfa9-81ac10c352cc/"
    },
    {
      title: "Server Side Swift Using Vapor 4 in iOS",
      issuer: "Udemy",
      date: "Mar 2023",
      logo: "public/logos/certificates/udemy.png",
      link: "https://www.udemy.com/certificate/UC-de47978a-c8c5-4e4b-b92c-2de00176561e/"
    },
    {
      title: "Build iOS Apps with SwiftUI Skill Path",
      issuer: "Codecademy",
      date: "Mar 2021",
      logo: "public/logos/certificates/codecademy.png",
      link: "https://www.codecademy.com/profiles/samyMehdid3159140498/certificates/604255fe3d6454000dce1f3e"
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
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center overflow-hidden p-2 group-hover:scale-110 transition-transform">
                    <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{cert.issuer} • {cert.date}</p>
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                View Certificate <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
