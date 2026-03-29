import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 2.5 second global app loading lock for more dramatic animation
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1200); // give time for the sweeping exit animations
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }} // Fade out the container last
        >
          {/* Slicing Curtain Exit Animations */}
          <motion.div 
            initial={{ height: "100%" }} 
            exit={{ height: "0%" }} 
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-0 left-0 w-[33.4%] bg-[#0a0a0a] z-[60] origin-top"
          />
          <motion.div 
            initial={{ height: "100%" }} 
            exit={{ height: "0%" }} 
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
            className="absolute top-0 left-[33.3%] w-[33.4%] bg-[#0a0a0a] z-[60] origin-top"
          />
          <motion.div 
            initial={{ height: "100%" }} 
            exit={{ height: "0%" }} 
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            className="absolute top-0 left-[66.6%] w-[33.4%] bg-[#0a0a0a] z-[60] origin-top"
          />

          {/* Golden Blob - Highly Kinetic */}
          <motion.div 
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: [0, 1.5, 1], rotate: 180 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-[rgb(245,201,28)]/20 rounded-full blur-[100px] z-[55]"
          />
          <motion.div 
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: [0, 2, 1.2], rotate: -180 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute w-[40vw] h-[40vw] max-w-[300px] max-h-[300px] bg-white/10 rounded-full blur-[80px] z-[55]"
          />

          <motion.div
            className="relative z-[70] flex flex-col items-center gap-10"
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Logo Image with Glitch/Reveal effect */}
            <div className="overflow-hidden pb-2">
              <motion.img 
                src={logo} 
                alt="Wildcat" 
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="w-48 md:w-72" 
                style={{ filter: "brightness(0) invert(1)" }} 
              />
            </div>
            
            {/* Advanced Progress indicator */}
            <div className="flex flex-col items-center gap-4 w-56">
              <div className="h-[2px] w-full bg-white/10 relative overflow-hidden rounded-full">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  className="absolute top-0 left-0 h-full bg-[rgb(245,201,28)]"
                />
              </div>
              <div className="flex justify-between w-full">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase text-white/50"
                >
                  System
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase text-[rgb(245,201,28)]"
                >
                  Loading
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Kinetic Typography Background */}
          <div className="absolute inset-0 z-[50] flex flex-col justify-between py-10 opacity-5 pointer-events-none overflow-hidden">
            <motion.h1 
              initial={{ x: "-10%" }}
              animate={{ x: "-50%" }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              className="text-[15vw] font-bold text-white whitespace-nowrap leading-none"
            >
              CULTURAL OBSERVER • CULTURAL OBSERVER • CULTURAL OBSERVER
            </motion.h1>
            <motion.h1 
              initial={{ x: "-50%" }}
              animate={{ x: "-10%" }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              className="text-[15vw] font-bold text-transparent whitespace-nowrap leading-none"
              style={{ WebkitTextStroke: "2px white" }}
            >
              WILDCAT AGENCY • WILDCAT AGENCY • WILDCAT AGENCY
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
