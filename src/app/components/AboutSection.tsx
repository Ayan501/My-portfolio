import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code, Rocket, GraduationCap } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const timeline = [
    {
      year: "2024",
      title: "Started Learning Python & Data Science",
      icon: Code,
      color: "#00D9FF",
    },
    {
      year: "2025",
      title: "Built First ML Models",
      description: "Churn Prediction, Object Detection",
      icon: Rocket,
      color: "#FF006E",
    },
    {
      year: "2026",
      title: "Deploying Production-Grade AI",
      icon: GraduationCap,
      color: "#8338EC",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-[#0A0E27] to-[#1A1F3A]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00D9FF] to-[#FF006E] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[#FFFFFF] mb-6">
              <span className="bg-gradient-to-r from-[#00D9FF] to-[#8338EC] bg-clip-text text-transparent">
                Data Scientist, ML Engineer & Freelancer
              </span>
            </h3>
            <p className="text-[#F3F4F6] text-lg leading-relaxed">
              Passionate about transforming data into actionable insights and building
              intelligent systems. I also work as a freelancer, building full stack
              MERN applications for clients with scalable APIs, responsive interfaces,
              and production-ready deployments.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  whileHover={{
                    y: -8,
                    boxShadow: `0 10px 40px ${item.color}40`,
                  }}
                  className="bg-[#1A1F3A] rounded-xl p-6 border border-[#00D9FF]/30 hover:border-[#FF006E] transition-all duration-300"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    className="relative mb-4"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          `0 0 0px ${item.color}`,
                          `0 0 20px ${item.color}`,
                          `0 0 0px ${item.color}`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon size={28} style={{ color: item.color }} />
                    </motion.div>
                  </motion.div>
                  <div className="text-center">
                    <div className="text-sm font-semibold mb-2" style={{ color: item.color }}>
                      {item.year}
                    </div>
                    <div className="text-[#FFFFFF] font-semibold mb-2">
                      {item.title}
                    </div>
                    {item.description && (
                      <div className="text-[#A0AEC0] text-sm">
                        {item.description}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
