import { motion } from "motion/react";
import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const testimonials = [
  {
    name: "Alexandra Stirling",
    role: "Global Head, Vogue Luxe",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    text: "Bint-e-Hawa transformed our fashion week gala into something truly transcendent. The level of detail and artistic direction was beyond anything we've experienced globally.",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "Founder, Stellar Horizons",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    text: "For our destination wedding in Tuscany, they managed 300 guests with flawless precision. Every moment felt exclusive, intimate, and cinematically perfect.",
    rating: 5
  },
  {
    name: "Elena Petrov",
    role: "CEO, Luxaure Global",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    text: "The technical integration and artistic flair provided by the team for our product launch in Singapore was revolutionary. A true masterclass in event management.",
    rating: 5
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-12 sm:py-24 bg-luxury-charcoal relative overflow-hidden">
      {/* Decorative text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[10rem] sm:text-[20rem] font-display font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
        Reviews
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <SectionHeading 
            subtitle="Distinguished VOICES" 
            title="Client Reflections" 
          />
        </motion.div>

        <div className="relative flex flex-col items-center">
          <div className="w-full max-w-4xl glass p-6 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[4rem] relative shadow-2xl border border-white/5">
            <Quote className="absolute top-4 left-4 sm:top-12 sm:left-12 text-luxury-gold/20 w-10 h-10 sm:w-20 sm:h-20" />
            
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-6 sm:mb-8">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-luxury-gold fill-luxury-gold" />
                ))}
              </div>
              
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-display font-medium text-white italic mb-10 sm:mb-12 leading-relaxed tracking-tight">
                "{testimonials[active].text}"
              </p>

              <div className="flex flex-col items-center">
                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mb-3 sm:mb-4 border-2 border-luxury-gold/30 p-1"
                  referrerPolicy="no-referrer"
                />
                <h5 className="text-base sm:text-lg font-bold text-white mb-1 uppercase tracking-widest">{testimonials[active].name}</h5>
                <p className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 italic">{testimonials[active].role}</p>
              </div>
            </motion.div>

            {/* Controls */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white hover:text-luxury-black transition-all shadow-xl group"
              >
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white hover:text-luxury-black transition-all shadow-xl group"
              >
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Indicator dots */}
          <div className="mt-16 flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  active === i ? "w-12 bg-luxury-gold" : "w-3 bg-white/10 hover:bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
