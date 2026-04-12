import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import image1 from "../img/Image1.png";

const caseStudies = [
  {
    id: 1,
    title: "Aligning Product, Brand, and Experience",
    image: image1,
    industry: "Health & Wellness",
    interventionType: "Brand & Digital Transformation",
    scenario: "They had a product worth believing in — whey protein, creatine, isolates — supported by a strong foundation in quality and intent.\n\nAt the same time, their brand presence hadn’t fully caught up with that potential. The website followed a standard WooCommerce structure, and the visual identity was still evolving — with room to build stronger consistency across colours, logo, and overall design language.\n\nThis created an opportunity: to better align how the brand showed up with the quality of what it offered, and to build a more cohesive, credible experience for customers from the very first interaction.",
    before: [
      "Website built on a standard WordPress theme with limited brand distinction",
      "Inconsistent colour usage and unclear visual hierarchy",
      "Basic wordmark without a strong identity system",
      "Navigation structure needed simplification",
      "No defined guidelines to support future scaling"
    ],
    after: [
      "Distinct monogram logo designed for a performance-led identity",
      "Refined red, black, and white palette with clear usage principles",
      "Sora typeface bringing a clean, modern, and functional feel",
      "Structured mini brand book to guide consistency across touchpoints",
      "Website redesign aligned with the new identity system"
    ],
    theShift: "From a brand that existed… to a brand that communicates intent, builds trust, and holds its ground in a competitive category."
  }
];

const Interventions = () => {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [selectedCase]);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[rgb(245,201,28)] selection:text-black font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-12 flex flex-col justify-center min-h-[70vh] border-b border-neutral-100 overflow-hidden bg-white">
        {/* Dynamic Motion Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#fafafa]">
          <div className="absolute inset-0 opacity-40">
            <motion.div
              className="absolute top-[-15%] right-[-5%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-[rgb(245,201,28)]/30 rounded-full blur-[100px]"
              animate={{
                x: [0, -60, 0],
                y: [0, 60, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-[-10%] left-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] bg-neutral-400/20 rounded-full blur-[120px]"
              animate={{
                x: [0, 80, 0],
                y: [0, -50, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_70%,transparent_100%)]"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] mb-6 max-w-4xl">
              We don't take on projects.<br />
              <span className="text-[rgb(245,201,28)]">We step in when something needs to change.</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl font-light leading-relaxed mb-12">
              When growth stalls, positioning blurs, or teams misalign, we intervene with clarity and direction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED INTERVENTIONS (CASE STUDIES) */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-4">
              Featured <span className="text-[rgb(245,201,28)]">Interventions</span>
            </h2>
            <p className="text-lg text-neutral-600 font-light">
              Real examples of how we realign brand, product, and experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                onClick={() => setSelectedCase(study)}
                className="group cursor-pointer block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 mb-6">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-lg font-medium tracking-widest uppercase border border-white/30 px-8 py-3 rounded-full flex items-center gap-2">
                      View Intervention <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[rgb(245,201,28)] font-bold">{study.industry}</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{study.interventionType}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif group-hover:text-[rgb(245,201,28)] transition-colors">
                  {study.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* FULL INFO MODAL */}
      <AnimatePresence>
        {selectedCase && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-neutral-900/40 backdrop-blur-md z-[100]"
              onClick={() => setSelectedCase(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 md:inset-6 lg:inset-10 bg-white md:rounded-[2.5rem] flex flex-col md:flex-row z-[101] overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col md:flex-row w-full h-full relative">
                
                {/* Close Button - Floating */}
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-6 right-6 z-50 p-3 bg-white/80 hover:bg-[rgb(245,201,28)] backdrop-blur-md rounded-full shadow-lg transition-all duration-300 group"
                >
                  <X className="w-6 h-6 group-hover:scale-110 transition-transform text-black" />
                </button>

                {/* Left Side: Image & Hero */}
                <div className="w-full md:w-1/2 relative h-[40vh] md:h-full bg-neutral-900 overflow-hidden shrink-0">
                  <motion.div 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={selectedCase.image} 
                      alt={selectedCase.title}
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </motion.div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="px-4 py-1.5 bg-[rgb(245,201,28)] text-black text-xs font-bold uppercase tracking-widest rounded-full">{selectedCase.industry}</span>
                        <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-mono uppercase tracking-widest rounded-full border border-white/20">{selectedCase.interventionType}</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif max-w-xl tracking-tight leading-[1.05]">
                        {selectedCase.title}
                      </h2>
                    </motion.div>
                  </div>
                </div>

                {/* Right Side: Scrollable Content */}
                <div 
                  className="w-full md:w-1/2 flex-1 min-h-0 overflow-y-auto bg-white p-8 md:p-12 lg:p-16 relative"
                  data-lenis-prevent="true"
                >
                  <div className="max-w-2xl mx-auto space-y-20 pb-12 md:pb-0">
                    
                    {/* The Scenario */}
                    <motion.section 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-[2px] bg-[rgb(245,201,28)]"></div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-black">The Scenario</h3>
                      </div>
                      <div className="text-xl text-neutral-600 font-light leading-relaxed space-y-6">
                        {selectedCase.scenario.split('\n\n').map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </motion.section>

                    {/* Before & After Grid */}
                    <motion.section 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 bg-neutral-50 rounded-[2rem] p-8 lg:p-10 border border-neutral-100 shadow-sm">
                        {/* Before */}
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500 font-bold text-sm">B</span>
                            <h3 className="text-lg font-medium text-neutral-900">Before</h3>
                          </div>
                          <ul className="space-y-4">
                            {selectedCase.before.map((item, i) => (
                              <li key={i} className="flex gap-4 text-neutral-500 text-sm">
                                <span className="text-red-300 font-mono mt-0.5 font-bold">-</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* After */}
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgb(245,201,28)]/20 text-[rgb(205,161,0)] font-bold text-sm">A</span>
                            <h3 className="text-lg font-medium text-neutral-900">After</h3>
                          </div>
                          <ul className="space-y-4">
                            {selectedCase.after.map((item, i) => (
                              <li key={i} className="flex gap-4 text-neutral-800 text-sm font-medium">
                                <span className="text-[rgb(245,201,28)] font-mono mt-0.5 font-bold">+</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.section>

                    {/* The Shift */}
                    <motion.section 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="relative"
                    >
                      <div className="absolute -top-12 -left-6 text-[140px] leading-none text-[rgb(245,201,28)] opacity-20 font-serif select-none pointer-events-none">"</div>
                      <div className="relative z-10">
                        <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">The Shift</h3>
                        <p className="text-3xl md:text-4xl font-serif text-black leading-snug">
                          {selectedCase.theShift}
                        </p>
                      </div>
                    </motion.section>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="pt-8 flex flex-col md:flex-row items-center justify-between border-t border-neutral-100 gap-6"
                    >
                      <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">Ready to realign?</p>
                      <Link
                        to="/clarity-call"
                        onClick={() => setSelectedCase(null)}
                        className="group inline-flex items-center gap-3 bg-[rgb(245,201,28)] text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors duration-300 rounded-full"
                      >
                        Start Your Intervention
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Interventions;

