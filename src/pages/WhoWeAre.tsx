import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import founder1 from "@/img/founder1.png";
import founder2 from "@/img/founder2.png";
import founder3 from "@/img/founder3.png";
const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[rgb(245,201,28)] selection:text-black font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-12 flex flex-col justify-center min-h-[90vh] bg-white overflow-hidden">
        {/* Dynamic Motion Background Element */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 opacity-60 md:opacity-100 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 md:hidden" />
          
          {/* Live Motion Background */}
          <div className="absolute inset-0 w-full h-full">
            <motion.div
              className="absolute top-[10%] right-[-10%] w-[30rem] h-[30rem] bg-[rgb(245,201,28)]/20 rounded-full blur-[80px]"
              animate={{
                x: [0, -30, 0],
                y: [0, 40, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-[-10%] right-[10%] w-[40rem] h-[40rem] bg-neutral-300/30 rounded-full blur-[100px]"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_70%_50%,#000_60%,transparent_100%)]"></div>
          </div>

          {/* subtle gradient overlay to match blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 hidden md:block" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 flex">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mt-12 md:mt-20"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif tracking-tight leading-[1.15] mb-10 text-black">
              We don’t act like an agency. <br className="hidden md:block" />
              <span className="inline-block bg-[rgb(245,201,28)] text-black px-6 py-2 mt-4 lg:mt-6 font-medium whitespace-nowrap lg:text-[5rem]">
                And that’s the point.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl font-light leading-relaxed">
              We work closely with founders and teams to figure out what their brand actually needs—and then help them move.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOUNDING TEAM SECTION */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">
              Founding Team
            </h2>
            <div className="w-16 h-1 bg-[rgb(245,201,28)] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {/* Founder 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-full max-w-[280px] aspect-square rounded-full mb-8 overflow-hidden bg-neutral-50 border border-neutral-100 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[rgb(245,201,28)]/5 group-hover:bg-[rgb(245,201,28)]/20 transition-colors duration-500 rounded-full"></div>
                <img src={founder1} alt="Founder 1" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-3xl font-serif mb-2">Dr Ananthu S.</h3>
              <div className="min-h-[3rem] flex justify-center mb-4 px-2 w-full">
                <h4 className="text-[rgb(245,201,28)] font-medium text-xs tracking-widest uppercase leading-snug max-w-[280px]">Founder | Principal, Brand Strategy &amp; Intelligence</h4>
              </div>
              <p className="text-neutral-500 font-light text-base md:text-lg max-w-[320px] leading-relaxed">Former academic. Analytical thinker with a sharp eye for patterns. Blends a strong research mindset with a creative edge to turn insights into clear, effective direction.</p>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-full max-w-[280px] aspect-square rounded-full mb-8 overflow-hidden bg-neutral-50 border border-neutral-100 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[rgb(245,201,28)]/5 group-hover:bg-[rgb(245,201,28)]/20 transition-colors duration-500 rounded-full"></div>
                <img src={founder2} alt="Founder 2" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-3xl font-serif mb-2">Avinash S Kumar</h3>
              <div className="min-h-[3rem] flex justify-center mb-4 px-2 w-full">
                <h4 className="text-[rgb(245,201,28)] font-medium text-xs tracking-widest uppercase leading-snug max-w-[280px]">Co-Founder | Principal, Growth &amp; Marketing Ops</h4>
              </div>
              <p className="text-neutral-500 font-light text-base md:text-lg max-w-[320px] leading-relaxed">Left corporate early; the ladder was never the game. Marketer and multimedia professional crafting narratives that move people.</p>
            </motion.div>

            {/* Founder 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-full max-w-[280px] aspect-square rounded-full mb-8 overflow-hidden bg-neutral-50 border border-neutral-100 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[rgb(245,201,28)]/5 group-hover:bg-[rgb(245,201,28)]/20 transition-colors duration-500 rounded-full"></div>
                <img src={founder3} alt="Founder 3" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-3xl font-serif mb-2">Swathi Suresh</h3>
              <div className="min-h-[3rem] flex justify-center mb-4 px-2 w-full">
                <h4 className="text-[rgb(245,201,28)] font-medium text-xs tracking-widest uppercase leading-snug max-w-[280px]">Co-Founder | Director, People &amp; Ops</h4>
              </div>
              <p className="text-neutral-500 font-light text-base md:text-lg max-w-[320px] leading-relaxed">Corporate roots, but not limited by them. Where structure meets creativity, and things just click.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT IT'S LIKE WORKING WITH US */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-200 pb-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4">
                What It’s Like <br className="hidden md:block" />
                <span className="text-[rgb(245,201,28)] italic">Working With Us</span>
              </h2>
            </div>
            <p className="text-neutral-500 font-light max-w-sm text-lg md:text-right">
              We follow a principled approach that prioritizes truth over comfort, ensuring we build what matters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group"
            >
              <span className="text-6xl lg:text-7xl font-serif font-light text-neutral-200 group-hover:text-[rgb(245,201,28)] transition-colors duration-500 leading-none">01</span>
              <div className="pt-2">
                <h3 className="text-3xl font-serif mb-4">Understand</h3>
                <p className="text-xl text-neutral-600 font-light flex items-center gap-3">
                  We listen more than we talk. <ArrowRight className="w-5 h-5 text-[rgb(245,201,28)] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group"
            >
              <span className="text-6xl lg:text-7xl font-serif font-light text-neutral-200 group-hover:text-[rgb(245,201,28)] transition-colors duration-500 leading-none">02</span>
              <div className="pt-2">
                <h3 className="text-3xl font-serif mb-4">Challenge</h3>
                <p className="text-xl text-neutral-600 font-light flex items-center gap-3">
                  We question assumptions (including yours). <ArrowRight className="w-5 h-5 text-[rgb(245,201,28)] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group"
            >
              <span className="text-6xl lg:text-7xl font-serif font-light text-neutral-200 group-hover:text-[rgb(245,201,28)] transition-colors duration-500 leading-none">03</span>
              <div className="pt-2">
                <h3 className="text-3xl font-serif mb-4">Clarify</h3>
                <p className="text-xl text-neutral-600 font-light flex items-center gap-3">
                  We simplify what actually matters. <ArrowRight className="w-5 h-5 text-[rgb(245,201,28)] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group"
            >
              <span className="text-6xl lg:text-7xl font-serif font-light text-neutral-200 group-hover:text-[rgb(245,201,28)] transition-colors duration-500 leading-none">04</span>
              <div className="pt-2">
                <h3 className="text-3xl font-serif mb-4">Build & Move</h3>
                <p className="text-xl text-neutral-600 font-light flex items-center gap-3">
                  We help you act—not just plan. <ArrowRight className="w-5 h-5 text-[rgb(245,201,28)] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WE WORK BEST WITH */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-neutral-900 text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[rgb(245,201,28)]/5 blur-[120px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-12">
              We Work Best With
            </h2>
            <ul className="space-y-8">
              <li className="flex items-start gap-6 group">
                <div className="w-3 h-3 mt-2.5 bg-[rgb(245,201,28)] rounded-full shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-2xl md:text-3xl font-light text-neutral-300 group-hover:text-white transition-colors duration-300">Founders who are honest about what’s not working</span>
              </li>
              <li className="flex items-start gap-6 group">
                <div className="w-3 h-3 mt-2.5 bg-[rgb(245,201,28)] rounded-full shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-2xl md:text-3xl font-light text-neutral-300 group-hover:text-white transition-colors duration-300">Teams that want clarity, not just activity</span>
              </li>
              <li className="flex items-start gap-6 group">
                <div className="w-3 h-3 mt-2.5 bg-[rgb(245,201,28)] rounded-full shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-2xl md:text-3xl font-light text-neutral-300 group-hover:text-white transition-colors duration-300">People willing to rethink things</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-white/5 backdrop-blur-md p-10 md:p-14 rounded-[2rem] border border-white/10 w-full relative overflow-hidden group hover:border-[rgb(245,201,28)]/50 transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[rgb(245,201,28)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="text-3xl md:text-4xl font-serif font-light leading-snug mb-10 text-neutral-200">
              <span className="text-[rgb(245,201,28)] text-5xl italic pr-2">"</span>
              If something feels off, it probably is. <br className="hidden md:block" />
              <span className="text-white font-medium mt-4 block">Let’s figure it out.</span>
            </p>
            <Link
              to="/clarity-call"
              className="inline-flex items-center gap-4 bg-[rgb(245,201,28)] text-black px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all hover:scale-105 active:scale-95 duration-300 rounded-full"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
