"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    image: "/images/im.jpg",
    title: "3BHK Interior Repaint",
    location: "Andheri West, Mumbai",
    type: "Interior",
    size: "3BHK",
    duration: "4 days",
    category: "residential",
  },
  {
    id: 2,
    image: "/images/im2.jpg",
    title: "Office Exterior Painting",
    location: "Bandra Kurla Complex",
    type: "Exterior",
    size: "5000 sq.ft",
    duration: "7 days",
    category: "commercial",
  },
  {
    id: 3,
    image: "/images/im3.jpg",
    title: "Villa Special Finishes",
    location: "Malad, Mumbai",
    type: "Special Finishes",
    size: "Villa",
    duration: "10 days",
    category: "residential",
  },
  {
    id: 4,
    image: "/images/im.jpg",
    title: "Restaurant Interior",
    location: "Lower Parel",
    type: "Interior",
    size: "2000 sq.ft",
    duration: "5 days",
    category: "commercial",
  },
  {
    id: 5,
    image: "/images/im2.jpg",
    title: "Apartment Repainting",
    location: "Goregaon East",
    type: "Interior",
    size: "2BHK",
    duration: "3 days",
    category: "residential",
  },
  {
    id: 6,
    image: "/images/im3.jpg",
    title: "Building Facade",
    location: "Thane West",
    type: "Exterior",
    size: "10,000 sq.ft",
    duration: "12 days",
    category: "commercial",
  },
];

export default function RecentWork() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 md:py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1E3A8A] to-slate-800 bg-clip-text text-transparent mb-6">
            Recent Work
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Quality painting projects completed across Mumbai with clean finish and on-time delivery
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-12">
          {["all", "residential", "commercial"].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                activeFilter === filter
                  ? "bg-[#1E3A8A] text-white shadow-lg"
                  : "bg-white/70 text-slate-700 hover:bg-white hover:shadow-md border border-slate-200"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === "all" ? "All Projects" : 
               filter === "residential" ? "Residential" : "Commercial"}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-semibold rounded-full">
                    {project.type}
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    {project.size}
                  </span>
                </div>
                <h3 className="font-bold text-xl lg:text-2xl text-slate-900 mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3 flex items-center gap-1">
                  📍 {project.location}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>⏱️ {project.duration}</span>
                  <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span>4.9</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile: Add to Home Page Button */}
      <div className="mt-16 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-[#1E3A8A] to-slate-800 text-white text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          View All Projects
        </motion.button>
      </div>
    </div>
  );
}
