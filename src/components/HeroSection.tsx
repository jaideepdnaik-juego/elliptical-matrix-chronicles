import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles, Play } from "lucide-react";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import heroBg from "@/assets/hero-cinematic.jpg";

// Floating ability icon component
const FloatingIcon = ({ src, className, delay = 0 }: { src: string; className: string; delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute z-20 ${className}`}
  >
    <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl bg-glass-strong p-2 glow-border">
      <img src={src} alt="" className="w-full h-full object-contain" />
    </div>
  </motion.div>
);

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Import skill icons for floating elements
  const skillIcons = [
    { src: "/src/assets/Skills/thunderEnergy blast.png", pos: "top-1/4 left-[8%] hidden md:block", delay: 0 },
    { src: "/src/assets/Skills/telekinesis.png", pos: "top-1/3 right-[10%] hidden md:block", delay: 0.8 },
    { src: "/src/assets/Skills/earthquake stomp.png", pos: "bottom-1/3 left-[5%] hidden lg:block", delay: 1.6 },
    { src: "/src/assets/Skills/ultimate.png", pos: "bottom-1/4 right-[7%] hidden lg:block", delay: 2.4 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Deep overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />

        {/* Animated energy orbs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[80px]"
        />
      </motion.div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating ability icons */}
      {skillIcons.map((icon, i) => (
        <FloatingIcon key={i} src={icon.src} className={icon.pos} delay={icon.delay} />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <p className="font-display text-xs md:text-sm uppercase text-primary tracking-[0.4em] text-glow-cyan">
            Story One
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </motion.div>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-wider text-glow-cyan bg-gradient-to-r from-primary via-neon-cyan to-primary bg-clip-text text-transparent leading-tight">
            ENTER THE ELLIPTICAL MATRIX
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-lg md:text-2xl text-foreground/90 max-w-2xl mx-auto mb-3 font-exo font-medium leading-relaxed"
        >
          Unlock ancient powers. Travel across worlds. Become the chosen Oracle.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 font-body"
        >
          Secure the four legendary MINDKEYS™. Traverse The Elliptical Matrix™.
          Face the Crimson Dragon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton
            as="a"
            href="#preregister"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 font-display text-sm tracking-widest uppercase bg-gradient-to-r from-primary to-neon-cyan text-primary-foreground rounded-xl hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)] transition-all duration-300 glow-border font-bold"
          >
            <Sparkles className="w-4 h-4" />
            Pre-Register Now
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#trailer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 font-display text-sm tracking-widest uppercase glow-border-purple bg-secondary/10 text-secondary rounded-xl hover:bg-secondary/20 transition-all duration-300"
          >
            <Play className="w-4 h-4" />
            Watch Gameplay
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/40"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
