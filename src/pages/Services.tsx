import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ServicesAccordion from "@/components/ServicesAccordion";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <div className="container mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
          >
            <span className="text-sm font-sans uppercase tracking-widest text-muted-foreground">
              Expertise
            </span>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mt-4 uppercase">
              Our <span className="text-primary">Capabilities</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="max-w-[65ch] text-lg text-muted-foreground leading-relaxed font-sans"
            >
              <p>
                We don't just deliver deliverables; we construct growth engines.
                From initial cultural mapping to large scale digital
                engineering, our capabilities cover the entire spectrum of
                modern market dominance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-64 object-cover overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1481481600451-2475968bce75?q=80&w=1200&auto=format&fit=crop"
                alt="Services"
                className="w-full h-full object-cover grayscale opacity-80"
              />
            </motion.div>
          </div>
        </div>

        {/* Reusing existing ServicesAccordion */}
        <ServicesAccordion />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
