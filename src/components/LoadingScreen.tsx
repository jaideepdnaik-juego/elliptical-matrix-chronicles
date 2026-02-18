import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logoImg from "@/assets/Elliptical Matrix_Title 1.webp";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

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

    return () => {
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

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
      <div className="relative z-10 flex flex-col items-center gap-10 px-6">
        {/* Logo */}
        <motion.img
          src={logoImg}
          alt="Elliptical Matrix"
          className="h-24 md:h-36 w-auto object-contain"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 60px rgba(147, 51, 234, 0.4))'
          }}
        />

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="font-display text-sm md:text-base uppercase tracking-[0.3em] text-blue-400 mb-2">
            Loading The Matrix
          </p>
          <p className="text-xs text-muted-foreground">
            {progress < 30
              ? "Initializing Oracle Systems..."
              : progress < 60
                ? "Connecting to The Grid..."
                : progress < 90
                  ? "Preparing Experience..."
                  : "Almost Ready..."}
          </p>
        </motion.div>

        {/* Neon Loading Bar */}
        <div className="w-full max-w-md space-y-3">
          <div className="relative h-2 bg-gray-900/50 rounded-full overflow-hidden backdrop-blur-sm border border-blue-500/20">
            {/* Main progress bar */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                boxShadow: `
                  0 0 20px rgba(59, 130, 246, 0.8),
                  0 0 40px rgba(139, 92, 246, 0.6),
                  0 0 60px rgba(236, 72, 153, 0.4),
                  inset 0 0 20px rgba(255, 255, 255, 0.3)
                `,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            
            {/* Animated glow overlay */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.4) 50%, rgba(236, 72, 153, 0.4) 100%)',
                filter: 'blur(8px)',
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          
          {/* Progress Percentage */}
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground font-mono">0%</span>
            <motion.span
              className="text-lg md:text-xl font-mono font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              key={progress}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {progress}%
            </motion.span>
            <span className="text-xs text-muted-foreground font-mono">100%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
