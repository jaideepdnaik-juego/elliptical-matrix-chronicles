import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import TextReveal from "./TextReveal";

// Import skill icons
import earthquakeStompImg from "@/assets/Skills/earthquake stomp.png";
import jumpImg from "@/assets/Skills/jump.png";
import runImg from "@/assets/Skills/run.png";
import telekinesisImg from "@/assets/Skills/telekinesis.png";
import thunderEnergyImg from "@/assets/Skills/thunderEnergy blast.png";
import ultimateImg from "@/assets/Skills/ultimate.png";

const skills = [
  {
    name: "Earthquake Stomp",
    image: earthquakeStompImg,
    description: "Devastate enemies with seismic power",
    color: "from-amber-500 via-orange-500 to-red-500",
    glow: "shadow-[0_0_50px_hsl(30_100%_50%/0.4)]",
  },
  {
    name: "Thunder Energy",
    image: thunderEnergyImg,
    description: "Unleash electrical devastation",
    color: "from-blue-400 via-cyan-400 to-teal-400",
    glow: "shadow-[0_0_50px_hsl(180_100%_50%/0.4)]",
  },
  {
    name: "Telekinesis",
    image: telekinesisImg,
    description: "Manipulate reality itself",
    color: "from-purple-500 via-pink-500 to-rose-500",
    glow: "shadow-[0_0_50px_hsl(300_100%_50%/0.4)]",
  },
  {
    name: "Super Jump",
    image: jumpImg,
    description: "Defy gravity and soar",
    color: "from-green-400 via-emerald-400 to-teal-400",
    glow: "shadow-[0_0_50px_hsl(160_100%_50%/0.4)]",
  },
  {
    name: "Speed Run",
    image: runImg,
    description: "Move at lightning speed",
    color: "from-yellow-400 via-orange-400 to-amber-400",
    glow: "shadow-[0_0_50px_hsl(45_100%_50%/0.4)]",
  },
  {
    name: "Ultimate Power",
    image: ultimateImg,
    description: "Channel the cosmic force",
    color: "from-violet-500 via-purple-500 to-fuchsia-500",
    glow: "shadow-[0_0_60px_hsl(280_100%_60%/0.5)]",
  },
];

const SkillsShowcase = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Vibrant background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/30 to-red-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/25 to-blue-500/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Zap className="w-5 h-5 text-orange-400" />
            <p className="font-display text-sm tracking-[0.3em] uppercase bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Power Unleashed
            </p>
            <Zap className="w-5 h-5 text-orange-400" />
          </motion.div>

          <TextReveal
            as="h2"
            className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-6 text-glow-purple"
          >
            Master Epic Skills
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed"
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
              className="group relative"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: -5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-2xl p-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated gradient border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-40 group-hover:opacity-70 blur-xl transition-opacity duration-500`}
                />

                <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-6 backdrop-blur-xl border border-white/10">
                  {/* Skill Image Container */}
                  <div className="relative aspect-square mb-4 flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}
                    />

                    <motion.img
                      src={skill.image}
                      alt={skill.name}
                      className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                      whileHover={{
                        scale: 1.1,
                        filter: "brightness(1.2)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    />

                    {/* Sparkle effect on hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute top-2 right-2"
                    >
                      <Sparkles
                        className={`w-6 h-6 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`}
                      />
                    </motion.div>
                  </div>

                  {/* Skill Name */}
                  <h3
                    className={`font-display text-lg font-bold mb-2 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                  >
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
