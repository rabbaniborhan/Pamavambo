import Image from "next/image";

const departments = [
  { name: "English", icon: "/academic/english.svg" },
  { name: "History", icon: "/academic/history.svg" },
  { name: "Interdisciplinary Studies", icon: "/academic/interdisiplinary.svg" },
  { name: "Language", icon: "/academic/language.svg" },
  { name: "Mathematics", icon: "/academic/mathematics.svg" },
  { name: "Performing Arts", icon: "/academic/performing-arts.svg" },
  { name: "Religion and Philosophy", icon: "/academic/religion.svg" },
  { name: "Science", icon: "/academic/science.svg" },
  { name: "Visual Arts", icon: "/academic/visual-arts.svg" },
];

export default function AcademicDepartments() {
  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/academic/background.jpg"
          alt="Campus Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a2b3c] mb-6">
            Academic Departments
          </h2>
          <p className="text-[#444] text-sm md:text-base leading-relaxed max-w-2xl">
            Through a robust selection of courses, community service, and
            personal development, students discover who they are and what they
            stand for, strive to support a School culture of belonging, and
            contribute their unique intellect, passion, and drive to advance
            their communities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#c5a367]">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="
                group
                relative
                aspect-square
                p-10
                border-r border-b border-[#c5a367]
                flex flex-col justify-between
                overflow-hidden
                cursor-pointer
              "
            >
              {/* Red Hover Overlay */}
              <div
                className="
                  absolute inset-0 
                  bg-[#8b0000] 
                  opacity-0 
                  group-hover:opacity-100 
                  transition-opacity duration-300
                  z-0
                "
              />

              {/* Title */}
              <h3
                className="
                  relative z-10
                  text-xl font-bold text-[#1a2b3c]
                  group-hover:text-white
                  transition-colors duration-300
                "
              >
                {dept.name}
              </h3>

              {/* Icon */}
              <div className="relative z-10 w-24 h-24 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={dept.icon}
                  alt={dept.name}
                  fill
                  className="
                    object-contain
                    filter
                    brightness-0
                    group-hover:invert
                    group-hover:brightness-100
                    transition-all duration-300
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
