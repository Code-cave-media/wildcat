import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
          >
            <span className="text-sm font-sans uppercase tracking-widest text-muted-foreground">
              Inquiries
            </span>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mt-4 uppercase">
              Get in <span className="text-primary">Touch</span>
            </h1>
          </motion.div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif mb-6">General Information</h3>
              <p className="text-muted-foreground mb-8">
                For general questions, partnerships, or press inquiries, reach
                out to our team.
              </p>
              <div className="space-y-4 text-sm font-sans">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:hello@wildcat.agency"
                    className="text-primary hover:underline"
                  >
                    hello@wildcat.agency
                  </a>
                </p>
                <p>Phone: +1 (555) 000-0000</p>
                <p>Address: 123 Innovation Drive, Tech District, City</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-foreground/5 p-8"
            >
              <form
                className="space-y-6 flex flex-col"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-primary transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-primary transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-primary transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <MagneticButton className="self-start mt-4">
                  <button className="bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold uppercase tracking-tight hover:opacity-90 transition-opacity">
                    Send Message
                  </button>
                </MagneticButton>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
