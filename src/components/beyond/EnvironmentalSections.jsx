import Image from "next/image";

const EnvironmentalSections = () => {
  return (
    <section className="bg-[#F3F4F6] py-20 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-0">
        {/* Top Section: Environmental Studies (Text Left, Image Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col space-y-6 md:pr-12">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
              Environmental <br /> Studies
            </h2>
            <p className="text-gray-700 font-light leading-relaxed max-w-sm">
              Find enrichment through sustainable agriculture while connecting
              with the earth and community at the Big Red Farm.
            </p>
            <a
              href="#"
              className="text-[10px] font-bold tracking-[0.2em] text-gray-900 uppercase hover:text-red-800 transition-colors"
            >
              Read more about the big red farm
            </a>
          </div>

          <div className="order-1 md:order-2 relative aspect-4/3 w-full shadow-sm">
            <Image
              src="/beyond/header_brf.jpg" // Replace with your image path
              alt="Student with seedlings"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Section: Sustainability (Image Left, Text Right) */}
        {/* We use md:mt-[-40px] or similar to create a staggered feel if desired, 
            or just standard spacing as per the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-16 md:pt-32">
          <div className="relative aspect-4/3 w-full shadow-sm">
            <Image
              src="/beyond/pond_april21.jpg" // Replace with your image path
              alt="Scenic lake view"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col space-y-6 md:pl-12">
            <p className="text-gray-700 font-light leading-relaxed">
              With a strong emphasis placed on land and water conservation,
              alternative energy resources, and waste reduction programs at
              Lawrenceville, it's safe to say that our students know responsible
              living. And even more so, they practice it.
            </p>
            <a
              href="#"
              className="text-[10px] font-bold tracking-[0.2em] text-gray-900 uppercase hover:text-red-800 transition-colors max-w-xs"
            >
              Learn about sustainability at Lawrenceville
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalSections;
