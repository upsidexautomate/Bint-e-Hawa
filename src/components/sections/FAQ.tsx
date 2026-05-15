import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const faqs = [
  {
    q: "How far in advance should we book your services?",
    a: "For luxury weddings and large-scale corporate events, we recommend booking at least 6 to 12 months in advance. However, our rapid-response team can manage tight timelines for smaller private events or brand activations."
  },
  {
    q: "Do you handle international destination events?",
    a: "Our portfolio spans across the globe. We have established logistical hubs in Europe, Asia, and North America, allowing us to scout and manage the most remote and exclusive venues worldwide."
  },
  {
    q: "Can you source world-class entertainment and artists?",
    a: "Through our extensive industry network, we have direct relationships with record labels, artist agencies, and celebrity speakers. We handle all contract negotiations, riders, and technical requirements."
  },
  {
    q: "What is your approach to visual and set design?",
    a: "We approach set design as architecture. Every event has a dedicated creative director who produces a 3D visual blueprint of the experience, ensuring every angle and reflection is meticulously planned."
  },
  {
    q: "How do you manage guest privacy and VIP security?",
    a: "Privacy and security are our highest priorities. We employ discreet, elite-level security specialized in high-profile gatherings, along with non-disclosure agreements for all third-party vendors."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-24 bg-luxury-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center mb-10 sm:mb-16">
          <div className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-2xl flex items-center justify-center text-luxury-gold mb-4 sm:mb-6">
            <HelpCircle size={24} />
          </div>
          <SectionHeading 
            subtitle="Queries" 
            title="Common Enquiries" 
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                open === i ? "glass-dark border-white/20" : "bg-white/5 border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-6 px-6 sm:py-8 sm:px-10 flex items-center justify-between text-left group"
              >
                <span className={`text-base sm:text-lg md:text-xl font-display font-medium transition-colors duration-300 pr-4 ${open === i ? "text-luxury-gold" : "text-white"}`}>
                  {faq.q}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open === i ? "bg-luxury-gold text-white rotate-0" : "bg-white/5 text-white/20 rotate-90"}`}>
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 sm:px-10 sm:pb-10 text-white/50 text-sm leading-relaxed max-w-3xl">
                      <div className="w-full h-px bg-white/5 mb-6 sm:mb-8" />
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
