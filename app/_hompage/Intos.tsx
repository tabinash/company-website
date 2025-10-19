'use client';

type Stat = { value: string; label: string };

const LEFT_BULLETS = [
  "India's Top 1% Software Talent",
  'Idea to Deployment, We Handle All',
];

const RIGHT_BULLETS = [
  'Trusted by Startups to Fortune 500',
  'Workstatus™ powered Proof of Work',
];

const STATS: Stat[] = [
  { value: '4200+', label: 'projects launched' },
  { value: '2500+', label: 'satisfied customers' },
  { value: '675+', label: 'full-time staff' },
  { value: '20+', label: 'years of experience' },
];

export default function WhoWeAreSection({
  bgUrl = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
}: {
  bgUrl?: string;
}) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Background image */}
          <img
            src={bgUrl}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Dark overlay with slight vignette */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,30,0.65)_0%,rgba(6,12,30,0.55)_35%,rgba(6,12,30,0.55)_65%,rgba(6,12,30,0.6)_100%)]" />
          <div className="absolute inset-0 [mask-image:radial-gradient(120%_100%_at_70%_50%,#000_60%,transparent_100%)] pointer-events-none" />

          {/* Content */}
          <div className="relative p-8 md:p-10 lg:p-14 text-white">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Who We Are
            </h2>

            <p className="mt-4 max-w-3xl text-white/85 text-base md:text-lg leading-relaxed">
              We are an award‑winning digital consulting & product engineering firm
              helping global companies modernize technology and transform experiences.
            </p>

            {/* Bullets */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
              <ul className="space-y-3">
                {LEFT_BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFB800" className="mt-0.5 flex-shrink-0">
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                    </svg>
                    <span className="text-white/90 text-base md:text-lg">{b}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {RIGHT_BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFB800" className="mt-0.5 flex-shrink-0">
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                    </svg>
                    <span className="text-white/90 text-base md:text-lg">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats row */}
            <div className="mt-10 md:mt-12">
              <div className="flex flex-col sm:flex-row sm:items-stretch gap-8 sm:gap-0">
                {STATS.map((s, i) => (
                  <div key={s.label} className="flex-1 flex items-start sm:items-center gap-4 sm:gap-6">
                    {/* Separator on larger screens (except first) */}
                    {i !== 0 && (
                      <div className="hidden sm:block h-12 w-px bg-white/30 self-center" aria-hidden />
                    )}
                    <div>
                      <div className="text-4xl md:text-5xl font-extrabold leading-none">{s.value}</div>
                      <div className="mt-2 text-sm md:text-base text-white/85">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rounded card outline feel */}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-white/15 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}