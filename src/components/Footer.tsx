import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="border-t border-foreground/20 bg-foreground text-background">
      <div className="container py-16 md:py-24">
        {/* Newsletter */}
        <div className="pb-16 border-b border-background/20">
          <h2 className="text-3xl md:text-5xl font-serif tracking-tighter uppercase">
            Stay <span className="text-primary">Observed</span>
          </h2>
          <p className="text-sm font-sans text-background/60 mt-4 max-w-[45ch] leading-relaxed">
            Weekly cultural intelligence delivered to decision-makers. No noise.
            Only signal.
          </p>
          <form
            className="mt-8 flex gap-0 max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-background/10 border border-background/20 px-4 py-3 text-sm font-sans text-background placeholder:text-background/40 focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 text-sm font-sans font-semibold tracking-tight hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
          <div>
            <span className="text-xs font-sans uppercase tracking-widest text-background/40">
              Navigate
            </span>
            <div className="mt-4 flex flex-col gap-3">
              {["Home", "About", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="text-sm font-sans text-background/70 hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-sans uppercase tracking-widest text-background/40">
              Services
            </span>
            <div className="mt-4 flex flex-col gap-3">
              {[
                "Brand Strategy",
                "Growth Systems",
                "Cultural Mapping",
                "Digital Experience",
              ].map((link) => (
                <Link
                  key={link}
                  to="/services"
                  className="text-sm font-sans text-background/70 hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-sans uppercase tracking-widest text-background/40">
              Knowledge
            </span>
            <div className="mt-4 flex flex-col gap-3">
              {["Intelligence", "Case Studies", "Insights"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-sans text-background/70 hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-sans uppercase tracking-widest text-background/40">
              Connect
            </span>
            <div className="mt-4 flex flex-col gap-3">
              {["LinkedIn", "Twitter/X", "Instagram"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm font-sans text-background/70 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <img src={logo} alt="Wildcat" className="h-5 invert" />
          <p className="text-xs font-sans text-background/40">
            © {new Date().getFullYear()} Wildcat. Cultural Intelligence & Brand
            Building.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
