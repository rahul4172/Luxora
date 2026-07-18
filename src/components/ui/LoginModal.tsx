"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock } from "lucide-react";
import { useEffect } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate/40 backdrop-blur-sm"
        >
          {/* Close Background */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md bg-white rounded-[32px] p-8 md:p-12 shadow-2xl relative z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-ice text-slate/50 hover:text-slate transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-10">
              <span className="text-teal text-[0.65rem] tracking-[0.2em] font-bold uppercase mb-4 block">
                Admin Portal
              </span>
              <h2 className="font-serif text-3xl text-slate">Welcome Back</h2>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate/40" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-secondary/50 border border-teal/10 rounded-full py-4 pl-14 pr-6 text-sm text-slate placeholder:text-slate/40 focus:outline-none focus:border-teal/30 focus:bg-white transition-all"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate/40" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-secondary/50 border border-teal/10 rounded-full py-4 pl-14 pr-6 text-sm text-slate placeholder:text-slate/40 focus:outline-none focus:border-teal/30 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button type="button" className="text-[0.7rem] font-semibold text-slate/50 hover:text-teal uppercase tracking-wider transition-colors">
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-slate text-white py-4 rounded-full font-semibold tracking-widest uppercase text-xs hover:bg-teal hover:shadow-[0_10px_30px_rgba(45,156,149,0.3)] transition-all duration-300 mt-4"
              >
                Sign In
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
