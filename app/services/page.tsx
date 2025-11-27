"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Google Material Icons
import HomeIcon from '@mui/icons-material/Home';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChairIcon from '@mui/icons-material/Chair';

const services = [
  {
    title: "Interior Painting",
    icon: HomeIcon,
    description: "Walls, ceilings, woodwork with premium emulsion paint",
    price: "₹25/sq.ft",
    features: ["Dust-free painting", "2 coats emulsion", "Clean finish"],
  },
  {
    title: "Exterior Painting",
    icon: FormatPaintIcon,
    description: "Weatherproof acrylic paint for building facade",
    price: "₹35/sq.ft",
    features: ["Weather resistant", "Anti-fungal", "5-year warranty"],
  },
  {
    title: "Apartment Repainting",
    icon: ApartmentIcon,
    description: "Complete 1BHK/2BHK/3BHK repaint packages",
    price: "Starting ₹25,000",
    features: ["Full apartment", "Furniture protection", "Same day move-in"],
  },
  {
    title: "Texture Painting",
    icon: AutoAwesomeIcon,
    description: "Modern wall textures & designer finishes",
    price: "₹45/sq.ft",
    features: ["5+ texture options", "Premium materials", "Luxury finish"],
  },
  {
    title: "Office Painting",
    icon: BusinessCenterIcon,
    description: "Commercial spaces with minimal disruption",
    price: "₹28/sq.ft",
    features: ["Weekend work", "Zero downtime", "Professional finish"],
  },
  {
    title: "Wooden Furniture",
    icon: ChairIcon,
    description: "Wardrobes, kitchen cabinets, furniture repaint",
    price: "₹15/sq.ft",
    features: ["PU polish", "Anti-scratch", "Factory finish"],
  },
];

export default function ServicesPage() {
  const [calculator, setCalculator] = useState({
    rooms: "2",
    sqFt: "1000",
    service: "interior",
  });

  const getQuote = () => {
    const basePrice = calculator.service === "interior" ? 25 : 35;
    const total = parseInt(calculator.sqFt) * basePrice;
    return isNaN(total) ? 0 : total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero */}
      <section className="pt-24 pb-20 bg-gradient-to-r from-[#1E3A8A] to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
          >
            Our Painting Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Professional painting solutions for homes, offices, and commercial spaces across Mumbai
          </motion.p>
          
          {/* Fixed Quote Calculator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-b from-white/5 to-white/2 backdrop-blur-2xl rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-white/30 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white drop-shadow-lg text-center">
              Get Instant Quote
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Rooms */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-blue-100">
                  Number of Rooms
                </label>
                <select 
                  value={calculator.rooms}
                  onChange={(e) => setCalculator({...calculator, rooms: e.target.value})}
                  className="w-full p-4 rounded-2xl bg-slate-900/80 border-2 border-white/40 text-white text-lg font-semibold focus:outline-none focus:border-blue-300/70 focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 appearance-none bg-no-repeat bg-right pr-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.5em 1.5em',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <option value="1" className="bg-slate-800 text-white">1 Room</option>
                  <option value="2" className="bg-slate-800 text-white">2 Rooms</option>
                  <option value="3" className="bg-slate-800 text-white">3 Rooms</option>
                  <option value="4" className="bg-slate-800 text-white">4+ Rooms</option>
                </select>
              </div>

              {/* Area */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-blue-100">
                  Total Area (sq.ft)
                </label>
                <div className="relative">
                  <input 
                    type="number"
                    value={calculator.sqFt}
                    onChange={(e) => setCalculator({...calculator, sqFt: e.target.value})}
                    className="w-full p-4 pl-12 rounded-2xl bg-slate-900/80 border-2 border-white/40 text-white text-lg font-semibold placeholder-slate-400 focus:outline-none focus:border-blue-300/70 focus:ring-4 focus:ring-blue-500/30 transition-all duration-300"
                    placeholder="1000"
                    min="100"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg font-semibold">
                
                  </span>
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-blue-100">
                  Service Type
                </label>
                <select 
                  value={calculator.service}
                  onChange={(e) => setCalculator({...calculator, service: e.target.value})}
                  className="w-full p-4 rounded-2xl bg-slate-900/80 border-2 border-white/40 text-white text-lg font-semibold focus:outline-none focus:border-blue-300/70 focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 appearance-none bg-no-repeat bg-right pr-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.5em 1.5em',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <option value="interior" className="bg-slate-800 text-white">Interior Painting</option>
                  <option value="exterior" className="bg-slate-800 text-white">Exterior Painting</option>
                </select>
              </div>
            </div>

            {/* Quote Result */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center mb-10 p-8 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/20"
            >
              <div className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl tracking-tight">
                ₹{getQuote().toLocaleString()}
              </div>
              <p className="text-blue-100 text-xl font-semibold">Estimated Cost (excluding GST)</p>
            </motion.div>

            <button className="w-full bg-gradient-to-r from-white via-blue-50 to-blue-100 text-[#1E3A8A] py-6 md:py-7 rounded-3xl font-black text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 hover:bg-white/90 transition-all duration-400 border-4 border-white/30">
              📅 Book Free Site Visit Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden hover:border-[#1E3A8A]/20"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#1E3A8A] to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 mx-auto">
                  <service.icon fontSize="large" style={{ color: 'white' }} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-center">{service.description}</p>
                <div className="text-3xl font-black text-[#1E3A8A] mb-8 text-center">{service.price}</div>
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-[#1E3A8A] to-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group-hover:bg-[#1E3A8A]/90">
                  Get Detailed Quote
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
