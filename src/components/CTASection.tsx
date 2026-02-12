import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[80px]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", damping: 10 }}
            className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-3 text-glow-crimson"
          >
            The Dragon Awakens
          </motion.p>
          <div className="mb-6">
            <TextReveal as="h2" className="font-display text-3xl md:text-5xl font-bold text-foreground" delay={0.3}>
              Are You Ready to Enter The Matrix?
            </TextReveal>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-lg text-muted-foreground mb-10"
          >
            The Crimson Dragon stirs. The Oracles need you. Download now and begin your journey through The Elliptical Matrix™.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton className="px-10 py-4 font-display text-sm tracking-widest uppercase bg-accent text-accent-foreground rounded-lg hover:shadow-[0_0_30px_hsl(350_85%_50%/0.4)] transition-all duration-300 crimson-glow-border">
              Download Now
            </MagneticButton>
            <MagneticButton className="px-10 py-4 font-display text-sm tracking-widest uppercase glow-border text-primary rounded-lg hover:bg-primary/10 transition-all duration-300">
              Watch Trailer
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
