import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Target, FolderKanban, Calendar } from "lucide-react";

interface StatItem {
  icon: any;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const stats: StatItem[] = [
    {
      icon: Target,
      value: 87,
      suffix: "%",
      label: "Average Model Accuracy",
      color: "#00D9FF",
    },
    {
      icon: FolderKanban,
      value: 4,
      suffix: "+",
      label: "ML Projects Completed",
      color: "#FF006E",
    },
    {
      icon: Calendar,
      value: 2,
      suffix: "+",
      label: "Years Tech Learning",
      color: "#8338EC",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-[#1A1F3A] to-[#0A0E27]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: StatItem;
  index: number;
  isInView: boolean;
}) {
  const Icon = stat.icon;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 1000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 20px 60px ${stat.color}40`,
      }}
      className="relative overflow-hidden bg-gradient-to-br from-[#1F2937] to-[#0F1419] rounded-2xl p-8 border border-[#7C3AED]/30 hover:border-[#7C3AED] transition-all duration-300"
    >
      {/* Background Pulse */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full blur-3xl"
        style={{ backgroundColor: `${stat.color}20` }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={isInView ? { rotate: 360 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          className="mb-6"
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: `${stat.color}20` }}
          >
            <Icon size={32} style={{ color: stat.color }} />
          </div>
        </motion.div>

        {/* Number */}
        <div className="mb-4">
          <span
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${stat.color}, #10B981)`,
            }}
          >
            {count}
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <p className="text-[#F3F4F6] text-lg font-medium">{stat.label}</p>
      </div>

      {/* Decorative Corner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl"
        style={{ backgroundColor: `${stat.color}20` }}
      />
    </motion.div>
  );
}