"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const contactInfo = {
    name: "Anmol",
    email: "ar1122554466@gmail.com",
    phone: "8307213335",
    address: "Adras, Kurukshetra",
    pincode: "131136",
    business: "PaintBro",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you! We'll contact you within 24 hours.");
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero */}
      <section className="pt-24 pb-20 bg-gradient-to-r from-[#1E3A8A] to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Ready to transform your space? Contact PaintBro today for free site visit and quote.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Business Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-blue-600 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">🎨</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">PaintBro</h3>
                  <p className="text-slate-600">Professional Painting Services</p>
                </div>
              </div>
              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all">
                  <Phone className="w-6 h-6 text-[#1E3A8A]" />
                  <a href={`tel:+91${contactInfo.phone}`} className="font-semibold text-slate-900 hover:text-[#1E3A8A] transition">
                    +91 {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all">
                  <MessageCircle className="w-6 h-6 text-emerald-500" />
                  <a 
                    href={`https://wa.me/91${contactInfo.phone}`} 
                    target="_blank" 
                    className="font-semibold text-slate-900 hover:text-emerald-500 transition"
                  >
                    WhatsApp Chat
                  </a>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all">
                  <Mail className="w-6 h-6 text-[#1E3A8A]" />
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="font-semibold text-slate-900 hover:text-[#1E3A8A] transition truncate"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-12 h-12 text-emerald-500 bg-white rounded-2xl p-3 shadow-lg" />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Visit Us</h4>
                  <p className="text-slate-600">{contactInfo.address}</p>
                  <p className="text-slate-600 font-semibold">Pin: {contactInfo.pincode}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                {[
                  "Andheri", "Bandra", "BKC",
                  "Malad", "Goregaon", "Thane"
                ].map((area) => (
                  <div key={area} className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Send Message</h3>
            <p className="text-xl text-slate-600 mb-8">Get free quote within 24 hours</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-[#1E3A8A] focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-lg"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-[#1E3A8A] focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-lg"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email (Optional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-[#1E3A8A] focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Service Required</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-[#1E3A8A] focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-lg appearance-none"
                >
                  <option value="">Select Service</option>
                  <option value="interior">Interior Painting</option>
                  <option value="exterior">Exterior Painting</option>
                  <option value="apartment">Apartment Repainting</option>
                  <option value="texture">Texture Painting</option>
                  <option value="office">Office Painting</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-[#1E3A8A] focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-lg resize-vertical"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#1E3A8A] to-blue-600 text-white py-6 rounded-3xl font-black text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send className="w-6 h-6" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
