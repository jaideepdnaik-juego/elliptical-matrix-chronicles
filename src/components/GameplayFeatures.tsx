import { motion } from "framer-motion";
import { Swords, Globe, Zap, Shield } from "lucide-react";
import TextReveal from "./TextReveal";

const features = [
  {
    icon: Swords,
    title: "Real-Time ARPG Combat",
    description: "Chain devastating combos, dodge lethal strikes, and unleash elemental abilities in fast-paced real-time battles.",
    color: "from-primary to-neon-cyan",
    glowHsl: "193 100% 65%",
  },
  {
    icon: Globe,
    title: "Multiverse Exploration",
    description: "Travel across four interconnected worlds aboard the CTV Najja Starship™. Each dimension holds unique challenges.",
    color: "from-secondary to-energy-purple",
    glowHsl: "249 100% 71%",
  },
  {
    icon: Zap,
    title: "Ability Skill Combos",
    description: "Master Earthquake Stomp, Telekinesis, Thunder Energy, and more. Combine abilities for devastating fusion attacks.",
    color: "from-accent to-amber-400",
    glowHsl: "42 100% 67%",
  },
  {
    icon: Shield,
    title: "Boss Raids & Missions",
    description: "Face the Crimson Dragon and legendary bosses in epic raid encounters. Team up or go solo for ultimate glory.",
    color: "from-red-500 to-rose-400",
    glowHsl: "350 85% 55%",
  },
];

const GameplayFeatures = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Gradient transitions */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-accent/15 rounded-full blur-[120px] animate-float-orb" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
            <p className="font-display text-xs tracking-[0.4em] uppercase text-accent text-glow-gold">
              Awaken Powers
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent" />
          </motion.div>

          <TextReveal
            as="h2"
            className="font-display text-4xl md:text-6xl font-black bg-gradient-to-r from-accent via-golden-energy to-accent bg-clip-text text-transparent mb-6"
          >
            Gameplay Features
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
          >
            Every battle shapes your legend. Every world holds new power.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative hover-lift transition-smooth"
            >
              {/* Glow on hover */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `linear-gradient(135deg, hsl(${feature.glowHsl} / 0.2), transparent)` }}
              />

              <div className="holographic-card relative rounded-2xl p-6 md:p-8 h-full">
                <div className="relative z-10 flex items-start gap-5">
                  <div className={`shrink-0 p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h3 className={`font-display text-lg font-bold mb-2 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameplayFeatures;
