import Image from "next/image";

export default function HarknessSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-20 lg:px-40 space-y-24">
      {/* Top Part: Text and Image */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative aspect-4/3">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
            alt="Students in classroom"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-serif text-[#1a1a1a] leading-tight">
            Ready to Learn.
            <br />
            Ready for Life.
          </h2>
          <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
            <p>
              A Lawrenceville graduate is ready. Ready to embrace higher
              education and engage in the professional world; to create cultures
              of belonging...
            </p>
            <p>
              Students come to Lawrenceville with their own stories and lenses.
              When they are generous with themselves, they enrich the lives of
              their classmates...
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Part: Video and Foundation Text */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
        <div className="w-full md:w-1/3">
          <p className="text-sm text-gray-700 leading-relaxed">
            This is the foundation of{" "}
            <span className="text-[#b89149] font-bold border-b border-[#b89149]">
              HARKNESS LEARNING
            </span>
            , a collaborative form of learning that encourages intellectual
            effort and social-emotional learning...
          </p>
        </div>
        <div className="w-full md:w-2/3 aspect-video relative bg-black">
          {/* YouTube Embed */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Lawrenceville: Why do we use Harkness?"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
