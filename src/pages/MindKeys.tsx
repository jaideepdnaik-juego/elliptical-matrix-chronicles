import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import TextReveal from "@/components/TextReveal";
import mindkeysImg from "@/assets/mindkeys.webp";

const mindkeys = [
  {
    name: "Alpha MindKey",
    number: 1,
    description: "The first shard, found deep within Dyna World's crystal caverns. It attunes to the wielder's emotional frequency, amplifying their connection to cosmic energy. Forms the gauntlets of the celestial battle-suit.",
    effect: "Enhances emotional attunement and energy sensing",
  },
  {
    name: "Beta MindKey",
    number: 2,
    description: "Hidden in the temporal spirals of Mysterium Tremendum. This key bends probability, allowing the wielder to see branching timelines. Forms the chest plate of the battle-suit.",
    effect: "Grants temporal awareness and probability sight",
  },
  {
    name: "Gamma MindKey",
    number: 3,
    description: "Guarded by ancient constructs in BOONKA! Land's floating citadels. It channels gravitational forces, granting flight and telekinesis. Forms the boots of the celestial battle-suit.",
    effect: "Unlocks gravitational manipulation and flight",
  },
  {
    name: "Shadow MindKey",
    number: 4,
    description: "The final and most dangerous shard, sealed on Future Earth. It unifies all other MindKeys into the completed battle-suit. But its true purpose is far darker than anyone imagined…",
    effect: "Completes the battle-suit — and the ritual",
  },
];

const MindKeys = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 10 }}
                className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-3"
              >
                Cosmic Relics
              </motion.p>
              <TextReveal as="h1" className="font-display text-4xl md:text-6xl font-black text-foreground mb-4 text-glow-cyan" delay={0.2}>
                THE MINDKEYS™
              </TextReveal>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Four legendary energy shards scattered across The Elliptical Matrix. Each one enhances its wielder — 
                but together, they form something far more powerful… and dangerous.
              </motion.p>
            </div>

            {/* MindKeys Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className="mb-20 rounded-2xl overflow-hidden glow-border"
              style={{ transformPerspective: 1000 }}
            >
              <img src={mindkeysImg} alt="The Four MindKeys" className="w-full h-auto" />
            </motion.div>

            {/* MindKey Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {mindkeys.map((mk, i) => (
                <motion.div
                  key={mk.number}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.7 }}
                  whileHover={{
                    y: -8,
                    boxShadow: i === 3
                      ? "0 0 50px hsl(350 85% 50% / 0.3)"
                      : "0 0 50px hsl(190 100% 50% / 0.3)",
                    transition: { duration: 0.3 },
                  }}
                  className={`bg-glass rounded-2xl p-8 ${i === 3 ? "crimson-glow-border" : "glow-border"} transition-all duration-500 cursor-default`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", damping: 10, delay: 0.3 + i * 0.1 }}
                      className={`font-display text-3xl font-black ${i === 3 ? "text-accent text-glow-crimson" : "text-primary text-glow-cyan"}`}
                    >
                      0{mk.number}
                    </motion.span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{mk.name}</h3>
                      <p className={`text-sm ${i === 3 ? "text-accent" : "text-primary"}`}>{mk.effect}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{mk.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Warning */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-16 text-center bg-glass rounded-2xl p-8 crimson-glow-border"
            >
              <motion.p
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-2 text-glow-crimson"
              >
                ⚠ Warning
              </motion.p>
              <p className="text-muted-foreground text-lg italic">
                "These relics were not built to protect the Oracles at all — they were forged as conductors of cosmic energy. 
                By equipping them, the heroes themselves have become a living beacon, channelling power into the Crimson Dragon's prison 
                and weakening its seal with every step."
              </p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default MindKeys;
