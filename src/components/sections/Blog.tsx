import { motion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";
import { ArrowUpRight, Clock, User } from "lucide-react";

const posts = [
  {
    title: "Luxury Event Trends for 2025",
    category: "Insights",
    date: "May 12, 2024",
    author: "Elena Rossi",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
    desc: "From immersive projection mapping to extreme bio-centric designs, discover what's shaping high-end gala culture."
  },
  {
    title: "The Art of Destination Logistics",
    category: "Operations",
    date: "April 28, 2024",
    author: "Marc Dupond",
    image: "https://images.unsplash.com/photo-1540575861501-7ad060e39fe5?auto=format&fit=crop&q=80&w=800",
    desc: "Managing a 500-person event on a remote Greek island? We break down the logistical masterpiece required."
  },
  {
    title: "Sustainability in Haute Event Decor",
    category: "Design",
    date: "April 15, 2024",
    author: "Sarah Jane",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    desc: "Luxury doesn't have to mean waste. Explore how zero-impact floristry and reusable sets are the new standard."
  }
];

export default function Blog() {
  return (
    <section id="journal" className="py-24 bg-luxury-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="The Journal" 
          title="Bint-e-Hawa Insights" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative h-72 rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-1 glass-dark rounded-full text-[9px] uppercase tracking-widest text-luxury-gold font-bold">
                  {post.category}
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2 text-white/30 text-[10px] uppercase font-bold tracking-widest">
                    <Clock size={12} /> {post.date}
                  </div>
                  <div className="flex items-center gap-2 text-white/30 text-[10px] uppercase font-bold tracking-widest">
                    <User size={12} /> {post.author}
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-luxury-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.desc}
                </p>
                
                <button className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-[0.2em] border-b border-white/10 pb-2 group-hover:border-luxury-gold transition-colors">
                  Read Full Article <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
