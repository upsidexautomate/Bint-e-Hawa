import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { useState, useEffect } from "react";

interface AnnouncementBarProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function AnnouncementBar({ isVisible, onClose }: AnnouncementBarProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full bg-soft-white border-y border-brand-pink/10 py-4 px-6 flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-pink/5" />
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-12">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-pulse shadow-[0_0_8px_rgba(232,160,191,0.5)]" />
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-text/70">
                Opening Soon <span className="text-brand-pink-dark italic">Winter Wonderland 2026</span>
              </span>
            </div>
            
            <div className="w-px h-4 bg-brand-pink/20 hidden sm:block" />
            
            <a 
              href="#booking" 
              className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-text hover:text-brand-pink-dark transition-colors flex items-center gap-2 group"
            >
              Early Inquiry
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-brand-pink-dark" />
            </a>
          </div>
          
          <button 
            onClick={onClose}
            className="absolute right-6 text-brand-text/40 hover:text-brand-text transition-colors p-2"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
