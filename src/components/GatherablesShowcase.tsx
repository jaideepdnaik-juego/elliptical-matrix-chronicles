import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import TextReveal from "./TextReveal";

import aeroBloom from "@/assets/Gatherables/low/aero_bloom_l.webp";
import cinderfine from "@/assets/Gatherables/low/cinderfine_l.webp";
import flower from "@/assets/Gatherables/low/flowe_l.webp";
import mushroom from "@/assets/Gatherables/low/mashroom_l.webp";
import scorpidCaropage from "@/assets/Gatherables/low/scorpid_caropage_l.webp";

const gatherables = [
  {
    name: "Aero Bloom",
    image: aeroBloom,
    rarity: "Epic",
    color: "from-primary to-neon-cyan",
    description: "Floating petals infused with wind energy",
  },
  {
    name: "Cinderfine",
    image: cinderfine,
    rarity: "Rare",
    color: "from-accent to-orange-400",
    description: "Crystallized fire essence from volcanic depths",
  },
  {
    name: "Mystic Flower",
    image: flower,
    rarity: "Common",
    color: "from-secondary to-energy-purple",
    description: "Blooms only under moonlight",
  },
  {
    name: "Cosmic Mushroom",
    image: mushroom,
    rarity: "Legendary",
    color: "from-emerald-400 to-teal-400",
    description: "Ancient spores from distant galaxies",
  },
  {
    name: "Scorpid Carapace",
    image: scorpidCaropage,
    rarity: "Epic",
    color: "from-accent to-amber-400",
    description: "Armor from interdimensional creatures",
  },
];

const rarityColors: Record<string, string> = {
  Common: "text-muted-foreground border-border bg-muted/20",
  Rare: "text-primary border-primary/30 bg-primary/10",
  Epic: "text-secondary border-secondary/30 bg-secondary/10",
  Legendary: "text-accent border-accent/30 bg-accent/10",
};

const GatherablesShowcase = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[120px]"
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
            <Leaf className="w-4 h-4 text-emerald-400" />
            <p className="font-display text-xs tracking-[0.4em] uppercase text-emerald-400">
              Cosmic Resources
            </p>
            <Leaf className="w-4 h-4 text-emerald-400" />
          </motion.div>

          <TextReveal
            as="h2"
            className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-primary bg-clip-text text-transparent mb-6"
          >
            Collect & Craft
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
          >
            Gather rare materials across dimensions to craft powerful items and
            enhance your abilities.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {gatherables.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <div className="relative h-full">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} blur-xl opacity-15 group-hover:opacity-30 transition-opacity duration-300`}
                />

                <div className="relative rounded-2xl bg-glass p-4 h-full flex flex-col border border-border/50 group-hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  <div
                    className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-display uppercase tracking-wider border ${rarityColors[item.rarity]}`}
                  >
                    {item.rarity}
                  </div>

                  <div className="relative aspect-square my-4 flex items-center justify-center">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  </div>

                  <h3
                    className={`font-display text-sm font-bold mb-1 bg-gradient-to-r ${item.color} bg-clip-text text-transparent text-center`}
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground text-sm">
            Discover over{" "}
            <span className="text-primary font-bold">100+ unique items</span>{" "}
            scattered across The Elliptical Matrix™
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GatherablesShowcase;
