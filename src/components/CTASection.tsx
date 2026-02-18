import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";
import heroBg from "@/assets/hero-cinematic.webp";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Gradient transitions */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
      
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[100px] animate-float-orb" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
            <p className="font-display text-xs tracking-[0.4em] uppercase text-accent text-glow-gold">
              Founder Rewards
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent" />
          </div>

          <div className="mb-8">
            <TextReveal
              as="h2"
              className="font-display text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
              delay={0.3}
            >
              Join the Oracle Chronicles
            </TextReveal>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            The Crimson Dragon stirs. Join 128,000+ players and claim your place among the Oracles.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
