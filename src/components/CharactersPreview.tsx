import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import TextReveal from "./TextReveal";

import iboonkaImg from "@/assets/characters/iBoonka.webp";
import runImg from "@/assets/Skills/run.webp";
import jumpImg from "@/assets/Skills/jump.webp";
import thunderImg from "@/assets/Skills/thunderEnergy blast.webp";
import earthquakeImg from "@/assets/Skills/earthquake stomp.webp";
import ultimateImg from "@/assets/Skills/ultimate.webp";
import telekinesisImg from "@/assets/Skills/telekinesis.webp";

const abilityIcons = [
  { src: runImg, name: "Speed Run", angle: 0 },
  { src: jumpImg, name: "Super Jump", angle: 60 },
  { src: thunderImg, name: "Thunder", angle: 120 },
  { src: earthquakeImg, name: "Earthquake", angle: 180 },
  { src: ultimateImg, name: "Ultimate", angle: 240 },
  { src: telekinesisImg, name: "Telekinesis", angle: 300 },
];

const CharactersPreview = () => {
  return (
    <section
      id="characters"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.14, 0.06] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <p className="font-display text-xs tracking-[0.4em] uppercase text-primary text-glow-cyan">
              The Oracles
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <TextReveal
            as="h2"
            className="font-display text-4xl md:text-6xl font-black bg-gradient-to-r from-primary via-neon-cyan to-secondary bg-clip-text text-transparent mb-4"
          >
            Master Elemental Powers
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Master Elemental Powers & Combat Styles
          </motion.p>
        </div>

        {/* Center character with orbiting abilities */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center mb-16"
        >
          {/* Aura glow rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full border border-primary/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[380px] h-[380px] md:w-[520px] md:h-[520px] rounded-full border border-secondary/15"
          />

          {/* Energy aura behind character */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 rounded-full blur-[60px]"
          />

          {/* Central character */}
          <motion.img
            src={iboonkaImg}
            alt="iBOONKA!"
            className="relative z-10 h-72 md:h-96 object-contain drop-shadow-[0_0_40px_hsl(var(--primary)/0.5)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Orbiting ability icons */}
          {abilityIcons.map((ability, i) => {
            const radius = 180;
            const mdRadius = 250;
            return (
              <motion.div
                key={ability.name}
                className="absolute hidden md:flex"
                animate={{ rotate: [ability.angle, ability.angle + 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{
                  width: `${mdRadius * 2}px`,
                  height: `${mdRadius * 2}px`,
                  top: `calc(50% - ${mdRadius}px)`,
                  left: `calc(50% - ${mdRadius}px)`,
                }}
              >
                <motion.div
                  animate={{ rotate: [-ability.angle, -(ability.angle + 360)] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-12 h-12 rounded-xl bg-glass-strong p-2 glow-border hover:glow-border-purple transition-all duration-300 cursor-default group">
                    <img
                      src={ability.src}
                      alt={ability.name}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-[10px] font-display text-primary uppercase tracking-wider">
                        {ability.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View all characters button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/characters"
            className="inline-flex items-center gap-2 px-10 py-4 font-display text-sm tracking-widest uppercase glow-border bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
          >
            <Sparkles className="w-4 h-4" />
            View All Characters
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CharactersPreview;
