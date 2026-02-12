import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: "a" | "button" | "div";
  href?: string;
  onClick?: () => void;
}

const MagneticButton = ({ children, className = "", as: Tag = "button", href, onClick }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 150 });
  const springY = useSpring(y, { damping: 15, stiffness: 150 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = Tag === "a" ? motion.a : Tag === "div" ? motion.div : motion.button;

  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} className="inline-block">
      <MotionTag
        href={href}
        onClick={onClick}
        style={{ x: springX, y: springY }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={className}
      >
        {children}
      </MotionTag>
    </motion.div>
  );
};

export default MagneticButton;
