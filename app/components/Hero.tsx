"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";  // <-- Add this import

interface Props {
  desktopBg: string;
  mobileBg: string;
}

export default function Hero({ desktopBg, mobileBg }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect viewport width on client
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const bgImage = isMobile ? mobileBg : desktopBg;

  return (
    <section
      className="min-h-[120vh] md:min-h-screen flex flex-col md:items-center relative bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-0" />

      {/* Content Container - MOBILE: TOP, DESKTOP: CENTER */}
      <div className="relative w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40 flex-1 flex flex-col justify-start md:justify-center items-center">
        <div className="w-full max-w-3xl text-center space-y-6 md:space-y-8 pt-20 md:pt-0">
          
          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] text-blue-200 uppercase bg-gradient-to-r from-blue-200/80 to-blue-100/80 bg-clip-text"
          >
            Professional House Painter
          </motion.p>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white drop-shadow-2xl tracking-tight"
          >
            Make Your Home
            <span className="block bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
              Look Fresh & Beautiful
            </span> 
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-100/95 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Interior and exterior painting with clean edges, smooth finish, and
            on‑time completion so you do not worry about the mess.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 rounded-3xl bg-gradient-to-r from-[#1E3A8A] to-blue-700 text-white text-base sm:text-lg font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get Free Estimate</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-full group-hover:translate-y-0" />
            </a>
            
            <a
              href="#recent-work"
              className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 rounded-3xl border-2 border-blue-200/50 text-blue-100 text-base sm:text-lg font-semibold hover:bg-blue-500/20 hover:border-blue-300 hover:text-white backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
            >
              View Recent Work
            </a>
          </motion.div>

          {/* Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center text-sm sm:text-base text-blue-100/90 pt-8"
          >
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>Free site visit & detailed quote</span>
            </div>
            <div className="hidden sm:block h-px w-20 bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
            <div className="flex flex-wrap gap-2 justify-center text-xs sm:text-sm font-medium">
              <span>Interior</span>
              <span className="text-blue-200/70">•</span>
              <span>Exterior</span>
              <span className="text-blue-200/70">•</span>
              <span>Repainting</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-6 border border-white/50 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <span className="text-xs font-medium tracking-wide uppercase">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}
