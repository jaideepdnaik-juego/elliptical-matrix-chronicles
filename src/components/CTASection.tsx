import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, Mail, Sparkles, Smartphone } from "lucide-react";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import heroBg from "@/assets/hero-cinematic.webp";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
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
              Pre-Register & Unlock Exclusive Founder Rewards
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

          {/* Store buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <MagneticButton className="group inline-flex items-center justify-center gap-3 px-10 py-4 font-display text-sm tracking-widest uppercase bg-gradient-to-r from-primary to-neon-cyan text-primary-foreground rounded-xl hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)] transition-all duration-300 glow-border font-bold">
              <Smartphone className="w-5 h-5" />
              Google Play
            </MagneticButton>
            <MagneticButton className="group inline-flex items-center justify-center gap-3 px-10 py-4 font-display text-sm tracking-widest uppercase bg-foreground/10 text-foreground rounded-xl border border-foreground/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300">
              <Download className="w-5 h-5" />
              App Store
            </MagneticButton>
          </motion.div>

          {/* Email registration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="max-w-md mx-auto"
          >
            <div className="flex gap-2 bg-glass-strong rounded-xl p-1.5">
              <div className="flex items-center gap-2 px-3 flex-1">
                <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground w-full font-body"
                />
              </div>
              <button className="px-6 py-2.5 bg-gradient-to-r from-accent to-golden-energy text-accent-foreground font-display text-xs tracking-widest uppercase rounded-lg font-bold hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)] transition-all duration-300 shrink-0">
                Register
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
