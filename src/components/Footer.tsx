import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border px-6 py-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <Link to="/" className="font-display text-lg font-bold text-primary text-glow-cyan tracking-wider">
        iBOONKA!™
      </Link>
      <div className="flex gap-6">
        {["Home", "Characters", "MindKeys", "Lore"].map((l) => (
          <Link
            key={l}
            to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
            className="font-display text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            {l}
          </Link>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">© 2026 The Elliptical Matrix™. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
