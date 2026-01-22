import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* 1. Top Section: Title */}
        <div className="-ml-10 mb-10">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] leading-tight">
            Welcoming
          </h2>
        </div>

        {/* 2. Down Section: Description and Icon */}
        <div className="flex justify-between items-start gap-8">
          <div className="space-y-6 text-gray-700 leading-relaxed font-light text-sm md:text-base">
            <p>
              Developing a positive and welcoming environment gives students the
              courage to participate in true Harkness discussion in class and in
              life. Every learning experience at Lawrenceville is a deliberate
              and consistent effort to create a sense of belonging and
              affirmation for each and every student.
            </p>

            <p>
              Along with that foundation of inclusion comes the expectation that
              each student will be fully involved and engaged, maintaining a
              high degree of ownership and participation. Students teach each
              other through shared experience, varying perspectives, and a
              mutual accountability that encourages tenacity and resilience
              paired with empathy and compassionate objectivity. Every class and
              every conversation is enriched by the ever-increasing knowledge
              and aptitude of its members.
            </p>

            <p>
              As students see that learning happens in all environments and
              applies to every part of life, they embrace the academic rigor
              setting them on a path to a life of meaningful and rich
              relationships as driven, critical citizens.
            </p>
          </div>

          {/* Replaced SVG with Next.js Image Component */}
          <div className="relative shrink-0 w-24 h-24 md:w-36 md:h-36">
            <Image
              src="/student_life/icons8-community-500.png"
              alt="Welcoming Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
