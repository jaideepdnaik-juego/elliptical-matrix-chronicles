import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-4"
        >
          Story One
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-4xl md:text-6xl lg:text-8xl font-black tracking-wider text-glow-cyan text-primary mb-6"
        >
          THE ELLIPTICAL
          <br />
          MATRIX™
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto mb-4 font-body"
        >
          iBOONKA!™ and the JUMP "Strings!"™ unravel a cosmic envelope and become oracles in a cosmic trilogy of time travel and the fight between good and evil.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-base text-muted-foreground max-w-xl mx-auto mb-10 font-body"
        >
          Secure the four legendary MINDKEYS™. Traverse The Elliptical Matrix™. Face the Crimson Dragon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#story"
            className="inline-flex items-center justify-center px-8 py-3 font-display text-sm tracking-widest uppercase bg-primary text-primary-foreground rounded-lg hover:shadow-[0_0_30px_hsl(190_100%_50%/0.4)] transition-all duration-300"
          >
            Explore the Lore
          </a>
          <a
            href="#characters"
            className="inline-flex items-center justify-center px-8 py-3 font-display text-sm tracking-widest uppercase glow-border text-primary rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            Meet the Team
          </a>
        </motion.div>
      </div>

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
