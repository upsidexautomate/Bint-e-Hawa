import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "../ui/SectionHeading";
import { ArrowUpRight, X, Sparkles, MapPin, Calendar, Camera } from "lucide-react";
import { useState, useEffect } from "react";

const events = [
  {
    id: 1,
    title: "Cherry Blossom Vows",
    location: "Botanical Gardens, Kyoto",
    date: "Aug 2025",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1522673607200-164883eecd0c?auto=format&fit=crop&q=80&w=800",
    details: "A whimsical setup featuring 1,000+ hand-spun silk cherry blossoms, ethereal floor-to-ceiling drapery, and custom-designed moss-covered lanterns.",
    decor: ["Silk Florals", "Ambient Lanterns", "Pastel Drapery"]
  },
  {
    id: 2,
    title: "Golden Hour Gala",
    location: "Chateau de Chantilly, France",
    date: "June 2025",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    details: "A sun-drenched evening design utilizing reflective gold surface accents, suspended crystal centerpieces, and a pathway of 5,000 flickering candles.",
    decor: ["Mirror Accents", "Crystal Suspenders", "Grand Tableware"]
  },
  {
    id: 3,
    title: "Rose Quartz Soirée",
    location: "Penthouse Suite, NYC",
    date: "Oct 2025",
    category: "Private",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
    details: "An intimate rooftop celebration themed around rose quartz. Includes velvet-textured upholstery, rose-gold structural elements, and a canopy of living pink wisteria.",
    decor: ["Velvet Textures", "Living Wisteria", "Geometric Arches"]
  }
];

export default function FeaturedEvents() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-modal-active', 'event');
    } else {
      document.body.style.overflow = 'unset';
      if (document.body.getAttribute('data-modal-active') === 'event') {
        document.body.removeAttribute('data-modal-active');
      }
    }
  }, [selectedEvent]);

  return (
    <section id="portfolio" className="py-12 sm:py-24 bg-soft-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 sm:mb-16 gap-4 sm:gap-8">
          <SectionHeading 
            subtitle="Decoration Showcase" 
            title="Recent Works" 
            align="left"
          />
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-muted hover:text-brand-pink-dark uppercase text-[10px] tracking-[0.3em] font-bold border-b border-brand-pink/20 pb-2 transition-all flex items-center gap-2 group mb-4"
          >
            Full Portfolio <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedEvent(event)}
              className="relative group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl group-hover:shadow-brand-pink/20 transition-all duration-500">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-text/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Minimal Info */}
              <div className="absolute inset-x-0 bottom-0 p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-pink mb-2 block">{event.category}</span>
                <h3 className="text-2xl font-display font-medium text-white mb-4">{event.title}</h3>
                <div className="flex items-center gap-2 text-white text-[10px] uppercase tracking-widest font-bold">
                  View Details
                </div>
              </div>

              {/* Decor Accent */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-brand-pink">
                    <Sparkles size={16} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 sm:p-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-brand-text/90 backdrop-blur-md"
            />

            <motion.div
              layoutId={`event-${selectedEvent.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-soft-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Modal Image */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-10 sm:p-16 flex flex-col justify-center relative overflow-y-auto">
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-8 right-8 w-10 h-10 rounded-full bg-soft-bg flex items-center justify-center text-brand-text hover:bg-brand-pink transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-pink-dark mb-4 block">Event Details</span>
                  <h2 className="text-4xl sm:text-5xl font-display font-medium text-brand-text mb-6">{selectedEvent.title}</h2>
                  
                  <div className="flex flex-wrap gap-6 text-[10px] uppercase font-bold tracking-widest text-brand-muted">
                    <div className="flex items-center gap-2"><MapPin size={14} className="text-brand-pink" /> {selectedEvent.location}</div>
                    <div className="flex items-center gap-2"><Calendar size={14} className="text-brand-pink" /> {selectedEvent.date}</div>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-brand-text mb-4">Decoration Concept</h4>
                  <p className="text-brand-muted leading-relaxed text-sm mb-6">
                    {selectedEvent.details}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.decor.map((item, i) => (
                      <span key={i} className="px-4 py-2 bg-brand-pink/10 text-brand-pink-dark text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-10 border-t border-brand-pink/10">
                   <div className="flex -space-x-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-soft-white overflow-hidden bg-soft-bg">
                           <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="team" />
                        </div>
                      ))}
                   </div>
                   <div className="text-[10px] uppercase font-bold tracking-widest text-brand-muted">
                      Crafted by our <span className="text-brand-text">Artisan Team</span>
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
