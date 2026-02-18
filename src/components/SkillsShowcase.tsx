import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import TextReveal from "./TextReveal";

import earthquakeStompImg from "@/assets/Skills/earthquake stomp.webp";
import jumpImg from "@/assets/Skills/jump.webp";
import runImg from "@/assets/Skills/run.webp";
import telekinesisImg from "@/assets/Skills/telekinesis.webp";
import thunderEnergyImg from "@/assets/Skills/thunderEnergy blast.webp";
import ultimateImg from "@/assets/Skills/ultimate.webp";

const skills = [
  {
    name: "Earthquake Stomp",
    image: earthquakeStompImg,
    description: "Devastate enemies with seismic power",
    color: "from-accent to-amber-400",
  },
  {
    name: "Thunder Energy",
    image: thunderEnergyImg,
    description: "Unleash electrical devastation",
    color: "from-primary to-neon-cyan",
  },
  {
    name: "Telekinesis",
    image: telekinesisImg,
    description: "Manipulate reality itself",
    color: "from-secondary to-energy-purple",
  },
  {
    name: "Super Jump",
    image: jumpImg,
    description: "Defy gravity and soar",
    color: "from-emerald-400 to-teal-400",
  },
  {
    name: "Speed Run",
    image: runImg,
    description: "Move at lightning speed",
    color: "from-accent to-orange-400",
  },
  {
    name: "Ultimate Power",
    image: ultimateImg,
    description: "Channel the cosmic force",
    color: "from-secondary to-primary",
  },
];

const SkillsShowcase = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]"
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
            <Zap className="w-4 h-4 text-accent" />
            <p className="font-display text-xs tracking-[0.4em] uppercase text-accent text-glow-gold">
              Power Unleashed
            </p>
            <Zap className="w-4 h-4 text-accent" />
          </motion.div>

          <TextReveal
            as="h2"
            className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent via-golden-energy to-primary bg-clip-text text-transparent mb-6"
          >
            Master Epic Skills
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
          >
            Harness devastating abilities and cosmic powers. Each Oracle
            commands unique skills that reshape reality.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group"
            >
              <div className="relative rounded-2xl p-1">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500`}
                />

                <div className="relative rounded-2xl bg-glass p-4 md:p-5 border border-border/50 group-hover:border-primary/30 transition-all duration-300">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 flex items-center justify-center">
                    <motion.img
                      src={skill.image}
                      alt={skill.name}
                      className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                      whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    />
                  </div>
                  <h3
                    className={`font-display text-sm md:text-base font-bold mb-1 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent text-center`}
                  >
                    {skill.name}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center">
                    {skill.description}
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

export default SkillsShowcase;
