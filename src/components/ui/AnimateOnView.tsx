import { motion, MotionProps } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { forwardRef, ReactNode } from "react";

interface AnimateOnViewProps extends MotionProps {
  children: ReactNode;
  className?: string;
  animationType?:
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right"
    | "fade"
    | "scale";
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

const AnimateOnView = forwardRef<HTMLDivElement, AnimateOnViewProps>(
  (
    {
      children,
      className = "",
      animationType = "slide-up",
      delay = 0,
      threshold = 0.1,
      triggerOnce = true,
      rootMargin = "0px",
      ...props
    },
    ref
  ) => {
    const { ref: inViewRef, isInView } = useInView({
      threshold,
      rootMargin,
      triggerOnce,
    });

    const getInitialAnimation = () => {
      switch (animationType) {
        case "slide-up":
          return { opacity: 0, y: 50 };
        case "slide-down":
          return { opacity: 0, y: -50 };
        case "slide-left":
          return { opacity: 0, x: 50 };
        case "slide-right":
          return { opacity: 0, x: -50 };
        case "scale":
          return { opacity: 0, scale: 0.8 };
        case "fade":
        default:
          return { opacity: 0 };
      }
    };

    const getAnimateAnimation = () => {
      switch (animationType) {
        case "slide-up":
        case "slide-down":
        case "slide-left":
        case "slide-right":
          return { opacity: 1, x: 0, y: 0 };
        case "scale":
          return { opacity: 1, scale: 1 };
        case "fade":
        default:
          return { opacity: 1 };
      }
    };

    return (
      <motion.div
        ref={(node) => {
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
          inViewRef.current = node;
        }}
        className={className}
        initial={getInitialAnimation()}
        animate={isInView ? getAnimateAnimation() : {}}
        transition={{
          duration: 0.6,
          delay,
          ease: "easeOut",
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

AnimateOnView.displayName = "AnimateOnView";

export default AnimateOnView;
