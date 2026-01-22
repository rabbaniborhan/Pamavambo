export default function ApplicationProcess() {
  return (
    <section className="bg-[#5a0b16] p-8 md:p-12">
      <div className="border border-[#b89149] p-12 md:p-24 flex flex-col items-start space-y-6 relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-serif text-white">
          Application Process
        </h2>
        <p className="text-white/80 text-sm max-w-xl leading-relaxed">
          From inquiry through enrollment, this guide will let you know what to
          expect when applying to The Lawrenceville School, including key dates,
          required submissions, and helpful links.
        </p>
        <button className="bg-[#bc1a31] hover:bg-[#a0162a] text-white px-8 py-3 text-[10px] font-bold tracking-widest flex items-center gap-4 transition-all uppercase">
          Learn More
          <span>&rarr;</span>
        </button>
      </div>
    </section>
  );
}
