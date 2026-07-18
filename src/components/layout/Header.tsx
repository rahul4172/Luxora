"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import SearchModal from "@/components/ui/SearchModal";
import CartDrawer from "@/components/ui/CartDrawer";
import LoginModal from "@/components/ui/LoginModal";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  // UI State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cart Context
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Shop All", href: "/products" },
    { name: "Categories", href: "/#categories" },
    { name: "Collections", href: "/#collections" },
    { name: "Inspiration", href: "/#inspiration" },
    { name: "About Us", href: "/#about" },
  ];

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 flex justify-center w-full transition-all duration-500">
        <div
          className={cn(
            "flex items-center justify-between px-6 py-4 rounded-full transition-all duration-500 w-full max-w-7xl",
            scrolled || isMobileMenuOpen
              ? "bg-white/70 backdrop-blur-xl border border-teal/10 shadow-[0_8px_32px_rgba(45,156,149,0.08)] py-3" 
              : "bg-transparent border border-transparent"
          )}
        >
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-10 p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", (scrolled || isMobileMenuOpen) ? "text-slate" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", scrolled ? "text-slate" : "text-white")} />
            )}
          </button>

          {/* Logo */}
          <div className="flex flex-col z-10 absolute left-1/2 -translate-x-1/2 lg:static lg:transform-none">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={cn("font-serif text-2xl tracking-widest leading-none transition-colors", (scrolled || isMobileMenuOpen) ? "text-slate" : "text-white")}>
              LUXORA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 z-10 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs font-medium tracking-wider uppercase transition-colors relative group",
                  scrolled ? "text-slate/70 hover:text-teal" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full",
                  scrolled ? "bg-teal" : "bg-white"
                )}></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 lg:space-x-6 z-10">
            <div className={cn("flex items-center space-x-3 lg:space-x-4", (scrolled || isMobileMenuOpen) ? "text-slate" : "text-white")}>
              <button onClick={() => setIsSearchOpen(true)} className="hover:opacity-70 transition-opacity hidden sm:block">
                <Search className="w-[18px] h-[18px] stroke-[1.5]" />
              </button>
              <button onClick={() => setIsLoginOpen(true)} className="hover:opacity-70 transition-opacity hidden sm:block">
                <User className="w-[18px] h-[18px] stroke-[1.5]" />
              </button>
              <button 
                id="cart-icon"
                onClick={() => setIsCartOpen(true)} 
                className="hover:opacity-70 transition-opacity relative"
              >
                <ShoppingBag className="w-[18px] h-[18px] stroke-[1.5]" />
                {cartCount > 0 && (
                  <span className={cn(
                    "absolute -top-1.5 -right-1.5 text-[0.6rem] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in duration-300",
                    (scrolled || isMobileMenuOpen) ? "bg-teal text-white" : "bg-white text-slate"
                  )}>
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
            
            <button 
              onClick={() => setIsConsultationOpen(true)}
              className={cn(
                "text-xs font-semibold px-6 py-3 tracking-wider transition-all duration-300 rounded-full hover:scale-105 shadow-sm hidden lg:block",
                scrolled ? "bg-slate text-white hover:bg-teal hover:shadow-lg hover:shadow-teal/20" : "bg-white/90 text-slate hover:bg-white"
              )}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 pb-6 overflow-y-auto lg:hidden"
          >
            <nav className="flex flex-col space-y-8 mt-12 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl text-slate hover:text-teal transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-16 flex flex-col items-center space-y-6">
              <button 
                onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }}
                className="flex items-center space-x-3 text-slate hover:text-teal"
              >
                <Search className="w-5 h-5" />
                <span className="text-sm font-semibold tracking-widest uppercase">Search</span>
              </button>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); setIsLoginOpen(true); }}
                className="flex items-center space-x-3 text-slate hover:text-teal"
              >
                <User className="w-5 h-5" />
                <span className="text-sm font-semibold tracking-widest uppercase">Account</span>
              </button>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); setIsConsultationOpen(true); }}
                className="w-full max-w-xs bg-slate text-white py-4 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-teal transition-colors"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals & Drawers */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </>
  );
}
