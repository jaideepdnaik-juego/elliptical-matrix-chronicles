import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";

const worlds = [
  { name: "Future Earth", description: "New York, London, China, California — the familiar world, reshaped by cosmic forces.", icon: "🌍" },
  { name: "Dyna World", description: "A realm of raw elemental power, where energy storms forge the strongest warriors.", icon: "⚡" },
  { name: "Mysterium Tremendum", description: "An ancient dimension cloaked in mystery, where time flows in spirals.", icon: "🌀" },
  { name: "BOONKA! Land", description: "The vibrant home of iBOONKA! — a world where imagination becomes reality.", icon: "✨" },
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
      {/* Parallax accent line */}
      <motion.div
        style={{ y }}
        className="absolute -right-20 top-0 w-px h-[200%] bg-gradient-to-b from-transparent via-primary/20 to-transparent"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-3"
          >
            The Saga Begins
          </motion.p>
          <TextReveal as="h2" className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Connected Worlds. One Destiny.
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Harnessing powerful energy shards called MindKeys scattered across The Elliptical Matrix™ of connected worlds,
            iBOONKA! and the JUMP "Strings!"™ use the CTV Najja Starship™ to travel between dimensions.
            Their mission: secure the four legendary MINDKEYS™ before the Crimson Dragon awakens.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {worlds.map((world, i) => (
            <motion.div
              key={world.name}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{
                y: -8,
                boxShadow: "0 0 40px hsl(190 100% 50% / 0.25)",
                transition: { duration: 0.3 },
              }}
              className="bg-glass p-6 rounded-xl glow-border group cursor-default transition-colors duration-500"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{world.icon}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-2 group-hover:text-glow-cyan transition-all">
                    {world.name}
                  </h3>
                  <p className="text-muted-foreground">{world.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
