"use client";

import Link from "next/link";
import { 
  MdPhone, 
  MdMessage, 
  MdLocationOn 
} from "react-icons/md";

import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        <div className="space-y-4 max-w-md">
          <h2 className="text-2xl font-semibold">PaintBro</h2>
          <p className="text-blue-200 leading-relaxed">
            Professional interior and exterior painting services delivering quality finishes across Mumbai and nearby areas.
          </p>
          <Link
            href="#contact"
            className="bg-white text-[#1E3A8A] px-6 py-3 inline-block rounded-full font-semibold hover:bg-blue-100 transition"
          >
            Get Free Estimate
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/recent-work", label: "Portfolio" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-blue-300 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
          <div className="flex items-center gap-3">
            <MdPhone size={24} />
            <a href="tel:+919876543210" className="hover:text-blue-300 transition">
              +91 98765 43210
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MdMessage size={24} />
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              WhatsApp Chat
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MdLocationOn size={24} />
            <span>Andheri West, Mumbai</span>
          </div>
          <div className="flex space-x-4 text-2xl mt-4">
            <Link href="https://www.facebook.com/paintbro" target="_blank" aria-label="Facebook" className="hover:text-blue-300 transition">
              <BsFacebook />
            </Link>
            <Link href="https://www.instagram.com/paintbro" target="_blank" aria-label="Instagram" className="hover:text-blue-300 transition">
              <BsInstagram />
            </Link>
            <Link href="https://www.youtube.com/paintbro" target="_blank" aria-label="YouTube" className="hover:text-blue-300 transition">
              <BsYoutube />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center border-t border-blue-700 py-6 text-blue-200 text-sm">
        © 2025 PaintBro. All rights reserved.
      </div>
    </footer>
  );
}
