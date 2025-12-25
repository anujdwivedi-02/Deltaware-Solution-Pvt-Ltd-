import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  disabled?: boolean | undefined;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-heading font-medium tracking-wide transition-all duration-300 rounded-sm relative overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-accent text-white hover:shadow-[0_0_20px_rgba(108,99,255,0.5)] border border-transparent",
    secondary:
      "bg-accent-gradient text-white hover:shadow-[0_0_20px_rgba(255,78,205,0.5)] border border-transparent",
    outline:
      "bg-transparent border border-cyber text-cyber hover:bg-cyber/10 hover:shadow-[0_0_15px_rgba(0,230,230,0.3)]",
    ghost: "text-mist hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const {
    whileHover,
    whileTap,
    animate,
    initial,
    exit,
    variants: motionVariants,
    transition,
    ...restProps
  } = props as any;

  const motionProps = {
    whileHover,
    whileTap,
    animate,
    initial,
    exit,
    variants: motionVariants,
    transition,
  };

  return (
    <motion.div
      {...motionProps}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      <button
        disabled={disabled}
        {...(restProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        className={`cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full h-full text-center `}
      >
        <span
          className={`relative z-10 flex items-center gap-2 ${
            !icon && "justify-center"
          }`}
        >
          {children}
          {icon && (
            <span className="group-hover:translate-x-1 transition-transform">
              {icon}
            </span>
          )}
        </span>

        {(variant === "primary" || variant === "secondary") && (
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm" />
        )}
      </button>
    </motion.div>
  );
};

export default Button;
