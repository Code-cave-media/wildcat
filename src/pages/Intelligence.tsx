import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import EditorialGrid from "@/components/EditorialGrid";

const Intelligence = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <div className="container mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-sm font-sans uppercase tracking-widest text-muted-foreground">Signals & Data</span>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mt-4 uppercase">
              Cultural <span className="text-primary">Intelligence</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="mt-12 max-w-[65ch] text-lg text-muted-foreground leading-relaxed font-sans"
          >
            <p>
              This is our observatory. Here we publish our latest findings, raw cultural data points, and macro-trend analysis spanning multiple sectors worldwide.
            </p>
          </motion.div>
        </div>

        {/* Reusing existing EditorialGrid */}
        <EditorialGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Intelligence;
