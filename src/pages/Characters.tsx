import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import akiraImg from "@/assets/characters/Akira.png";
import iboonkaImg from "@/assets/characters/iBoonka.png";
import kurtImg from "@/assets/characters/Kurt.png";
import poojaImg from "@/assets/characters/Pooja.png";

const characters = [
  {
    name: "iBOONKA!",
    image: iboonkaImg,
    role: "Team Leader & Oracle",
    description: "The fearless blue-skinned alien who leads the JUMP Strings! With cosmic antennae that sense dimensional rifts and a MindKey crystal embedded in his chest, iBOONKA! channels raw celestial energy. His sunglasses aren't just cool — they filter hyperdimensional light that would blind ordinary beings.",
    abilities: ["Dimensional Sensing", "Energy Channeling", "Team-Strength Amplification"],
    world: "BOONKA! Land",
  },
  {
    name: "Akira",
    image: akiraImg,
    role: "Energy Channeler",
    description: "A brilliant warrior from Future Earth, Akira wields spiral energy through her crystalline armor. Her pink boots generate anti-gravity fields, and her shoulder plates act as energy conductors that can redirect any attack. She's the team's tactical genius.",
    abilities: ["Spiral Energy Control", "Anti-Gravity Generation", "Tactical Analysis"],
    world: "Future Earth",
  },
  {
    name: "Kurt",
    image: kurtImg,
    role: "Shield Guardian",
    description: "Earth's strongest defender, Kurt's green boots root him to any planetary core, making him immovable. His vest channels nature's energy across all four worlds. A kind heart behind incredible strength — Kurt protects the team at any cost.",
    abilities: ["Planetary Anchoring", "Nature Force Channeling", "Impenetrable Defense"],
    world: "Dyna World",
  },
  {
    name: "Pooja",
    image: poojaImg,
    role: "Mystic Navigator",
    description: "The youngest but most powerful mystic of the group, Pooja's oversized eyes see across all dimensions simultaneously. Her golden Oracle pendant lets her communicate with ancient cosmic entities. She guides the CTV Najja Starship through impossible routes.",
    abilities: ["Dimensional Sight", "Oracle Communication", "Starship Navigation"],
    world: "Mysterium Tremendum",
  },
];

const Characters = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">The Oracles</p>
            <h1 className="font-display text-4xl md:text-6xl font-black text-foreground mb-4">
              JUMP "Strings!"™
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Individually, they are powered-up beacons of energy. Together, their team-strength can shake the cosmos.
            </p>
          </motion.div>

          <div className="space-y-24">
            {characters.map((char, i) => (
              <motion.div
                key={char.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-16`}
              >
                {/* Character Image */}
                <div className="w-full lg:w-2/5 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
                    <img
                      src={char.image}
                      alt={char.name}
                      className="relative h-[350px] md:h-[450px] w-auto object-contain drop-shadow-[0_0_30px_hsl(190_100%_50%/0.3)]"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="w-full lg:w-3/5">
                  <div className="bg-glass rounded-2xl p-8 glow-border">
                    <p className="font-display text-xs tracking-[0.3em] uppercase text-accent mb-2">{char.world}</p>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">{char.name}</h2>
                    <p className="font-display text-sm text-primary mb-4">{char.role}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{char.description}</p>
                    <div>
                      <p className="font-display text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">Abilities</p>
                      <div className="flex flex-wrap gap-2">
                        {char.abilities.map((a) => (
                          <span key={a} className="px-3 py-1 text-sm font-body bg-primary/10 text-primary rounded-full glow-border">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Characters;
