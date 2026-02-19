import { motion } from "framer-motion";
import { Flame, Zap, TrendingUp, Users, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const PreregistrationCounter = () => {
  const [displayCount, setDisplayCount] = useState(0);
  const targetCount = 128540;
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2500;
          const steps = 80;
          const increment = targetCount / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= targetCount) {
              setDisplayCount(targetCount);
              clearInterval(timer);
            } else {
              setDisplayCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const milestones = [
    { count: "50K", label: "Beta Testers", reached: true },
    { count: "100K", label: "Early Access", reached: true },
    { count: "150K", label: "Exclusive Skin", reached: false },
    { count: "250K", label: "Founder Badge", reached: false },
  ];

  return (
    <section id="preregister" ref={ref} className="relative py-12 md:py-16 overflow-hidden">
      {/* Gradient transitions */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      {/* Pulsing energy ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/20 animate-float-orb" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-secondary/15 animate-float-orb-reverse" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Main counter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-accent" />
            <p className="font-display text-sm md:text-base uppercase text-accent tracking-[0.4em] text-glow-gold">
              Join the Movement
            </p>
            <Flame className="w-5 h-5 text-accent" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-accent via-golden-energy to-accent bg-clip-text text-transparent mb-8 text-glow-gold">
            Become an Oracle
          </h2>

          {/* Counter display */}
          <div className="relative inline-block mb-6">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-2xl"
              animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative bg-glass-strong px-10 py-8 md:px-20 md:py-12 rounded-3xl">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={hasAnimated ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="font-display text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-primary via-neon-cyan to-primary bg-clip-text text-transparent text-glow-cyan"
              >
                {displayCount.toLocaleString()}
              </motion.div>
              <p className="mt-3 font-display text-sm md:text-base uppercase tracking-[0.3em] text-foreground/60">
                Players Already Registered
              </p>
            </div>
          </div>

          <p className="text-muted-foreground text-base md:text-lg mb-12 max-w-lg mx-auto">
            Join before launch to unlock exclusive MindKey rewards
          </p>
        </motion.div>

        {/* Milestone progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="relative h-3 rounded-full bg-muted/50 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "51%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-sm"
              style={{ width: "51%" }}
            />
          </div>
          <div className="flex justify-between mt-4">
            {milestones.map((m, i) => (
              <div key={i} className="text-center">
                <p className={`font-display text-sm font-bold ${m.reached ? 'text-primary' : 'text-muted-foreground'}`}>
                  {m.count}
                </p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
                {m.reached && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-2 h-2 rounded-full bg-primary mx-auto mt-1"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { icon: Users, value: "50+", label: "Countries", color: "text-primary" },
            { icon: TrendingUp, value: "500+", label: "Daily Growth", color: "text-secondary" },
            { icon: Zap, value: "10K+", label: "Active Players", color: "text-accent" },
          ].map((stat, i) => (
            <div key={i} className="text-center bg-glass rounded-2xl p-5">
              <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
              <p className={`font-display text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Pre-Register Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/pre-register"
            className="group inline-flex items-center gap-3 px-10 py-4 font-display text-sm tracking-widest uppercase bg-gradient-to-r from-primary via-neon-cyan to-primary text-primary-foreground rounded-xl hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] transition-all duration-300 glow-border hover:scale-105 font-bold"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Pre-Register Now
            <Sparkles className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PreregistrationCounter;
