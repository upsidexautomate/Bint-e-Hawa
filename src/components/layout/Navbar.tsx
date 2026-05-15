import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Menu, X, ArrowUpRight, Flower2 } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar({ isHidden = false }: { isHidden?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Desktop-only parallax values
  const desktopNavTop = useTransform(scrollY, [0, 80], [16, 16]);
  const desktopWidth = useTransform(scrollY, [0, 80], ["96%", "90%"]);
  const desktopBg = useTransform(scrollY, [0, 100], [
    "rgba(255, 255, 255, 0.4)",
    "rgba(255, 255, 255, 0.95)"
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll and set attribute when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-modal-active", "navbar");
    } else {
      // Only unset if we are the ones who set it
      if (document.body.getAttribute("data-modal-active") === "navbar") {
        document.body.style.overflow = "unset";
        document.body.removeAttribute("data-modal-active");
      }
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "#experience" },
    { name: "Gallery", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Consultation", href: "#booking" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isHidden ? -120 : 0, 
          opacity: isHidden ? 0 : 1,
          pointerEvents: isHidden ? "none" : "auto" 
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          top: desktopNavTop,
          width: desktopWidth,
          backgroundColor: desktopBg,
        }}
        className={`fixed left-1/2 -translate-x-1/2 z-[100] backdrop-blur-lg border border-brand-pink/10 rounded-full shadow-lg hidden md:flex transition-shadow duration-700 px-6 py-3 items-center justify-between`}
      >
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-brand-pink flex items-center justify-center rounded-full group-hover:rotate-180 transition-transform duration-700 shadow-md">
            <Flower2 size={16} className="text-white" />
          </div>
          <span className="text-lg font-display font-light tracking-[0.1em] text-brand-text uppercase italic">
            Bint-e-Hawa
          </span>
        </div>

        <div className="flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold text-brand-text/80 hover:text-brand-pink-dark transition-all uppercase tracking-[0.4em] relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-pink-dark transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a href="#booking">
          <Button 
            variant="primary" 
            className="text-[9px] px-8 py-3 bg-brand-pink text-brand-text hover:bg-brand-pink-dark hover:text-white rounded-full uppercase tracking-[0.3em] font-bold border-none shadow-md hover:scale-105 transition-transform"
          >
            Inquire
          </Button>
        </a>
      </motion.nav>

      {/* Mobile Header (Minimal) */}
      <motion.div 
        animate={{ 
          y: isHidden ? -100 : 0, 
          opacity: isHidden ? 0 : 1,
          pointerEvents: isHidden ? "none" : "auto" 
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] md:hidden transition-all duration-500 flex items-center justify-between px-6 py-6 ${
          scrolled ? "bg-soft-white shadow-sm border-b border-brand-pink/5" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-7 h-7 bg-brand-pink flex items-center justify-center rounded-full">
            <Flower2 size={14} className="text-white" />
          </div>
          <span className="text-base font-display font-light tracking-[0.1em] text-brand-text uppercase italic">
            Bint-e-Hawa
          </span>
        </div>

        <button
          className="text-brand-text w-10 h-10 flex items-center justify-center rounded-full bg-soft-white shadow-sm hover:bg-brand-pink/10 transition-all border border-brand-pink/5"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={20} />
        </button>
      </motion.div>

      {/* Proper Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[110] bg-soft-bg md:hidden"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between px-6 py-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-brand-pink flex items-center justify-center rounded-full">
                  <Flower2 size={14} className="text-white" />
                </div>
                <span className="text-base font-display font-light tracking-[0.1em] text-brand-text uppercase italic">
                  Bint-e-Hawa
                </span>
              </div>
              <button
                className="text-brand-text w-10 h-10 flex items-center justify-center rounded-full bg-brand-pink/10 hover:bg-brand-pink/20 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="h-full flex flex-col justify-center px-8 pb-20">
              <div className="space-y-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-5xl font-display font-light text-brand-text/70 hover:text-brand-pink-dark transition-colors uppercase tracking-tight italic"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16"
              >
                <div className="h-px w-20 bg-brand-pink/30 mb-8" />
                <a 
                  href="#booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-4 group"
                >
                  <span className="text-sm uppercase font-bold tracking-[0.3em] text-brand-text group-hover:text-brand-pink-dark transition-colors">
                    Start a Decoration Project
                  </span>
                  <div className="w-10 h-10 rounded-full border border-brand-pink/20 flex items-center justify-center group-hover:border-brand-pink-dark transition-colors">
                    <ArrowUpRight size={16} className="text-brand-pink-dark" />
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Background Texture/Accent */}
            <div className="absolute -bottom-20 -right-20 w-[60vw] h-[60vw] bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
