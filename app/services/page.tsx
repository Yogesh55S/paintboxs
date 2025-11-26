"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";

const cardImages = [
  "/images/im.jpg",
  "/images/im2.jpg",
  "/images/im3.jpg",
];

export default function Services() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <h1 className="text-4xl font-bold text-[#1E3A8A] mb-12 text-center md:text-left">
          Painting Services
        </h1>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 flex flex-col transition-transform hover:scale-[1.03] duration-300 ease-in-out cursor-pointer">
            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 shadow-md">
              <Image
                src={cardImages[0]}
                alt="Interior Painting"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 384px"
                priority
              />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              Interior Painting
            </h3>
            <p className="text-base text-slate-700 leading-relaxed">
              Expert wall, ceiling, and woodwork painting with durable finishes
              and clean lines.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 flex flex-col transition-transform hover:scale-[1.03] duration-300 ease-in-out cursor-pointer">
            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 shadow-md">
              <Image
                src={cardImages[1]}
                alt="Exterior Painting"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 384px"
                priority
              />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              Exterior Painting
            </h3>
            <p className="text-base text-slate-700 leading-relaxed">
              Protection and beautification of your property exterior with
              weather-resistant paints.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 flex flex-col transition-transform hover:scale-[1.03] duration-300 ease-in-out cursor-pointer">
            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 shadow-md">
              <Image
                src={cardImages[2]}
                alt="Special Finishes"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 384px"
                priority
              />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              Special Finishes
            </h3>
            <p className="text-base text-slate-700 leading-relaxed">
              Decorative textures, feature walls, and custom paint effects to
              personalize your space.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
