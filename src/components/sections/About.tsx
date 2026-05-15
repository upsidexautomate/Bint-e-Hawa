import { motion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";
import { Sparkles } from "lucide-react";

export default function About() {
  const points = [
    { id: 1, title: "Bespoke Artistry", desc: "Every drape and flower is placed with artistic intention." },
    { id: 2, title: "Pastel Perfection", desc: "Specializing in soft, dreamlike color palettes." },
    { id: 3, title: "Seamless Design", desc: "From concept to creation, we handle every visual detail." },
  ];

  return (
    <section id="about" className="py-12 sm:py-24 bg-soft-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <SectionHeading 
              subtitle="The Artisan Way" 
              title="Crafting Dreamlike Environments" 
              align="left"
            />
            <p className="text-brand-muted text-lg mb-8 font-light italic">
              "We believe that the beauty of an event lies in the harmony of its decorations."
            </p>
            <p className="text-brand-muted text-sm leading-relaxed mb-10">
              Bint-e-Hawa is a boutique decoration studio dedicated to transforming spaces into masterpieces. Our team of artisans specializes in creating ethereal atmospheres through bespoke floral designs, luxurious textiles, and intentional lighting.
            </p>

            <div className="space-y-6">
              {points.map((point) => (
                <div key={point.id} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink-dark shrink-0 mt-1">
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <h4 className="text-brand-text font-bold text-sm uppercase tracking-widest mb-1">{point.title}</h4>
                    <p className="text-brand-muted text-xs">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000" 
                alt="Artistic Decoration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-brand-pink/20 rounded-[3rem] -z-10 transform -rotate-3" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

