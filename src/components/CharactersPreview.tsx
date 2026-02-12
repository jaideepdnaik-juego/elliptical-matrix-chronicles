import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import akiraImg from "@/assets/characters/Akira.png";
import iboonkaImg from "@/assets/characters/iBoonka.png";
import kurtImg from "@/assets/characters/Kurt.png";
import poojaImg from "@/assets/characters/Pooja.png";

const characters = [
  { name: "iBOONKA!", image: iboonkaImg, role: "Team Leader & Oracle", color: "from-blue-500/20 to-cyan-500/20" },
  { name: "Akira", image: akiraImg, role: "Energy Channeler", color: "from-pink-500/20 to-purple-500/20" },
  { name: "Kurt", image: kurtImg, role: "Shield Guardian", color: "from-green-500/20 to-yellow-500/20" },
  { name: "Pooja", image: poojaImg, role: "Mystic Navigator", color: "from-fuchsia-500/20 to-pink-500/20" },
];

const CharactersPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="characters" ref={ref} className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">The Jump Strings!</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Meet the Oracles
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each Oracle channels unique cosmic energy, becoming powered-up beacons called "Strings!" Their combined team-strength is the only hope against the Crimson Dragon.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {characters.map((char, i) => (
            <motion.div
              key={char.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="group"
            >
              <div className={`relative bg-gradient-to-b ${char.color} rounded-2xl p-4 glow-border overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_40px_hsl(190_100%_50%/0.3)]`}>
                <div className="relative aspect-[3/4] flex items-end justify-center">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="h-full w-auto object-contain drop-shadow-[0_0_20px_hsl(190_100%_50%/0.3)] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-display text-base md:text-lg font-bold text-foreground">{char.name}</h3>
                <p className="text-sm text-muted-foreground">{char.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <Link
            to="/characters"
            className="inline-flex items-center px-8 py-3 font-display text-sm tracking-widest uppercase glow-border text-primary rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            View All Characters →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CharactersPreview;
