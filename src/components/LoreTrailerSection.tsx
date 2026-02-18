import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";

const LoreTrailerSection = () => {
  const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // PLACEHOLDER: Replace with actual video ID

  return (
    <section id="trailer" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] animate-float-orb" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-secondary" />
            <p className="font-display text-xs uppercase text-secondary tracking-[0.4em] text-glow-purple">
              Discover the Legend
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-secondary" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black bg-gradient-to-r from-secondary via-energy-purple to-primary bg-clip-text text-transparent mb-4">
            The Lore Awaits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deep into the mysteries of The Elliptical Matrix™. Watch the official trailer and uncover the cosmic tapestry.
          </p>
        </motion.div>

        {/* Trailer frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glowing frame border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-primary to-accent rounded-2xl blur opacity-40 animate-pulse-glow" />

          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-secondary rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-secondary rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />

          <div className="relative bg-card rounded-2xl aspect-video overflow-hidden border border-border/50">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="Elliptical Matrix Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* CTA below trailer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors font-display uppercase tracking-wider"
          >
            <Play className="w-4 h-4" />
            Watch Full Gameplay
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LoreTrailerSection;
