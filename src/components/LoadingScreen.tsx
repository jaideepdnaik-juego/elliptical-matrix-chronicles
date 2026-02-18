import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logoImg from "@/assets/Elliptical Matrix_Title 1.webp";
import akiraIcon from "@/assets/Website Icons/Character/Akira.webp";
import iboonkaIcon from "@/assets/Website Icons/Character/imbonka.webp";
import kurtIcon from "@/assets/Website Icons/Character/Kurt.webp";
import poojaIcon from "@/assets/Website Icons/Character/Pooja.webp";
import mindkey1 from "@/assets/Website Icons/Mind Keys/Mindkey_1.webp";
import mindkey2 from "@/assets/Website Icons/Mind Keys/Mindkey_2.webp";
import mindkey3 from "@/assets/Website Icons/Mind Keys/Mindkey_3.webp";
import mindkey4 from "@/assets/Website Icons/Mind Keys/Mindkey_4.webp";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  const icons = [akiraIcon, iboonkaIcon, kurtIcon, poojaIcon];
  const mindkeys = [mindkey1, mindkey2, mindkey3, mindkey4];

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Rotate character icons
    const iconInterval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % icons.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(iconInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
    >
      {/* Animated background gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        {/* Logo */}
        <motion.img
          src={logoImg}
          alt="Elliptical Matrix"
          className="h-20 md:h-28 w-auto object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Character Icons Row */}
        <div className="flex gap-4 md:gap-6">
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: currentIconIndex === index ? 1 : 0.3,
                scale: currentIconIndex === index ? 1.2 : 0.9,
              }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src={icon}
                alt={`Character ${index + 1}`}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
              {currentIconIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* MindKeys Icons */}
        <div className="flex gap-3">
          {mindkeys.map((mindkey, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <motion.img
                src={mindkey}
                alt={`MindKey ${index + 1}`}
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="font-display text-sm md:text-base uppercase tracking-[0.3em] text-blue-400 mb-2">
            Loading The Matrix
          </p>
          <p className="text-xs text-muted-foreground">
            {progress < 30
              ? "Initializing Oracle Systems..."
              : progress < 60
                ? "Securing MindKeys..."
                : progress < 90
                  ? "Activating Characters..."
                  : "Almost Ready..."}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full max-w-md">
          <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-blue-500/20">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400/50 to-purple-400/50 rounded-full blur-sm"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
            <span>{progress}%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
