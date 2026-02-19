import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import TextReveal from "./TextReveal";

import boonkalandImg from "@/assets/worlds/BOONKALAND.webp";
import californiaCityImg from "@/assets/worlds/CALIFORNIA CITY.webp";
import chinaCityImg from "@/assets/worlds/CHINA CITY.webp";
import dynaWorldImg from "@/assets/worlds/DYNA WORLD.webp";

const worlds = [
  {
    name: "BOONKA! Land",
    image: boonkalandImg,
    tagline: "A vibrant world where gravity defies logic and ancient constructs guard celestial power.",
    color: "from-amber-400 to-orange-500",
    glowHsl: "30 100% 55%",
    comingSoon: false,
  },
  {
    name: "China City",
    image: chinaCityImg,
    tagline: "Ancient wisdom flows through neon-lit streets. Tradition meets the future.",
    color: "from-secondary to-energy-purple",
    glowHsl: "249 100% 71%",
    comingSoon: false,
  },
  {
    name: "California City",
    image: californiaCityImg,
    tagline: "Modern metropolis meets mystical energy. Where technology and magic intertwine.",
    color: "from-primary to-neon-cyan",
    glowHsl: "193 100% 65%",
    comingSoon: true,
  },
  {
    name: "Dyna World",
    image: dynaWorldImg,
    tagline: "Crystal caverns pulse with cosmic energy. The birthplace of the first MindKey.",
    color: "from-primary to-blue-500",
    glowHsl: "210 100% 60%",
    comingSoon: true,
  },
];

const GameWorldsSection = () => {
  return (
    <section id="worlds" className="section-padding relative overflow-hidden">
      {/* Gradient transitions */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-float-orb" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-secondary" />
            <p className="font-display text-sm md:text-base tracking-[0.4em] uppercase text-secondary text-glow-purple">
              Explore Realms
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-secondary" />
          </motion.div>

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
              className="group relative rounded-2xl overflow-hidden cursor-default hover-lift transition-smooth"
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
                    className={`w-full h-full object-cover ${world.comingSoon ? 'opacity-40 grayscale' : ''}`}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  
                  {/* Coming Soon Badge */}
                  {world.comingSoon && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-glass-strong border-2 border-accent/50 glow-border-gold">
                        <p className="font-display text-xl md:text-2xl text-accent text-glow-gold tracking-wider uppercase whitespace-nowrap">
                          Coming Soon
                        </p>
                      </div>
                    </div>
                  )}
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
