import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={() => { setIsFocused(true); setOpacity(1); }}
      onBlur={() => { setIsFocused(false); setOpacity(0); }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-[rgb(245,201,28)]/5 hover:border-[rgb(245,201,28)]/30 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(245,201,28,0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

const CapabilitySection = ({
  number,
  title,
  subtitle,
  description,
  todos,
  outcome
}: {
  number: string,
  title: string,
  subtitle: string,
  description: string,
  todos: string[],
  outcome: string
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative pb-24 border-b border-neutral-200 last:border-b-0"
    >
      <div className="lg:col-span-1 flex items-start">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 bg-[rgb(245,201,28)]/10 rounded-2xl flex items-center justify-center -ml-2 transition-colors duration-500 group-hover:bg-[rgb(245,201,28)]/20 cursor-default"
        >
          <span className="text-[rgb(245,201,28)] font-bold text-2xl">{number}</span>
        </motion.div>
      </div>
      <div className="lg:col-span-5 relative">
        <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-6 transition-colors duration-500 group-hover:text-[rgb(245,201,28)]">{title}</h2>
        <p className="text-2xl text-neutral-800 font-serif-display leading-relaxed mb-4">
          {subtitle}
        </p>
        <p className="text-lg text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="lg:col-span-5 lg:col-start-8">
        <SpotlightCard className="bg-white p-8 md:p-10 rounded-3xl border border-neutral-100 h-full">
          <div className="mb-10">
            <h3 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-6 flex items-center gap-3">
              What we do
              <motion.div 
                animate={{ x: [0, 5, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4 text-[rgb(245,201,28)]" />
              </motion.div>
            </h3>
            <ul className="space-y-4 font-serif-display text-lg lg:text-xl text-neutral-800">
              {todos.map((todo, idx) => (
                <li key={idx} className="flex items-start gap-4 group/item cursor-default">
                  <motion.span 
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.5 }}
                    className="text-[rgb(245,201,28)] mt-1.5 text-xs inline-block origin-center transition-transform"
                  >
                    ●
                  </motion.span>
                  <span className="group-hover/item:translate-x-2 transition-transform duration-300">{todo}</span>
                </li>
              ))}
            </ul>
          </div>
          <motion.div 
            className="pt-8 border-t border-neutral-200"
            whileHover={{ y: -2 }}
          >
            <h3 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-4">Outcome</h3>
            <p className="text-xl font-medium text-black">
              {outcome}
            </p>
          </motion.div>
        </SpotlightCard>
      </div>
    </motion.div>
  );
};

const Capabilities = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[rgb(245,201,28)] selection:text-black font-sans overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-12 flex flex-col justify-center min-h-[60vh] border-b border-neutral-100 overflow-hidden bg-[#fafafa]">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <motion.div
              className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[rgb(245,201,28)]/40 rounded-full blur-[100px]"
              animate={{
                x: [0, -40, 0],
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
              className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-neutral-300/50 rounded-full blur-[120px]"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            {/* Interactive floating particles in hero */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-3 h-3 bg-[rgb(245,201,28)] rounded-full blur-[2px]"
              animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-4 h-4 border border-[rgb(245,201,28)]/50 rounded-full"
              animate={{ y: [30, -30, 30], rotate: [0, 180, 360], scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-medium tracking-[-0.02em] leading-[1.05] mb-8 max-w-4xl">
              Capabilities
            </h1>

            <motion.p 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl text-black font-medium tracking-tight leading-tight mb-8"
            >
              We don’t just execute. <span className="text-[rgb(245,201,28)] inline-block hover:scale-105 transition-transform duration-300">We think before we move.</span>
            </motion.p>
            
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl font-serif-display leading-relaxed">
              Wildcat is built on four core disciplines that work together to solve real business problems—not just produce outputs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE DISCIPLINES */}
      <section ref={containerRef} className="py-24 md:py-32 px-6 lg:px-12 bg-[#fafafa] relative isolate">
        <motion.div style={{ y }} className="absolute inset-0 pointer-events-none z-[-1]">
          <div className="absolute top-[20%] right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[rgb(245,201,28)]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-black/5 rounded-full blur-[120px]" />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            <CapabilitySection
              number="01"
              title="Market & Cultural Insight"
              subtitle="Before anything else, we understand your world."
              description="We look at your market, your audience, and what’s changing around you—so you’re not making blind decisions."
              todos={[
                "Study your market and competitors",
                "Understand your audience",
                "Track trends that matter to your space",
                "Find gaps and opportunities"
              ]}
              outcome="You stop guessing and start making informed decisions."
            />

            <CapabilitySection
              number="02"
              title="Brand Strategy"
              subtitle="Once we understand the space, we define how you stand out."
              description="This is about getting clear on who you are, who you’re for, and why people should choose you."
              todos={[
                "Define your brand position",
                "Clarify your offering",
                "Identify what makes you different",
                "Shape your go-to-market approach"
              ]}
              outcome="A clear direction for your brand—no confusion, no mixed signals."
            />

            <CapabilitySection
              number="03"
              title="Brand Narrative"
              subtitle="Now we help you say it the right way."
              description="We turn your strategy into simple, clear messaging that people understand and remember."
              todos={[
                "Build your brand story",
                "Create messaging guidelines",
                "Define your tone of voice",
                "Guide your content direction"
              ]}
              outcome="Everything you say feels consistent and makes sense to your audience."
            />

            <CapabilitySection
              number="04"
              title="Performance & Growth"
              subtitle="Finally, we help you grow—without losing direction."
              description="We make sure your marketing efforts are aligned with your strategy and actually drive results."
              todos={[
                "Plan growth strategies",
                "Design campaigns",
                "Improve your marketing funnel",
                "Support lead generation efforts"
              ]}
              outcome="Growth that’s steady and sustainable—not random."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Capabilities;
