import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Terminal, 
  Settings, 
  Layers, 
  Cpu,
  Github,
  Cloud
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: "Mobile",
      icon: <Smartphone size={24} />,
      skills: ["Swift", "SwiftUI", "UIKit", "Xcode", "Combine"]
    },
    {
      title: "Backend/Database",
      icon: <Layers size={24} />,
      skills: ["Websockets", "MongoDB", "Device-Sync", "REST APIs"]
    },
    {
      title: "Tools & DevOps",
      icon: <Settings size={24} />,
      skills: ["CI/CD", "Git", "Fastlane", "GitHub Actions"]
    },
    {
      title: "Professional",
      icon: <Cpu size={24} />,
      skills: ["Project Management", "Team Lead", "Discovery", "Delivery"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-medium text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
