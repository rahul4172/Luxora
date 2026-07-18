"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate to-[#1a2830] text-white pt-32 pb-12 px-4 md:px-12 lg:px-24 overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal rounded-full blur-[150px] opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 pr-8">
            <h2 className="font-serif text-4xl mb-6 tracking-wide">LUXORA</h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-10 font-light">
              Crafting premium, Scandinavian-inspired furniture that brings warmth, elegance, and timeless beauty into your home.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-teal hover:border-teal transition-all duration-300">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-teal hover:border-teal transition-all duration-300">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-teal hover:border-teal transition-all duration-300">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-teal hover:border-teal transition-all duration-300">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-semibold text-xs tracking-widest uppercase mb-8 text-teal">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Stores", "Careers", "Sustainability", "Press"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors relative group inline-block">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-teal transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-semibold text-xs tracking-widest uppercase mb-8 text-teal">Support</h4>
            <ul className="space-y-4">
              {["Contact Us", "FAQ", "Shipping & Returns", "Warranty", "Care Guide"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors relative group inline-block">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-teal transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-xs tracking-widest uppercase mb-8 text-teal">Stay Inspired</h4>
            <p className="text-white/60 text-sm mb-6">
              Subscribe to our newsletter for exclusive offers, design inspiration, and new arrivals.
            </p>
            <form className="relative glass-dark rounded-full p-1.5 flex items-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-transparent border-none outline-none text-sm text-white px-4 placeholder:text-white/40"
                required
              />
              <button 
                type="submit" 
                className="w-10 h-10 rounded-full bg-teal flex items-center justify-center hover:scale-105 transition-transform shrink-0"
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-xs">
          <p>&copy; {currentYear} Luxora Interiors. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
