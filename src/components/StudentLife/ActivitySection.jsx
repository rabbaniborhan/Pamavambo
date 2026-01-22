"use client";

import Image from "next/image";

export default function ActivitySection() {
  // Hardcoded data within the component
  const items = [
    {
      image: "/student_life/ropes-course.jpg",
      textPrefix: "PAYING ATTENTION",
      highlightText: "TO THEMSELVES AND OTHERS",
    },
    {
      image: "/student_life/cleaning.jpg",
      textPrefix: "SEARCHING FOR MEANING",
      highlightText: "IN PATTERNS AND CYCLES",
    },
    {
      image: "/student_life/house-olympics.jpg",
      textPrefix: "CURIOUS, COURAGEOUS,",
      highlightText: "AND EXPRESSIVE",
    },
  ];

  return (
    <section className="w-full bg-[#610716] py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid: 1 column on mobile, 3 columns on medium screens up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col group">
              {/* Image Container with 4:5 Aspect Ratio */}
              <div className="relative aspect-5/4 w-full overflow-hidden mb-6 shadow-xl">
                <Image
                  src={item.image}
                  alt={item.textPrefix}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Typography matching the School Branding */}
              <p className="text-white text-[10px] text-center md:text-xs tracking-[0.2em] leading-relaxed uppercase">
                <span className="font-extrabold">{item.textPrefix}</span>{" "}
                <span className="text-amber-500 font-medium">
                  {item.highlightText}
                </span>
                .
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
