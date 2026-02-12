import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Twitter, Youtube, Instagram, Globe } from "lucide-react";
import logoImg from "@/assets/Elliptical Matrix_Title 1.png";

const Footer = () => (
  <footer className="relative border-t border-border/50 px-6 py-16 overflow-hidden">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-b from-background to-purple-950/10" />
    
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
    />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Logo and Description */}
        <div className="md:col-span-2">
          <Link to="/" className="inline-block mb-4">
            <img 
              src={logoImg} 
              alt="Elliptical Matrix" 
              className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            />
          </Link>
          <p className="text-foreground/70 text-sm leading-relaxed max-w-md">
            Embark on an epic journey through The Elliptical Matrix™. 
            Secure the MINDKEYS™, face the Crimson Dragon, and become a legend.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            {[
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Youtube, href: "#", label: "YouTube" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Globe, href: "#", label: "Website" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-foreground/70 hover:text-foreground hover:border-blue-400/60 transition-all"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="font-display text-sm uppercase tracking-wider text-foreground mb-4 font-bold">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3">
            {["Home", "Characters", "MindKeys", "Lore"].map((l) => (
              <Link
                key={l}
                to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className="font-display text-xs tracking-widest uppercase text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Contact */}
        <div>
          <h3 className="font-display text-sm uppercase tracking-wider text-foreground mb-4 font-bold">
            Get in Touch
          </h3>
          <div className="flex flex-col gap-3 text-xs text-muted-foreground">
            <a href="mailto:info@ellipticalmatrix.com" className="hover:text-primary transition-colors">
              info@ellipticalmatrix.com
            </a>
            <p>Join our community and stay updated with the latest news!</p>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © 2026 The Elliptical Matrix™. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
