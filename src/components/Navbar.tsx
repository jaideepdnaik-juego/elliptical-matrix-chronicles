import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/characters", label: "Characters" },
  { to: "/mindkeys", label: "MindKeys" },
  { to: "/lore", label: "Lore" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className="fixed top-0 left-0 right-0 z-50 bg-glass"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-xl md:text-2xl font-bold tracking-wider text-primary text-glow-cyan">
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            iBOONKA!™
          </motion.span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative group"
            >
              <span
                className={`font-display text-sm tracking-widest uppercase transition-all duration-300 ${
                  location.pathname === link.to ? "text-primary text-glow-cyan" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </span>
              {/* Animated underline */}
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-primary"
                initial={false}
                animate={{ width: location.pathname === link.to ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary/50 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <motion.button
          whileTap={{ scale: 0.9, rotate: 90 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
            exit={{ opacity: 0, height: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-glass overflow-hidden"
          >
            <div className="px-6 pb-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-sm tracking-widest uppercase ${
                      location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
