"use client";

import { useState, useEffect } from "react";

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
      className="min-h-[80vh] md:min-h-screen flex items-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl text-center md:text-left space-y-6 md:space-y-8">
          <p className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] text-blue-200 uppercase">
            Professional House Painter
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Make Your Home
            <span className="block text-blue-200">
              Look Fresh & Beautiful
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-100/90 max-w-lg mx-auto md:mx-0">
            Interior and exterior painting with clean edges, smooth finish, and
            on‑time completion so you do not worry about the mess.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#1E3A8A] text-white text-sm sm:text-base font-semibold shadow-lg hover:bg-[#16357a] transition"
            >
              Get Free Estimate
            </a>
            <a
              href="#recent-work"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-blue-200 text-blue-100 text-sm sm:text-base font-semibold hover:bg-blue-100 hover:text-[#1E3A8A] transition bg-white/5 backdrop-blur"
            >
              View Recent Work
            </a>
          </div>

          {/* Highlights */}
          <div className="pt-4 md:pt-6 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center md:items-start justify-center md:justify-start text-xs sm:text-sm text-blue-100/90">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span>Free site visit & detailed quote</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-blue-100/40" />
            <div className="flex flex-wrap gap-2 justify-center">
              <span>Interior</span>
              <span>•</span>
              <span>Exterior</span>
              <span>•</span>
              <span>Repainting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
