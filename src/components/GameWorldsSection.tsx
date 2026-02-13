import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import TextReveal from "./TextReveal";

import desertImg from "@/assets/worlds/desert-pyramid.jpg";
import neonCityImg from "@/assets/worlds/neon-city.jpg";
import templeImg from "@/assets/worlds/floating-temple.jpg";
import spaceDockImg from "@/assets/worlds/space-dock.jpg";

const worlds = [
  {
    name: "Desert Pyramid Realm",
    image: desertImg,
    tagline: "Where ancient gods forged the first MindKey in starfire.",
    color: "from-amber-400 to-orange-500",
    glowHsl: "30 100% 55%",
  },
  {
    name: "Futuristic Neon City",
    image: neonCityImg,
    tagline: "Neon-lit streets hide portals to forgotten dimensions.",
    color: "from-primary to-neon-cyan",
    glowHsl: "193 100% 65%",
  },
  {
    name: "Floating Temple Sanctum",
    image: templeImg,
    tagline: "Suspended between realms, where Oracles first awakened.",
    color: "from-secondary to-energy-purple",
    glowHsl: "249 100% 71%",
  },
  {
    name: "Orbital Space Dock",
    image: spaceDockImg,
    tagline: "The CTV Najja Starship™ launches from this cosmic gateway.",
    color: "from-primary to-blue-500",
    glowHsl: "210 100% 60%",
  },
];

const GameWorldsSection = () => {
  return (
    <section id="worlds" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-secondary" />
            <p className="font-display text-xs tracking-[0.4em] uppercase text-secondary text-glow-purple">
              Explore Realms
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-secondary" />
          </motion.div>

          <TextReveal
            as="h2"
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-6"
          >
            Traverse Connected Worlds
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
          >
            Four dimensions bound by The Elliptical Matrix™. Each world holds secrets, dangers, and a piece of your destiny.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {worlds.map((world, i) => (
            <motion.div
              key={world.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `linear-gradient(135deg, hsl(${world.glowHsl} / 0.3), transparent)` }}
              />

              <div className="relative rounded-2xl overflow-hidden border border-border/50 group-hover:border-primary/30 transition-colors duration-500">
                {/* Background image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <motion.img
                    src={world.image}
                    alt={world.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`font-display text-lg md:text-xl font-bold bg-gradient-to-r ${world.color} bg-clip-text text-transparent mb-2`}>
                    {world.name}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {world.tagline}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameWorldsSection;
