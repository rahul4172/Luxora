"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { useEffect } from "react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const trendingSearches = [
    "Lounge Chairs",
    "Oak Dining Tables",
    "Minimalist Lighting",
    "Velvet Sofas",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-24 md:pt-32 px-4 bg-white/80 backdrop-blur-2xl"
        >
          {/* Close Background */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl relative z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 md:-right-12 p-2 text-slate/50 hover:text-slate transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-slate/30" />
              <input
                type="text"
                placeholder="Search for furniture, collections..."
                autoFocus
                className="w-full bg-white border border-teal/10 shadow-[0_20px_40px_rgba(45,156,149,0.08)] rounded-[2rem] py-6 pl-20 pr-8 text-2xl font-serif text-slate placeholder:text-slate/30 focus:outline-none focus:border-teal/30 focus:ring-4 focus:ring-teal/5 transition-all"
              />
            </div>

            {/* Trending Searches */}
            <div className="mt-8 px-6">
              <h3 className="text-xs font-bold tracking-widest uppercase text-teal mb-4">
                Trending Searches
              </h3>
              <div className="flex flex-wrap gap-3">
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    className="px-5 py-2.5 rounded-full bg-white border border-slate/10 text-slate/70 text-sm hover:border-teal hover:text-teal hover:shadow-sm transition-all"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
