"use client";

import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const admissionLinks = [
  { name: "Inquire", href: "/admission/inquire" },
  { name: "Application Process", href: "/admission/application" },
  { name: "Campus Visits", href: "/admission/visit" },
  { name: "Travel and Events", href: "/admission/events" },
  { name: "Tuition and Aid", href: "/admission/tuition" },
  { name: "Admission Team", href: "/admission/team" },
];

export default function AdmissionsCTA() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
        {/* Left Column: Mission & Viewbook */}
        <div className="w-full lg:w-3/5 space-y-10">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-serif text-[#1a1a1a] leading-relaxed">
              Through House and Harkness, Lawrenceville challenges a diverse
              community of promising young people to lead lives of learning,
              integrity, and high purpose. Our mission is to inspire the best in
              each to seek the best for all.
            </p>

            <p className="text-gray-600 font-light leading-relaxed max-w-xl">
              If you&apos;re ready to take the next steps towards joining the
              Lawrenceville community, start with our inquiry form. Next,
              schedule your visit with us to see what House, Harkness, and Heart
              is all about.
            </p>
          </div>

          {/* Download Viewbook Button */}
          <button className="flex items-center gap-3 border border-[#bc1a31] px-6 py-4 group hover:bg-[#bc1a31] transition-all duration-300">
            <Download
              size={18}
              className="text-[#bc1a31] group-hover:text-white"
            />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black group-hover:text-white">
              Download Our Viewbook
            </span>
          </button>
        </div>

        {/* Right Column: Admission Links List */}
        <div className="w-full lg:w-2/5 flex flex-col space-y-6">
          {admissionLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group flex justify-end items-center gap-6 border-b border-transparent hover:border-gray-100 pb-2 transition-all"
            >
              <span className="text-lg md:text-xl font-serif text-[#1a1a1a] group-hover:text-[#bc1a31] transition-colors">
                {link.name}
              </span>
              <ArrowRight
                size={20}
                className="text-gray-300 group-hover:text-[#bc1a31] group-hover:translate-x-1 transition-all"
                strokeWidth={1}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
