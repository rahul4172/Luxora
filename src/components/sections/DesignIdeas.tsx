"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const rooms = [
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    title: "Minimalist Living",
  },
  {
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
    title: "Modern Bedroom",
  },
  {
    image: "/elegant_dining.png",
    title: "Elegant Dining",
  },
  {
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800",
    title: "Luxury Lounge",
  },
];

export default function DesignIdeas() {
  return (
    <section id="inspiration" className="bg-secondary w-full py-32 px-4 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-teal text-[0.65rem] tracking-[0.2em] font-bold uppercase mb-4 block">
              Room Inspiration
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate drop-shadow-sm">
              Design Ideas for You
            </h2>
          </div>
          <Link href="/rooms" className="hidden md:flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-slate/70 hover:text-teal transition-colors group">
            <span>View All Rooms</span>
            <div className="bg-aqua group-hover:bg-teal p-1.5 rounded-full transition-colors">
              <ArrowRight className="w-3 h-3 text-slate group-hover:text-white" />
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[60vh] md:h-[70vh]">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden cursor-pointer rounded-[32px] shadow-sm hover:shadow-2xl transition-shadow duration-700"
            >
              <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate/60 via-slate/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-4">
                  <h3 className="font-serif text-2xl text-white mb-4 drop-shadow-md">
                    {room.title}
                  </h3>
                  <div className="opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                    <Link href="/rooms" className="inline-block glass text-slate hover:bg-white hover:text-teal px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-colors shadow-[0_8px_32px_rgba(45,156,149,0.2)]">
                      View Space
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All */}
        <Link href="/rooms" className="md:hidden mt-12 flex items-center justify-center space-x-2 text-xs font-semibold tracking-widest uppercase text-slate hover:text-teal transition-colors group">
          <span>View All Rooms</span>
          <div className="bg-aqua group-hover:bg-teal p-1.5 rounded-full transition-colors">
            <ArrowRight className="w-3 h-3 text-slate group-hover:text-white" />
          </div>
        </Link>
      </div>
    </section>
  );
}
