import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, PlayCircle, Flame } from "lucide-react";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import heroBg from "@/assets/hero-bg.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Vibrant animated orbs */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-red-500/40 to-orange-500/30 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.35, 0.65, 0.35],
          x: [0, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/30 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.5, 0.25],
          y: [0, 30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-yellow-500/30 to-amber-500/20 blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", damping: 10 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Flame className="w-6 h-6 text-red-500" />
            <p className="font-display text-sm tracking-[0.3em] uppercase bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              The Dragon Awakens
            </p>
            <Flame className="w-6 h-6 text-red-500" />
          </motion.div>

          <div className="mb-8">
            <TextReveal
              as="h2"
              className="font-display text-4xl md:text-7xl font-black bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent"
              delay={0.3}
            >
              Are You Ready to Enter The Matrix?
            </TextReveal>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-xl text-foreground/90 mb-12 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            The Crimson Dragon stirs. The Oracles need you. Download now and
            begin your journey through The Elliptical Matrix™.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <MagneticButton className="group inline-flex items-center justify-center gap-3 px-12 py-5 font-display text-sm tracking-widest uppercase bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white rounded-2xl hover:shadow-[0_0_60px_hsl(30_100%_50%/0.6)] transition-all duration-300 font-bold">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Now
            </MagneticButton>
            <MagneticButton className="group inline-flex items-center justify-center gap-3 px-12 py-5 font-display text-sm tracking-widest uppercase bg-gradient-to-r from-purple-600/10 to-pink-600/10 text-purple-300 rounded-2xl border-2 border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/20 transition-all duration-300 hover:shadow-[0_0_40px_hsl(280_100%_60%/0.4)]">
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Trailer
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
