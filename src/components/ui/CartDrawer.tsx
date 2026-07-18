"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems, updateQuantity, cartTotal } = useCart();

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
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-slate/20 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-teal/10">
              <h2 className="font-serif text-2xl text-slate flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-teal" />
                Your Cart
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-ice text-slate/50 hover:text-slate transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-slate/50">
                  <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-secondary shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover mix-blend-multiply"
                      />
                    </div>
                    <div className="flex flex-col justify-between py-1 flex-1">
                      <div>
                        <h3 className="font-serif text-lg text-slate leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate/50 mt-1">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Control */}
                        <div className="flex items-center border border-teal/20 rounded-full">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-slate hover:text-teal transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-slate">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-slate hover:text-teal transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-semibold text-slate">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-teal/10 bg-ice/30">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate/70">Subtotal</span>
                  <span className="font-serif text-2xl text-slate">
                    ₹{cartTotal.toLocaleString()}
                  </span>
                </div>
                <button className="w-full bg-slate text-white py-4 rounded-full font-semibold tracking-widest uppercase text-xs hover:bg-teal hover:shadow-[0_10px_30px_rgba(45,156,149,0.3)] transition-all duration-300">
                  Proceed to Checkout
                </button>
                <p className="text-center text-[0.65rem] text-slate/50 uppercase tracking-widest mt-4">
                  Taxes and shipping calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
