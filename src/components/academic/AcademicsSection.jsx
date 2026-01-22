import Image from "next/image";

export default function AcademicSection() {
  return (
    <section className="max-w-6xl mx-auto bg-white px-4 py-12 md:py-24 font-sans">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Image Composition Container */}
        <div className="relative w-full max-w-125 aspect-square">
          {/* 1. Background Image (Red Overlay) */}
          <div className="absolute top-0 left-0 w-[80%] h-[75%] overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-red-700/80 mix-blend-multiply z-10" />
            <Image
              src="/academic/header_technology.jpg" // Replace with your path
              alt="Student in classroom"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* 2. Foreground Image (Natural Colors) */}
          <div className="absolute bottom-0 right-0 w-[75%] h-[70%] z-20 shadow-xl  overflow-hidden rounded-sm">
            <Image
              src="/academic/10521_lville_098_4432.jpg" // Replace with your path
              alt="Students learning outdoors"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-[#4a4a4a]">
          <p className="text-lg leading-relaxed">
            Because students experience all aspects of life within the
            community, they come to understand academics as a natural and
            necessary part of life. Just as they need nourishment and social
            interaction, they also need academic enrichment in order to grow.
          </p>
          <p className="text-lg leading-relaxed">
            This disposition motivates students to fully engage so they can not
            only gain the knowledge they need to progress in their chosen field,
            but the learning strategies they need to be fully ready for college.
          </p>
        </div>
      </div>
    </section>
  );
}
