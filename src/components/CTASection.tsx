import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-3 text-glow-crimson">The Dragon Awakens</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Are You Ready to Enter The Matrix?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            The Crimson Dragon stirs. The Oracles need you. Download now and begin your journey through The Elliptical Matrix™.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 font-display text-sm tracking-widest uppercase bg-accent text-accent-foreground rounded-lg hover:shadow-[0_0_30px_hsl(350_85%_50%/0.4)] transition-all duration-300 crimson-glow-border">
              Download Now
            </button>
            <button className="px-10 py-4 font-display text-sm tracking-widest uppercase glow-border text-primary rounded-lg hover:bg-primary/10 transition-all duration-300">
              Watch Trailer
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
