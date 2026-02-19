import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Twitter, Youtube, Instagram, Globe } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border/30 px-6 py-16 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20" />

    <div className="max-w-4xl mx-auto relative z-10">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Link to="/" className="inline-block">
          <img
            src={"./assets/Elliptical Matrix_Title 1.webp"}
            alt="Elliptical Matrix"
            className="h-16 w-auto object-contain drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
          />
        </Link>
      </div>

      {/* Description */}
      <p className="text-foreground/60 text-sm leading-relaxed text-center max-w-xl mx-auto mb-8">
        Embark on an epic journey through The Elliptical Matrix™. Secure the
        MINDKEYS™, face the Crimson Dragon, and become a legend.
      </p>

      {/* Social Media Icons */}
      <div className="flex gap-3 justify-center mb-12">
        {[
          { icon: Twitter, href: "#" },
          { icon: Youtube, href: "#" },
          { icon: Instagram, href: "#" },
          { icon: Globe, href: "#" },
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-glass border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
          >
            <social.icon size={16} />
          </motion.a>
        ))}
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12 text-center max-w-2xl mx-auto">
        <div>
          <h3 className="font-display text-xs uppercase tracking-[0.2em] text-foreground mb-4 font-bold">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3">
            {["Home", "Characters", "MindKeys", "Lore"].map((l) => (
              <Link
                key={l}
                to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className="text-xs text-muted-foreground hover:text-primary transition-colors font-body"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xs uppercase tracking-[0.2em] text-foreground mb-4 font-bold">
            Legal
          </h3>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-body">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-body">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-body">
              Contact Us
            </a>
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h3 className="font-display text-xs uppercase tracking-[0.2em] text-foreground mb-4 font-bold">
            Get in Touch
          </h3>
          <div className="flex flex-col gap-3 text-xs text-muted-foreground">
            <a
              href="mailto:info@ellipticalmatrix.com"
              className="hover:text-primary transition-colors"
            >
              info@ellipticalmatrix.com
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 border-t border-border/20 text-center">
        <p className="text-xs text-muted-foreground/60">
          © 2026 The Elliptical Matrix™. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
