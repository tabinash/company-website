'use client';

import backgroundimg from "@/assets/200505_tech.jpg"

const LEFT_BULLETS = [
  "Crafting Innovative Digital Solutions",
  "From Vision to Victory, We Deliver",
];

const RIGHT_BULLETS = [
  "Trusted by Diverse Industries",
  "Driving Digital Transformation",
];

export default function WhoWeAreSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[450px] sm:min-h-[400px]"
          style={{
            backgroundImage: `url(${backgroundimg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay with slight vignette */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,30,0.65)_0%,rgba(6,12,30,0.55)_35%,rgba(6,12,30,0.55)_65%,rgba(6,12,30,0.6)_100%)]" />
          <div className="absolute inset-0 [mask-image:radial-gradient(120%_100%_at_70%_50%,#000_60%,transparent_100%)] pointer-events-none" />

          {/* Content */}
          <div className="relative p-6 sm:p-8 md:p-10 lg:p-14 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight">
              Who We Are
            </h2>

            <p className="mt-3 sm:mt-4 max-w-3xl text-white/85 text-sm sm:text-base md:text-lg leading-relaxed">
              We are a dynamic software agency passionate about empowering businesses through cutting-edge technology. Specializing in custom mobile apps, responsive websites, and enterprise digital solutions, we deliver innovative tools that drive success. Our expert IT consulting services guide organizations through seamless digital transformation, serving industries like e-commerce, retail, publishing, poultry and livestock, restaurants, and more. Partner with us to turn your vision into reality.
            </p>

            {/* Bullets */}
            <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-10 gap-y-2.5 sm:gap-y-3">
              <ul className="space-y-2.5 sm:space-y-3">
                {LEFT_BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 sm:gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFB800" className="mt-0.5 flex-shrink-0 sm:w-[18px] sm:h-[18px]">
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                    </svg>
                    <span className="text-white/90 text-sm sm:text-base md:text-lg">{b}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5 sm:space-y-3">
                {RIGHT_BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 sm:gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFB800" className="mt-0.5 flex-shrink-0 sm:w-[18px] sm:h-[18px]">
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                    </svg>
                    <span className="text-white/90 text-sm sm:text-base md:text-lg">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rounded card outline feel */}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-white/15 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}