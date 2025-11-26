"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! We will contact you soon.");
    setFormData({ name: "", phone: "", message: "" });
  };

  // WhatsApp link with predefined number and optional default message
  const whatsappNumber = "1234567890"; // Replace with your WhatsApp number in international format
  const whatsappMessage = encodeURIComponent(
    "Hello! I want to inquire about your painting services."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <Navbar />

      <main className="max-w-xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <h1 className="text-4xl font-bold text-[#1E3A8A] mb-10 text-center">
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-7 bg-white p-8 rounded-3xl shadow-lg border border-slate-200"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700"
            >
              Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:border-[#1E3A8A] focus:ring focus:ring-[#1E3A8A]/50 outline-none"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-700"
            >
              Phone
            </label>
            <input
              name="phone"
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:border-[#1E3A8A] focus:ring focus:ring-[#1E3A8A]/50 outline-none"
              placeholder="+1 234 567 890"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:border-[#1E3A8A] focus:ring focus:ring-[#1E3A8A]/50 outline-none"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E3A8A] text-white py-4 rounded-full font-semibold hover:bg-[#14427C] transition"
          >
            Send Message
          </button>
        </form>

        {/* WhatsApp contact button */}
        <div className="mt-10 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 hover:bg-green-600 transition text-white rounded-full shadow-lg font-semibold text-lg"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp size={24} />
            Contact us on WhatsApp
          </a>
        </div>
      </main>
    </>
  );
}
