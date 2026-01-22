"use client";

import Image from "next/image";

const supportCategories = [
  {
    id: 1,
    name: "A CULTURE OF SUPPORT",
    image: "/student_life/grid_cultureofsupport.jpg",
  },
  {
    id: 2,
    name: "CLASSROOM TEACHERS",
    image: "/student_life/grid_classroomteachers.jpg",
  },
  { id: 3, name: "COACHES", image: "/student_life/grid_coaches.jpg" },
  {
    id: 4,
    name: "RESIDENTIAL FACULTY",
    image: "/student_life/grid_residentialfaculty.jpg",
  },
  { id: 5, name: "ADVISORS", image: "/student_life/grid_advisors.jpg" },
  {
    id: 6,
    name: "PROGRAM LEADERS",
    image: "/student_life/grid_programleaders.jpg",
  },
  { id: 7, name: "CHAPERONES", image: "/student_life/grid_chaperones.jpg" },
  {
    id: 8,
    name: "ADMINISTRATION",
    image: "/student_life/grid_administrators.jpg",
  },
  { id: 9, name: "PARENTS", image: "/student_life/grid_parents.jpg" },
];

export default function CulturalSection() {
  return (
    <section className="w-full bg-[#fdfaf3] py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* 1. Left Side: Interactive Grid Navigation */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 ">
          {supportCategories.map((category) => (
            <div
              key={category.id}
              className="relative aspect-square overflow-hidden "
            >
              {/* Image with Color Overlay */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover   "
              />

              {/* Category Label */}
            </div>
          ))}
        </div>

        {/* 2. Right Side: Dynamic Content Display */}
        <div className="w-full lg:w-1/2">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-4">
              A Culture of Support
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light mb-8 max-w-xl">
              While the students create value for themselves and each other,
              Harkness is facilitated by the thoughtful and intentional
              leadership of our teachers and coaches. Each teacher, coach, and
              leader seeks to cultivate an environment of trust to ensure
              appropriate navigation of complex situations and conversations.
            </p>
          </div>

          {/* Large Preview Image */}
          <div className="relative aspect-4/3 w-full shadow-2xl overflow-hidden">
            <Image
              src="/student_life/community.jpg"
              alt="community"
              fill
              className="object-cover transition-opacity duration-500"
            />
            {/* Decorative "GO BIG RED!" Frame Overlay logic if needed */}
          </div>
        </div>
      </div>
    </section>
  );
}
