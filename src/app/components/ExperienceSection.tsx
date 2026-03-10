import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  organization: string;
  date: string;
  description: string[];
  side: "left" | "right";
  color: string;
}

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const timeline: TimelineItem[] = [
    {
      type: "work",
      title: "Freelance MERN Stack Developer",
      organization: "Self-Employed",
      date: "2024 - Present",
      description: [
        "Delivered full stack client projects using MongoDB, Express.js, React, and Node.js",
        "Built responsive web applications with secure APIs, authentication, and admin dashboards",
        "Worked directly with clients to turn business requirements into production-ready products",
      ],
      side: "left",
      color: "#00D9FF",
    },
    {
      type: "work",
      title: "Data Scientist Intern",
      organization: "SkillCraft Technology",
      date: "Sept - Oct 2025",
      description: [
        "EDA on complex datasets",
        "Optimized Decision Tree (89% accuracy)",
        "Feature engineering & preprocessing",
      ],
      side: "right",
      color: "#7C3AED",
    },
    {
      type: "education",
      title: "B.Tech CSE",
      organization: "Shri Guru Sandipani Institute",
      date: "2022 - Present",
      description: ["Strong foundation in CS fundamentals"],
      side: "left",
      color: "#06B6D4",
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 bg-[#0A0E27] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#00D9FF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#FF006E] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00D9FF] to-[#FF006E] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#00D9FF] via-[#8338EC] to-[#FF006E] hidden md:block"
            style={{ top: 0, bottom: 0 }}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <TimelineCard
                key={index}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  item,
  index,
  isInView,
}: {
  item: TimelineItem;
  index: number;
  isInView: boolean;
}) {
  const Icon = item.type === "work" ? Briefcase : GraduationCap;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: item.side === "left" ? -50 : 50,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
            }
          : {}
      }
      transition={{ duration: 0.6, delay: index * 0.3 }}
      className={`flex items-center ${
        item.side === "left"
          ? "md:flex-row-reverse md:text-right"
          : "md:flex-row md:text-left"
      } flex-col text-left`}
    >
      {/* Content */}
      <div className="w-full md:w-5/12">
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: `0 10px 40px ${item.color}40`,
          }}
          className="bg-[#1F2937] p-6 rounded-xl border-2 transition-all duration-300"
          style={{ borderColor: `${item.color}40` }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${item.color}20` }}
            >
              <Icon size={20} style={{ color: item.color }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#FFFFFF]">
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: item.color }}>
                {item.organization}
              </p>
            </div>
          </div>
          <p className="text-[#A0AEC0] text-sm mb-3">{item.date}</p>
          <ul className="space-y-2">
            {item.description.map((desc, idx) => (
              <li key={idx} className="text-[#F3F4F6] text-sm flex items-start">
                <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#06B6D4]"></span>
                {desc}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Center Dot */}
      <div className="relative flex items-center justify-center w-full md:w-2/12 my-4 md:my-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.3 + 0.3 }}
          className="relative"
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
            className="w-4 h-4 rounded-full z-10 relative"
            style={{ backgroundColor: item.color }}
          />
        </motion.div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block md:w-5/12"></div>
    </motion.div>
  );
}
