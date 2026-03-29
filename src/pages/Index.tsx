import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[rgb(245,201,28)] selection:text-black font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-12 flex flex-col justify-center min-h-[90vh] border-b border-neutral-100 overflow-hidden bg-white">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#fafafa]">
          <div className="absolute inset-0 opacity-30">
            {/* Base Dynamic Gradient */}
            <motion.div
              className="absolute inset-0 mix-blend-multiply"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, rgba(245,201,28,0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 100%, rgba(245,201,28,0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 0%, rgba(245,201,28,0.15) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Large Primary Golden Blob */}
            <motion.div
              className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-[rgb(245,201,28)]/60 rounded-full blur-[100px]"
              animate={{
                x: [0, -70, 0],
                y: [0, 80, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Secondary Darker Neutral Blob */}
            <motion.div
              className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] bg-neutral-400/50 rounded-full blur-[120px]"
              animate={{
                x: [0, 90, 0],
                y: [0, -60, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />

            {/* Tertiary Intense Golden Center Blob */}
            <motion.div
              className="absolute top-1/2 left-1/4 w-[25vw] h-[25vw] max-w-[400px] max-h-[400px] bg-[rgb(245,201,28)]/40 rounded-full blur-[80px]"
              animate={{
                x: [0, 120, 0],
                y: [0, -120, 0],
                opacity: [0.6, 1, 0.6],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />

            {/* Creative Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_70%,transparent_100%)]"></div>

            {/* Micro-interactions: Floating Rings & Particles */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full border-2 border-[rgb(245,201,28)]/60"
              animate={{
                y: [0, -60, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
                rotate: [0, 90, 180]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-[rgb(245,201,28)]/80 rounded-full"
              animate={{
                y: [0, -40, 0],
                x: [0, 30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute top-1/3 right-1/3 w-3 h-3 bg-black/50 rounded-full"
              animate={{ y: [0, 80, 0], opacity: [0.2, 0.9, 0.2], x: [0, -20, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            {/* Subtle sweep line */}
            <motion.div
              className="absolute left-0 top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgb(245,201,28)]/60 to-transparent"
              animate={{
                y: [-300, 300, -300],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-medium tracking-[-0.02em] leading-[1.05] mb-8 max-w-5xl">
              Build with clarity. <br />
              <span className="text-[rgb(245,201,28)]">Grow with intent.</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl font-light leading-relaxed mb-16">
              We bring cultural insight, strategy, and narrative into one system—so growth has direction.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 border-t border-neutral-200 pt-8 mt-12 w-full">
              <p className="text-sm font-mono tracking-widest text-neutral-500 uppercase">
                Culture. Strategy. Narrative. Growth
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

      {/* CAPABILITIES */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-white via-neutral-50 to-white px-6 lg:px-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(245,201,28)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-6 inline-block px-4 py-2 bg-neutral-100 rounded-full">Capabilities</h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
              Four disciplines.<br />
              <span className="text-[rgb(245,201,28)]">One unified system.</span>
            </h3>
            <p className="text-xl md:text-2xl text-neutral-600 font-light max-w-3xl mx-auto">
              An integrated approach that connects insight to action, strategy to growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="group relative bg-white p-8 lg:p-10 rounded-2xl border border-neutral-200 hover:border-[rgb(245,201,28)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[rgb(245,201,28)]/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[rgb(245,201,28)]/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[rgb(245,201,28)]/10 rounded-xl flex items-center justify-center group-hover:bg-[rgb(245,201,28)]/20 transition-colors">
                    <span className="text-[rgb(245,201,28)] font-bold text-lg">01</span>
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-medium">Market & Cultural Insight</h4>
                </div>
              </div>
              <p className="text-neutral-600 text-lg lg:text-xl font-light leading-relaxed mb-6">
                Making sense of the market and culture you operate in.
              </p>
              <div className="flex items-center gap-2 text-[rgb(245,201,28)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="group relative bg-white p-8 lg:p-10 rounded-2xl border border-neutral-200 hover:border-[rgb(245,201,28)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[rgb(245,201,28)]/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[rgb(245,201,28)]/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[rgb(245,201,28)]/10 rounded-xl flex items-center justify-center group-hover:bg-[rgb(245,201,28)]/20 transition-colors">
                    <span className="text-[rgb(245,201,28)] font-bold text-lg">02</span>
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-medium">Brand Strategy</h4>
                </div>
              </div>
              <p className="text-neutral-600 text-lg lg:text-xl font-light leading-relaxed mb-6">
                Defining position, direction, and competitive edge.
              </p>
              <div className="flex items-center gap-2 text-[rgb(245,201,28)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="group relative bg-white p-8 lg:p-10 rounded-2xl border border-neutral-200 hover:border-[rgb(245,201,28)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[rgb(245,201,28)]/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[rgb(245,201,28)]/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[rgb(245,201,28)]/10 rounded-xl flex items-center justify-center group-hover:bg-[rgb(245,201,28)]/20 transition-colors">
                    <span className="text-[rgb(245,201,28)] font-bold text-lg">03</span>
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-medium">Brand Narrative</h4>
                </div>
              </div>
              <p className="text-neutral-600 text-lg lg:text-xl font-light leading-relaxed mb-6">
                Turning strategy into language people remember.
              </p>
              <div className="flex items-center gap-2 text-[rgb(245,201,28)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="group relative bg-white p-8 lg:p-10 rounded-2xl border border-neutral-200 hover:border-[rgb(245,201,28)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[rgb(245,201,28)]/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[rgb(245,201,28)]/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[rgb(245,201,28)]/10 rounded-xl flex items-center justify-center group-hover:bg-[rgb(245,201,28)]/20 transition-colors">
                    <span className="text-[rgb(245,201,28)] font-bold text-lg">04</span>
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-medium">Performance & Growth</h4>
                </div>
              </div>
              <p className="text-neutral-600 text-lg lg:text-xl font-light leading-relaxed mb-6">
                Making sure it all translates into real market movement.
              </p>
              <div className="flex items-center gap-2 text-[rgb(245,201,28)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative bg-gradient-to-r from-[rgb(245,201,28)]/10 to-[rgb(245,201,28)]/5 p-12 lg:p-16 rounded-3xl border border-[rgb(245,201,28)]/20 text-center"
          >
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl"></div>
            <div className="relative z-10">
              <p className="text-2xl lg:text-3xl text-black font-medium mb-8">
                From insight to growth—everything connected.
              </p>
              <Link to="/capabilities" className="group inline-flex items-center gap-3 bg-[rgb(245,201,28)] text-black px-8 py-4 text-sm font-medium uppercase tracking-widest hover:opacity-80 transition-all hover:scale-105 active:scale-95 rounded-full">
                Explore All Capabilities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTERVENTIONS PREVIEW */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 md:py-32 px-6 lg:px-12 relative overflow-hidden border-t border-neutral-100"
      >
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          {/* Animated motion background for full section */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-amber-100"></div>

          {/* Floating animated shapes */}
          <motion.div
            className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-tr from-[rgb(245,201,28)]/40 to-transparent rounded-lg"
            animate={{
              rotate: [45, 90, 45],
              scale: [1, 1.1, 1],
              x: [0, 10, 0],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute bottom-8 left-6 w-24 h-24 bg-gradient-to-bl from-black/20 to-transparent rounded-full"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 0.9, 1],
              x: [0, -15, 0],
              y: [0, 15, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-[rgb(245,201,28)]/15 to-transparent rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Moving particles */}
          <motion.div
            className="absolute top-12 left-12 w-4 h-4 bg-[rgb(245,201,28)]/60 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute bottom-16 right-16 w-6 h-6 bg-black/40 rounded-full"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              opacity: [0.4, 0.9, 0.4]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <motion.div
            className="absolute top-1/3 right-1/4 w-3 h-3 bg-[rgb(245,201,28)]/70 rounded-full"
            animate={{
              x: [0, -60, 0],
              y: [0, -80, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Additional floating element */}
          <motion.div
            className="absolute top-2/3 left-1/3 w-5 h-5 bg-gradient-to-r from-[rgb(245,201,28)]/50 to-transparent rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
              x: [0, 40, 0],
              y: [0, 40, 0]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />

          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'linear-gradient(45deg, transparent 30%, rgba(245,201,28,0.2) 50%, transparent 70%)',
                'linear-gradient(225deg, transparent 30%, rgba(0,0,0,0.2) 50%, transparent 70%)',
                'linear-gradient(45deg, transparent 30%, rgba(245,201,28,0.2) 50%, transparent 70%)'
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-8">Interventions Preview</h2>
                <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-6 text-black">
                  We don't take on projects.<br />
                  <span className="text-[rgb(245,201,28)]">We step in when something needs to change.</span>
                </h3>
              </div>
              <Link to="/interventions" className="group hidden lg:inline-flex items-center gap-3 text-black mt-12 hover:text-[rgb(245,201,28)] transition-colors uppercase tracking-widest text-sm font-medium">
                See how we intervene
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center relative overflow-hidden rounded-2xl border border-neutral-200"
            >
              <div className="relative bg-white/60 backdrop-blur-sm p-8 md:p-12">
                <ul className="space-y-8 text-2xl md:text-3xl font-light text-neutral-800">
                  {["Outgrown identity", "Stalled growth", "Misaligned teams", "Weak positioning"].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                      className="flex items-center gap-6 group"
                    >
                      <span className="text-xs text-neutral-300 transition-colors group-hover:text-[rgb(245,201,28)]">●</span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300 text-black">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link to="/interventions" className="group inline-flex lg:hidden items-center gap-3 text-black mt-12 hover:text-[rgb(245,201,28)] transition-colors uppercase tracking-widest text-sm font-medium">
                  See how we intervene
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* INTELLIGENCE PREVIEW */}
      <section className="py-24 md:py-32 bg-white text-black px-6 lg:px-12">
        <div className="max-w-7xl mx-auto border-t border-neutral-200 pt-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-mono tracking-widest text-black/60 uppercase mb-8">Intelligence Preview</h2>
            <h3 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] mb-6">
              On markets, culture, and brands.
            </h3>
            <p className="text-xl md:text-2xl text-black/80 font-light">
              What we're seeing. What it means.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/intelligence"
              className="group flex items-center gap-3 text-black hover:text-black/70 transition-colors uppercase tracking-widest text-sm font-medium border-b border-black pb-2 hover:border-black/70"
            >
              <ArrowRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              Read Intelligence
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-32 md:py-48 px-6 lg:px-12 bg-white text-center flex flex-col items-center justify-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-[rgb(245,201,28)]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 w-full border-t border-neutral-200 pt-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-16 px-4 text-black"
          >
            If you're building something that needs to last, <span className="text-[rgb(245,201,28)]">start with clarity.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/who-we-are"
              className="inline-flex items-center gap-3 bg-[rgb(245,201,28)] text-black px-8 py-5 text-sm font-medium uppercase tracking-widest hover:opacity-80 transition-transform hover:scale-105 active:scale-95 duration-300 group"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
