import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Globe, Zap, Orbit, Stars } from "lucide-react";
import TextReveal from "./TextReveal";

const worlds = [
  {
    name: "Future Earth",
    description:
      "New York, London, China, California — the familiar world, reshaped by cosmic forces.",
    icon: Globe,
    color: "from-blue-500 via-cyan-500 to-teal-500",
    hoverGlow: "shadow-[0_0_50px_hsl(180_100%_50%/0.4)]",
  },
  {
    name: "Dyna World",
    description:
      "A realm of raw elemental power, where energy storms forge the strongest warriors.",
    icon: Zap,
    color: "from-yellow-400 via-orange-500 to-red-500",
    hoverGlow: "shadow-[0_0_50px_hsl(30_100%_50%/0.4)]",
  },
  {
    name: "Mysterium Tremendum",
    description:
      "An ancient dimension cloaked in mystery, where time flows in spirals.",
    icon: Orbit,
    color: "from-purple-500 via-violet-500 to-fuchsia-500",
    hoverGlow: "shadow-[0_0_50px_hsl(280_100%_60%/0.4)]",
  },
  {
    name: "BOONKA! Land",
    description:
      "The vibrant home of iBOONKA! — a world where imagination becomes reality.",
    icon: Stars,
    color: "from-pink-400 via-rose-500 to-red-500",
    hoverGlow: "shadow-[0_0_50px_hsl(350_100%_60%/0.4)]",
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
    <section
      id="story"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Vibrant background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Parallax accent line */}
      <motion.div
        style={{ y }}
        className="absolute -right-20 top-0 w-px h-[200%] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Sparkles className="w-5 h-5 text-accent" />
            <p className="font-display text-sm tracking-[0.3em] uppercase text-accent">
              The Saga Begins
            </p>
            <Sparkles className="w-5 h-5 text-accent" />
          </motion.div>
          <TextReveal
            as="h2"
            className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
          >
            Connected Worlds. One Destiny.
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed"
          >
            Harnessing powerful energy shards called MindKeys scattered across
            The Elliptical Matrix™ of connected worlds, iBOONKA! and the JUMP
            "Strings!"™ use the CTV Najja Starship™ to travel between
            dimensions. Their mission: secure the four legendary MINDKEYS™
            before the Crimson Dragon awakens.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {worlds.map((world, i) => {
            const IconComponent = world.icon;
            return (
              <motion.div
                key={world.name}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group cursor-default relative"
              >
                {/* Glow effect on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${world.color} blur-xl opacity-0 group-hover:${world.hoverGlow} transition-all duration-300`}
                />

                <div className="relative bg-glass p-6 rounded-2xl border border-white/10 backdrop-blur-xl h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${world.color} shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-display text-lg font-bold mb-2 bg-gradient-to-r ${world.color} bg-clip-text text-transparent`}
                      >
                        {world.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
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
