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
      description: "A comprehensive dashboard for tracking Jira metrics, built during the Adesso SE internship to meet specific client requirements.",
      image: "public/adesso.png",
      tags: ["Angular", "Data Visualization", "API Integration"],
      type: "professional",
      link: "#"
    },
    {
      title: "Yassir",
      description: "Server-independent iOS application using MongoDB Device-Sync, reducing server load by 40% and improving offline capabilities.",
      image: "public/yassir.png",
      tags: ["SwiftUI", "MongoDB", "Device-Sync", "iOS"],
      type: "professional",
      link: "#"
    },
    {
      title: "Arbin",
      description: "High-growth mobile application that gained over 10,000 users in its first week. Focused on performance and user retention.",
      image: "public/arbin.png",
      tags: ["Swift", "Websockets", "iOS", "User Location", "Firebase", "REST APIs"],
      type: "professional",
      link: "#"
    },
    {
      title: "CageLight",
      description: "University project with FC Augsburg. ML model (YOLO11n) for player sprint assessment and scoring.",
      image: "public/CageLight.jpeg",
      tags: ["Machine Learning", "Python", "YOLO11", "Computer Vision"],
      type: "academic",
      link: "https://huggingface.co/ray96nex/yolo-athletic-pose-estimation"
    },
    {
      title: "Culterra",
      description: "Interactive mobile app for cultural insights, offering authentic, locally-sourced information to explore cultures worldwide.",
      image: "public/Culterra.jpeg",
      tags: ["Flutter", "Firebase", "Cross-platform", "Figma"],
      type: "academic",
      link: "https://github.com/THA-Culterra/flutter-app"
    },
    {
      title: "Pyramid Firmenkontaktmesse",
      description: "Official web portal for one of Germany’s largest career fairs. Built responsive Vue.js components and job board.",
      image: "public/Pyramid.jpeg",
      tags: ["Vue.js", "Web Development", "Agile", "Vuex"],
      type: "professional",
      link: "https://pyramid.tha.de/"
    },
    {
      title: "Weelz",
      description: "Cutting-edge car rental service application revolutionizing interaction between car owners and drivers.",
      image: "public/Weelz.jpeg",
      tags: ["OOP", "MongoDB", "Swift", "Backend"],
      type: "personal",
      link: "https://github.com/RMehdid/Weelz"
    },
    {
      title: "iDrive",
      description: "Car rental service application facilitating interaction between owners and drivers with proximity-based searches.",
      image: "public/iDrive.jpeg",
      tags: ["Design Patterns", "Swift", "CoreLocation", "iOS"],
      type: "personal",
      link: "https://github.com/RMehdid/iDrive"
    },
    {
      title: "Cenify",
      description: "Feature-rich movie catalog app leveraging the IMDb API to explore and discover vast collections of films.",
      image: "public/Cenify.png",
      tags: ["MVVM", "Swift", "IMDb API", "iOS"],
      type: "personal",
      link: "https://github.com/RMehdid/Cenify"
    },
    {
      title: "MyThesis",
      description: "Human-Machine interaction project built using JavaSwing for academic thesis at Boumerdes University.",
      image: "public/MyThesis.jpeg",
      tags: ["Java", "Java Swing", "HCI", "UX"],
      type: "academic",
      link: "https://github.com/RMehdid/MyThesis"
    },
    {
      title: "iVape",
      description: "Vape Store iOS app with catalog details, sweetness levels, and a VG/PG calculator using Firebase.",
      image: "public/iVape.png",
      tags: ["SwiftUI", "Firebase", "eCommerce", "iOS"],
      type: "personal",
      link: "https://github.com/RMehdid/iVape"
    },
    {
      title: "Little Lemon App",
      description: "Mobile application for browsing dinner menu offerings, developed as part of the Meta iOS development course.",
      image: "public/little-lemon.png",
      tags: ["SwiftUI", "Swift", "Core Data", "API"],
      type: "academic",
      link: "https://github.com/RMehdid/little-lemon-app"
    },
    {
      title: "ParallaxKit",
      description: "Swift library for creating engaging parallax effects in iOS applications, focused on dependency injection.",
      image: "public/parallax.png",
      tags: ["Dependency Injection", "Swift", "Library", "Animations"],
      type: "personal",
      link: "https://github.com/RMehdid/ParallaxKit"
    },
    {
      title: "SwipableButton",
      description: "Customizable SwiftUI slide button view for engaging unlock actions in iOS and macOS apps.",
      image: "public/swipable-button.png",
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
