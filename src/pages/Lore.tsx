import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const chapters = [
  {
    title: "The Cosmic Envelope",
    content: "It began with a signal — a pulse of light that rippled through every dimension simultaneously. iBOONKA!, a curious alien from the vibrant world of BOONKA! Land, was the first to decode it. The message was encrypted in celestial mathematics, a language older than the stars themselves. When he finally cracked the code, it revealed coordinates to four energy shards: the MINDKEYS™.",
  },
  {
    title: "Becoming Oracles",
    content: "The pulse didn't just carry a message — it carried transformation. Those who heard it were changed at a cellular level, their DNA rewritten by cosmic frequencies. iBOONKA! and his closest allies — Akira from Future Earth, Kurt from Dyna World, and young Pooja from Mysterium Tremendum — discovered they could channel immense energy. They became Oracles, beacons of power the universe had been waiting for.",
  },
  {
    title: "The CTV Najja Starship™",
    content: "To traverse The Elliptical Matrix — the invisible web connecting all four worlds — the team needed a vessel capable of dimensional travel. The CTV Najja Starship was discovered in the ruins of an ancient civilization beneath BOONKA! Land. It responded only to Oracle energy, its crystalline hull humming with recognition as the team boarded for the first time.",
  },
  {
    title: "The Hunt for MindKeys",
    content: "Each MindKey was hidden in a different world, guarded by trials designed to test the worthiness of seekers. The MindKey of Resonance demanded emotional purity. The MindKey of Convergence required mastery over time itself. The MindKey of Ascension tested the limits of physical courage. And the MindKey of Dominion… it tested something far darker: the willingness to sacrifice everything.",
  },
  {
    title: "The Terrible Truth",
    content: "With each MindKey claimed, the team felt more powerful, more invincible. The celestial battle-suit formed piece by piece around them, its energy surging with every victory. But only when the final MindKey snapped into place did the horrifying truth emerge: the MindKeys were never weapons against the Crimson Dragon. They were the keys to its prison. Every step the Oracles took, every battle they won, had weakened the ancient seal holding the Dragon in its cosmic cage.",
  },
  {
    title: "The Awakening",
    content: "The skies of BOONKA! Land split open with a sound that shattered windows across four worlds. A vast shadow — ancient, impossibly vast — stirred beyond the stars. The Crimson Dragon, imprisoned since the dawn of time, opened its eyes. Its roar rippled across reality, tearing the fabric of The Elliptical Matrix. The Oracles who had been celebrated as heroes now found themselves marked as the instruments of ultimate destruction.",
  },
];

const Lore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">The Chronicles</p>
            <h1 className="font-display text-4xl md:text-6xl font-black text-foreground mb-4">
              Lore of The Matrix
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Before the battle-suit, before the betrayal, there was a signal that changed everything.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-accent" />

            <div className="space-y-12">
              {chapters.map((ch, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Dot */}
                  <div className={`absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full ${i === chapters.length - 1 ? "bg-accent shadow-[0_0_10px_hsl(350_85%_50%/0.6)]" : "bg-primary shadow-[0_0_10px_hsl(190_100%_50%/0.6)]"}`} />
                  
                  <div className="bg-glass rounded-xl p-6 md:p-8 glow-border">
                    <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Chapter {i + 1}</p>
                    <h3 className={`font-display text-xl md:text-2xl font-bold mb-3 ${i === chapters.length - 1 ? "text-accent text-glow-crimson" : "text-foreground"}`}>
                      {ch.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{ch.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cliffhanger */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-20 text-center"
          >
            <p className="font-display text-2xl md:text-3xl text-accent text-glow-crimson font-bold mb-4">
              To Be Continued…
            </p>
            <p className="text-muted-foreground text-lg italic max-w-2xl mx-auto">
              The CTV Najja Starship™ launches into the Elliptical Matrix, the team barely escaping as the awakened Dragon's presence ripples across reality. Behind them, the power they proudly carried now marks them as both hunted and essential — for they are the keys, and the Dragon will stop at nothing to reclaim them.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Lore;
