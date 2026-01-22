import Image from "next/image";

const ResearchInstitutes = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col space-y-6 order-2 md:order-1">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1]">
            Research <br /> Institutes
          </h2>

          <div className="space-y-4 max-w-md">
            <p className="text-gray-700 leading-relaxed font-light">
              The Lawrenceville School offers five research institutes that
              offer students extraordinary opportunities for hands-on learning
              in different disciplines.
            </p>
            <p className="text-gray-700 leading-relaxed font-light">
              Each institute includes a two-week summer residential program and
              additional coursework during the academic year.
            </p>
          </div>

          <a
            href="#"
            className="group w-fit flex items-center text-gray-900 font-semibold text-sm tracking-wide"
          >
            <span className="border-b-2 border-transparent group-hover:border-red-800 transition-all duration-300 pb-1">
              Find an Opportunity
            </span>
          </a>
        </div>

        {/* Right Column: Image using Next.js Image component */}
        <div className="relative aspect-square w-full overflow-hidden order-1 md:order-2">
          <Image
            src="/beyond/leopold-scholars.jpg" // Ensure this matches your public folder path
            alt="Students in a creek conducting research"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={false} // Set to true if this section is above the fold
          />
        </div>
      </div>
    </section>
  );
};

export default ResearchInstitutes;
