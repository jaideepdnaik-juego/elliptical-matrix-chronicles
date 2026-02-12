import { motion } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import TextReveal from "./TextReveal";

// Import MindKey icons
import mindkey1 from "@/assets/Website Icons/Mind Keys/Mindkey_1.png";
import mindkey2 from "@/assets/Website Icons/Mind Keys/Mindkey_2.png";
import mindkey3 from "@/assets/Website Icons/Mind Keys/Mindkey_3.png";
import mindkey4 from "@/assets/Website Icons/Mind Keys/Mindkey_4.png";
import mindkeysBg from "@/assets/mindkeys.jpg";

const mindkeys = [
  {
    name: "Genesis Key",
    image: mindkey1,
    element: "Creation",
    color: "from-cyan-400 via-blue-500 to-indigo-600",
    glowColor: "hsl(200 100% 60%)",
    description: "The first key. Born from the cosmic dawn.",
    power: "Time Manipulation",
  },
  {
    name: "Crimson Key",
    image: mindkey2,
    element: "Destruction",
    color: "from-red-500 via-rose-600 to-pink-700",
    glowColor: "hsl(350 100% 60%)",
    description: "Forged in dragon fire and chaos.",
    power: "Reality Warping",
  },
  {
    name: "Ethereal Key",
    image: mindkey3,
    element: "Spirit",
    color: "from-purple-400 via-violet-500 to-fuchsia-600",
    glowColor: "hsl(280 100% 60%)",
    description: "Whispers from the void between worlds.",
    power: "Dimensional Travel",
  },
  {
    name: "Radiant Key",
    image: mindkey4,
    element: "Light",
    color: "from-yellow-300 via-amber-400 to-orange-500",
    glowColor: "hsl(45 100% 60%)",
    description: "Pure energy crystallized into form.",
    power: "Cosmic Force",
  },
];

const MindKeysShowcase = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={mindkeysBg}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Animated glowing orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/25 to-red-500/15 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Crown className="w-6 h-6 text-amber-400" />
            <p className="font-display text-sm tracking-[0.3em] uppercase bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Legendary Artifacts
            </p>
            <Crown className="w-6 h-6 text-amber-400" />
          </motion.div>

          <TextReveal
            as="h2"
            className="font-display text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent mb-6 text-glow-gold"
          >
            The MINDKEYS™
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Four cosmic artifacts scattered across The Elliptical Matrix™. Unite
            them to unlock ultimate power — or watch the universe fall to
            darkness.
          </motion.p>
        </div>

        {/* MindKeys Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mindkeys.map((key, i) => (
            <motion.div
              key={key.name}
              initial={{ opacity: 0, y: 60, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                type: "spring",
                bounce: 0.3,
              }}
              className="group"
            >
              <motion.div
                whileHover={{
                  y: -15,
                  rotateY: 10,
                  rotateX: -5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                {/* Glowing background effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${key.color} blur-2xl opacity-40`}
                />

                {/* Card */}
                <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 p-6 h-full flex flex-col">
                  {/* Element Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${key.color} text-white text-xs font-display uppercase tracking-wider shadow-lg flex items-center gap-1`}
                  >
                    <Sparkles className="w-3 h-3 fill-current" />
                    {key.element}
                  </motion.div>

                  {/* MindKey Image */}
                  <div className="relative aspect-square mb-6 flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${key.color} opacity-20 blur-xl`}
                    />

                    <motion.img
                      src={key.image}
                      alt={key.name}
                      className="relative z-10 w-4/5 h-4/5 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3
                      className={`font-display text-xl font-bold mb-2 bg-gradient-to-r ${key.color} bg-clip-text text-transparent`}
                    >
                      {key.name}
                    </h3>

                    <p className="text-sm text-gray-400 mb-4 flex-1">
                      {key.description}
                    </p>

                    {/* Power Badge */}
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${key.color} animate-pulse`}
                      />
                      <span className="text-xs text-gray-300 font-display tracking-wider">
                        {key.power}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/mindkeys"
            className="inline-flex items-center px-12 py-5 font-display text-sm tracking-widest uppercase rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-gray-900 font-bold hover:shadow-[0_0_60px_hsl(45_100%_60%/0.6)] transition-all duration-300 group"
          >
            <span>Discover More</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MindKeysShowcase;
