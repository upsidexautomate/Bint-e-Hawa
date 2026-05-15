import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import SectionHeading from "../ui/SectionHeading";
import { Plus, X, Maximize2, MapPin, Calendar, Layout, Sparkles } from "lucide-react";

const images = [
  { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800", span: "row-span-2 col-span-2", title: "Royal Gala", speed: 0.05, location: "Versailles, FR", date: "Sept 2024", theme: "Regal Gold & White", related: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=200", "https://images.unsplash.com/photo-1522673607200-164883eecd0c?auto=format&fit=crop&q=80&w=200"] },
  { url: "https://images.unsplash.com/photo-1527529482837-4698179dc6bc?auto=format&fit=crop&q=80&w=600", span: "row-span-1 col-span-1", title: "Met Concert", speed: 0.1, location: "New York, US", date: "May 2025", theme: "Futuristic Neon", related: ["https://images.unsplash.com/photo-1540575861501-7ad060e39fe5?auto=format&fit=crop&q=80&w=200", "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=200"] },
  { url: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&q=80&w=600", span: "row-span-1 col-span-1", title: "Luxury Decor", speed: 0.08, location: "Milan, IT", date: "Apr 2025", theme: "Modern Minimalist", related: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=200", "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=200"] },
  { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800", span: "row-span-2 col-span-1", title: "Winter Wedding", speed: 0.12, location: "St. Moritz, CH", date: "Dec 2024", theme: "Icy Crystal", related: ["https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=200", "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=200"] },
  { url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800", span: "row-span-1 col-span-1", title: "Fashion Night", speed: 0.06, location: "Paris, FR", date: "Mar 2025", theme: "High-Contrast Velvet", related: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=200", "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=200"] },
  { url: "https://images.unsplash.com/photo-1507502707541-f369a3b18502?auto=format&fit=crop&q=80&w=800", span: "row-span-1 col-span-2", title: "Beach Soirée", speed: 0.09, location: "Mykonos, GR", date: "July 2024", theme: "Organic Linen", related: ["https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=200", "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=200"] },
];

function GalleryItem({ img, i, scrollYProgress, onOpen }: { img: typeof images[0], i: number, scrollYProgress: any, onOpen: (img: typeof images[0] | null) => void, key?: any }) {
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, img.speed * 400]);
  
  return (
    <motion.div
      key={i}
      style={{ y: yOffset }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: i * 0.1 }}
      onClick={() => onOpen(img)}
      className={`relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] group shadow-xl bg-soft-bg ${img.span} h-[300px] sm:h-full cursor-pointer`}
    >
      <img
        src={img.url}
        alt={img.title}
        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 saturate-[0.8] group-hover:saturate-100"
        referrerPolicy="no-referrer"
      />
      
      <div className="absolute inset-0 bg-brand-pink/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <Maximize2 className="text-white mx-auto mb-4" size={32} />
          <h4 className="text-white font-display font-medium text-xl uppercase tracking-tighter mb-1">{img.title}</h4>
          <p className="text-white/80 text-[10px] uppercase font-bold tracking-[0.2em]">View Details</p>
        </div>
      </div>

      {/* Decorative inner corner borders */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-modal-active", "gallery");
    } else {
      document.body.style.overflow = "unset";
      if (document.body.getAttribute("data-modal-active") === "gallery") {
        document.body.removeAttribute("data-modal-active");
      }
    }
  }, [selectedImage]);

  const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="gallery" ref={containerRef} className="py-24 bg-soft-white relative overflow-hidden">
      {/* Background Parallax Decor */}
      <motion.div 
        style={{ y: yOrb1 }}
        className="absolute top-0 right-[-10%] w-[40vw] h-[40vw] bg-brand-pink/[0.04] rounded-full blur-[100px] pointer-events-none opacity-50" 
      />
      <motion.div 
        style={{ y: yOrb2 }}
        className="absolute bottom-0 left-[-10%] w-[30vw] h-[30vw] bg-brand-yellow/[0.04] rounded-full blur-[80px] pointer-events-none opacity-50" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          subtitle="Aesthetic Dreams" 
          title="Captured Moments" 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[1200px]">
          {images.map((img, i) => (
            <GalleryItem img={img} i={i} key={i} scrollYProgress={scrollYProgress} onOpen={setSelectedImage} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <button className="px-10 py-4 bg-brand-pink text-brand-text rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-pink-dark hover:text-white transition-all shadow-lg">
            See More On Instagram
          </button>
        </motion.div>
      </div>

      {/* Focus Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-brand-text/95 backdrop-blur-xl"
            />

            <motion.div
              layoutId={`gallery-img-${selectedImage.title}`}
              className="relative w-full max-w-6xl aspect-video md:aspect-[21/9] bg-soft-bg rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-white hover:bg-brand-pink-dark z-50 transition-colors shadow-lg"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-2/3 h-full overflow-hidden">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full md:w-1/3 p-8 sm:p-12 flex flex-col justify-center bg-soft-white">
                <div className="mb-8">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-pink/20 rounded-full text-brand-pink-dark text-[9px] font-bold uppercase tracking-widest mb-6">
                    <Sparkles size={12} /> Design Spotlight
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-display font-medium text-brand-text mb-4 italic leading-tight">{selectedImage.title}</h3>
                  <div className="h-0.5 w-12 bg-brand-pink mb-8" />
                </div>

                <div className="space-y-6 mb-12">
                   <div className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-xl bg-soft-bg flex items-center justify-center text-brand-pink group-hover/item:bg-brand-pink group-hover/item:text-white transition-colors">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-brand-muted mb-0.5">Location</p>
                        <p className="text-sm text-brand-text font-medium">{selectedImage.location}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-xl bg-soft-bg flex items-center justify-center text-brand-pink group-hover/item:bg-brand-pink group-hover/item:text-white transition-colors">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-brand-muted mb-0.5">Project Date</p>
                        <p className="text-sm text-brand-text font-medium">{selectedImage.date}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-xl bg-soft-bg flex items-center justify-center text-brand-pink group-hover/item:bg-brand-pink group-hover/item:text-white transition-colors">
                        <Layout size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-brand-muted mb-0.5">Aesthetic Theme</p>
                        <p className="text-sm text-brand-text font-medium">{selectedImage.theme}</p>
                      </div>
                   </div>
                </div>

                <div className="mb-10 pt-8 border-t border-brand-pink/10">
                  <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-text mb-4">Related Snapshots</h4>
                  <div className="flex gap-3">
                    {selectedImage.related.map((url, idx) => (
                      <div key={idx} className="w-20 h-20 rounded-2xl overflow-hidden shadow-sm group/thumb cursor-pointer">
                        <img 
                          src={url} 
                          alt="Related" 
                          className="w-full h-full object-cover transition-transform group-hover/thumb:scale-110" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full py-4 bg-brand-pink hover:bg-brand-pink-dark text-brand-text hover:text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all shadow-md">
                  Inquire About This Look
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

