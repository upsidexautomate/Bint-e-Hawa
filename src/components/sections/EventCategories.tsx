import { motion, AnimatePresence } from "motion/react";
import { Heart, Briefcase, Gift, Sparkles, X, Check, ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { useState, useEffect } from "react";

const categories = [
  { 
    id: 1, 
    title: "Grand Weddings", 
    icon: <Heart size={20} />, 
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600", 
    desc: "Whimsical floral arrangements and breathtaking stage designs.",
    details: "Our wedding decorations are an ode to romance. We specialize in transforming open-air gardens and grand ballrooms into ethereal sanctuaries using rare blooms, custom-dyed silk drapes, and architectural lighting.",
    features: ["Bespoke Floral Sculptures", "Artisan Stage Backdrops", "Personalized Table Scapes"],
    gallery: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1522673607200-164883eecd0c?auto=format&fit=crop&q=80&w=400"
    ]
  },
  { 
    id: 2, 
    title: "Corporate Galas", 
    icon: <Briefcase size={20} />, 
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600", 
    desc: "Sophisticated decor that speaks the language of your brand.",
    details: "We bring brand identities to life through immersive spatial design. For our corporate clients, we focus on structural elegance—using geometric installations and synchronized light-scapes.",
    features: ["Brand-Integrated Palette", "Structural Centerpieces", "Immersive Light Design"],
    gallery: [
      "https://images.unsplash.com/photo-1540575861501-7ad060e39fe5?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=400"
    ]
  },
  { 
    id: 3, 
    title: "Private Bouts", 
    icon: <Gift size={20} />, 
    image: "https://images.unsplash.com/photo-1464347744102-11db6282f854?auto=format&fit=crop&q=80&w=600", 
    desc: "Intimate and personalized decoration for your most cherished moments.",
    details: "The beauty of a private celebration is in the intimacy. We craft cozy yet luxurious atmospheres for birthdays and anniversaries, focusing on tactile luxury and hand-written calligraphy.",
    features: ["Tactile Textile Design", "Intimate Mood Lighting", "Bespoke Keepsakes"],
    gallery: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400"
    ]
  },
];

export default function EventCategories() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);

  useEffect(() => {
    if (selectedCategory) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-modal-active", "service");
    } else {
      document.body.style.overflow = "unset";
      if (document.body.getAttribute("data-modal-active") === "service") {
        document.body.removeAttribute("data-modal-active");
      }
    }
  }, [selectedCategory]);

  return (
    <section id="experience" className="py-12 sm:py-24 bg-soft-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="Our Expertise" 
          title="Most Popular Services" 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedCategory(cat)}
              className={`group relative h-[350px] sm:h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer glass-card ${i === 0 ? "glow-pink" : i === 1 ? "glow-yellow" : "glow-pink"}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-text/80 via-brand-text/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end">
                <div className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-2xl flex items-center justify-center text-brand-pink mb-3 sm:mb-4 group-hover:bg-brand-pink group-hover:text-white transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl sm:text-3xl font-display font-medium text-white mb-2">{cat.title}</h3>
                <p className="text-white text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {cat.desc}
                </p>
                <div className="overflow-hidden">
                  <motion.button
                    className="flex items-center gap-2 text-brand-pink text-xs font-bold uppercase tracking-widest transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                  >
                    View Details <Sparkles size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Detail Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategory(null)}
              className="absolute inset-0 bg-brand-text/90 backdrop-blur-md"
            />

            <motion.div
              layoutId={`service-${selectedCategory.id}`}
              className="relative w-full max-w-5xl bg-soft-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedCategory(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-soft-bg flex items-center justify-center text-brand-text hover:bg-brand-pink z-50 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Modal Visual Area */}
              <div className="w-full lg:w-1/2 h-[250px] lg:h-auto overflow-hidden">
                <img 
                  src={selectedCategory.image} 
                  alt={selectedCategory.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Modal Text Area */}
              <div className="w-full lg:w-1/2 p-8 sm:p-16 flex flex-col justify-center overflow-y-auto">
                <div className="mb-8">
                  <div className="flex items-center gap-3 text-brand-pink-dark mb-4">
                    {selectedCategory.icon}
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Artisan Service</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-display font-medium text-brand-text mb-6">{selectedCategory.title}</h2>
                  <p className="text-brand-muted leading-relaxed text-sm lg:text-base">
                    {selectedCategory.details}
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-brand-text italic">Key Decoration Elements</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedCategory.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink-dark">
                          <Check size={12} />
                        </div>
                        <span className="text-xs text-brand-muted font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-brand-pink/10">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-brand-text mb-6">Recent Projects</h4>
                  <div className="flex gap-4">
                    {selectedCategory.gallery.map((img, idx) => (
                      <div key={idx} className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-md group/img cursor-pointer">
                        <img 
                          src={img} 
                          alt="Detail" 
                          className="w-full h-full object-cover transition-transform group-hover/img:scale-110" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                    <button className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-soft-bg border border-brand-pink/10 flex flex-col items-center justify-center gap-2 group/all transition-colors hover:bg-brand-pink/5">
                      <ArrowRight size={16} className="text-brand-pink group-hover/all:translate-x-1 transition-transform" />
                      <span className="text-[8px] uppercase font-bold tracking-widest text-brand-muted">View All</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
