import { motion } from "framer-motion";
import { Leaf, Sparkles } from "lucide-react";
import TextReveal from "./TextReveal";

// Import gatherable items
import aeroBloom from "@/assets/Gatherables/low/aero_bloom_l.png";
import cinderfine from "@/assets/Gatherables/low/cinderfine_l.png";
import flower from "@/assets/Gatherables/low/flowe_l.png";
import mushroom from "@/assets/Gatherables/low/mashroom_l.png";
import scorpidCaropage from "@/assets/Gatherables/low/scorpid_caropage_l.png";

const gatherables = [
  {
    name: "Aero Bloom",
    image: aeroBloom,
    rarity: "Epic",
    type: "Essence",
    color: "from-cyan-400 via-sky-400 to-blue-500",
    description: "Floating petals infused with wind energy",
  },
  {
    name: "Cinderfine",
    image: cinderfine,
    rarity: "Rare",
    type: "Mineral",
    color: "from-orange-400 via-red-500 to-rose-600",
    description: "Crystallized fire essence from volcanic depths",
  },
  {
    name: "Mystic Flower",
    image: flower,
    rarity: "Common",
    type: "Flora",
    color: "from-pink-400 via-purple-400 to-violet-500",
    description: "Blooms only under moonlight",
  },
  {
    name: "Cosmic Mushroom",
    image: mushroom,
    rarity: "Legendary",
    type: "Fungi",
    color: "from-emerald-400 via-green-500 to-teal-600",
    description: "Ancient spores from distant galaxies",
  },
  {
    name: "Scorpid Carapace",
    image: scorpidCaropage,
    rarity: "Epic",
    type: "Material",
    color: "from-amber-400 via-yellow-500 to-lime-500",
    description: "Armor from interdimensional creatures",
  },
];

const rarityColors: Record<string, string> = {
  Common: "text-gray-400 border-gray-400/30 bg-gray-400/10",
  Rare: "text-blue-400 border-blue-400/30 bg-blue-400/10",
  Epic: "text-purple-400 border-purple-400/30 bg-purple-400/10",
  Legendary: "text-amber-400 border-amber-400/30 bg-amber-400/10",
};

const GatherablesShowcase = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-gray-900/30 to-background">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Leaf className="w-5 h-5 text-green-400" />
            <p className="font-display text-sm tracking-[0.3em] uppercase bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Cosmic Resources
            </p>
            <Leaf className="w-5 h-5 text-green-400" />
          </motion.div>

          <TextReveal
            as="h2"
            className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-300 via-emerald-400 to-teal-500 bg-clip-text text-transparent mb-6"
          >
            Collect & Craft
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed"
          >
            Gather rare materials across dimensions to craft powerful items and
            enhance your abilities.
          </motion.p>
        </div>

        {/* Gatherables Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
              className="group"
            >
              <motion.div
                whileHover={{
                  y: -12,
                  rotateZ: [0, -2, 2, 0],
                }}
                transition={{
                  y: { type: "spring", stiffness: 300, damping: 20 },
                  rotateZ: { duration: 0.3 },
                }}
                className="relative h-full"
              >
                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                />

                {/* Card */}
                <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/10 p-5 h-full flex flex-col overflow-hidden">
                  {/* Rarity Badge */}
                  <div
                    className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-display uppercase tracking-wider border ${rarityColors[item.rarity]}`}
                  >
                    {item.rarity}
                  </div>

                  {/* Type tag */}
                  <div className="absolute top-3 left-3">
                    <div className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                      <span className="text-[10px] text-gray-400 font-display uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Item Image */}
                  <div className="relative aspect-square my-6 flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.color} opacity-10 blur-lg`}
                    />

                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                      whileHover={{
                        scale: 1.15,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 },
                      }}
                    />

                    {/* Sparkles on hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute -top-1 -right-1"
                    >
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                  </div>

                  {/* Item Name */}
                  <h3
                    className={`font-display text-sm font-bold mb-1 bg-gradient-to-r ${item.color} bg-clip-text text-transparent text-center`}
                  >
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 text-center leading-snug">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Info text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
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
