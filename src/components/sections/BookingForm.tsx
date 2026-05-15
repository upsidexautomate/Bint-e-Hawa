import { motion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { Send, Calendar, Users, MapPin, Sparkles } from "lucide-react";

export default function BookingForm() {
  return (
    <section id="booking" className="py-12 sm:py-24 bg-soft-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -bottom-20 -right-20 w-[30vw] h-[30vw] bg-brand-pink/10 blur-[100px] rounded-full" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-pink/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading 
            subtitle="Reservations" 
            title="Design Your Dream Atmosphere" 
            align="left"
          />
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 font-light">
            Every masterpiece starts with an inquiry. Share your vision with our artisan decorators, and we'll craft a bespoke aesthetic blueprint that transforms your event into an ethereal sanctuary.
          </p>

          <div className="space-y-8 sm:space-y-12">
            {[
              { icon: <Calendar />, title: "Discovery Call", desc: "Share your vision with our lead designers." },
              { icon: <MapPin />, title: "Venue Scouting", desc: "We harmonize our decor with your chosen setting." },
              { icon: <Sparkles />, title: "Artisan Blueprint", desc: "Detailed decoration walkthrough before the big day." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 sm:gap-6 items-start group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-soft-bg rounded-2xl flex items-center justify-center text-brand-pink shrink-0 group-hover:bg-brand-pink group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-brand-text font-bold mb-1 sm:mb-2 uppercase tracking-widest text-[10px] sm:text-xs">{item.title}</h4>
                  <p className="text-brand-muted text-xs sm:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-soft-bg p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3.5rem] border border-brand-pink/10 shadow-2xl relative"
        >
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-muted px-2 italic">Full Name</label>
                <input
                  type="text"
                  placeholder="Artisan Name"
                  className="w-full bg-white border border-brand-pink/10 rounded-2xl py-4 px-6 text-sm text-brand-text focus:outline-none focus:border-brand-pink transition-colors"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-muted px-2 italic">Email Address</label>
                <input
                  type="email"
                  placeholder="hello@artistry.com"
                  className="w-full bg-white border border-brand-pink/10 rounded-2xl py-4 px-6 text-sm text-brand-text focus:outline-none focus:border-brand-pink transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4 relative">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-muted px-2 italic">Decoration Focus</label>
                <select className="w-full bg-white border border-brand-pink/10 rounded-2xl py-4 px-6 text-sm text-brand-text/70 focus:outline-none focus:border-brand-pink transition-colors appearance-none focus:text-brand-text cursor-pointer">
                  <option>Grand Wedding Decor</option>
                  <option>Corporate Aesthetic</option>
                  <option>Intimate Set Design</option>
                  <option>Floral Installation</option>
                  <option>Bespoke Party Decor</option>
                </select>
                <div className="absolute right-6 top-[62%] pointer-events-none text-brand-pink/30">▼</div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-muted px-2 italic">Scale of Event</label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Approx Guests"
                    className="w-full bg-white border border-brand-pink/10 rounded-2xl py-4 px-6 text-sm text-brand-text focus:outline-none focus:border-brand-pink transition-colors"
                  />
                  <Users className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-pink/20" size={18} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] uppercase font-bold tracking-widest text-brand-muted px-2 italic">Your Creative Vision</label>
              <textarea
                rows={4}
                placeholder="Tell us about the atmosphere you want to create..."
                className="w-full bg-white border border-brand-pink/10 rounded-2xl py-4 px-6 text-sm text-brand-text focus:outline-none focus:border-brand-pink transition-colors resize-none"
              ></textarea>
            </div>

            <Button variant="primary" className="w-full py-5 group shadow-xl bg-brand-pink text-brand-text hover:bg-brand-pink-dark hover:text-white border-none">
              Inquire Now <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
          
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-pink shadow-xl border border-brand-pink/10">
            <Sparkles size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
