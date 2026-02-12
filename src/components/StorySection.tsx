import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const worlds = [
  { name: "Future Earth", description: "New York, London, China, California — the familiar world, reshaped by cosmic forces." },
  { name: "Dyna World", description: "A realm of raw elemental power, where energy storms forge the strongest warriors." },
  { name: "Mysterium Tremendum", description: "An ancient dimension cloaked in mystery, where time flows in spirals." },
  { name: "BOONKA! Land", description: "The vibrant home of iBOONKA! — a world where imagination becomes reality." },
];

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" ref={ref} className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-3">The Saga Begins</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Connected Worlds. One Destiny.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Harnessing powerful energy shards called MindKeys scattered across The Elliptical Matrix™ of connected worlds, 
            iBOONKA! and the JUMP "Strings!"™ use the CTV Najja Starship™ to travel between dimensions. 
            Their mission: secure the four legendary MINDKEYS™ before the Crimson Dragon awakens.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {worlds.map((world, i) => (
            <motion.div
              key={world.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-glass p-6 rounded-xl glow-border group hover:shadow-[0_0_30px_hsl(190_100%_50%/0.2)] transition-all duration-500"
            >
              <h3 className="font-display text-lg font-semibold text-primary mb-2">{world.name}</h3>
              <p className="text-muted-foreground">{world.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
