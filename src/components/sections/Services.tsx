import { motion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";
import { Palette, Flower2, Lightbulb, Layout, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    { title: "Floral Artistry", icon: <Flower2 />, desc: "Exotic blooms and hand-tied arrangements that define the space." },
    { title: "Bespoke Drapery", icon: <Layout />, desc: "Luxurious textiles and ceiling treatments for a dreamy atmosphere." },
    { title: "Artistic Lighting", icon: <Lightbulb />, desc: "Strategic illumination to highlight every intricate detail." },
    { title: "Set Design", icon: <Palette />, desc: "Complete venue transformation from floor to ceiling." },
    { title: "Table Styling", icon: <Sparkles />, desc: "Exquisite table landscapes with curated tableware and centerpieces." },
  ];

  return (
    <section id="services" className="py-24 bg-soft-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="Our Decoration Specialties" 
          title="Curated Visual Services" 
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-brand-pink/10 border border-brand-pink/5 transition-colors">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-soft-white p-8 sm:p-10 group hover:bg-brand-pink/5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-[300px] sm:h-[350px]"
            >
              <div className="relative z-10">
                <div className="text-brand-pink/60 mb-8 group-hover:text-brand-pink-dark group-hover:scale-110 transition-all duration-500 w-12 h-12">
                  {service.icon}
                </div>
                <h4 className="text-lg font-display font-medium text-brand-text mb-4 tracking-tight group-hover:text-brand-pink-dark transition-colors">{service.title}</h4>
                <p className="text-brand-muted text-xs leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
              
              <div className="mt-8 overflow-hidden relative z-10">
                <button className="text-[10px] uppercase font-bold tracking-widest text-brand-muted group-hover:text-brand-pink-dark transition-colors flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300">
                  See Gallery <span className="w-6 h-px bg-current" />
                </button>
              </div>

              {/* Decorative Number */}
              <span className="absolute top-8 right-8 text-brand-pink/5 font-display font-black text-6xl pointer-events-none group-hover:text-brand-pink/10 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

