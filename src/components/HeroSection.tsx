import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
      </motion.div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(190 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(190 100% 50%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Content */}
      <motion.div className="relative z-10 text-center px-6 max-w-5xl mx-auto" style={{ opacity }}>
        <motion.p
          initial={{ opacity: 0, y: 20, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-display text-sm md:text-base uppercase text-primary mb-4"
        >
          Story One
        </motion.p>

        <div className="mb-6">
          <TextReveal
            as="h1"
            className="font-display text-4xl md:text-6xl lg:text-8xl font-black tracking-wider text-glow-cyan text-primary"
            delay={0.4}
          >
            THE ELLIPTICAL MATRIX™
          </TextReveal>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto mb-4 font-body"
        >
          iBOONKA!™ and the JUMP "Strings!"™ unravel a cosmic envelope and become oracles in a cosmic trilogy of time travel and the fight between good and evil.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-base text-muted-foreground max-w-xl mx-auto mb-10 font-body"
        >
          Secure the four legendary MINDKEYS™. Traverse The Elliptical Matrix™. Face the Crimson Dragon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton as="a" href="#story" className="inline-flex items-center justify-center px-8 py-3 font-display text-sm tracking-widest uppercase bg-primary text-primary-foreground rounded-lg hover:shadow-[0_0_30px_hsl(190_100%_50%/0.4)] transition-all duration-300">
            Explore the Lore
          </MagneticButton>
          <MagneticButton as="a" href="#characters" className="inline-flex items-center justify-center px-8 py-3 font-display text-sm tracking-widest uppercase glow-border text-primary rounded-lg hover:bg-primary/10 transition-all duration-300">
            Meet the Team
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
