import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Brand Strategy",
    number: "01",
    description: "We decode cultural signals to position brands with precision. Our strategies are built on evidence, not intuition — creating frameworks that endure market shifts.",
    pillars: ["Positioning Architecture", "Narrative Design", "Competitive Mapping"],
  },
  {
    title: "Growth Systems",
    number: "02",
    description: "Scalable, data-informed frameworks that transform brand awareness into measurable market expansion. We build the engine, not just the fuel.",
    pillars: ["Performance Architecture", "Channel Strategy", "Conversion Optimization"],
  },
  {
    title: "Cultural Mapping",
    number: "03",
    description: "Proprietary research methodologies that track cultural velocity — how fast signals travel from subculture to mainstream and what it means for your brand.",
    pillars: ["Trend Forensics", "Audience Cartography", "Signal Detection"],
  },
  {
    title: "Digital Experience",
    number: "04",
    description: "Immersive digital platforms that don't just look premium — they perform. Every pixel is informed by behavioral data and cultural context.",
    pillars: ["Platform Design", "Interactive Storytelling", "Experience Engineering"],
  },
];

const ServicesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="border-t border-foreground/10 py-16 md:py-32">
      <div className="container">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-sans uppercase tracking-widest text-muted-foreground">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tighter mt-2 uppercase">
            Core <span className="text-primary">Services</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, i) => (
            <div
              key={service.number}
              className="border-b border-foreground/20 cursor-pointer group"
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              <div className="py-6 md:py-8 flex items-center justify-between">
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="text-sm font-sans text-muted-foreground tabular">{service.number}</span>
                  <h3 className="text-2xl md:text-4xl font-serif tracking-tighter group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>
                </div>
                <motion.span
                  animate={{ rotate: activeIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl font-sans"
                >
                  +
                </motion.span>
              </div>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:pl-[calc(2rem+3rem)]">
                      <p className="text-sm font-sans text-muted-foreground leading-relaxed max-w-[55ch] md:col-span-2">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.pillars.map((pillar) => (
                          <div key={pillar} className="flex items-center gap-2 text-sm font-sans tracking-tight">
                            <span className="text-primary">†</span>
                            {pillar}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesAccordion;
