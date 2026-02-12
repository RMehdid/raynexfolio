import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      company: "Adesso SE",
      role: t('experience.intern'),
      period: "Sep 2025 - Mar 2027",
      location: "Germany",
      description: [
        "Rotation program, initiated a project from discovery to delivery",
        "Collaborated with a team of interns to deliver an ext Jira Metrics dashboard with specific client requirements"
      ]
    },
    {
      company: "Yassir Inc. (YC20)",
      role: t('experience.associate'),
      period: "Feb 2024 - May 2024",
      location: "Remote",
      description: [
        "Developed a server-independent iOS app using MongoDB Device-Sync, reducing server load by 40%",
        "Balanced feature development and maintenance of native iOS modules for cross-platform apps"
      ]
    },
    {
      company: "SARL Arbin",
      role: t('experience.developer'),
      period: "Jul 2022 - Feb 2024",
      location: "Algeria",
      description: [
        "Developed a startup app, gaining 10,000 users in the first week",
        "Collaborated with Product team to add 5+ features, boosting user retention by 18%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('experience.title')}</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:left-1/2 md:-translate-x-px">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'}`}
            >
              {/* Dot */}
              <div className="absolute top-0 w-8 h-8 rounded-full bg-background border-4 border-primary shadow-glow left-[-17px] md:left-auto md:right-[-17px] z-10 hidden md:flex items-center justify-center">
                <Briefcase size={12} className="text-primary" />
              </div>
              <div className="absolute top-0 w-8 h-8 rounded-full bg-background border-4 border-primary shadow-glow left-[-17px] z-10 flex md:hidden items-center justify-center">
                <Briefcase size={12} className="text-primary" />
              </div>

              <div className="glass p-8 rounded-3xl hover:border-primary/50 transition-all group">
                <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                  <span className="text-primary font-bold tracking-wider uppercase text-xs">{exp.period}</span>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground font-medium">
                    <MapPin size={16} />
                    <span>{exp.company} • {exp.location}</span>
                  </div>
                </div>
                <ul className={`space-y-3 text-muted-foreground list-none p-0`}>
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
