import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";

const LoreTrailerSection = () => {
  // Replace this with your YouTube video ID
  const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // PLACEHOLDER: Replace with your actual YouTube video ID

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/20 to-background" />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <p className="font-display text-sm uppercase text-purple-400 tracking-[0.3em]">
              Discover the Legend
            </p>
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-wider mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            The Lore Awaits
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Dive deep into the mysteries of The Elliptical Matrix™. Watch the official trailer 
            and uncover the secrets that lie within the cosmic tapestry of time and space.
          </p>
        </motion.div>

        {/* Trailer container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" />
            
            {/* Video container */}
            <div className="relative bg-black rounded-2xl aspect-video">
              <iframe
                className="w-full h-full rounded-2xl"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="Elliptical Matrix Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Decorative play icon overlay (optional) */}
          <motion.div
            className="absolute -top-8 -right-8 text-purple-400/20"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Play size={120} fill="currentColor" />
          </motion.div>
        </motion.div>

        {/* Lore text section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-purple-950/40 via-background/40 to-blue-950/40 backdrop-blur-sm border border-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl" />
            
            <div className="relative space-y-6 text-foreground/90">
              <h3 className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-6">
                The Beginning of the Journey
              </h3>
              
              <p className="text-base md:text-lg leading-relaxed">
                In a realm where reality bends to the whims of cosmic forces, iBOONKA!™ and the 
                legendary JUMP "Strings!"™ embark on an unprecedented journey through The Elliptical Matrix™. 
                Their quest: to secure the four legendary MINDKEYS™ before the forces of darkness claim them.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                Time is not linear here. Past, present, and future intertwine in a cosmic dance, 
                where every decision ripples through eternity. The Crimson Dragon awaits at the 
                convergence point, guarding secrets that could alter the fabric of existence itself.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                Will you answer the call? The Matrix beckons, and destiny awaits those brave enough 
                to challenge the boundaries of reality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoreTrailerSection;
