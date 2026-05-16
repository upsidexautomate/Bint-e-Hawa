import { motion } from "motion/react";
import { ArrowRight, Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Logo from "../ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 py-8 sm:py-10 border-t border-brand-pink/10 bg-soft-white backdrop-blur-sm text-[9px] text-brand-muted uppercase tracking-[0.3em] gap-6 sm:gap-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Logo imgClassName="w-6 h-6" showText={true} wrapperClassName="flex items-center gap-2" />
        <div className="text-brand-muted">&copy; {currentYear} Bint-e-Hawa Decor Boutique. All rights reserved.</div>
      </div>
      <div className="flex gap-8">
        <span className="cursor-pointer hover:text-brand-pink-dark">Instagram</span>
        <span className="cursor-pointer hover:text-brand-pink-dark">LinkedIn</span>
        <span className="cursor-pointer hover:text-brand-pink-dark">Pinterest</span>
      </div>
      <div className="hidden sm:block">Curating Breathtaking Realities.</div>
    </footer>
  );
}

