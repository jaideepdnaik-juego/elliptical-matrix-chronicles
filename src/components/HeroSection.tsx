import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone, Download } from "lucide-react";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

// Floating ability icon component
const FloatingIcon = ({
  src,
  className,
  delay = 0,
}: {
  src: string;
  className: string;
  delay?: number;
}) => (
  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute z-20 ${className}`}
  >
    <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl bg-glass-strong p-2 glow-border">
      <img src={src} alt="" className="w-full h-full object-contain" />
    </div>
  </motion.div>
);

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Import skill icons for floating elements
  const skillIcons = [
    {
      src: "./assets/Skills/thunder-energy-blast.webp",
      pos: "top-1/4 left-[8%] hidden md:block",
      delay: 0,
    },
    {
      src: "./assets/Skills/telekinesis.webp",
      pos: "top-1/3 right-[10%] hidden md:block",
      delay: 0.8,
    },
    {
      src: "./assets/Skills/earthquake-stomp.webp",
      pos: "bottom-1/3 left-[5%] hidden lg:block",
      delay: 1.6,
    },
    {
      src: "./assets/Skills/ultimate.webp",
      pos: "bottom-1/4 right-[7%] hidden lg:block",
      delay: 2.4,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={"./assets/hero-cinematic.webp"}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Deep overlays for depth - improved fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-background via-background/95 to-transparent" />

        {/* Animated energy orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-float-orb" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-float-orb-reverse" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[80px] animate-float-orb" style={{ animationDelay: '3s' }} />
      </motion.div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating ability icons */}
      {skillIcons.map((icon, i) => (
        <FloatingIcon
          key={i}
          src={icon.src}
          className={icon.pos}
          delay={icon.delay}
        />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <p className="font-display text-sm md:text-base uppercase text-primary tracking-[0.4em] text-glow-cyan">
            Story One
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </motion.div>

        <motion.div
          className="mb-6 flex flex-col items-center justify-center gap-3"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-wider text-glow-cyan bg-gradient-to-r from-primary via-neon-cyan to-primary bg-clip-text text-transparent leading-tight">
            ENTER THE
          </h1>
          <motion.img
            src={"./assets/Elliptical Matrix_Title 1.webp"}
            alt="Elliptical Matrix"
            className="w-[80%] max-w-3xl h-auto object-contain"
            style={{
              filter: 'drop-shadow(0 0 30px hsl(var(--primary)/0.8)) drop-shadow(0 0 60px hsl(var(--glow-cyan)/0.6)) drop-shadow(0 0 90px hsl(var(--glow-blue)/0.4))',
            }}
            animate={{
              filter: [
                'drop-shadow(0 0 30px hsl(var(--primary)/0.8)) drop-shadow(0 0 60px hsl(var(--glow-cyan)/0.6)) drop-shadow(0 0 90px hsl(var(--glow-blue)/0.4))',
                'drop-shadow(0 0 40px hsl(var(--primary)/1)) drop-shadow(0 0 80px hsl(var(--glow-cyan)/0.8)) drop-shadow(0 0 120px hsl(var(--glow-blue)/0.6))',
                'drop-shadow(0 0 30px hsl(var(--primary)/0.8)) drop-shadow(0 0 60px hsl(var(--glow-cyan)/0.6)) drop-shadow(0 0 90px hsl(var(--glow-blue)/0.4))',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-lg md:text-2xl text-foreground/90 max-w-2xl mx-auto mb-3 font-exo font-medium leading-relaxed"
        >
          Unlock ancient powers. Travel across worlds. Become the chosen Oracle.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 font-body"
        >
          Secure the four legendary MINDKEYS™. Traverse The Elliptical Matrix™.
          Face the Crimson Dragon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton 
            className="group inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-black/90 transition-all duration-300 hover:scale-105 border border-white/20 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
            aria-label="Get it on Google Play"
          >
            <div className="flex flex-col items-start">
              <span className="text-[10px] uppercase tracking-wide opacity-80">Get it on</span>
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                <span className="font-display text-lg font-bold tracking-wide">Google Play</span>
              </div>
            </div>
          </MagneticButton>
          <MagneticButton 
            className="group inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-black/90 transition-all duration-300 hover:scale-105 border border-white/20 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
            aria-label="Download on the App Store"
          >
            <div className="flex flex-col items-start">
              <span className="text-[10px] uppercase tracking-wide opacity-80">Download on the</span>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span className="font-display text-lg font-bold tracking-wide">App Store</span>
              </div>
            </div>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
