import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Logo from "./components/ui/Logo";
import EventCategories from "./components/sections/EventCategories";
import FeaturedEvents from "./components/sections/FeaturedEvents";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Gallery from "./components/sections/Gallery";
import BookingForm from "./components/sections/BookingForm";
import Footer from "./components/layout/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  const [isModalActive, setIsModalActive] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Sync with body data-attribute to detect modals
    const checkModal = () => {
      setIsModalActive(document.body.hasAttribute("data-modal-active"));
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-modal-active") {
          checkModal();
        }
      });
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["data-modal-active"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closed = localStorage.getItem("announcement-closed");
    if (closed) setIsAnnouncementVisible(false);
  }, []);

  const handleCloseAnnouncement = () => {
    setIsAnnouncementVisible(false);
    localStorage.setItem("announcement-closed", "true");
  };

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-soft-bg font-sans selection:bg-brand-pink selection:text-brand-text">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-soft-white"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-brand-pink rounded-full flex items-center justify-center text-white mb-8 shadow-2xl relative">
                  <Logo imgClassName="w-12 h-12" alt="Bint-e-Hawa logo" white={true} />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-brand-pink rounded-full blur-xl"
                  />
                </div>
                
                <h1 className="text-2xl font-display font-light tracking-[0.2em] text-brand-text uppercase italic mb-6">
                  Bint-e-Hawa
                </h1>

                <div className="h-px w-48 bg-brand-pink/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-full bg-brand-pink shadow-[0_0_15px_rgba(232,160,191,0.5)]"
                  />
                </div>
                
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 text-[9px] uppercase font-bold tracking-[0.5em] text-brand-pink-dark italic"
                >
                  Artistry in Decor
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Scroll Progress Indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-brand-pink z-[100] origin-left"
            style={{ scaleX }}
          />

          <Navbar isHidden={isModalActive} />
          <main>
            <Hero />
            <AnnouncementBar isVisible={isAnnouncementVisible} onClose={handleCloseAnnouncement} />
            <About />
            <EventCategories />
            <FeaturedEvents />
            <Services />
            <Gallery />
            <BookingForm />
          </main>
          <Footer />

          {/* Mouse Follow Light Decor (Subtle) */}
          <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
             <div className="absolute top-[-5%] left-[-5%] w-[30vw] h-[30vw] bg-brand-pink/5 rounded-full blur-[80px]" />
             <div className="absolute bottom-[-5%] right-[-5%] w-[30vw] h-[30vw] bg-brand-yellow/5 rounded-full blur-[80px]" />
          </div>
        </>
      )}
    </div>
  );
}

