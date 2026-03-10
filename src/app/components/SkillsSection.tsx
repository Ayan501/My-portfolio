import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Code2,
  Database,
  Cpu,
  TrendingUp,
  BarChart3,
  Brain,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: { name: string; level: SkillLevel }[];
  color: string;
}

type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "#7C3AED",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
      ],
    },
    {
      title: "ML & Data Science",
      icon: Brain,
      color: "#06B6D4",
      skills: [
        { name: "Regression", level: "Advanced" },
        { name: "Classification", level: "Advanced" },
        { name: "NLP", level: "Intermediate" },
        { name: "Computer Vision", level: "Advanced" },
      ],
    },
    {
      title: "Tools & Frameworks",
      icon: Cpu,
      color: "#10B981",
      skills: [
        { name: "TensorFlow", level: "Advanced" },
        { name: "Scikit-Learn", level: "Advanced" },
        { name: "Flask", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
      ],
    },
    {
      title: "Data Analysis",
      icon: BarChart3,
      color: "#F97316",
      skills: [
        { name: "Pandas", level: "Advanced" },
        { name: "NumPy", level: "Advanced" },
        { name: "Matplotlib", level: "Advanced" },
        { name: "Seaborn", level: "Advanced" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "#4F46E5",
      skills: [
        { name: "SQL", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
      ],
    },
    {
      title: "Mathematics",
      icon: TrendingUp,
      color: "#06B6D4",
      skills: [
        { name: "Linear Algebra", level: "Advanced" },
        { name: "Probability", level: "Advanced" },
        { name: "Statistics", level: "Advanced" },
        { name: "Calculus", level: "Intermediate" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 bg-[#0A0E27]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00D9FF] to-[#FF006E] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.1,
                }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 10px 40px ${category.color}40`,
                }}
                className="bg-[#1F2937] rounded-xl p-6 border border-[#7C3AED]/30 hover:border-[#7C3AED] transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Icon size={24} style={{ color: category.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#FFFFFF]">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      skill={skill}
                      color={category.color}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  skill,
  color,
}: {
  skill: { name: string; level: SkillLevel };
  color: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-[#0F1419] px-4 py-3">
      <div className="flex items-center gap-3">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-[#F3F4F6] text-sm">{skill.name}</span>
      </div>
      <span
        className="rounded-full border px-3 py-1 text-xs font-medium"
        style={{
          color,
          borderColor: `${color}66`,
          backgroundColor: `${color}14`,
        }}
      >
        {skill.level}
      </span>
    </div>
  );
}
