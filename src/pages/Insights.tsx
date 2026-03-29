import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Insights = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-sm font-sans uppercase tracking-widest text-muted-foreground">Journal</span>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mt-4 uppercase">
              Strategic <span className="text-primary">Insights</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="mt-12 max-w-[65ch] text-lg text-muted-foreground leading-relaxed font-sans"
          >
            <p>
              Deep dives, industry commentary, and actionable directives written by our strategists. A curated selection of thoughts bridging the gap between theory and execution.
            </p>
          </motion.div>

          <div className="mt-24 space-y-12">
            {[
              "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop"
            ].map((img, index) => (
              <motion.article 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-b border-foreground/10 pb-12 cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                  <div className="w-full md:w-48 h-32 shrink-0 overflow-hidden">
                    <img src={img} alt="Article Thumbnail" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs uppercase tracking-widest text-primary mb-2 block">Article</span>
                    <h3 className="text-3xl font-serif tracking-tight group-hover:text-primary transition-colors duration-300">
                      The Architecture of Post-Authentic Brands
                    </h3>
                    <p className="text-muted-foreground mt-4 max-w-[60ch]">
                      How leading companies are navigating the complex landscape of consumer skepticism and algorithmically driven cultural shifts.
                    </p>
                  </div>
                  <div className="md:text-right shrink-0">
                    <span className="text-sm text-muted-foreground font-sans tabular">Oct {12 - index}, 2026</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
