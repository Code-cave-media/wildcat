import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
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
              About Us
            </span>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mt-4 uppercase">
              The Agency <br />
              <span className="text-primary">Redefined.</span>
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
            className="mt-12 max-w-[65ch] text-lg md:text-xl text-muted-foreground leading-relaxed font-sans space-y-6"
          >
            <p>
              We are a collective of researchers, strategists, and technologists
              who believe that modern brand building requires more than
              intuition—it requires irrefutable evidence.
            </p>
            <p>
              By observing cultural velocity and mapping market friction, we
              build systems that propel brands into the future. This is where
              high-end aesthetic meets data-driven performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 sm:mt-24 h-[40vh] md:h-[60vh] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
              alt="About Us"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
