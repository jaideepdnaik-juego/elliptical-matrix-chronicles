import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Globe, Zap, Orbit, Stars } from "lucide-react";
import TextReveal from "./TextReveal";

const worlds = [
  {
    name: "Future Earth",
    description: "New York, London, China, California — the familiar world, reshaped by cosmic forces.",
    icon: Globe,
    color: "from-primary to-neon-cyan",
  },
  {
    name: "Dyna World",
    description: "A realm of raw elemental power, where energy storms forge the strongest warriors.",
    icon: Zap,
    color: "from-accent to-amber-400",
  },
  {
    name: "Mysterium Tremendum",
    description: "An ancient dimension cloaked in mystery, where time flows in spirals.",
    icon: Orbit,
    color: "from-secondary to-energy-purple",
  },
  {
    name: "BOONKA! Land",
    description: "The vibrant home of iBOONKA! — a world where imagination becomes reality.",
    icon: Stars,
    color: "from-rose-500 to-red-400",
  },
];

const StorySection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="story" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        style={{ y }}
        className="absolute -right-20 top-0 w-px h-[200%] bg-gradient-to-b from-transparent via-primary/20 to-transparent"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
            <p className="font-display text-xs tracking-[0.4em] uppercase text-accent text-glow-gold">
              The Saga Begins
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent" />
          </motion.div>

          <TextReveal
            as="h2"
            className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6"
          >
            Connected Worlds. One Destiny.
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed"
          >
            Harnessing powerful energy shards called MindKeys scattered across The Elliptical Matrix™,
            iBOONKA! and the JUMP "Strings!"™ use the CTV Najja Starship™ to travel between dimensions.
            Their mission: secure the four legendary MINDKEYS™ before the Crimson Dragon awakens.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {worlds.map((world, i) => {
            const IconComp = world.icon;
            return (
              <motion.div
                key={world.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group cursor-default"
              >
                <div className="relative bg-glass p-6 rounded-2xl border border-border/50 group-hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${world.color} shadow-lg shrink-0`}>
                      <IconComp className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <h3 className={`font-display text-lg font-bold mb-2 bg-gradient-to-r ${world.color} bg-clip-text text-transparent`}>
                        {world.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {world.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
