"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: "Amazing work! My 3BHK looks brand new. Clean, fast, and perfect finish. Highly recommend PaintBro!",
    location: "Andheri West",
    avatar: "/images/avatar1.jpg",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    rating: 5,
    text: "Professional team, no mess, completed office exterior in 5 days. Weatherproof paint looks fantastic!",
    location: "BKC, Mumbai",
    avatar: "/images/avatar2.jpg",
  },
  {
    id: 3,
    name: "Anita Desai",
    rating: 4.9,
    text: "Villa painting with special textures turned out beautiful. Punctual and great communication throughout.",
    location: "Malad West",
    avatar: "/images/avatar3.jpg",
  },
  {
    id: 4,
    name: "Vikram Singh",
    rating: 5,
    text: "Best value for money. Restaurant interior looks premium now. Will use them for next branch too!",
    location: "Lower Parel",
    avatar: "/images/avatar4.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1E3A8A] via-slate-800 to-[#1E3A8A] bg-clip-text text-transparent mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            500+ Happy Customers Across Mumbai & Suburbs
          </p>
        </motion.div>

        {/* FIXED Mobile horizontal slider - No text clash */}
        <div className="block md:hidden">
          <div className="overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-slate-100 mx-4 mb-12">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 w-full p-8 text-center">
                  {/* Avatar */}
                  <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#1E3A8A] to-slate-800 flex items-center justify-center shadow-2xl">
                    <span className="text-3xl font-bold text-white">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex justify-center mb-6 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < testimonial.rating
                            ? "text-yellow-400 drop-shadow-lg"
                            : "text-slate-300"
                        }`}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-slate-700 text-base leading-relaxed mb-8 italic max-w-md mx-auto px-4">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Name & Location */}
                  <div className="space-y-1">
                    <p className="font-bold text-xl text-[#1E3A8A]">{testimonial.name}</p>
                    <p className="text-sm text-slate-500 font-medium">📍 {testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile dots */}
          <div className="flex justify-center gap-3 mb-12 px-4">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-10 bg-[#1E3A8A] shadow-lg"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop carousel */}
        <div className="hidden md:block">
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center p-12 bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-100"
            >
              <div className="w-28 h-28 mx-auto mb-10 rounded-full bg-gradient-to-br from-[#1E3A8A] to-slate-800 flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold text-white">
                  {testimonials[currentIndex].name[0]}
                </span>
              </div>
              <div className="flex justify-center mb-8 gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-3xl ${
                      i < testimonials[currentIndex].rating
                        ? "text-yellow-400 drop-shadow-lg"
                        : "text-slate-300"
                    }`}
                  >
                    ⭐
                  </span>
                ))}
              </div>
              <blockquote className="text-slate-700 text-2xl lg:text-3xl italic mb-10 leading-relaxed max-w-3xl mx-auto px-8">
                "{testimonials[currentIndex].text}"
              </blockquote>
              <div className="space-y-2">
                <p className="font-bold text-3xl text-[#1E3A8A]">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xl text-slate-500 font-medium">
                  📍 {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>

            {/* Desktop dots */}
            <div className="flex justify-center gap-3 mt-16">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-12 bg-[#1E3A8A] shadow-lg"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "25K+", label: "Sq.ft Painted" },
            { number: "98%", label: "On-time Delivery" },
            { number: "5★", label: "Average Rating" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100"
            >
              <p className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-2">
                {stat.number}
              </p>
              <p className="text-sm md:text-base text-slate-600 font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
