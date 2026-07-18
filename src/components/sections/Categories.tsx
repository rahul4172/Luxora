"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Living Room",
    image: "/living_room.png",
  },
  {
    title: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Dining",
    image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Workspace",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="bg-background py-24 w-full px-4 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1600px] mx-auto">
        {categories.map((category, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            key={category.title}
            className="group relative h-[60vh] md:h-[50vh] overflow-hidden cursor-pointer rounded-[32px] shadow-sm hover:shadow-[0_20px_40px_rgba(45,156,149,0.15)] transition-all duration-700"
          >
            {/* Image */}
            <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-slate/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-4">
                <h3 className="font-serif text-3xl text-white mb-2 flex items-center drop-shadow-sm">
                  {category.title}
                </h3>
                <div className="flex items-center space-x-2 text-ice text-sm tracking-wider uppercase opacity-0 -translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="font-semibold">Explore</span>
                  <div className="bg-teal/20 p-1.5 rounded-full backdrop-blur-sm">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
