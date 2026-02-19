import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import TextReveal from "./TextReveal";

import iboonkaImg from "@/assets/characters/iBoonka.webp";
import poojaImg from "@/assets/characters/Pooja.webp";
import akiraImg from "@/assets/characters/Akira.webp";
import kurtImg from "@/assets/characters/Kurt.webp";
import thunderImg from "@/assets/Skills/thunderEnergy blast.webp";
import earthquakeImg from "@/assets/Skills/earthquake stomp.webp";
import ultimateImg from "@/assets/Skills/ultimate.webp";
import telekinesisImg from "@/assets/Skills/telekinesis.webp";

const characters = [
  {
    name: "iBOONKA!",
    image: iboonkaImg,
    title: "The Cosmic Oracle",
    element: "Thunder & Earth",
    available: true
  },
  {
    name: "Pooja",
    image: poojaImg,
    title: "The Mystic Sage",
    element: "Mind & Spirit",
    available: true
  },
  {
    name: "Akira",
    image: akiraImg,
    title: "The Shadow Striker",
    element: "Fire & Wind",
    available: false
  },
  {
    name: "Kurt",
    image: kurtImg,
    title: "The Iron Guardian",
    element: "Metal & Ice",
    available: false
  },
];

const characterAbilities: Record<string, any[]> = {
  "iBOONKA!": [
    { 
      src: telekinesisImg, 
      name: "Telekinesis", 
      angle: 0,
      description: "With a mere flick of his hand, iBOONKA bends reality—lifting enemies and throwing them aside like weightless debris.",
      cooldown: "10s",
      type: "Control"
    },
    { 
      src: thunderImg, 
      name: "Thunderclap Energy Blast", 
      angle: 90,
      description: "Lightning gathers between his palms before erupting in a blinding wave that shocks and overwhelms everything ahead.",
      cooldown: "12s",
      type: "Attack"
    },
    { 
      src: earthquakeImg, 
      name: "Earthquake Stomp", 
      angle: 180,
      description: "One crushing stomp sends tremors across the ground, shaking enemies to their core and knocking them off balance.",
      cooldown: "15s",
      type: "AoE Attack"
    },
    { 
      src: ultimateImg, 
      name: "Cosmic Slam", 
      angle: 270,
      description: "iBOONKA ascends in pure telekinetic power, drags his target skyward, and slams them down—triggering a devastating multi-impact explosion.",
      cooldown: "45s",
      type: "Ultimate"
    },
  ],
  "Pooja": [
    { 
      src: telekinesisImg, 
      name: "Telekinesis", 
      angle: 0,
      description: "Unseen forces answer Pooja's command—one gesture is all it takes to lift and hurl enemies helplessly through the air.",
      cooldown: "10s",
      type: "Control"
    },
    { 
      src: thunderImg, 
      name: "Hyper Beam (Furoo Assist)", 
      angle: 120,
      description: "Furoo steps forward, eyes locked. In a flash, he unleashes a devastating beam that tears through anything in its path.",
      cooldown: "15s",
      type: "Attack"
    },
    { 
      src: ultimateImg, 
      name: "Cosmic Rattle Burst", 
      angle: 240,
      description: "With a playful raise of her rattle, Pooja summons a massive energy sphere—while Furoo strikes in a lightning-fast bite combo before the final explosive finish.",
      cooldown: "45s",
      type: "Ultimate"
    },
  ],
};

const CharactersPreview = () => {
  const [selectedAbility, setSelectedAbility] = useState<number | null>(null);
  const [currentCharacter, setCurrentCharacter] = useState(0);

  // Get abilities for current character
  const currentAbilities = characterAbilities[characters[currentCharacter].name] || [];

  const handleAbilityClick = (index: number) => {
    setSelectedAbility(index);
  };

  const handleClose = () => {
    setSelectedAbility(null);
  };

  const handlePrevCharacter = () => {
    setSelectedAbility(null); // Close ability description when changing characters
    setCurrentCharacter((prev) => (prev === 0 ? characters.length - 1 : prev - 1));
  };

  const handleNextCharacter = () => {
    setSelectedAbility(null); // Close ability description when changing characters
    setCurrentCharacter((prev) => (prev === characters.length - 1 ? 0 : prev + 1));
  };

  // Handle Escape key to close description
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedAbility !== null) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedAbility]);

  // Handle Left/Right arrow keys for character navigation
  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (selectedAbility === null) { // Only navigate when description is closed
        if (e.key === 'ArrowLeft') {
          handlePrevCharacter();
        } else if (e.key === 'ArrowRight') {
          handleNextCharacter();
        }
      }
    };

    window.addEventListener('keydown', handleArrowKeys);
    return () => window.removeEventListener('keydown', handleArrowKeys);
  }, [selectedAbility]);
  return (
    <>
    <section
      id="characters"
      className="section-padding relative overflow-hidden"
    >
      {/* Gradient transitions */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-float-orb" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-float-orb-reverse" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-48">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <p className="font-display text-sm md:text-base tracking-[0.4em] uppercase text-primary text-glow-cyan">
              The Oracles
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary via-neon-cyan to-secondary bg-clip-text text-transparent mb-3">
            Choose Your Champion
          </h2>
        </div>

        {/* Center character with orbiting abilities */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center mb-20"
        >
          {/* Aura glow rings */}
          <div className="absolute w-[380px] h-[380px] md:w-[500px] md:h-[500px] rounded-full border border-primary/20 animate-rotate-slow" />
          <div className="absolute w-[440px] h-[440px] md:w-[570px] md:h-[570px] rounded-full border border-secondary/15 animate-rotate-reverse" />

          {/* Energy aura behind character */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 rounded-full blur-[60px]"
          />

          {/* Central character with name */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCharacter}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col items-center justify-center w-[320px] md:w-[420px]"
            >
              <motion.img
                src={characters[currentCharacter].image}
                alt={characters[currentCharacter].name}
                className={`h-48 md:h-64 object-contain drop-shadow-[0_0_40px_hsl(var(--primary)/0.5)] ${
                  !characters[currentCharacter].available ? 'opacity-30 grayscale' : ''
                }`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Coming Soon Badge */}
              {!characters[currentCharacter].available && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-glass-strong border-2 border-accent/50 glow-border-gold">
                    <p className="font-display text-xl md:text-3xl text-accent text-glow-gold tracking-wider uppercase">
                      Coming Soon
                    </p>
                  </div>
                </motion.div>
              )}
              
              {/* Character name inside circle */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mt-4"
              >
                <h3 className="font-display text-lg md:text-2xl text-primary text-glow-cyan mb-1 whitespace-nowrap">
                  {characters[currentCharacter].name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                  {characters[currentCharacter].title}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevCharacter}
            className="absolute left-0 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-glass-strong border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 glow-border group"
            aria-label="Previous character"
          >
            <ChevronLeft className="w-6 h-6 group-hover:text-glow-cyan" />
          </button>
          
          <button
            onClick={handleNextCharacter}
            className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-glass-strong border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 glow-border group"
            aria-label="Next character"
          >
            <ChevronRight className="w-6 h-6 group-hover:text-glow-cyan" />
          </button>

          {/* Character indicator dots */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {characters.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedAbility(null); // Close ability description when changing characters
                  setCurrentCharacter(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentCharacter 
                    ? 'w-8 bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`View ${characters[index].name}`}
              />
            ))}
          </div>

          {/* Orbiting ability icons - Only for available characters */}
          {characters[currentCharacter].available && currentAbilities.map((ability, i) => {
            const radius = 205; // Between inner (190) and outer (220) circles
            const mdRadius = 267; // Between inner (250) and outer (285) circles
            return (
              <motion.div
                key={ability.name}
                className="absolute hidden md:flex pointer-events-none"
                animate={{ rotate: [ability.angle, ability.angle + 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{
                  width: `${mdRadius * 2}px`,
                  height: `${mdRadius * 2}px`,
                  top: `calc(50% - ${mdRadius}px)`,
                  left: `calc(50% - ${mdRadius}px)`,
                }}
              >
                <motion.div
                  animate={{ rotate: [-ability.angle, -(ability.angle + 360)] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                >
                  <div 
                    onClick={() => handleAbilityClick(i)}
                    className={`w-12 h-12 rounded-xl bg-glass-strong p-2 transition-all duration-300 cursor-pointer group ${
                      selectedAbility === i ? 'glow-border-gold scale-110' : 'glow-border hover:glow-border-purple hover:scale-105'
                    }`}
                  >
                    <img
                      src={ability.src}
                      alt={ability.name}
                      className="w-full h-full object-contain pointer-events-none"
                    />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      <span className="text-[10px] font-display text-primary uppercase tracking-wider">
                        {ability.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
    {/* Ability Description Panel - Rendered as Portal */}
    {createPortal(
      <AnimatePresence>
        {selectedAbility !== null && currentAbilities[selectedAbility] && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            />
            
            {/* Description Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-sm md:max-w-md"
            >
              <div className="relative bg-glass-strong rounded-2xl p-6 border border-primary/30 shadow-2xl">
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Ability Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-glass p-3 glow-border-gold shrink-0">
                    <img
                      src={currentAbilities[selectedAbility].src}
                      alt={currentAbilities[selectedAbility].name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base md:text-lg text-primary tracking-wider mb-1 truncate">
                      {currentAbilities[selectedAbility].name}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30">
                        {currentAbilities[selectedAbility].type}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        CD: {currentAbilities[selectedAbility].cooldown}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {currentAbilities[selectedAbility].description}
                </p>

                {/* Decorative glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-primary to-secondary rounded-2xl opacity-20 blur -z-10 animate-pulse-glow" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
};

export default CharactersPreview;
