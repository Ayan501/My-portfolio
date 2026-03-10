import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      url: "mailto:ayanmansuri535@gmail.com",
      color: "#7C3AED",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ayan-mansoori501",
      color: "#06B6D4",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/ayan501",
      color: "#10B981",
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      url: "#",
      color: "#F97316",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-[#0A0E27] to-[#1A1F3A] relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #00D9FF 0%, transparent 50%)",
            "radial-gradient(circle at 70% 50%, #FF006E 0%, transparent 50%)",
            "radial-gradient(circle at 30% 50%, #00D9FF 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
            {"Let's Build Something Amazing".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.03,
                }}
              >
                {char}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl text-[#F3F4F6] mb-12 max-w-2xl mx-auto"
          >
            I'm always open to interesting projects and opportunities. Drop me a
            message and let's connect!
          </motion.p>

          <motion.a
            href="mailto:ayanmansuri535@gmail.com"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(0, 217, 255, 0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-gradient-to-r from-[#00D9FF] to-[#8338EC] text-white px-10 py-4 rounded-full text-lg font-semibold mb-16 hover:shadow-2xl transition-all duration-300"
          >
            Get In Touch
          </motion.a>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center bg-[#1F2937] border-2 hover:bg-opacity-80 transition-all duration-300"
                  style={{ borderColor: `${link.color}40` }}
                >
                  <Icon size={24} style={{ color: link.color }} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
