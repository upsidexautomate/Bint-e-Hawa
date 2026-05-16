import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

export default function Hero() {
  const { scrollY } = useScroll();
  const yBackdrop = useTransform(scrollY, [0, 800], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleBackdrop = useTransform(scrollY, [0, 800], [1, 1.05]);
  const yContent = useTransform(scrollY, [0, 500], [40, -40]);
  
  const lineAnimation = {
    hidden: { y: 40, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-soft-bg">
      {/* Soft Artistic Background */}
      <motion.div 
        style={{ y: yBackdrop, scale: scaleBackdrop }} 
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000"
          alt="Elegant Decoration"
          className="w-full h-full object-cover opacity-40 saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-soft-bg/60 via-transparent to-soft-bg z-10" />
      </motion.div>

      {/* Decorative Pastel Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl px-6 pointer-events-none z-10 hidden md:block">
        <div className="absolute top-40 left-0 w-px h-24 bg-brand-pink/40" />
        <div className="absolute top-40 right-0 w-px h-24 bg-brand-pink/40" />
      </div>

      <motion.div 
        style={{ y: yContent, opacity }}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center"
      >
        <div className="mx-auto mb-8 w-fit">
          <Logo imgClassName="w-20 h-20 md:w-24 md:h-24" alt="Bint-e-Hawa logo" />
        </div>
        {/* Top Marker */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="inline-flex items-center gap-3 mb-6 sm:mb-10"
        >
          <span className="h-px w-8 bg-brand-pink/30" />
          <span className="text-[10px] uppercase font-bold tracking-[0.6em] text-brand-pink-dark italic">
            Artisan Event Decorations
          </span>
          <span className="h-px w-8 bg-brand-pink/30" />
        </motion.div>

        {/* Main Heading - Softer Palette */}
        <div className="relative mb-8 sm:mb-12">
          <motion.h1 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-light leading-[0.95] tracking-tight text-brand-text uppercase italic"
          >
            <div className="overflow-hidden">
              <motion.span variants={lineAnimation} className="block origin-left">
                Transforming
              </motion.span>
            </div>
            <div className="overflow-hidden -mt-2">
              <motion.span
                variants={lineAnimation}
                className="block italic font-normal opacity-60 luxury-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl normal-case origin-left"
              >
                Spaces into
              </motion.span>
            </div>
            <div className="overflow-hidden -mt-2">
              <motion.span
                variants={lineAnimation}
                className="block text-brand-pink-dark font-bold tracking-tight origin-left"
              >
                Masterpieces.
              </motion.span>
            </div>
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "circOut" }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[40%] h-px bg-gradient-to-r from-transparent via-brand-pink/40 to-transparent"
          />
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="text-brand-text/80 text-xs sm:text-sm md:text-lg max-w-2xl mx-auto mb-10 sm:mb-16 font-light leading-relaxed tracking-[0.05em]"
        >
          We create dreamlike atmospheres for weddings, corporate galas, and bespoke gatherings. Experience the magic of intentional, breathtaking design.
        </motion.p>

        {/* Action Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-12 sm:mb-24"
        >
          <a href="#booking" className="w-full sm:w-auto relative group">
            <div className="absolute -inset-1 bg-brand-pink/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110 pointer-events-none" />
            
            <Button 
              variant="primary" 
              className="w-full bg-brand-pink text-brand-text border-none px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] 
                         shadow-lg hover:bg-brand-pink-dark hover:text-white transition-all duration-700 relative z-10"
            >
              Consult a Decorator
            </Button>
          </a>
          
          <a href="#portfolio" className="w-full sm:w-auto relative group">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-muted hover:text-brand-text transition-all duration-500 flex items-center gap-4 py-4 relative z-10"
            >
              <span>View Signature Galas</span>
              <div className="w-10 h-px bg-brand-pink/30 group-hover:w-16 transition-all duration-700" />
            </motion.button>
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Soft Orbs */}
      <motion.div 
        className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-brand-pink/[0.06] rounded-full blur-[80px] pointer-events-none" 
      />
      <motion.div 
        className="absolute bottom-1/4 right-0 w-[30vw] h-[30vw] bg-brand-yellow/[0.06] rounded-full blur-[60px] pointer-events-none" 
      />

      {/* Subtle Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30 opacity-40"
      >
        <span className="text-[8px] uppercase tracking-[0.6em] font-bold text-brand-text/60">Explore our Craft</span>
        <ChevronDown size={12} className="text-brand-pink-dark" />
      </motion.div>
    </section>
  );
}
