"use client";

import { motion } from "framer-motion";
import { Hammer, Sparkles, Leaf, PenTool } from "lucide-react";

const features = [
  {
    icon: <Hammer className="w-8 h-8 stroke-[1] text-teal" />,
    title: "Lifetime Craftsmanship",
    description: "Built to last with meticulous attention to detail.",
  },
  {
    icon: <Sparkles className="w-8 h-8 stroke-[1] text-teal" />,
    title: "Premium Materials",
    description: "We use only the finest woods, fabrics & finishes.",
  },
  {
    icon: <Leaf className="w-8 h-8 stroke-[1] text-teal" />,
    title: "Sustainable Wood",
    description: "Responsibly sourced wood for a better tomorrow.",
  },
  {
    icon: <PenTool className="w-8 h-8 stroke-[1] text-teal" />,
    title: "Custom Designs",
    description: "Personalized furniture tailored to your style.",
  },
];

export default function Features() {
  return (
    <section className="bg-ice w-full py-24 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-aqua rounded-full blur-[100px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 max-w-[1600px] mx-auto relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-white/40 transition-colors duration-500 group"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-md">
              {feature.icon}
            </div>
            <h3 className="font-serif text-xl text-slate mb-3">{feature.title}</h3>
            <p className="text-slate/60 text-sm leading-relaxed max-w-[220px]">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
