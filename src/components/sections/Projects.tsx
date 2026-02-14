import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, ArrowUp } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "FlowRadar",
      description: t('projects.items.FlowRadar.description'),
      image: "/adesso.png",
      tags: ["Angular", "Data Visualization", "API Integration"],
      type: "professional",
      link: null
    },
    {
      title: "Yassir",
      description: t('projects.items.Yassir.description'),
      image: "/yassir.png",
      tags: ["SwiftUI", "MongoDB", "Device-Sync", "iOS"],
      type: "professional",
      link: null
    },
    {
      title: "Arbin",
      description: t('projects.items.Arbin.description'),
      image: "/arbin.png",
      tags: ["Swift", "Websockets", "iOS", "User Location", "Firebase", "REST APIs"],
      type: "professional",
      link: null
    },
    {
      title: "CageLight",
      description: t('projects.items.CageLight.description'),
      image: "/CageLight.jpeg",
      tags: ["Machine Learning", "Python", "YOLO11", "Computer Vision"],
      type: "academic",
      link: "https://huggingface.co/ray96nex/yolo-athletic-pose-estimation"
    },
    {
      title: "Culterra",
      description: t('projects.items.Culterra.description'),
      image: "/Culterra.jpeg",
      tags: ["Flutter", "Firebase", "Cross-platform", "Figma"],
      type: "academic",
      link: "https://github.com/THA-Culterra/flutter-app"
    },
    {
      title: t('projects.items.Pyramid.title'),
      description: t('projects.items.Pyramid.description'),
      image: "/Pyramid.jpeg",
      tags: ["Vue.js", "Web Development", "Agile", "Vuex"],
      type: "professional",
      link: "https://pyramid.tha.de/"
    },
    {
      title: "Weelz",
      description: t('projects.items.Weelz.description'),
      image: "/Weelz.jpeg",
      tags: ["OOP", "MongoDB", "Swift", "Backend"],
      type: "personal",
      link: "https://github.com/RMehdid/Weelz"
    },
    {
      title: "iDrive",
      description: t('projects.items.iDrive.description'),
      image: "/iDrive.jpeg",
      tags: ["Design Patterns", "Swift", "CoreLocation", "iOS"],
      type: "personal",
      link: "https://github.com/RMehdid/iDrive"
    },
    {
      title: "Cenify",
      description: t('projects.items.Cenify.description'),
      image: "/Cenify.png",
      tags: ["MVVM", "Swift", "IMDb API", "iOS"],
      type: "personal",
      link: "https://github.com/RMehdid/Cenify"
    },
    {
      title: "MyThesis",
      description: t('projects.items.MyThesis.description'),
      image: "/MyThesis.jpeg",
      tags: ["Java", "Java Swing", "HCI", "UX"],
      type: "academic",
      link: "https://github.com/RMehdid/MyThesis"
    },
    {
      title: "iVape",
      description: t('projects.items.iVape.description'),
      image: "/iVape.png",
      tags: ["SwiftUI", "Firebase", "eCommerce", "iOS"],
      type: "personal",
      link: "https://github.com/RMehdid/iVape"
    },
    {
      title: t('projects.items.LittleLemon.title'),
      description: t('projects.items.LittleLemon.description'),
      image: "/little-lemon.png",
      tags: ["SwiftUI", "Swift", "Core Data", "API"],
      type: "academic",
      link: "https://github.com/RMehdid/little-lemon-app"
    },
    {
      title: "ParallaxKit",
      description: t('projects.items.ParallaxKit.description'),
      image: "/parallax.png",
      tags: ["Dependency Injection", "Swift", "Library", "Animations"],
      type: "personal",
      link: "https://github.com/RMehdid/ParallaxKit"
    },
    {
      title: "SwipableButton",
      description: t('projects.items.SwipableButton.description'),
      image: "/swipable-button.png",
      tags: ["SwiftUI", "Reusable Component", "Animations", "UI/UX"],
      type: "professional",
      link: "https://github.com/RMehdid/SwipableButton"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

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
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group glass rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  {/* Project Type Badge */}
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/20 text-[10px] font-bold uppercase tracking-wider text-primary shadow-glow">
                    {t(`projects.types.${project.type}`)}
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-700"
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
                  {project.link && (
                    <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-all">
                        {t('projects.view_project')} <ExternalLink size={16} />
                      </a>
                      <div className="flex gap-4">
                        <a href="#" className="p-2 hover:text-primary transition-all"><Github size={18} /></a>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/50 px-8 py-4 rounded-2xl font-bold transition-all"
          >
            {showAll ? (
              <>
                {t('projects.show_featured')} <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                {t('projects.see_all')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
