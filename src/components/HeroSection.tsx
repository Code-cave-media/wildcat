import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { MagneticButton } from "./MagneticButton";
import { useRef } from "react";
import bgImage from "@/assets/bg.png";

const textReveal = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const yParallaxH1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const yParallaxContent = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="min-h-[90svh] flex flex-col justify-end relative px-4 md:px-8 pb-12 md:pb-16 pt-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})`, opacity: 0.25 }}
      />
      <div className="container relative z-10">
        <motion.div
          style={{ y: yParallaxH1, opacity: opacityFade }}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] tracking-tighter uppercase font-serif flex flex-col overflow-hidden">
            <span className="overflow-hidden"><motion.span variants={textReveal} className="block">WE OBSERVE.</motion.span></span>
            <span className="overflow-hidden"><motion.span variants={textReveal} className="text-primary block">WE BUILD.</motion.span></span>
          </h1>
        </motion.div>

        <motion.div
          style={{ y: yParallaxContent, opacity: opacityFade }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <p className="max-w-[55ch] text-base md:text-lg font-sans tracking-tight text-muted-foreground leading-relaxed">
            Evidence-based disruption for the culturally restless. We are a hybrid media & communications company —
            part cultural observatory, part brand-building engine.
          </p>

          <MagneticButton>
            <Link
              to="/clarity-call"
              className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-sans font-semibold tracking-tight text-sm uppercase hover:opacity-90 transition-opacity shrink-0"
            >
              Book a Clarity Call
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </MagneticButton>
        </motion.div>

        <motion.div
          style={{ y: yParallaxContent, opacity: opacityFade }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex gap-12 md:gap-20 border-t border-foreground/10 pt-8"
        >
          {[
            { metric: "1.8M", label: "Data Points Mapped" },
            { metric: "47.2%", label: "Avg. Brand Sentiment Shift" },
            { metric: "12", label: "Markets Observed" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <span className="text-2xl md:text-3xl font-serif tabular">{item.metric}</span>
              <p className="text-xs font-sans text-muted-foreground tracking-tight mt-1">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
