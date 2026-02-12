import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import heroBg from "@/assets/Website Bg 1 1.png";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vibrant Gradient Background (Genshin-inspired) */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/40 to-pink-900/40" />
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-50" style={{ transform: 'scale(1)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />

        {/* Magical floating orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-400/15 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(210 100% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 100% 60%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <p className="font-display text-sm md:text-base uppercase text-accent tracking-[0.3em]">
            Story One
          </p>
          <Sparkles className="w-4 h-4 text-accent" />
        </motion.div>

        <div className="mb-6">
          <TextReveal
            as="h1"
            className="font-display text-5xl md:text-7xl lg:text-9xl font-black tracking-wider text-glow-blue bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent"
            delay={0.4}
          >
            THE ELLIPTICAL MATRIX™
          </TextReveal>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-lg md:text-2xl text-foreground/90 max-w-2xl mx-auto mb-4 font-body font-medium leading-relaxed"
        >
          iBOONKA!™ and the JUMP "Strings!"™ unravel a cosmic envelope and
          become oracles in a cosmic trilogy of time travel and the fight
          between good and evil.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 font-body"
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
            href="#story"
            className="inline-flex items-center justify-center px-10 py-4 font-display text-sm tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-[0_0_40px_hsl(210_100%_60%/0.6),0_0_80px_hsl(280_70%_60%/0.3)] transition-all duration-300 glow-border"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Explore the Lore
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#characters"
            className="inline-flex items-center justify-center px-10 py-4 font-display text-sm tracking-widest uppercase glow-border-gold bg-gradient-to-r from-yellow-500/10 to-amber-500/10 text-accent rounded-xl hover:bg-accent/20 transition-all duration-300"
          >
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
