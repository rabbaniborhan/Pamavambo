const BeyondHero = () => {
  return (
    // Changed h-full to h-screen to ensure it fills the viewport
    <section className="relative h-screen w-full overflow-hidden bg-red-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale"
        style={{
          backgroundImage: `url('/beyond/BeyondHero.jpg')`,
        }}
      />

      {/* Red Tint Overlay - mix-blend-multiply creates that deep red effect */}
      <div className="absolute inset-0 z-10 bg-red-900/90 mix-blend-multiply" />

      {/* Content Container */}
      <div className="relative z-20 flex h-full flex-col justify-center px-6 md:px-20 lg:px-32">
        {/* Breadcrumbs */}
        <nav className="mb-4 flex items-center space-x-2 text-sm font-medium text-white/90">
          <span className="hover:text-white cursor-pointer">Home</span>
          <span className="text-white/50">/</span>
          <span className="hover:text-white cursor-pointer">Academics</span>
        </nav>

        {/* Heading */}
        <h1 className="max-w-4xl font-serif text-6xl font-medium leading-[1.1] text-white md:text-8xl lg:text-9xl">
          Beyond the <br /> Classroom
        </h1>
      </div>
    </section>
  );
};

export default BeyondHero;
