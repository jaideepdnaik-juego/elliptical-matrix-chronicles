import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import TextReveal from "@/components/TextReveal";
import akiraImg from "@/assets/characters/Akira.webp";
import iboonkaImg from "@/assets/characters/iBoonka.webp";
import kurtImg from "@/assets/characters/Kurt.webp";
import poojaImg from "@/assets/characters/Pooja.webp";
import telekinesisImg from "@/assets/Skills/telekinesis.webp";
import thunderImg from "@/assets/Skills/thunderEnergy blast.webp";
import earthquakeImg from "@/assets/Skills/earthquake stomp.webp";
import ultimateImg from "@/assets/Skills/ultimate.webp";

const characters = [
  {
    name: "iBOONKA!",
    image: iboonkaImg,
    role: "Team Leader & Oracle",
    description:
      "The fearless blue-skinned alien who leads the JUMP Strings! With cosmic antennae that sense dimensional rifts and a MindKey crystal embedded in his chest, iBOONKA! channels raw celestial energy. His sunglasses aren't just cool — they filter hyperdimensional light that would blind ordinary beings.",
    abilities: [
      { src: telekinesisImg, name: "Telekinesis" },
      { src: thunderImg, name: "Thunderclap Energy Blast" },
      { src: earthquakeImg, name: "Earthquake Stomp" },
      { src: ultimateImg, name: "Cosmic Slam" },
    ],
    world: "BOONKA! Land",
    available: true,
  },
  {
    name: "Pooja",
    image: poojaImg,
    role: "Mystic Navigator",
    description:
      "The youngest but most powerful mystic of the group, Pooja's oversized eyes see across all dimensions simultaneously. Her golden Oracle pendant lets her communicate with ancient cosmic entities. She guides the CTV Najja Starship through impossible routes.",
    abilities: [
      { src: telekinesisImg, name: "Telekinesis" },
      { src: thunderImg, name: "Hyper Beam (Furoo Assist)" },
      { src: ultimateImg, name: "Cosmic Rattle Burst" },
    ],
    world: "Mysterium Tremendum",
    available: true,
  },
  {
    name: "Akira",
    image: akiraImg,
    role: "Energy Channeler",
    description:
      "A brilliant warrior from Future Earth, Akira wields spiral energy through her crystalline armor. Her pink boots generate anti-gravity fields, and her shoulder plates act as energy conductors that can redirect any attack. She's the team's tactical genius.",
    abilities: [],
    world: "Future Earth",
    available: false,
  },
  {
    name: "Kurt",
    image: kurtImg,
    role: "Shield Guardian",
    description:
      "Earth's strongest defender, Kurt's green boots root him to any planetary core, making him immovable. His vest channels nature's energy across all four worlds. A kind heart behind incredible strength — Kurt protects the team at any cost.",
    abilities: [],
    world: "Dyna World",
    available: false,
  },
];

const CharacterDetail = ({
  char,
  index,
}: {
  char: (typeof characters)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    damping: 20,
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
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      }}
      className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
    >
      {/* Character Image with parallax tilt */}
      <div className="w-full lg:w-2/5 flex justify-center">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", damping: 15 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ repeat: Infinity, duration: 4, delay: index * 0.5 }}
            className="absolute inset-0 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative">
            <img
              src={char.image}
              alt={char.name}
              className={`relative h-[350px] md:h-[450px] w-auto object-contain drop-shadow-[0_0_30px_hsl(190_100%_50%/0.3)] ${
                !char.available ? 'opacity-30 grayscale' : ''
              }`}
            />
            {/* Coming Soon Badge */}
            {!char.available && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-glass-strong border-2 border-accent/50 glow-border-gold">
                  <p className="font-display text-xl md:text-3xl text-accent text-glow-gold tracking-wider uppercase">
                    Coming Soon
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Info card with tilt */}
      <div className="w-full lg:w-3/5">
        <motion.div
          ref={ref}
          onMouseMove={handleMouse}
          onMouseLeave={resetMouse}
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          className="bg-glass rounded-2xl p-8 glow-border"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-2"
          >
            {char.world}
          </motion.p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
            {char.name}
          </h2>
          <p className="font-display text-sm text-primary mb-4">{char.role}</p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {char.description}
          </p>
          {char.available && char.abilities.length > 0 && (
            <div>
              <p className="font-display text-sm tracking-[0.2em] uppercase text-foreground/60 mb-3">
                Abilities
              </p>
              <div className="flex flex-wrap gap-3">
                {char.abilities.map((ability, ai) => (
                  <motion.div
                    key={ability.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + ai * 0.1 }}
                    className="group relative"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-glass-strong p-3 glow-border hover:glow-border-gold transition-all duration-300 hover:scale-105">
                      <img
                        src={ability.src}
                        alt={ability.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      <div className="bg-glass-strong px-3 py-1 rounded-lg border border-primary/30">
                        <span className="text-xs font-display text-primary uppercase tracking-wider">
                          {ability.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Characters = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 10 }}
                className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-3"
              >
                The Oracles
              </motion.p>
              <TextReveal
                as="h1"
                className="font-display text-4xl md:text-6xl font-black text-foreground mb-4"
                delay={0.2}
              >
                JUMP "Strings!"™
              </TextReveal>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Individually, they are powered-up beacons of energy. Together,
                their team-strength can shake the cosmos.
              </motion.p>
            </div>

            <div className="space-y-24">
              {characters.map((char, i) => (
                <CharacterDetail key={char.name} char={char} index={i} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Characters;
