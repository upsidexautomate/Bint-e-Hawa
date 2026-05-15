import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "glass";
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = "primary", className = "", onClick }: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-pink text-brand-text hover:bg-brand-pink-dark hover:text-white",
    secondary: "bg-brand-yellow text-brand-text shadow-lg hover:bg-brand-pink-dark hover:text-white",
    outline: "border border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white",
    glass: "glass-card text-brand-text hover:bg-brand-pink/10",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-brand-pink-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
      )}
    </motion.button>
  );
}
