import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ClarityCall = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
          >
            <span className="text-sm font-sans uppercase tracking-widest text-muted-foreground">
              Book Now
            </span>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mt-4 uppercase">
              Schedule a <br />
              <span className="text-primary">Clarity Call</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed font-sans max-w-2xl mx-auto">
              A 30-minute high-impact session with our strategic directors.
              We'll diagnose friction points in your current model and outline
              immediate growth levers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 bg-foreground/5 h-[600px] border border-foreground/10 flex items-center justify-center rounded-sm"
          >
            {/* Real implementation would embed an iframe for Calendly / Cal.com here */}
            <div className="text-center p-8">
              <span className="block text-4xl mb-4 opacity-50">🗓️</span>
              <h3 className="text-2xl font-serif mb-2">Calendar Embed Ready</h3>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                [This block is reserved for your scheduling tool embed code,
                such as Calendly or Cal.com]
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClarityCall;
