"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen w-full overflow-hidden bg-background flex items-center"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Scandinavian Soft Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-ice/90 via-ice/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-teal/10 z-10" />
        <img
          src="/hero.png"
          alt="Scandinavian Luxury Living"
          className="w-full h-full object-cover object-center scale-105"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 md:px-12 lg:px-24 pt-32 flex flex-col justify-center h-full max-w-[1600px] mx-auto">
        <div className="max-w-2xl flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-teal text-xs tracking-[0.2em] font-semibold uppercase mb-6 block">
              Scandinavian Elegance
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-slate leading-[1.05] mb-6 drop-shadow-sm">
              Crafting <br />
              Timeless <br />
              Living Spaces
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate/70 text-lg md:text-xl max-w-md mb-12 font-light"
          >
            Luxury furniture designed for modern, airy, and warm homes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6"
          >
            <button className="bg-teal hover:bg-slate text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 shadow-[0_8px_20px_rgba(45,156,149,0.3)] hover:shadow-xl hover:-translate-y-1">
              Explore Collection
            </button>
            <button className="flex items-center space-x-3 text-slate hover:text-teal px-6 py-4 rounded-full transition-all group glass">
              <span className="text-sm font-semibold tracking-wider">Watch Film</span>
              <div className="bg-slate group-hover:bg-teal text-white rounded-full p-2 transition-colors">
                <Play className="w-3 h-3 fill-white" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Floating Glass Stats */}
        <div className="absolute right-8 lg:right-24 bottom-24 hidden md:flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass px-8 py-6 rounded-3xl"
          >
            <div className="text-teal font-serif text-3xl mb-1">5000+</div>
            <div className="text-slate/60 text-xs tracking-wider uppercase font-semibold">Happy Homes</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="glass px-8 py-6 rounded-3xl"
          >
            <div className="text-teal font-serif text-3xl mb-1">75+</div>
            <div className="text-slate/60 text-xs tracking-wider uppercase font-semibold">Design Awards</div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-12 flex flex-col items-center gap-4"
        >
          <span className="text-slate/40 text-[10px] tracking-widest uppercase whitespace-nowrap">Scroll Down</span>
          <div className="w-[1px] h-16 bg-slate/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 64, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-1/2 bg-teal absolute top-0 left-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
