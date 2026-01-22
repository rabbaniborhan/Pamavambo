import Image from "next/image";

export default function CallToActionButton({
  title,
  description,
  buttonText,
  imagePath,
  imageAlt,
}) {
  return (
    <section className="relative w-full min-h-150 flex items-center px-6 py-20 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        {/* Darkening tint to make text pop */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Content Box */}
        <div className="max-w-2xl text-white space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>

          <p className="text-lg leading-relaxed font-medium">{description}</p>

          {/* Red Action Button */}
          <button className="group flex items-center justify-between bg-[#b01a2e] hover:bg-[#8c1525] transition-colors duration-300 px-8 py-4 w-full max-w-70 text-sm font-bold tracking-widest uppercase">
            <span>{buttonText}</span>
            <svg
              className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
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
      </div>

      <div className="absolute inset-10 border-4 border-[#c5a367] pointer-events-none" />
    </section>
  );
}
