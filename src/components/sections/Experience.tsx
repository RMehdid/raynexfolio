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
      period: t('experience.items.adesso.period'),
      location: t('experience.items.adesso.location'),
      description: t('experience.items.adesso.description', { returnObjects: true }) as string[]
    },
    {
      company: "Yassir Inc. (YC20)",
      role: t('experience.associate'),
      period: t('experience.items.yassir.period'),
      location: t('experience.items.yassir.location'),
      description: t('experience.items.yassir.description', { returnObjects: true }) as string[]
    },
    {
      company: "SARL Arbin",
      role: t('experience.developer'),
      period: t('experience.items.arbin.period'),
      location: t('experience.items.arbin.location'),
      description: t('experience.items.arbin.description', { returnObjects: true }) as string[]
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

        {/* Central Line for Desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block" />

        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0
                ? 'md:ms-auto md:ps-12' /* Right (Even) */
                : 'md:me-auto md:pe-12' /* Left (Odd) */
                } ltr:pl-8 rtl:pr-8 md:px-0 text-start`}
            >
              {/* Dot - Desktop */}
              <div className={`absolute top-0 w-8 h-8 rounded-full bg-background border-4 border-primary shadow-glow z-10 hidden md:flex items-center justify-center
                ${index % 2 === 0
                  ? 'start-[-17px]' /* Right Card -> Dot on Start */
                  : 'end-[-17px]' /* Left Card -> Dot on End */
                }
              `}>
                <Briefcase size={12} className="text-primary" />
              </div>

              {/* Dot - Mobile */}
              <div className="absolute top-0 w-8 h-8 rounded-full bg-background border-4 border-primary shadow-glow ltr:left-[-17px] rtl:right-[-17px] z-10 flex md:hidden items-center justify-center">
                <Briefcase size={12} className="text-primary" />
              </div>

              {/* Mobile Line Connection (Vertical line segment for mobile if needed, or rely on border-l on container) */}

              <div className="glass p-8 rounded-3xl hover:border-primary/50 transition-all group">
                <div className="flex flex-col gap-2 mb-4 items-start">
                  <span className="text-primary font-bold tracking-wider uppercase text-xs">{exp.period}</span>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground font-medium">
                    <MapPin size={16} />
                    <span>{exp.company} • {exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground list-none p-0">
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
