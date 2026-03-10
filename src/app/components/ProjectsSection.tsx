import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  title: string;
  description: string;
  images: string[];
  techStack: string[];
  githubUrl: string;
  badge?: string;
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects: Project[] = [
    {
      title: "Customer Churn Prediction",
      description:
        "Built an end-to-end ML pipeline achieving 87% accuracy using XGBoost with advanced feature engineering and SMOTE balancing techniques.",
      images: [
        "https://images.unsplash.com/photo-1760239037245-a372db8630f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBoZWF0bWFwJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzMwODY1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwbWV0cmljc3xlbnwxfHx8fDE3NzMwMDM5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      techStack: ["Python", "XGBoost", "Pandas", "Scikit-Learn", "SMOTE"],
      githubUrl: "https://github.com/Ayan501/customer-churn-prediction",
      badge: "Featured",
    },
    {
      title: "Real-Time Object Detection",
      description:
        "Computer Vision app for real-time object detection and counting using YOLOv8 with Flask backend for live camera feed processing.",
      images: [
        "https://images.unsplash.com/photo-1554936970-ce06538caf54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMG9iamVjdCUyMGRldGVjdGlvbnxlbnwxfHx8fDE3NzMwODY1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJjaGl0ZWN0dXJlJTIwZGlhZ3JhbXxlbnwxfHx8fDE3NzMwODY1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      techStack: ["YOLOv8", "OpenCV", "Python", "Flask"],
      githubUrl:
        "https://github.com/Ayan501/Object-Detection-Counting-System-YOLOv8",
      badge: "Live Project",
    },
    {
      title: "Credit Card Fraud Detection",
      description:
        "Developed a machine learning model to detect fraudulent credit card transactions by analyzing patterns and identifying suspicious activities.",      images: [
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      ],
      techStack: [
        "Python",
        "Flask",
        "Machine Learning",
        "Dashboard",
        "REST API",
      ],
      githubUrl: "https://github.com/Ayan501/Credit-Card-Fraud-Detection",
      badge: "",
    },
    {
      title: "RAG-Based AI Assistant",
      description:
        "Intelligent chatbot using Retrieval-Augmented Generation for context-aware responses with LangChain and HuggingFace models.",
      images: [
        "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY2hhdGJvdCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzMwODY1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJjaGl0ZWN0dXJlJTIwZGlhZ3JhbXxlbnwxfHx8fDE3NzMwODY1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      techStack: ["LangChain", "HuggingFace", "NLP", "Python"],
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-[#1A1F3A] to-[#0A0E27]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00D9FF] to-[#FF006E] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: Project;
  index: number;
  isInView: boolean;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{
        y: -12,
        boxShadow: "0 20px 60px rgba(124, 58, 237, 0.3)",
      }}
      className="bg-[#1F2937] rounded-2xl overflow-hidden border border-[#7C3AED]/30 hover:border-[#7C3AED] transition-all duration-300 group"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] to-transparent opacity-60"></div>
        </motion.div>

        {/* Badge */}
        {project.badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className="absolute top-4 right-4 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            {project.badge}
          </motion.div>
        )}

        {/* Image Indicators */}
        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex
                    ? "bg-[#7C3AED] w-6"
                    : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3 group-hover:text-[#7C3AED] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-[#F3F4F6] mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#7C3AED]/20 text-[#06B6D4] rounded-full text-sm border border-[#06B6D4]/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#7C3AED]/50 transition-all duration-300"
          >
            <Github size={20} />
            <span>View on GitHub</span>
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-3 border-2 border-[#06B6D4] text-[#06B6D4] rounded-lg font-semibold flex items-center justify-center hover:bg-[#06B6D4]/10 transition-all duration-300"
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
