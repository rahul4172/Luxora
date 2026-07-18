"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Eleanor Richards",
    role: "Interior Designer",
    quote: "Luxora transformed my client's penthouse. The craftsmanship is simply unmatched in the industry, and the attention to detail is evident in every single piece.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "James Sterling",
    role: "Architect",
    quote: "A perfect blend of modern minimalism and enduring quality. Their bespoke pieces bring a sense of warmth and character to every space I design.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Sophia Martinez",
    role: "Homeowner",
    quote: "The signature lounge chair isn't just furniture; it's a piece of art that anchors our entire living room. It's incredibly comfortable and beautiful.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="bg-background w-full py-16 md:py-24 lg:py-32 px-4 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-teal text-[0.65rem] tracking-[0.2em] font-bold uppercase mb-4 block">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-slate drop-shadow-sm">
            Beautiful Homes
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="w-full max-w-4xl relative">
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="glass rounded-[40px] p-6 sm:p-10 md:p-16 flex flex-col items-center text-center relative"
                  >
                    <Quote className="absolute top-4 left-4 md:top-8 md:left-8 w-8 h-8 md:w-12 md:h-12 text-teal/10 rotate-180" />
                    <Quote className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-8 h-8 md:w-12 md:h-12 text-teal/10" />
                    
                    <p className="font-serif text-xl md:text-2xl text-slate/80 leading-relaxed mb-10 max-w-2xl relative z-10">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border border-teal/20 shadow-md">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-slate font-semibold text-sm tracking-wider uppercase mb-1">
                        {testimonial.name}
                      </h4>
                      <span className="text-teal text-xs tracking-widest uppercase font-medium">
                        {testimonial.role}
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-20">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-white text-slate hover:text-teal shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-20">
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-white text-slate hover:text-teal shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
