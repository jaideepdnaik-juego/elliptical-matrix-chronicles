import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Twitter, Youtube, Instagram, Globe } from "lucide-react";
import logoImg from "@/assets/Elliptical Matrix_Title 1.webp";

const Footer = () => (
  <footer className="relative border-t border-border/30 px-6 py-16 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20" />

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <Link to="/" className="inline-block mb-4">
            <img
              src={logoImg}
              alt="Elliptical Matrix"
              className="h-14 w-auto object-contain drop-shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
            />
          </Link>
          <p className="text-foreground/60 text-sm leading-relaxed max-w-md">
            Embark on an epic journey through The Elliptical Matrix™. Secure the
            MINDKEYS™, face the Crimson Dragon, and become a legend.
          </p>
          <div className="flex gap-3 mt-6">
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
        </div>

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
            Get in Touch
          </h3>
          <div className="flex flex-col gap-3 text-xs text-muted-foreground">
            <a
              href="mailto:info@ellipticalmatrix.com"
              className="hover:text-primary transition-colors"
            >
              info@ellipticalmatrix.com
            </a>
            <p>Join our community for latest updates!</p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground/60">
          © 2026 The Elliptical Matrix™. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground/60">
          <a href="#" className="hover:text-primary transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
