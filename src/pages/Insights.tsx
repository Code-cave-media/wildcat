import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const articles = [
  {
    id: 1,
    category: "Brand Strategy",
    title: "The Architecture of Post-Authentic Brands",
    excerpt:
      "How leading companies are navigating the complex landscape of consumer skepticism and algorithmically driven cultural shifts.",
    date: "October 12, 2026",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Market Insight",
    title: "Why Growth Marketing is Hitting a Wall",
    excerpt:
      "The playbook of the last decade is producing diminishing returns. Here is what performance-driven brands are doing next to maintain the edge.",
    date: "September 28, 2026",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Cultural Shifts",
    title: "Designing for the Impatient Consumer",
    excerpt:
      "Attention spans aren't shrinking, they are evolving. How to build digital experiences that deliver impact in the first 3 seconds.",
    date: "September 14, 2026",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Leadership",
    title: "The Founder's Dilemma: Scaling Culture",
    excerpt:
      "When the team grows from 10 to 100, the informal rules break. A blueprint for intentional culture design inside hyper-growth startups.",
    date: "August 30, 2026",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
];

const categories = [
  "All",
  "Brand Strategy",
  "Market Insight",
  "Cultural Shifts",
  "Leadership",
  "Technology",
  "Design",
  "Consumer Behavior",
];

const Intelligence = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      className="min-h-screen flex flex-col bg-[#1F1825] text-white selection:bg-brand-amber selection:text-black font-sans"
      ref={containerRef}
    >
      <Navbar />

      <main className="flex-1">
        {/* PARALLAX HERO SECTION */}
        <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 lg:px-12 flex flex-col justify-center min-h-[90vh] overflow-hidden">
          {/* Advanced Motion Background */}
          <motion.div
            style={{ y, opacity }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

            <motion.div
              className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-brand-amber/20 rounded-full blur-[150px]"
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -100, 50, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[10%] left-[10%] w-[35vw] h-[35vw] max-w-[600px] max-h-[600px] bg-white/10 rounded-full blur-[120px]"
              animate={{
                x: [0, -80, 40, 0],
                y: [0, 80, -40, 0],
                scale: [1, 1.4, 0.9, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5,
              }}
            />
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_60%,transparent_100%)]"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-[2px] w-16 bg-brand-amber origin-left"
                />
                <span className="text-sm md:text-base font-mono uppercase tracking-widest text-brand-amber">
                  The Journal
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-serif tracking-tighter leading-[0.9] mb-10 max-w-5xl">
                Intelligence <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
                  for the bold.
                </span>
              </h1>

              <div className="flex flex-col md:flex-row gap-8 md:items-center max-w-3xl">
                <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed flex-1">
                  Deep dives, industry commentary, and actionable directives
                  bridging the gap between theory and execution.
                </p>
                <div className="hidden md:block w-px h-16 bg-white/20"></div>
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-4xl md:text-5xl font-serif text-brand-amber">
                    24+
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                    Published Insights
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HORIZONTAL CATEGORIES MARQUEE */}
        <div className="w-full overflow-hidden border-y border-white/10 bg-black/50 py-6 backdrop-blur-md relative z-20">
          <motion.div
            className="flex whitespace-nowrap gap-16 px-6 items-center"
            animate={{ x: [0, -2000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...categories, ...categories, ...categories, ...categories].map(
              (cat, i) => (
                <span
                  key={i}
                  className="text-lg md:text-2xl font-serif italic text-neutral-500 hover:text-brand-amber cursor-pointer transition-colors duration-300"
                >
                  • {cat}
                </span>
              ),
            )}
          </motion.div>
        </div>

        {/* BENTO GRID FEATURED ARTICLE */}
        <section className="px-6 lg:px-12 py-24 relative z-20 bg-[#1F1825]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative group cursor-pointer block rounded-[2.5rem] overflow-hidden bg-brand-charcoal border border-white/10 hover:border-brand-amber/30 transition-colors duration-500"
            >
              <div className="flex flex-col lg:flex-row min-h-[60vh]">
                <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10 bg-gradient-to-r from-brand-charcoal via-brand-charcoal to-transparent">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-8">
                    <span className="px-3 py-1.5 bg-brand-amber text-black font-bold rounded-full">
                      Featured
                    </span>
                    <span className="text-white">Future of Work</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
                    <span>Nov 05, 2026</span>
                  </div>

                  <h2 className="text-5xl md:text-6xl font-serif tracking-tight leading-[1.1] mb-8 text-white group-hover:text-brand-amber transition-colors duration-500">
                    The End of the Traditional Agency Model
                  </h2>

                  <p className="text-xl text-neutral-400 mb-10 leading-relaxed font-light">
                    Why the most successful brands are abandoning a
                    retainer-first mindset in favor of tactical, high-impact
                    interventions. And what it means for your internal teams.
                  </p>

                  <div className="mt-auto flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white group-hover:text-brand-amber transition-colors duration-500">
                    <span className="relative overflow-hidden pr-2">
                      Read Intelligence
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-amber origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-brand-amber group-hover:bg-brand-amber group-hover:text-black transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 lg:relative lg:w-1/2 h-full overflow-hidden z-0 lg:z-10 bg-black">
                  <div className="absolute inset-0 bg-black/40 lg:hidden z-10" />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
                      alt="Featured Article"
                      className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* INTERACTIVE ARTICLES LIST */}
        <section className="px-6 lg:px-12 pb-32 bg-[#1F1825] relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-4">
              <h3 className="text-4xl md:text-5xl font-serif text-white">
                Latest Insights
              </h3>
              <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
                Showing 4 of 24
              </p>
            </div>

            <div className="flex flex-col border-t border-white/10">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group relative border-b border-white/10 py-10 md:py-14 hover:border-white/40 transition-colors duration-500 cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
                    <div className="flex-1 max-w-4xl">
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
                        <span className="text-neutral-400 group-hover:text-white transition-colors duration-300">
                          0{index + 1}
                        </span>
                        <span className="text-brand-amber font-bold">
                          {article.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
                        <span>{article.date}</span>
                      </div>
                      <h4 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-neutral-300 group-hover:text-white transition-colors duration-500 pr-8">
                        {article.title}
                      </h4>
                    </div>

                    <div className="hidden md:flex flex-col items-end gap-3 text-right">
                      <p className="text-sm font-mono text-neutral-500 tracking-widest">
                        {article.readTime}
                      </p>
                      <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-amber group-hover:border-brand-amber group-hover:scale-110 transition-all duration-500">
                        <ArrowUpRight className="w-6 h-6 text-neutral-400 group-hover:text-black transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Image Reveal */}
                  <div className="hidden md:block absolute top-[50%] right-[15%] w-[380px] aspect-[16/10] rounded-2xl z-20 pointer-events-none shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden transform -translate-y-1/2 scale-95 group-hover:scale-100">
                    <div className="absolute inset-0 bg-black/20 z-10"></div>
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                  </div>

                  <p className="md:hidden mt-6 text-neutral-400 font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-24 flex justify-center"
            >
              <button className="group inline-flex items-center gap-4 bg-white/5 border border-white/20 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:border-brand-amber hover:bg-brand-amber hover:text-black transition-all duration-500 rounded-full">
                Load More Articles
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Intelligence;
