import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0E27] via-[#1A1F3A] to-[#0A0E27]"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #00D9FF 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #FF006E 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, #8338EC 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #00D9FF 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#00D9FF]/20 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF006E]/20 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#8338EC]/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-[#FFFFFF] mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {"Hi, I'm Ayan Mansoori".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.05,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-[#F3F4F6] mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <span className="bg-gradient-to-r from-[#00D9FF] to-[#8338EC] bg-clip-text text-transparent">
              Data Scientist
            </span>{" "}
            |{" "}
            <span className="bg-gradient-to-r from-[#FF006E] to-[#8338EC] bg-clip-text text-transparent">
              ML Engineer
            </span>{" "}
            |{" "}
            <span className="bg-gradient-to-r from-[#8338EC] to-[#00D9FF] bg-clip-text text-transparent">
              Problem Solver
            </span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 217, 255, 0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-[#00D9FF] to-[#8338EC] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
          >
            Explore My Work
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="text-[#00D9FF]" size={32} />
        </motion.div>
      </div>
    </section>
  );
}