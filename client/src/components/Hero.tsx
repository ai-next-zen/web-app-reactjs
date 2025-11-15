

export default function Hero() {
  return (
    <section className="relative h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero-bg.webp)' }}
        role="img"
        aria-label="Professional carpet cleaning service in action"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-shadow-lg mb-4">
          Contact EXECU-CARE Carpet Cleaning
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Professional Carpet Cleaning Services in Garland, TX & Dallas-Fort Worth Area | Call (972) 681-7751
        </p>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="oklch(0.985 0.002 240)"
          />
        </svg>
      </div>
    </section>
  );
}
