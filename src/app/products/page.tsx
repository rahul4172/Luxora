"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Star, Filter, ChevronDown, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Extended Sample Data
const allProducts = [
  { id: "p1", name: "Vespera Sofa", category: "Living Room", price: 38000, rating: 5, image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80&w=800" },
  { id: "p2", name: "Lune Lounge Chair", category: "Living Room", price: 32000, rating: 5, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800" },
  { id: "p3", name: "Noir Dining Table", category: "Dining", price: 64000, rating: 5, image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&q=80&w=800" },
  { id: "p4", name: "Solace Bed", category: "Bedroom", price: 72000, rating: 4, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800" },
  { id: "p5", name: "Aura Pendant Light", category: "Lighting", price: 15000, rating: 4, image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
  { id: "p6", name: "Nuvola Modular Sofa", category: "Living Room", price: 85000, rating: 5, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800" },
  { id: "p7", name: "Haven Dining Chair", category: "Dining", price: 18000, rating: 4, image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800" },
  { id: "p8", name: "Eclipse Floor Lamp", category: "Lighting", price: 24000, rating: 5, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800" },
  { id: "p9", name: "Eternity Side Table", category: "Living Room", price: 22000, rating: 4, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=800" },
  { id: "p10", name: "Zenith Bedframe", category: "Bedroom", price: 95000, rating: 5, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800" },
  { id: "p11", name: "Serene Armchair", category: "Living Room", price: 42000, rating: 5, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800" },
  { id: "p12", name: "Komorebi Chandelier", category: "Lighting", price: 58000, rating: 5, image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800" },
];

const CATEGORIES = ["All", "Living Room", "Dining", "Bedroom", "Lighting"];
const SORTS = ["Featured", "Price: Low to High", "Price: High to Low"];

export default function ProductsPage() {
  const { addToCart } = useCart();
  
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sortBy, setSortBy] = useState("Featured");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault(); // prevent link navigation if we wrap in <Link>
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    }, e);
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Category
    if (selectedCategory !== "All") {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price
    result = result.filter(p => p.price <= maxPrice);

    // Sort
    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, maxPrice, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page Banner */}
      <div className="w-full bg-secondary pt-48 pb-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5 mix-blend-multiply" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <span className="text-teal text-xs tracking-[0.2em] font-bold uppercase mb-4 block">
            Catalogue
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-slate mb-6">
            All Collections
          </h1>
          <p className="text-slate/70">
            Explore our meticulously curated selection of premium furniture, designed to elevate your living spaces with timeless elegance.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row gap-12">
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center border-b border-teal/10 pb-4">
          <button 
            onClick={() => setIsMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-slate"
          >
            <Filter className="w-4 h-4" /> Filters
          </button>
          <span className="text-sm text-slate/50">{filteredProducts.length} Results</span>
        </div>

        {/* Sidebar Filters */}
        <aside className={`
          fixed inset-0 z-50 bg-white p-6 overflow-y-auto transition-transform duration-500 ease-in-out md:static md:w-64 md:block md:bg-transparent md:p-0 md:z-0 md:translate-x-0
          ${isMobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex justify-between items-center md:hidden mb-8">
            <h2 className="font-serif text-2xl text-slate">Filters</h2>
            <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2">
              <X className="w-6 h-6 text-slate/50" />
            </button>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate mb-6">Categories</h3>
            <div className="space-y-4">
              {CATEGORIES.map(cat => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedCategory === cat ? 'bg-teal border-teal' : 'border-teal/30 group-hover:border-teal'}`}>
                    {selectedCategory === cat && <div className="w-2 h-2 bg-white rounded-sm" />}
                  </div>
                  <span className={`text-sm transition-colors ${selectedCategory === cat ? 'text-slate font-medium' : 'text-slate/70 group-hover:text-slate'}`}>
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-12">
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate mb-6">Max Price</h3>
            <div className="space-y-4">
              <input 
                type="range" 
                min="10000" 
                max="100000" 
                step="5000"
                value={maxPrice} 
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-teal"
              />
              <div className="flex justify-between text-sm text-slate/70">
                <span>₹10,000</span>
                <span className="font-medium text-teal">₹{maxPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Top Bar */}
          <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-teal/10">
            <span className="text-sm text-slate/50">{filteredProducts.length} Results</span>
            
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-slate/50">Sort By:</span>
              <div className="relative group">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border-none text-sm font-medium text-slate cursor-pointer focus:outline-none pr-6"
                >
                  {SORTS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown className="w-4 h-4 text-slate absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {displayedProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="w-full aspect-[4/5] bg-grey rounded-3xl relative overflow-hidden mb-6 flex items-center justify-center shadow-sm group-hover:shadow-xl transition-all duration-700">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 mix-blend-multiply"
                    />
                    
                    <div className="absolute bottom-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-20">
                      <button 
                        onClick={(e) => handleAddToCart(product, e)}
                        className="w-12 h-12 rounded-full bg-white text-teal flex items-center justify-center shadow-lg hover:bg-teal hover:text-white transition-colors"
                      >
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  </div>

                  <div className="flex flex-col px-2">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-lg text-slate">{product.name}</h3>
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
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="w-full py-32 flex flex-col items-center justify-center text-center">
              <Filter className="w-12 h-12 text-slate/20 mb-4" />
              <h3 className="font-serif text-2xl text-slate mb-2">No products found</h3>
              <p className="text-slate/50">Try adjusting your filters or price range.</p>
              <button 
                onClick={() => { setSelectedCategory("All"); setMaxPrice(100000); }}
                className="mt-8 text-xs font-semibold tracking-widest uppercase text-teal hover:text-slate transition-colors border-b border-teal hover:border-slate pb-1"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Load More */}
          {visibleCount < filteredProducts.length && (
            <div className="w-full flex justify-center mt-16">
              <button 
                onClick={() => setVisibleCount(prev => prev + 8)}
                className="bg-transparent border border-teal/20 text-slate px-10 py-4 rounded-full font-semibold tracking-widest uppercase text-xs hover:border-teal hover:text-teal transition-all duration-300"
              >
                Load More
              </button>
            </div>
          )}

        </div>
      </div>
      <Footer />
    </main>
  );
}
