import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
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
              We bring <span className="text-[rgb(245,201,28)]">clarity</span> to complexity.
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl font-light leading-relaxed mb-16">
              Wildcat is a strategic consultancy that helps businesses find their direction, tell their story, and grow with intent.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 border-t border-neutral-200 pt-8 mt-12 w-full">
              <p className="text-sm font-mono tracking-widest text-neutral-500 uppercase">
                Strategy. Narrative. Growth.
              </p>
              <Link
                to="/capabilities"
                className="group flex items-center gap-3 text-sm font-medium uppercase tracking-widest bg-[rgb(245,201,28)] text-black px-6 py-4 hover:opacity-80 transition-opacity"
              >
                Explore Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
                We're not consultants. <br />
                <span className="text-[rgb(245,201,28)]">We're partners.</span>
              </h2>
              <p className="text-xl text-neutral-600 font-light leading-relaxed mb-6">
                Founded on the belief that great businesses are built on clarity, not complexity. We work with leaders who are ready to make meaningful change.
              </p>
              <p className="text-xl text-neutral-600 font-light leading-relaxed mb-8">
                Our approach combines cultural insight, strategic thinking, and practical execution to help you navigate challenges and seize opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[rgb(245,201,28)] rounded-full"></div>
                  <span className="text-lg">Data-driven insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[rgb(245,201,28)] rounded-full"></div>
                  <span className="text-lg">Strategic clarity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[rgb(245,201,28)] rounded-full"></div>
                  <span className="text-lg">Measurable growth</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 lg:p-12 rounded-2xl border border-neutral-200"
            >
              <h3 className="text-2xl font-medium mb-6">Our Approach</h3>
              <div className="space-y-6">
                <div className="pb-6 border-b border-neutral-200">
                  <h4 className="text-lg font-medium mb-2">Listen First</h4>
                  <p className="text-neutral-600">We start by understanding your world - your challenges, your opportunities, your vision.</p>
                </div>
                <div className="pb-6 border-b border-neutral-200">
                  <h4 className="text-lg font-medium mb-2">Think Clearly</h4>
                  <p className="text-neutral-600">We bring clarity to complex problems through structured thinking and analysis.</p>
                </div>
                <div className="pb-6 border-b border-neutral-200">
                  <h4 className="text-lg font-medium mb-2">Act Decisively</h4>
                  <p className="text-neutral-600">We help you move forward with confidence and purpose.</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Grow Sustainably</h4>
                  <p className="text-neutral-600">We ensure your growth is steady, strategic, and sustainable.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
              Ready to bring <span className="text-[rgb(245,201,28)]">clarity</span> to your business?
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 font-light max-w-3xl mx-auto">
              Let's talk about your challenges and opportunities. We're here to help you move forward with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-center p-8 bg-neutral-50 rounded-2xl"
            >
              <Mail className="w-8 h-8 text-[rgb(245,201,28)] mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Email</h3>
              <p className="text-neutral-600">hello@wildcat.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-center p-8 bg-neutral-50 rounded-2xl"
            >
              <Phone className="w-8 h-8 text-[rgb(245,201,28)] mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Phone</h3>
              <p className="text-neutral-600">+1 (555) 123-4567</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-center p-8 bg-neutral-50 rounded-2xl"
            >
              <MapPin className="w-8 h-8 text-[rgb(245,201,28)] mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Location</h3>
              <p className="text-neutral-600">San Francisco, CA</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center"
          >
            <Link
              to="/capabilities"
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

export default WhoWeAre;
