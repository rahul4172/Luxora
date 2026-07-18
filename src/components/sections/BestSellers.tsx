"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const products = [
  {
    id: "p1",
    name: "Vespera Sofa",
    category: "Living Room",
    price: 38000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p2",
    name: "Lune Lounge Chair",
    category: "Living Room",
    price: 32000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p3",
    name: "Noir Dining Table",
    category: "Dining",
    price: 64000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p4",
    name: "Solace Bed",
    category: "Bedroom",
    price: 72000,
    rating: 4,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
  },
];

export default function BestSellers() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    }, e);
  };

  return (
    <section id="best-sellers" className="bg-background w-full py-32 px-4 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-teal text-[0.65rem] tracking-[0.2em] font-bold uppercase mb-4 block">
              Popular Picks
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate drop-shadow-sm">
              Best Sellers
            </h2>
          </div>
          <Link href="/products" className="hidden md:flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-slate/70 hover:text-teal transition-colors group">
            <span>View All Products</span>
            <div className="bg-aqua group-hover:bg-teal p-1.5 rounded-full transition-colors">
              <ArrowRight className="w-3 h-3 text-slate group-hover:text-white" />
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Box */}
              <div className="w-full aspect-[4/5] bg-grey rounded-3xl relative overflow-hidden mb-6 flex items-center justify-center shadow-sm group-hover:shadow-xl transition-all duration-700">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 mix-blend-multiply"
                />
                
                {/* Floating Add to Cart */}
                <div className="absolute bottom-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-20">
                  <button 
                    onClick={(e) => handleAddToCart(product, e)}
                    className="w-12 h-12 rounded-full bg-white text-teal flex items-center justify-center shadow-lg hover:bg-teal hover:text-white transition-colors"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              </div>

              {/* Product Details */}
              <div className="flex flex-col px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl text-slate">{product.name}</h3>
                  <span className="font-semibold text-slate/90">₹{product.price.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-slate/50 text-xs uppercase tracking-wider">{product.category}</span>
                  <div className="flex items-center space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < product.rating ? "fill-oak text-oak" : "fill-slate/10 text-slate/10"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All */}
        <Link href="/products" className="md:hidden mt-12 flex items-center justify-center space-x-2 text-xs font-semibold tracking-widest uppercase text-slate hover:text-teal transition-colors">
          <span>View All Products</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
