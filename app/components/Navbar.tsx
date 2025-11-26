"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-[#1E3A8A] font-bold text-xl">
            PaintBro
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-[#1E3A8A] hover:text-[#14427C] font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-[#1E3A8A] hover:text-[#14427C] font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-[#1E3A8A] hover:text-[#14427C] font-medium"
            >
              Contact
            </Link>

            {/* Phone CTA */}
            <a
              href="tel:+919350161043"
              className="ml-6 px-4 py-2 bg-[#1E3A8A] text-white rounded-full font-semibold hover:bg-[#14427C] transition"
            >
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-[#1E3A8A] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            href="/"
            className="block px-4 py-3 text-[#1E3A8A] font-medium hover:bg-[#F3F4F6]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block px-4 py-3 text-[#1E3A8A] font-medium hover:bg-[#F3F4F6]"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-3 text-[#1E3A8A] font-medium hover:bg-[#F3F4F6]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <a
            href="tel:+1234567890"
            className="block px-4 py-3 bg-[#1E3A8A] text-white text-center rounded-b-lg hover:bg-[#14427C] transition"
            onClick={() => setIsOpen(false)}
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
}
