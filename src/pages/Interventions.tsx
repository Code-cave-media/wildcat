import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Interventions = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[rgb(245,201,28)] selection:text-black font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-12 flex flex-col justify-center min-h-[90vh] border-b border-neutral-100 overflow-hidden bg-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none bg-no-repeat bg-cover bg-center md:bg-right opacity-90 mix-blend-multiply"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-medium tracking-[-0.02em] leading-[1.05] mb-8 max-w-5xl">
              We don't take on projects.<br />
              <span className="text-[rgb(245,201,28)]">We step in when something needs to change.</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl font-light leading-relaxed mb-16">
              When growth stalls, positioning blurs, or teams misalign, we intervene with clarity and direction.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 border-t border-neutral-200 pt-8 mt-12 w-full">
              <p className="text-sm font-mono tracking-widest text-neutral-500 uppercase">
                Strategic interventions for meaningful change
              </p>
              <Link
                to="/who-we-are"
                className="group flex items-center gap-3 text-sm font-medium uppercase tracking-widest bg-[rgb(245,201,28)] text-black px-6 py-4 hover:opacity-80 transition-opacity"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTERVENTION AREAS */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
              When do we <span className="text-[rgb(245,201,28)]">intervene?</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 font-light max-w-3xl mx-auto">
              We step in when you're facing critical challenges that require strategic clarity and decisive action.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {[
              {
                title: "Outgrown Identity",
                description: "Your brand no longer reflects who you are or where you're going. It's time for a strategic realignment.",
                icon: "01"
              },
              {
                title: "Stalled Growth", 
                description: "Growth has plateaued and you're not sure why. We identify the root causes and create a path forward.",
                icon: "02"
              },
              {
                title: "Misaligned Teams",
                description: "Your teams are working in silos with different priorities. We bring everyone around a unified strategy.",
                icon: "03"
              },
              {
                title: "Weak Positioning",
                description: "You're struggling to stand out in a crowded market. We help you find your unique position.",
                icon: "04"
              }
            ].map((intervention, index) => (
              <motion.div
                key={intervention.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className="group relative bg-white p-8 lg:p-10 rounded-2xl border border-neutral-200 hover:border-[rgb(245,201,28)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[rgb(245,201,28)]/10"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[rgb(245,201,28)]/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[rgb(245,201,28)]/10 rounded-xl flex items-center justify-center group-hover:bg-[rgb(245,201,28)]/20 transition-colors">
                      <span className="text-[rgb(245,201,28)] font-bold text-lg">{intervention.icon}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-medium">{intervention.title}</h3>
                  </div>
                </div>
                <p className="text-neutral-600 text-lg lg:text-xl font-light leading-relaxed">
                  {intervention.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center"
          >
            <Link
              to="/who-we-are"
              className="inline-flex items-center gap-3 bg-[rgb(245,201,28)] text-black px-8 py-4 text-sm font-medium uppercase tracking-widest hover:opacity-80 transition-all hover:scale-105 active:scale-95 rounded-full"
            >
              Schedule an Intervention
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Interventions;
