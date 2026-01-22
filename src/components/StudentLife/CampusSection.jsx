"use client";

import Image from "next/image";

const houseImages = [
  "/student_life/piyano.jpg",
  "/student_life/lodo.jpg",
  "/student_life/tabletanis.jpg",
  "/student_life/adda.jpg",
  "/student_life/onugame.jpg",
  "/student_life/outtenis.jpg",
  "/student_life/readingtable.jpg",
  "/student_life/room.jpg",
];

export default function CampusSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-6 text-gray-700 leading-relaxed font-light text-sm md:text-base">
            <p>
              Each Lawrenceville student belongs to a House. A House is a
              residential building which also serves as home base for our day
              students. Our Houses are located in three areas of campus — one
              for second formers (ninth grade), one for Third and Fourth Formers
              (10th and 11th grade), and one for Fifth Form (12th grade).
            </p>

            <p>
              All students benefit from the guidance and protection of
              residential faculty. Heads of House live in the residences with
              students and, with the support of House Teams, provide an adult
              presence for students at all times. Our residential faculty are
              also classroom teachers, coaches, and administrators, making them
              familiar and available to students throughout their time at the
              School.
            </p>

            <p>
              House life is not considered separate from education —
              students&apos; academic advisors are members of their House Team
              as well; students are developing the full picture of their future
              at once — the student in the House is the same student in the
              classroom, at practice, in the dining hall, and out in the world.
              Being seen and acknowledged as a complex individual builds empathy
              and curiosity in our students and faculty.
            </p>

            <p className="pt-4 italic text-gray-500">
              Continue to our Campus page to explore our Houses and other
              community spaces.
            </p>
          </div>

          {/* Call to Action with Custom Icon */}
          <div className="pt-8 space-y-4">
            <button className="flex flex-col items-start group">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black mb-1">
                Explore Campus By
              </span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black border-b border-black pb-1 group-hover:text-[#bc1a31] group-hover:border-[#bc1a31] transition-colors">
                Taking a Virtual Tour.
              </span>
            </button>

            {/* Decorative Map Icon */}
            <div className="relative w-24 h-24 ">
              <Image
                src="/student_life/icon_map.png"
                alt="Map Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column: 2-Column Image Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
          {houseImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-4/3 w-full shadow-md overflow-hidden"
            >
              <Image
                src={src}
                alt={`House life ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
