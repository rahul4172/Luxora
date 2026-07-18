"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

interface FlyingItem {
  id: number;
  image: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, e?: React.MouseEvent) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [flyingItems, setFlyingItems] = useState<FlyingItem[]>([]);
  const [flyingIdCounter, setFlyingIdCounter] = useState(0);

  // Load cart from local storage on mount
  useEffect(() => {
    setIsClient(true);
    const savedCart = localStorage.getItem("luxora_cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart");
      }
    }
  }, []);

  // Save cart to local storage on changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("luxora_cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isClient]);

  const addToCart = (newItem: Omit<CartItem, "quantity">, e?: React.MouseEvent) => {
    // Add to cart state immediately
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...newItem, quantity: 1 }];
    });

    // Handle flying animation if event is provided
    if (e && e.currentTarget) {
      const cartIcon = document.getElementById("cart-icon");
      if (cartIcon) {
        const cartRect = cartIcon.getBoundingClientRect();
        const sourceRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        
        const newFlyingItem: FlyingItem = {
          id: flyingIdCounter,
          image: newItem.image,
          startX: sourceRect.left + sourceRect.width / 2,
          startY: sourceRect.top + sourceRect.height / 2,
          endX: cartRect.left + cartRect.width / 2,
          endY: cartRect.top + cartRect.height / 2,
        };
        
        setFlyingItems((prev) => [...prev, newFlyingItem]);
        setFlyingIdCounter((prev) => prev + 1);
        
        // Remove flying item after animation completes
        setTimeout(() => {
          setFlyingItems((prev) => prev.filter((item) => item.id !== newFlyingItem.id));
        }, 800); // match animation duration
      }
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
      }}
    >
      {children}
      
      {/* Render Flying Items */}
      <AnimatePresence>
        {flyingItems.map((item) => (
          <motion.img
            key={item.id}
            src={item.image}
            initial={{ 
              position: "fixed",
              left: item.startX, 
              top: item.startY, 
              x: "-50%", 
              y: "-50%", 
              scale: 0.5, 
              opacity: 1, 
              zIndex: 9999,
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              objectFit: "cover"
            }}
            animate={{ 
              left: item.endX, 
              top: item.endY, 
              scale: 0.1, 
              opacity: 0 
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1] // Apple-like ease out
            }}
            exit={{ opacity: 0 }}
            className="pointer-events-none shadow-xl border-2 border-white"
          />
        ))}
      </AnimatePresence>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
