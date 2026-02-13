import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/Elliptical Matrix_Title 1.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/characters", label: "Characters" },
  { to: "/mindkeys", label: "MindKeys" },
  { to: "/lore", label: "Lore" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="relative group">
          <motion.img
            src={logoImg}
            alt="Elliptical Matrix"
            className="h-10 md:h-14 w-auto object-contain drop-shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 group-hover:drop-shadow-[0_0_30px_hsl(var(--secondary)/0.5)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="relative group">
              <span className={`font-display text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                location.pathname === link.to
                  ? "text-primary text-glow-cyan"
                  : "text-muted-foreground hover:text-primary"
              }`}>
                {link.label}
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary"
                initial={false}
                animate={{ width: location.pathname === link.to ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}

          <a
            href="#preregister"
            className="px-5 py-2 font-display text-[10px] tracking-[0.2em] uppercase bg-primary/10 text-primary border border-primary/30 rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
          >
            Pre-Register
          </a>
        </div>

        <motion.button
          whileTap={{ scale: 0.9, rotate: 90 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-primary/10"
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
