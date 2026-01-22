import Image from "next/image";

const resourceData = [
  {
    title: "Bunn Library",
    description:
      "Bunn Library is a community hub of learning and exploration. An extension of the House and the classroom, Bunn Library is a welcoming place to gather that supports the intellectual, social, and creative pursuits of our students.",
    image: "/academic/library_online-resources.jpg", // Replace with your image
    buttonText: "START YOUR SEARCH",
  },
  {
    title: "College Counseling",
    description:
      "Lawrenceville's college counseling program is designed to be an extension of the active learning that takes place each day in the classroom around the Harkness table, in the Houses, on the athletic fields, and throughout campus.",
    image: "/academic/library2.jpg", // Replace with your image
    buttonText: "TAKE THE NEXT STEP",
  },
];

export default function ResourceSection() {
  return (
    <section className="bg-[#8c1525] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {resourceData.map((item, index) => (
          <div key={index} className="flex flex-col space-y-6">
            {/* Next.js Image wrapper */}
            <div className="relative aspect-4/3 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-4 text-white">
              <h3 className="text-3xl font-bold font-serif italic">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-90 font-medium">
                {item.description}
              </p>
            </div>

            {/* Gold Outlined Button */}
            <button className="group flex items-center justify-between border border-[#c5a367] px-6 py-4 w-full max-w-[320px] transition-all hover:bg-white/10">
              <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                {item.buttonText}
              </span>
              <svg
                className="w-8 h-4 text-[#c5a367] transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
