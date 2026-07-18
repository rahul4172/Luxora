"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=600",
];

export default function Instagram() {
  return (
    <section className="bg-background w-full overflow-hidden relative pt-12 pb-32">
      {/* Soft Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ice rounded-full blur-[150px] opacity-60 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal/10 shadow-sm mb-6"
          >
            <FaInstagram className="w-4 h-4 text-teal" />
            <span className="text-teal text-[0.65rem] tracking-[0.2em] font-bold uppercase">
              Join Our Community
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-slate mb-4"
          >
            @luxorainteriors
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate/60 max-w-md mx-auto text-sm leading-relaxed"
          >
            Get inspired by our latest collections, styling tips, and beautiful spaces created by our community.
          </motion.p>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {images.slice(0, 4).map((image, index) => (
            <motion.a
              href="#"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-3xl block shadow-sm hover:shadow-2xl transition-all duration-700 aspect-[4/5] ${
                index % 2 !== 0 ? "lg:mt-16" : ""
              }`}
            >
              <img
                src={image}
                alt={`Instagram Post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              
              {/* Premium Glassmorphism Hover Overlay */}
              <div className="absolute inset-0 bg-slate/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <FaInstagram className="w-8 h-8 text-white drop-shadow-md" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-20"
        >
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-slate transition-colors duration-300 group">
            Follow us for more inspiration
            <span className="w-6 h-[1px] bg-teal group-hover:bg-slate transition-colors duration-300 group-hover:w-10"></span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
