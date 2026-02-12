import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mindkeysImg from "@/assets/mindkeys.jpg";

const mindkeys = [
  {
    name: "MindKey of Resonance",
    number: 1,
    description: "The first shard, found deep within Dyna World's crystal caverns. It attunes to the wielder's emotional frequency, amplifying their connection to cosmic energy. Forms the gauntlets of the celestial battle-suit.",
    effect: "Enhances emotional attunement and energy sensing",
  },
  {
    name: "MindKey of Convergence",
    number: 2,
    description: "Hidden in the temporal spirals of Mysterium Tremendum. This key bends probability, allowing the wielder to see branching timelines. Forms the chest plate of the battle-suit.",
    effect: "Grants temporal awareness and probability sight",
  },
  {
    name: "MindKey of Ascension",
    number: 3,
    description: "Guarded by ancient constructs in BOONKA! Land's floating citadels. It channels gravitational forces, granting flight and telekinesis. Forms the boots of the celestial battle-suit.",
    effect: "Unlocks gravitational manipulation and flight",
  },
  {
    name: "MindKey of Dominion",
    number: 4,
    description: "The final and most dangerous shard, sealed on Future Earth. It unifies all other MindKeys into the completed battle-suit. But its true purpose is far darker than anyone imagined…",
    effect: "Completes the battle-suit — and the ritual",
  },
];

const MindKeys = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-3">Cosmic Relics</p>
            <h1 className="font-display text-4xl md:text-6xl font-black text-foreground mb-4 text-glow-cyan">
              THE MINDKEYS™
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four legendary energy shards scattered across The Elliptical Matrix. Each one enhances its wielder — 
              but together, they form something far more powerful… and dangerous.
            </p>
          </motion.div>

          {/* MindKeys Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20 rounded-2xl overflow-hidden glow-border"
          >
            <img src={mindkeysImg} alt="The Four MindKeys" className="w-full h-auto" />
          </motion.div>

          {/* MindKey Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {mindkeys.map((mk, i) => (
              <motion.div
                key={mk.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`bg-glass rounded-2xl p-8 ${i === 3 ? "crimson-glow-border" : "glow-border"} hover:shadow-[0_0_30px_hsl(190_100%_50%/0.2)] transition-all duration-500`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className={`font-display text-3xl font-black ${i === 3 ? "text-accent text-glow-crimson" : "text-primary text-glow-cyan"}`}>
                    0{mk.number}
                  </span>
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center bg-glass rounded-2xl p-8 crimson-glow-border"
          >
            <p className="font-display text-sm tracking-[0.3em] uppercase text-accent mb-2 text-glow-crimson">⚠ Warning</p>
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
  );
};

export default MindKeys;
