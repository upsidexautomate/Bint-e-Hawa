import { motion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";
import { Zap, Shield, Users, Clock, Palette, Laptop, Star, Crown } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    { title: "Creative Planning", icon: <Palette size={24} />, desc: "Artistic direction that transforms abstract visions into tangible reality." },
    { title: "VIP Handling", icon: <Crown size={24} />, desc: "Elite guest management services for high-profile attendees and celebrities." },
    { title: "24/7 Concierge", icon: <Clock size={24} />, desc: "Dedicated round-the-clock support for any logistical requirement." },
    { title: "Tech Integration", icon: <Laptop size={24} />, desc: "Advanced light, sound, and interactive digital event technologies." },
    { title: "Global Logistics", icon: <Shield size={24} />, desc: "Seamless cross-border management for international destination events." },
    { title: "Expert Team", icon: <Users size={24} />, desc: "Award-winning planners, designers, and coordination professionals." },
    { title: "Custom Themes", icon: <Star size={24} />, desc: "Unique concepts meticulously crafted for your specific story." },
    { title: "Flawless Execution", icon: <Zap size={24} />, desc: "Zero-error precision from pre-planning to post-event teardown." },
  ];

  return (
    <section className="py-24 bg-luxury-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="The Difference" 
          title="Why the Elite Choose Bint-e-Hawa" 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-luxury-gold mb-6 group-hover:bg-luxury-gold group-hover:text-white group-hover:rotate-[15deg] transition-all duration-500 shadow-xl border border-white/5">
                {feature.icon}
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-3 tracking-tight group-hover:text-luxury-gold transition-colors">{feature.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
