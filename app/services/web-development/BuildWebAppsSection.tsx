'use client';

import Link from 'next/link';

export default function BuildWebAppsSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="relative rounded-[28px] md:rounded-[36px] overflow-hidden text-white">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_10%_-10%,#2B2C66_0%,transparent_60%),linear-gradient(180deg,#1b2149_0%,#0b2a6e_60%,#052a61_100%)]" />

          {/* Right curved lines SVG */}
          <CurvedLines />

          {/* Bottom-left waves */}
          <CornerWaves />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 px-6 md:px-10 lg:px-14 py-10 lg:py-16">
            {/* Left content */}
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Build Multi‑Platform
                <br className="hidden md:block" /> Web Apps
              </h2>
              <p className="mt-5 text-white/80 max-w-xl">
                Reach users across devices and browsers with responsive,
                fast‑loading, and user‑focused interfaces.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-5 rounded-full border-2 border-white/80 hover:border-white px-6 ps-7 pe-2 py-3 text-white backdrop-blur-[1px] transition"
                >
                  <span className="font-semibold">Book a Free Consultation</span>
                  <span className="grid place-items-center rounded-full bg-white text-[#0c2a7a] size-11 shadow-[0_10px_26px_rgba(255,255,255,0.25)] transition-transform group-hover:translate-x-0.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" className="stroke-current">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right floating people/badges */}
            <div className="relative h-[320px] md:h-[360px] lg:h-[380px]">
              {/* small avatars */}
              <CircleAvatar
                className="absolute right-[12%] top-[6%]"
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop"
              />
              <CircleAvatar
                className="absolute right-[3%] top-[42%]"
                src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop"
              />
              <CircleAvatar
                className="absolute right-[38%] top-[10%]"
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop"
              />

              {/* top badge */}
              <Badge
                className="absolute right-[10%] top-[14%]"
                name="Jay Tiwari"
                role="Sales Executive"
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=300&auto=format&fit=crop"
                tone="dark"
              />

              {/* bottom-left badge */}
              <Badge
                className="absolute right-[34%] bottom-[18%]"
                name="Anirudh"
                role="Sales Executive"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
                tone="light"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({
  className,
  name,
  role,
  src,
  tone = 'dark',
}: {
  className?: string;
  name: string;
  role: string;
  src: string;
  tone?: 'dark' | 'light';
}) {
  const toneClasses =
    tone === 'dark'
      ? 'bg-white/10 ring-1 ring-white/20'
      : 'bg-white/15 ring-1 ring-white/25';
  return (
    <div className={`${className} flex items-center gap-3 rounded-2xl px-3.5 py-3 ${toneClasses} backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.25)]`}>
      <div className="size-10 rounded-lg overflow-hidden shrink-0">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-bold">{name}</div>
        <div className="text-[11px] text-white/80">{role}</div>
      </div>
    </div>
  );
}

function CircleAvatar({ className, src }: { className?: string; src: string }) {
  return (
    <div className={`${className} size-12 rounded-full overflow-hidden ring-2 ring-white/40 shadow-lg`}>
      <img src={src} alt="" className="h-full w-full object-cover" />
    </div>
  );
}

function CurvedLines() {
  return (
    <svg
      className="pointer-events-none absolute -right-28 md:-right-16 top-0 h-[130%] w-[60%] opacity-30"
      viewBox="0 0 600 900"
      fill="none"
    >
      <g stroke="url(#g)" strokeWidth="1.2">
        <path d="M600 0C410 160 410 420 600 580" />
        <path d="M590 -40C380 130 380 450 590 620" />
        <path d="M560 -80C340 110 340 490 560 680" />
      </g>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="600" y2="900" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.15" />
          <stop offset="1" stopColor="white" stopOpacity="0.05" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CornerWaves() {
  return (
    <div
      className="pointer-events-none absolute left-0 bottom-0 w-[40%] h-[55%] opacity-20"
      aria-hidden
    >
      <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
        <path d="M0 260 Q80 220 160 260 T320 260" stroke="white" strokeOpacity="0.2" strokeWidth="3" />
        <path d="M0 230 Q80 190 160 230 T320 230" stroke="white" strokeOpacity="0.18" strokeWidth="3" />
        <path d="M0 200 Q80 160 160 200 T320 200" stroke="white" strokeOpacity="0.15" strokeWidth="3" />
        <path d="M0 170 Q80 130 160 170 T320 170" stroke="white" strokeOpacity="0.12" strokeWidth="3" />
      </svg>
    </div>
  );
}