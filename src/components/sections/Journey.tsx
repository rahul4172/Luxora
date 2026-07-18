"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "1996",
    title: "Company Founded",
    description: "A small workshop with a big dream.",
  },
  {
    year: "2008",
    title: "National Expansion",
    description: "Brought our designs to homes across the country.",
  },
  {
    year: "2016",
    title: "Luxury Collection",
    description: "Launched our exclusive signature collection.",
  },
  {
    year: "2024",
    title: "Global Projects",
    description: "Now crafting spaces around the world.",
  },
];

export default function Journey() {
  return (
    <section id="about" className="bg-slate w-full py-32 px-4 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left Side: Timeline */}
        <div className="lg:w-5/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-ice/70 text-[0.65rem] tracking-[0.2em] font-bold uppercase mb-6 block">
              Our Journey
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-16 drop-shadow-md">
              Built on Trust. <br /> Driven by Passion.
            </h2>
            
            {/* Timeline Line */}
            <div className="relative border-l border-white/10 pl-10 space-y-12 ml-3">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group cursor-default"
                >
                  {/* Dot */}
                  <div className="absolute -left-[45px] top-1 w-2.5 h-2.5 rounded-full bg-oak border-[4px] box-content border-slate group-hover:scale-125 transition-transform duration-300" />
                  
                  <h4 className="font-serif text-3xl text-oak mb-3 transition-colors duration-300">{item.year}</h4>
                  <h5 className="text-white font-medium text-base mb-2">{item.title}</h5>
                  <p className="text-white/60 text-sm leading-relaxed max-w-[280px]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-7/12 hidden lg:block relative h-[70vh] md:h-[80vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative rounded-[40px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          >
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate/60 via-transparent to-transparent z-10 mix-blend-multiply" />
            <img
              src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=1200"
              alt="Our Journey Lounge"
              className="w-full h-full object-cover object-center opacity-90 transition-transform duration-1000 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
