"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="bg-secondary w-full py-16 md:py-24 lg:py-32 px-4 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(34,52,60,0.08)] bg-white relative z-10">
        
        {/* Left Image */}
        <div className="lg:w-1/2 relative h-[25vh] md:h-[40vh] lg:h-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-slate/20 to-transparent z-10 mix-blend-multiply" />
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200"
            alt="Interior Consultation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2 bg-gradient-to-br from-ice to-white p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col justify-center relative">
          
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-aqua/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <span className="text-teal text-[0.65rem] tracking-[0.2em] font-bold uppercase mb-4 block">
              Work With Us
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-slate mb-6 leading-tight">
              Book a Private <br /> Consultation
            </h2>
            <p className="text-slate/60 text-sm mb-12 max-w-md leading-relaxed">
              Let our expert designers help you curate the perfect pieces for your space. Schedule a complimentary session today.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="block px-0 pb-3 pt-3 w-full text-sm text-slate bg-transparent border-0 border-b border-slate/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer transition-colors"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-slate/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block px-0 pb-3 pt-3 w-full text-sm text-slate bg-transparent border-0 border-b border-slate/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer transition-colors"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-slate/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email Address
                </label>
              </div>

              {/* Interest */}
              <div className="relative">
                <select
                  id="interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="block px-0 pb-3 pt-3 w-full text-sm text-slate bg-transparent border-0 border-b border-slate/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer transition-colors cursor-pointer"
                  required
                >
                  <option value="" disabled className="text-slate/50">Select Area of Interest</option>
                  <option value="living" className="text-slate">Living Room Design</option>
                  <option value="bedroom" className="text-slate">Bedroom Styling</option>
                  <option value="dining" className="text-slate">Dining Room Setup</option>
                  <option value="full" className="text-slate">Full Home Makeover</option>
                </select>
                <label
                  htmlFor="interest"
                  className="absolute text-xs text-slate/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal"
                >
                  I'm interested in...
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-slate text-white hover:bg-teal py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors duration-300 shadow-md hover:shadow-xl hover:shadow-teal/20 mt-4"
              >
                Request Consultation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
