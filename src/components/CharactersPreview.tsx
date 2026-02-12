import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Star } from "lucide-react";
import TextReveal from "./TextReveal";
import akiraImg from "@/assets/characters/Akira.png";
import iboonkaImg from "@/assets/characters/iBoonka.png";
import kurtImg from "@/assets/characters/Kurt.png";
import poojaImg from "@/assets/characters/Pooja.png";

const characters = [
  {
    name: "iBOONKA!",
    image: iboonkaImg,
    role: "Team Leader & Oracle",
    element: "Cosmic",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Akira",
    image: akiraImg,
    role: "Energy Channeler",
    element: "Lightning",
    color: "from-purple-500 to-pink-400",
  },
  {
    name: "Kurt",
    image: kurtImg,
    role: "Shield Guardian",
    element: "Earth",
    color: "from-amber-500 to-yellow-400",
  },
  {
    name: "Pooja",
    image: poojaImg,
    role: "Mystic Navigator",
    element: "Void",
    color: "from-indigo-500 to-purple-400",
  },
];

const CharacterCard = ({
  char,
  index,
}: {
  char: (typeof characters)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    damping: 20,
    stiffness: 150,
  });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={resetMouse}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className="relative rounded-3xl p-1 overflow-hidden bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 transition-all duration-500 group-hover:shadow-[0_0_60px_hsl(210_100%_60%/0.4),0_0_100px_hsl(280_70%_60%/0.2)]"
      >
        {/* Animated border gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, hsl(210 100% 60% / 0.3) 0%, hsl(280 70% 60% / 0.3) 50%, hsl(45 100% 65% / 0.3) 100%)`,
          }}
        />

        <div className="relative rounded-3xl bg-card/95 backdrop-blur-xl p-4">
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, hsl(210 100% 60% / 0.12) 45%, hsl(280 70% 60% / 0.2) 50%, hsl(210 100% 60% / 0.12) 55%, transparent 60%)",
            }}
          />

          {/* Element badge */}
          <div className="absolute top-6 right-6 z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              className={`px-3 py-1 rounded-full bg-gradient-to-r ${char.color} text-white text-xs font-display uppercase tracking-wider shadow-lg flex items-center gap-1`}
            >
              <Star className="w-3 h-3 fill-current" />
              {char.element}
            </motion.div>
          </div>

          <div className="relative aspect-[3/4] flex items-end justify-center">
            <motion.img
              src={char.image}
              alt={char.name}
              className="h-full w-auto object-contain drop-shadow-[0_0_30px_hsl(210_100%_60%/0.4)]"
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.15 }}
        className="mt-4 text-center"
      >
        <h3 className="font-display text-base md:text-lg font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-1">
          {char.name}
        </h3>
        <p className="text-sm text-muted-foreground">{char.role}</p>
      </motion.div>
    </motion.div>
  );
};

const CharactersPreview = () => {
  return (
    <section
      id="characters"
      className="section-padding relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <p className="font-display text-sm tracking-[0.3em] uppercase text-accent">
              The Jump Strings!
            </p>
            <Sparkles className="w-4 h-4 text-accent" />
          </motion.div>
          <TextReveal
            as="h2"
            className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 text-glow-blue"
          >
            Meet the Oracles
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Each Oracle channels unique cosmic energy, becoming powered-up
            beacons called "Strings!" Their combined team-strength is the only
            hope against the Crimson Dragon.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {characters.map((char, i) => (
            <CharacterCard key={char.name} char={char} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/characters"
            className="inline-flex items-center px-10 py-4 font-display text-sm tracking-widest uppercase glow-border-gold bg-gradient-to-r from-yellow-500/10 to-amber-500/10 text-accent rounded-xl hover:bg-accent/20 transition-all duration-300 hover:shadow-[0_0_30px_hsl(45_100%_65%/0.3)] group"
          >
            <span>View All Characters</span>
            <motion.span
              initial={{ x: 0 }}
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

export default CharactersPreview;
