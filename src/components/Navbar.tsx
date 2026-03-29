import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Interventions", href: "/interventions" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "Who We Are", href: "/who-we-are" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        mobileOpen 
          ? "z-[60] bg-transparent border-transparent backdrop-blur-none" 
          : "z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 relative z-[60]" onClick={() => setMobileOpen(false)}>
          <img 
            src={logo} 
            alt="Wildcat" 
            className="h-6 transition-all duration-300"
            style={{ filter: mobileOpen ? "brightness(0) invert(1)" : "none" }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm font-sans tracking-tight hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/clarity-call"
            className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-sans font-semibold tracking-tight hover:opacity-90 transition-opacity"
          >
            Clarity Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col justify-center items-end gap-2 p-2 relative z-[60] w-12 h-12"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 10, backgroundColor: "#fff" } : { rotate: 0, y: 0, backgroundColor: "#000" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="block h-[2px] w-8 origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0, backgroundColor: "#000" }}
            transition={{ duration: 0.2 }}
            className="block h-[2px] w-6"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -10, backgroundColor: "#fff", width: "2rem" } : { rotate: 0, y: 0, backgroundColor: "#000", width: "1.2rem" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="block h-[2px] origin-center"
          />
        </button>
      </div>
    </motion.nav>

    {/* Full Screen Mobile Menu */}
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
          animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
          exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)", transition: { duration: 0.4 } }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col justify-center px-8 lg:hidden"
        >
            {/* Background Accents */}
            <div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] bg-[rgb(245,201,28)]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-20%] w-[70vw] h-[70vw] bg-[rgb(245,201,28)]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col gap-5 relative z-10 w-full max-w-sm mx-auto mt-4">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[rgb(245,201,28)] text-xs font-mono tracking-widest uppercase mb-4 border-b border-white/10 pb-4"
              >
                Navigation
              </motion.p>
              
              <div className="flex flex-col gap-5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-3xl sm:text-4xl font-sans font-medium tracking-tight text-white hover:text-[rgb(245,201,28)] transition-colors inline-block leading-tight"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + navLinks.length * 0.1, duration: 0.5 }}
                className="mt-6 pt-6 border-t border-white/10"
              >
                <Link
                  to="/clarity-call"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between bg-[rgb(245,201,28)] text-black px-6 py-5 text-sm font-medium uppercase tracking-widest hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Book a Clarity Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
