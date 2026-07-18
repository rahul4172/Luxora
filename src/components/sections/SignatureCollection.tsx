"use client";

import { motion } from "framer-motion";

export default function SignatureCollection() {
  return (
    <section id="collections" className="bg-secondary w-full py-16 md:py-24 lg:py-32 px-4 md:px-12 lg:px-24 overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ice rounded-full blur-[120px] opacity-60 translate-x-1/2 -translate-y-1/4 pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24 max-w-[1600px] mx-auto relative z-10">
        
        {/* Text Content */}
        <div className="lg:w-5/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-teal text-[0.65rem] tracking-[0.2em] font-bold uppercase mb-8 block">
              Our Collection
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-slate leading-[1.05] mb-8">
              Signature <br /> Collection
            </h2>
            <p className="text-slate/70 text-base leading-relaxed max-w-sm mb-12 font-light">
              Handcrafted with precision. <br />
              Made from the finest materials. <br />
              Designed to last generations.
            </p>
            <button className="block w-fit bg-white border border-teal/20 text-slate hover:border-teal hover:text-teal px-10 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-500 shadow-[0_8px_30px_rgba(45,156,149,0.06)] hover:shadow-[0_12px_40px_rgba(45,156,149,0.15)] hover:-translate-y-1">
              Discover More
            </button>
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="lg:w-7/12 w-full relative aspect-[4/3] sm:aspect-video md:aspect-auto md:h-[80vh] mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative overflow-hidden rounded-[40px] shadow-[0_30px_60px_rgba(34,52,60,0.08)]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate/30 to-transparent z-10 mix-blend-multiply" />
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1600"
              alt="Signature Collection Lounge Chair"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
