import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles, X } from "lucide-react";

interface PreRegisterProps {
  onRegisterComplete: () => void;
}

const PreRegister = ({ onRegisterComplete }: PreRegisterProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call with dummy data
    setTimeout(() => {
      // Store in localStorage (dummy implementation)
      localStorage.setItem("em_preregistered", "true");
      localStorage.setItem("em_email", email);

      setIsSubmitting(false);
      setShowSuccess(true);

      // Redirect to homepage after showing success message
      setTimeout(() => {
        onRegisterComplete();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-background overflow-hidden">
      {/* Animated background gradients */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/15 rounded-full blur-3xl"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-lg px-6 py-4 md:py-6"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6 md:mb-8"
        >
          <img
            src={"./assets/Elliptical Matrix_Title 1.webp"}
            alt="Elliptical Matrix"
            className="h-16 md:h-20 w-auto object-contain"
            style={{
              filter:
                "drop-shadow(0 0 40px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 80px rgba(147, 51, 234, 0.4))",
            }}
          />
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-card/50 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 md:p-8 shadow-2xl"
        >
          {!showSuccess ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center gap-2 mb-3"
                >
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  <p className="font-display text-xs uppercase text-blue-400 tracking-[0.4em]">
                    Early Access
                  </p>
                  <Sparkles className="w-5 h-5 text-blue-400" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="font-display text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  Join The Matrix
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-muted-foreground text-sm md:text-base"
                >
                  Pre-register now to unlock exclusive rewards and be the first
                  to enter the Elliptical Matrix
                </motion.p>
              </div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-12 h-12 bg-background/50 border-primary/30 focus:border-primary/60 rounded-xl text-base"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full h-12 text-base font-display uppercase tracking-wider bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    "Pre-Register Now"
                  )}
                </Button>
              </motion.form>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 pt-4 border-t border-primary/10"
              >
                <p className="text-xs text-center text-muted-foreground mb-3 uppercase tracking-wider">
                  Early Access Benefits
                </p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { label: "Exclusive Skin", icon: "🎨" },
                    { label: "Founder Badge", icon: "⭐" },
                    { label: "Beta Access", icon: "🚀" },
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + i * 0.1 }}
                      className="bg-background/30 rounded-lg p-3"
                    >
                      <div className="text-xl mb-1">{benefit.icon}</div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                        {benefit.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            /* Success Message */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl"
                >
                  ✓
                </motion.div>
              </motion.div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Welcome to The Matrix!
              </h2>
              <p className="text-muted-foreground">
                Redirecting you to the experience...
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Footer text */}
        {!showSuccess && (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center mt-6 text-xs text-muted-foreground"
            >
              By registering, you agree to receive updates about Elliptical
              Matrix
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              onClick={onRegisterComplete}
              className="block mx-auto mt-4 mb-4 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 underline underline-offset-4 hover:underline-offset-8"
            >
              Skip for now
            </motion.button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default PreRegister;
