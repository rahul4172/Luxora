"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Mail, MessageSquare } from "lucide-react";
import { useEffect } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate/60 backdrop-blur-md"
        >
          {/* Close Background */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl bg-white rounded-[40px] shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left Graphic */}
            <div className="w-full md:w-2/5 bg-secondary p-8 flex flex-col justify-between hidden md:flex relative">
              <div className="absolute inset-0 bg-gradient-to-t from-teal/10 to-transparent mix-blend-multiply pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-serif text-3xl text-slate leading-tight mb-4">
                  Let's design your dream space.
                </h3>
                <p className="text-sm text-slate/70">
                  Our expert designers are ready to help you create a home that reflects your unique style.
                </p>
              </div>
              
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg relative z-10 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=400" 
                  alt="Design Inspiration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full md:w-3/5 p-8 md:p-12 relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-ice text-slate/50 hover:text-slate transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-teal text-[0.65rem] tracking-[0.2em] font-bold uppercase mb-4 block">
                Book Consultation
              </span>
              <h2 className="font-serif text-2xl text-slate mb-8">Request an Appointment</h2>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-secondary/50 border border-teal/10 rounded-full py-3 pl-12 pr-6 text-sm text-slate placeholder:text-slate/40 focus:outline-none focus:border-teal/30 focus:bg-white transition-all"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-secondary/50 border border-teal/10 rounded-full py-3 pl-12 pr-6 text-sm text-slate placeholder:text-slate/40 focus:outline-none focus:border-teal/30 focus:bg-white transition-all"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" />
                  <input
                    type="date"
                    className="w-full bg-secondary/50 border border-teal/10 rounded-full py-3 pl-12 pr-6 text-sm text-slate focus:outline-none focus:border-teal/30 focus:bg-white transition-all"
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-6 top-4 w-4 h-4 text-slate/40" />
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={3}
                    className="w-full bg-secondary/50 border border-teal/10 rounded-3xl py-3 pl-12 pr-6 text-sm text-slate placeholder:text-slate/40 focus:outline-none focus:border-teal/30 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate text-white py-4 rounded-full font-semibold tracking-widest uppercase text-xs hover:bg-teal hover:shadow-[0_10px_30px_rgba(45,156,149,0.3)] transition-all duration-300 mt-4"
                >
                  Confirm Request
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
