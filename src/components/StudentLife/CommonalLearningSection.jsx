"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

const subNavItems = [
  { label: "CAMPUS", href: "/campus" },
  { label: "DINING", href: "/dining" },
  { label: "HEALTH AND WELLNESS", href: "/health" },
  { label: "PUBLIC SAFETY", href: "/safety" },
  { label: "DIVERSITY AND BELONGING", href: "/diversity" },
  { label: "NEWS AND MEDIA", href: "/news" },
];

export default function CommunalLearningSection() {
  return (
    <div className="w-full bg-white pb-28">
      {/* 1. Sub-Navigation Bar */}
      <nav className="border-t border-b border-[#b89149]/30 py-4 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-4">
            {subNavItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[10px] md:text-xs font-bold tracking-widest text-gray-800 hover:text-[#bc1a31] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 2. Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] leading-tight mb-8">
            Communal Learning Brings Purpose to Academic Challenge
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed font-light">
            <p className="text-lg font-medium text-gray-900">
              The outcome of a Lawrenceville education — the most lasting and
              impactful outcome — is a set of values, a way of being, an ability
              to create belonging.
            </p>
            <p>
              Foundational to that outcome is Harkness learning; it is the
              organizing principle of our community. We engage each other with
              curiosity and inquiry, we listen, and we give each other grace —
              all without fear or pretense — and we make space for others to
              exercise that privilege.
            </p>
          </div>
        </div>

        {/* Right Side: Overlapping Image Stack */}
        <div className="relative flex justify-center lg:justify-end py-16">
          {/* Decorative Gold Frame (Bottom Layer) */}
          <div className="absolute -top-4 -right-4 md:top-0 md:right-12 w-[85%] md:w-[80%] aspect-4/5 border border-[#b89149] z-0" />

          {/* Solid Red Texture Block (Middle Layer) */}
          <div className="absolute top-10 right-0 w-[75%] md:w-[70%] aspect-square bg-[#bc1a31] overflow-hidden z-10 shadow-xl">
            {/* Architectural pattern overlay using Next.js Image for optimization */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <Image
                src="/example-image-12.jpg"
                alt="pattern"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Main Action Photo (Top Layer) */}
          <div className="relative z-20 w-[90%] md:w-[75%] mr-10 mt-10 aspect-4/3 shadow-2xl">
            <Image
              src="/student_life/gps_communal-learning.jpg"
              alt="Students learning together"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
