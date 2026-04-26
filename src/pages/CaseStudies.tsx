import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
          >
            <span className="text-sm font-sans uppercase tracking-widest text-muted-foreground">
              Impact
            </span>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mt-4 uppercase">
              Case <span className="text-primary">Studies</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="mt-12 max-w-[65ch] text-lg text-muted-foreground leading-relaxed font-sans"
          >
            <p>
              Evidence of our methodologies applied in the real world. From
              high-growth tech unicorns to heritage luxury brands, explore how
              we systematically engineer market scale.
            </p>
          </motion.div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-foreground/10 pt-16">
            {/* Dummy Case Study Grid */}
            {[
              "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer block"
              >
                <div className="w-full h-80 bg-foreground/5 mb-6 overflow-hidden relative">
                  <img
                    src={img}
                    alt="Case Study"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Client Title {index + 1}
                </span>
                <h3 className="text-3xl font-serif mt-2 group-hover:text-primary transition-colors">
                  The Transformation Project
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
