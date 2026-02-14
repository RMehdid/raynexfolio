import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "FlowRadar",
      description: "A comprehensive dashboard for tracking Jira metrics, built during the Adesso SE internship to meet specific client requirements.",
      image: "public/adesso.png",
      tags: ["Angular", "Data Visualization", "API Integration"],
      link: "#"
    },
    {
      title: "Yassir",
      description: "Server-independent iOS application using MongoDB Device-Sync, reducing server load by 40% and improving offline capabilities.",
      image: "public/yassir.png",
      tags: ["SwiftUI", "MongoDB", "Device-Sync", "iOS"],
      link: "#"
    },
    {
      title: "Arbin",
      description: "two High-growth mobile application that gained over 10,000 users in its first week. Focused on performance and user retention.",
      image: "public/arbin.png",
      tags: ["Swift", "Websockets", "iOS", "User Location", "Firebase", "REST APIs"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('projects.title')}</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
            See all projects <ArrowRight size={20} />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-all">
                    {t('projects.view_project')} <ExternalLink size={16} />
                  </a>
                  <div className="flex gap-4">
                    <a href="#" className="p-2 hover:text-primary transition-all"><Github size={18} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
