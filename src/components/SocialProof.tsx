import { motion } from "framer-motion";
import trustDataViz from "@/assets/trust-data-viz.jpg";
import trustStrategy from "@/assets/trust-strategy.jpg";
import trustAbstract from "@/assets/trust-abstract.jpg";

const clients = [
  "ATLAS COLLECTIVE",
  "MERIDIAN LABS",
  "VANTAGE GROUP",
  "NOVA INDUSTRIES",
  "PRISM CAPITAL",
  "ECHO PARTNERS",
  "SUMMIT AGENCY",
  "CIPHER MEDIA",
];

const SocialProof = () => {
  return (
    <section className="border-t border-foreground/10">
      {/* Trust Images */}
      <div className="container py-16 md:py-24">
        <div className="mb-12">
          <span className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
            Evidence of Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tighter mt-2 uppercase">
            Built on <span className="text-primary">Evidence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10">
          {[
            {
              img: trustDataViz,
              title: "Cultural Signal Mapping",
              desc: "1.8M data points mapped across 12 global markets, tracking cultural velocity in real-time.",
              stat: "1.8M+",
              statLabel: "Signals Tracked",
            },
            {
              img: trustStrategy,
              title: "Strategic Advisory",
              desc: "Embedded with leadership teams at Fortune 500 companies and high-growth startups alike.",
              stat: "96%",
              statLabel: "Client Retention",
            },
            {
              img: trustAbstract,
              title: "Proprietary Frameworks",
              desc: "Our Trust Deficit Index and Cultural Velocity Score power decisions for the world's most ambitious brands.",
              stat: "47.2%",
              statLabel: "Avg. Sentiment Shift",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background group"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 md:h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-lg font-serif tracking-tight">{item.title}</h3>
                  <span className="text-2xl font-serif text-primary tabular">{item.stat}</span>
                </div>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed max-w-[45ch]">
                  {item.desc}
                </p>
                <p className="text-xs font-sans text-muted-foreground mt-2 tabular">{item.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Client Marquee */}
      <div className="border-t border-foreground/10 py-12 md:py-16 overflow-hidden">
        <div className="container mb-6">
          <span className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
            Trusted By Forward-Thinkers
          </span>
        </div>

        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={i}
                className="text-2xl md:text-4xl font-serif tracking-tighter text-foreground/20 mx-8 md:mx-16 shrink-0"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="border-t border-foreground/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10"
          >
            {[
              { value: "47.2%", label: "Avg. Brand Sentiment Shift" },
              { value: "1.8M", label: "Data Points Mapped" },
              { value: "96%", label: "Client Retention Rate" },
              { value: "12", label: "Markets Observed" },
            ].map((stat) => (
              <div key={stat.label} className="bg-background p-6 md:p-8">
                <span className="text-3xl md:text-4xl font-serif tabular">{stat.value}</span>
                <p className="text-xs font-sans text-muted-foreground tracking-tight mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
