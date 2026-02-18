import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import { Link } from "react-router-dom";
import TextReveal from "./TextReveal";

import mindkey1 from "@/assets/Website Icons/Mind Keys/Mindkey_1.webp";
import mindkey2 from "@/assets/Website Icons/Mind Keys/Mindkey_2.webp";
import mindkey3 from "@/assets/Website Icons/Mind Keys/Mindkey_3.webp";
import mindkey4 from "@/assets/Website Icons/Mind Keys/Mindkey_4.webp";

const mindkeys = [
  {
    name: "Genesis Key",
    image: mindkey1,
    element: "Creation",
    color: "from-primary to-neon-cyan",
    power: "Time Manipulation",
    description: "The first key. Born from the cosmic dawn.",
  },
  {
    name: "Crimson Key",
    image: mindkey2,
    element: "Destruction",
    color: "from-red-500 to-rose-400",
    power: "Reality Warping",
    description: "Forged in dragon fire and chaos.",
  },
  {
    name: "Ethereal Key",
    image: mindkey3,
    element: "Spirit",
    color: "from-secondary to-energy-purple",
    power: "Dimensional Travel",
    description: "Whispers from the void between worlds.",
  },
  {
    name: "Radiant Key",
    image: mindkey4,
    element: "Light",
    color: "from-accent to-amber-400",
    power: "Cosmic Force",
    description: "Pure energy crystallized into form.",
  },
];

const MindKeysShowcase = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[120px] animate-float-orb" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Crown className="w-5 h-5 text-accent" />
            <p className="font-display text-xs tracking-[0.4em] uppercase text-accent text-glow-gold">
              Legendary Artifacts
            </p>
            <Crown className="w-5 h-5 text-accent" />
          </motion.div>

          <TextReveal
            as="h2"
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-accent via-golden-energy to-accent bg-clip-text text-transparent mb-6 text-glow-gold"
          >
            The MINDKEYS™
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-foreground/80 max-w-3xl mx-auto"
          >
            Four cosmic artifacts scattered across The Elliptical Matrix™. Unite
            them to unlock ultimate power.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mindkeys.map((key, i) => (
            <motion.div
              key={key.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group hover-lift transition-smooth"
            >
              <div className="relative h-full">
                <motion.div
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${key.color} blur-2xl opacity-30`}
                />

                <div className="relative rounded-2xl bg-glass p-5 h-full flex flex-col border border-border/50 group-hover:border-primary/30 transition-all duration-300">
                  <div className="relative aspect-square mb-4 flex items-center justify-center">
                    <motion.img
                      src={key.image}
                      alt={key.name}
                      className="relative z-10 w-4/5 h-4/5 object-contain drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  </div>

                  <h3
                    className={`font-display text-lg font-bold mb-1 bg-gradient-to-r ${key.color} bg-clip-text text-transparent`}
                  >
                    {key.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 flex-1">
                    {key.description}
                  </p>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/30 border border-border/30">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${key.color} animate-pulse`}
                    />
                    <span className="text-xs text-muted-foreground font-display tracking-wider">
                      {key.power}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/mindkeys"
            className="inline-flex items-center px-10 py-4 font-display text-sm tracking-widest uppercase rounded-xl bg-gradient-to-r from-accent to-golden-energy text-accent-foreground font-bold hover:shadow-[0_0_40px_hsl(var(--accent)/0.4)] transition-all duration-300"
          >
            Discover More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MindKeysShowcase;
