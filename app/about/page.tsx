"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Users, Star, Award, Calendar, ChevronRight } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients", color: "from-emerald-500 to-emerald-600" },
    { icon: Star, number: "4.9★", label: "Avg Rating", color: "from-yellow-400 to-yellow-500" },
    { icon: Award, number: "98%", label: "On-time Jobs", color: "from-blue-500 to-blue-600" },
    { icon: Calendar, number: "2+", label: "Years Exp", color: "from-purple-500 to-purple-600" },
  ];

  const team = {
    name: "Anmol",
    role: "Founder & Master Painter",
    email: "ar1122554466@gmail.com",
    phone: "8307213335",
    location: "Adras, Kurukshetra - 131136",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/50">
      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/5 to-blue-500/5" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-[#1E3A8A] to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
              About PaintBro
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Professional painting services with perfect finishes, zero mess, and guaranteed satisfaction
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-20 space-y-24">
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="group">
              <div className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl shadow-xl border border-slate-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-slate-200">
                <stat.icon className={`w-12 h-12 text-white p-3 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 shadow-lg group-hover:scale-110 transition-transform`} />
                <div className="text-3xl lg:text-4xl font-black text-slate-900 mb-2 group-hover:text-[#1E3A8A] transition-colors">
                  {stat.number}
                </div>
                <p className="text-slate-600 font-medium text-sm uppercase tracking-wide">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Story & Team */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Story */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-slate-100/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <h2 className="text-4xl font-black text-slate-900 mb-8 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">
                Our Journey
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Founded by <span className="font-bold text-[#1E3A8A]">Anmol</span> in Kurukshetra, PaintBro brings 
                  Mumbai's premium painting standards with dust-free technology and flawless execution.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200 mt-8">
                  <div className="text-center p-6 bg-gradient-to-b from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200">
                    <div className="text-3xl font-black text-emerald-600 mb-2">Zero Dust</div>
                    <div className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">Guarantee</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                    <div className="text-3xl font-black text-[#1E3A8A] mb-2">24h</div>
                    <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Response</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#1E3A8A]/5 to-blue-500/5 backdrop-blur-xl rounded-3xl p-10 border border-slate-100/30 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/10 to-transparent w-1/2 h-full" />
              <div className="relative">
                <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-[#1E3A8A] to-blue-600 shadow-2xl flex items-center justify-center border-4 border-white/20">
                  <span className="text-4xl lg:text-5xl font-black text-white drop-shadow-lg">A</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 text-center mb-3">
                  {team.name}
                </h3>
                <p className="text-xl text-[#1E3A8A] font-bold text-center mb-8 uppercase tracking-wide">
                  {team.role}
                </p>
                <div className="space-y-4 mb-8">
                  <a href={`tel:+91${team.phone}`} className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white hover:shadow-lg transition-all group">
                    <Phone className="w-5 h-5 text-[#1E3A8A] group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-slate-900">+91 {team.phone}</span>
                  </a>
                  <a href={`mailto:${team.email}`} className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white hover:shadow-lg transition-all group">
                    <Mail className="w-5 h-5 text-[#1E3A8A] group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-slate-900 truncate">{team.email}</span>
                  </a>
                </div>
                <p className="text-slate-600 text-center italic font-medium text-lg">
                  "Perfect finish. No mess. Always on time."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Areas */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-16 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">
            Serving Mumbai & Suburbs
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Andheri", "Bandra", "BKC", "Malad", 
              "Goregaon", "Thane", "Lower Parel", 
              "Borivali", "Juhu", "Versova"
            ].map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 lg:p-8 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 border border-slate-100/50 transition-all duration-400 cursor-pointer group"
              >
                <p className="font-bold text-lg lg:text-xl text-slate-800 group-hover:text-[#1E3A8A] transition-colors">
                  {area}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 lg:p-20 shadow-2xl border border-slate-100/50">
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#1E3A8A] to-slate-900 bg-clip-text text-transparent mb-6">
              Ready For Your Project?
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Free site visit. Instant quote. Zero obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <a 
                href={`tel:+91${team.phone}`}
                className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-[#1E3A8A] to-blue-600 text-white rounded-3xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Call Now
              </a>
              <a 
                href={`https://wa.me/91${team.phone}`}
                target="_blank"
                className="px-8 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-3xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.446l-.297-.182-3.516.716c-.37.094-.382.597-.443.885-.063.413.163.646.408.795.498.337 1.447.488 2.337.372 1.328-.173 3.019-.95 4.015-2.361.386-.473.585-.998.585-1.562 0-.592-.192-1.13-.585-1.562-.494-.649-1.687-1.953-4.015-2.361-.737-.116-1.64-.118-2.337-.372-.244-.149-.47-.382-.408-.795.061-.288.073-.791.043-.885l3.516-.716-.297-.182a9.857 9.857 0 015.031-1.446 9.884 9.884 0 016.372 2.542c.841.845 1.408 1.838 1.7 2.805.292.967.109 2.128-.375 2.954-.484.618-1.274 1.212-2.364 1.743-.969.331-2.141.316-3.13.163-.795-.162-1.597-.534-2.301-.98-.703-.447-1.218-.999-1.499-1.692-.281-.693-.092-1.458.372-2.054.464-.597 1.273-1.204 2.364-1.743.969-.331 2.141-.316 3.13.163.795.162 1.597.534 2.301.98.281.693.718 1.245 1.499 1.692.703.447 1.506.818 2.301.98 1.058.225 2.161.17 3.13-.163 1.091-.438 1.88-1.125 2.364-1.743.484-.597.653-1.087.375-2.954-.292-.967-.859-1.96-1.7-2.805a9.884 9.884 0 00-6.372-2.542z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
