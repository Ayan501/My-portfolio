import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-[#0A0E27] border-t border-[#00D9FF]/30 py-8 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#FF006E] bg-clip-text text-transparent mb-2">
              Ayan Mansoori
            </div>
            <p className="text-[#A0AEC0] text-sm">Data Scientist & ML Engineer</p>
          </div>

          <div>
            <h3 className="text-[#FFFFFF] font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() =>
                    document
                      .getElementById(link.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-[#A0AEC0] hover:text-[#00D9FF] transition-colors duration-300 text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[#FFFFFF] font-semibold mb-4">Connect</h3>
            <p className="text-[#A0AEC0] text-sm mb-4">
              Let&apos;s work together on amazing projects!
            </p>
            <a
              href="mailto:ayanmansuri535@gmail.com"
              className="block text-[#00D9FF] hover:text-[#FF006E] transition-colors duration-300 text-sm mb-2"
            >
              ayanmansuri535@gmail.com
            </a>
            <a
              href="https://github.com/ayan501"
              target="_blank"
              rel="noreferrer"
              className="block text-[#A0AEC0] hover:text-[#00D9FF] transition-colors duration-300 text-sm mb-2"
            >
              github.com/ayan501
            </a>
            <a
              href="https://www.linkedin.com/in/ayan-mansoori501"
              target="_blank"
              rel="noreferrer"
              className="block text-[#A0AEC0] hover:text-[#00D9FF] transition-colors duration-300 text-sm"
            >
              linkedin.com/in/ayan-mansoori501
            </a>
          </div>
        </div>

        <div className="border-t border-[#00D9FF]/20 pt-6 text-center">
          <p className="text-[#A0AEC0] text-sm flex items-center justify-center">
            {"\u00A9"} {new Date().getFullYear()} Ayan Mansoori. Made with{" "}
            <Heart size={14} className="mx-1 text-[#FF006E] fill-current" /> and
            lots of coffee
          </p>
        </div>
      </div>

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(0, 217, 255, 0.6)",
          }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#00D9FF] to-[#8338EC] rounded-full flex items-center justify-center shadow-lg z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="text-white" size={24} />
        </motion.button>
      )}
    </footer>
  );
}
