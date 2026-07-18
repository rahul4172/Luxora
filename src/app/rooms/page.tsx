"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const allRooms = [
  { id: "r1", title: "Minimalist Living", category: "Living Room", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" },
  { id: "r2", title: "Modern Bedroom", category: "Bedroom", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800" },
  { id: "r3", title: "Elegant Dining", category: "Dining", image: "/elegant_dining.png" },
  { id: "r4", title: "Luxury Lounge", category: "Living Room", image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800" },
  { id: "r5", title: "Cozy Workspace", category: "Workspace", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800" },
  { id: "r6", title: "Serene Sleep", category: "Bedroom", image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800" },
  { id: "r7", title: "Open Concept Dining", category: "Dining", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800" },
  { id: "r8", title: "Nordic Corner", category: "Living Room", image: "https://images.unsplash.com/photo-1567016546367-c27a0d56712e?auto=format&fit=crop&q=80&w=800" },
  { id: "r9", title: "Executive Office", category: "Workspace", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" },
  { id: "r10", title: "Morning Light Bedroom", category: "Bedroom", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800" },
];

const CATEGORIES = ["All Spaces", "Living Room", "Dining", "Bedroom", "Workspace"];

export default function RoomsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Spaces");

  // Filter Logic
  const filteredRooms = useMemo(() => {
    if (selectedCategory === "All Spaces") {
      return allRooms;
    }
    return allRooms.filter(r => r.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page Banner */}
      <div className="w-full bg-secondary pt-48 pb-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-multiply" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <span className="text-teal text-xs tracking-[0.2em] font-bold uppercase mb-4 block">
            Inspiration
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-slate mb-6">
            Curated Spaces
          </h1>
          <p className="text-slate/70">
            Explore our gallery of exquisitely styled rooms. Discover how Luxora pieces harmonise to create beautiful, livable environments.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-16">
        
        {/* Horizontal Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-teal text-white shadow-[0_8px_20px_rgba(45,156,149,0.3)]"
                  : "bg-white text-slate hover:text-teal hover:shadow-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredRooms.map((room, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                key={room.id}
                className="break-inside-avoid relative overflow-hidden rounded-[32px] group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <div className="w-full relative bg-grey overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-slate/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                    <div className="transform translate-y-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-teal text-[10px] tracking-widest uppercase font-bold mb-2 block drop-shadow-sm">
                        {room.category}
                      </span>
                      <h3 className="font-serif text-3xl text-white mb-6 drop-shadow-md">
                        {room.title}
                      </h3>
                      <button className="glass text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider backdrop-blur-md border border-white/20 pointer-events-auto hover:bg-white hover:text-teal transition-colors">
                        Explore Space
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredRooms.length === 0 && (
          <div className="w-full py-32 flex flex-col items-center justify-center text-center">
            <h3 className="font-serif text-2xl text-slate mb-2">No spaces found</h3>
            <p className="text-slate/50">Try adjusting your filters.</p>
          </div>
        )}

      </div>
      <Footer />
    </main>
  );
}
