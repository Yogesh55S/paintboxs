"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/recent-work", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function StickyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Sticky Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-slate-200" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110`}>
                <span className="text-2xl font-bold text-white"></span>
              </div>
              <div className={`${scrolled ? "text-slate-900" : "text-white"} font-bold text-xl lg:text-2xl`}>
                PaintBro
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative font-semibold py-2 px-3 transition-all group ${
                      scrolled ? "text-slate-700 hover:text-[#1E3A8A]" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E3A8A] to-blue-600 group-hover:w-full transition-all duration-300 origin-left" />
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="flex items-center gap-3 ml-8">
                <a 
                  href="tel:+918307213335"
                  className={`p-3 rounded-2xl font-semibold flex items-center gap-2 transition-all ${
                    scrolled 
                      ? "text-slate-700 hover:text-[#1E3A8A] hover:bg-slate-100 bg-white/50" 
                      : "text-white/90 hover:text-white hover:bg-white/20"
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a 
                  href="https://wa.me/918307213335"
                  target="_blank"
                  className="p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className={`w-7 h-7 ${scrolled ? "text-slate-900" : "text-white"}`} />
              ) : (
                <Menu className={`w-7 h-7 ${scrolled ? "text-slate-900" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate-200"
        >
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-4 px-6 rounded-2xl font-semibold text-slate-900 hover:bg-slate-100 hover:translate-x-2 transition-all border-l-4 border-transparent hover:border-[#1E3A8A]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-slate-200 flex gap-4">
              <a 
                href="tel:+918307213335"
                className="flex-1 p-4 bg-slate-100 rounded-2xl text-center font-semibold text-slate-900 hover:bg-slate-200 hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a 
                href="https://wa.me/918307213335"
                target="_blank"
                className="p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all shadow-md flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
