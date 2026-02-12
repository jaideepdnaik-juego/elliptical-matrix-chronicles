import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import TextReveal from "./TextReveal";
import akiraImg from "@/assets/characters/Akira.png";
import iboonkaImg from "@/assets/characters/iBoonka.png";
import kurtImg from "@/assets/characters/Kurt.png";
import poojaImg from "@/assets/characters/Pooja.png";

const characters = [
  { name: "iBOONKA!", image: iboonkaImg, role: "Team Leader & Oracle" },
  { name: "Akira", image: akiraImg, role: "Energy Channeler" },
  { name: "Kurt", image: kurtImg, role: "Shield Guardian" },
  { name: "Pooja", image: poojaImg, role: "Mystic Navigator" },
];

const CharacterCard = ({ char, index }: { char: typeof characters[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { damping: 20, stiffness: 150 });

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
        className="relative rounded-2xl p-4 glow-border overflow-hidden bg-card transition-all duration-500 group-hover:shadow-[0_0_50px_hsl(190_100%_50%/0.3)]"
      >
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(105deg, transparent 40%, hsl(190 100% 50% / 0.08) 45%, hsl(190 100% 50% / 0.15) 50%, hsl(190 100% 50% / 0.08) 55%, transparent 60%)",
          }}
        />

        <div className="relative aspect-[3/4] flex items-end justify-center">
          <motion.img
            src={char.image}
            alt={char.name}
            className="h-full w-auto object-contain drop-shadow-[0_0_20px_hsl(190_100%_50%/0.3)]"
            whileHover={{ scale: 1.08, y: -8 }}
            transition={{ type: "spring", damping: 15, stiffness: 200 }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.15 }}
        className="mt-4 text-center"
      >
        <h3 className="font-display text-base md:text-lg font-bold text-foreground">{char.name}</h3>
        <p className="text-sm text-muted-foreground">{char.role}</p>
      </motion.div>
    </motion.div>
  );
};

const CharactersPreview = () => {
  return (
    <section id="characters" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3"
          >
            The Jump Strings!
          </motion.p>
          <TextReveal as="h2" className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Meet the Oracles
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Each Oracle channels unique cosmic energy, becoming powered-up beacons called "Strings!" Their combined team-strength is the only hope against the Crimson Dragon.
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
            className="inline-flex items-center px-8 py-3 font-display text-sm tracking-widest uppercase glow-border text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_20px_hsl(190_100%_50%/0.2)]"
          >
            View All Characters →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CharactersPreview;
