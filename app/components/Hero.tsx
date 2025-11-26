"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface Props {
  desktopImages: string[];
  mobileImages: string[];
  desktopBg: string;
  mobileBg: string;
}

export default function Hero({
  desktopImages,
  mobileImages,
  desktopBg,
  mobileBg,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Detect viewport width to toggle mobile/desktop mode
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;
  const bgImage = isMobile ? mobileBg : desktopBg;

  const startAutoSlide = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images.length]);

  const pauseAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resumeAutoSlide = () => {
    startAutoSlide();
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="relative max-w-6xl px-6 py-16 flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Left: Text */}
        <div className="max-w-xl text-center md:text-left md:flex-1 space-y-6 text-white">
          <p className="text-sm md:text-base font-semibold tracking-widest text-[#93c5fd] uppercase">
            Professional House Painter 
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Clean, Quality Painting
            <span className="block text-[#bfdbfe] mt-1">
              for Your Home & Office
            </span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-md mx-auto md:mx-0">
            Reliable interior and exterior painting with smooth finish, neat
            work, and on-time completion.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a
              href="#contact"
              className="px-7 py-3 bg-[#1E3A8A] rounded-full font-semibold text-white shadow-lg hover:bg-[#16357a] transition"
            >
              Get Free Estimate
            </a>
            <a
              href="#portfolio"
              className="px-7 py-3 rounded-full border border-[#93c5fd] text-[#93c5fd] font-semibold hover:bg-[#93c5fd] hover:text-[#1E3A8A] transition"
            >
              View Recent Work
            </a>
          </div>

          <div className="mt-6 flex justify-center md:justify-start items-center gap-10 text-sm text-[#bfdbfe]">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span>Free site visit & quote</span>
            </div>
            <span>Interior • Exterior • Repainting</span>
          </div>
        </div>

        {/* Right: Carousel card */}
        <div
          className="w-full max-w-sm rounded-3xl bg-white shadow-2xl p-6 relative overflow-hidden"
          onMouseEnter={pauseAutoSlide}
          onMouseLeave={resumeAutoSlide}
        >
          <div className="relative w-full h-64 rounded-2xl overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt={`Project image ${currentIndex + 1}`}
              fill
              className="object-cover rounded-2xl transition-opacity duration-700 ease-in-out"
              key={currentIndex}
            />
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "bg-[#1E3A8A]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="mt-6 text-center space-y-2 text-gray-700">
            <p className="uppercase text-xs tracking-wide">Recent Project</p>
            <h3 className="font-semibold text-lg text-slate-800">
              Interior & Exterior Painting
            </h3>
            <p className="text-sm max-w-xs mx-auto">
              Smooth finishes, two-coat painting, and on-time completion &mdash;
              quality results you can trust.
            </p>
          </div>

          <div className="mt-4 flex justify-between text-gray-400 text-xs font-medium max-w-xs mx-auto">
            <span>Living room &middot; Bedroom &middot; Kitchen &middot; Exterior walls</span>
            <span className="text-[#1E3A8A]">On-time delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
