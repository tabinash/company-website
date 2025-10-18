'use client';

import Link from 'next/link';

export default function ProjectCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
        <div className="relative w-full rounded-3xl bg-gradient-to-r from-[#0c2a7a] via-[#0e36a2] to-[#1445cc] text-white">
          {/* soft radial highlight on the right */}
          <div className="pointer-events-none absolute right-0 top-0 h-[140%] w-[60%] -translate-y-1/5 translate-x-1/6 rounded-full"
               style={{
                 background: 'radial-gradient(closest-side, rgba(255,255,255,0.10), rgba(255,255,255,0.0) 70%)'
               }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 px-6 md:px-10 lg:px-14 py-10 lg:py-14">
            {/* Left content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Got a Project in Mind?
              </h2>
              <p className="mt-4 text-white/85 max-w-2xl">
                Let’s transform your concept into a market-winning product. Our teams integrate seamlessly with yours,
                bringing speed, skill, and scalability to every project.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 rounded-full bg-white text-[#0f2f99] font-semibold px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:brightness-[0.98] transition"
                >
                  CONTACT US
                  <span className="grid place-items-center rounded-full bg-[#FFB800] text-[#0e254f] size-9 shadow-[0_6px_16px_rgba(255,184,0,0.45)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Stats row */}
              <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm md:text-base text-white/90">
                <Stat text="50+ Industry Sectors" />
                <Stat text="97% Client Satisfaction" />
                <Stat text="4200+ Projects" />
              </ul>
            </div>

            {/* Right visuals */}
            <div className="relative h-[320px] md:h-[360px] lg:h-[380px]">
              <VisualCluster />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ text }: { text: string }) {
  return (
    <li className="inline-flex items-center gap-2">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFB800" aria-hidden>
        <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
      </svg>
      <span>{text}</span>
    </li>
  );
}

/* Right-side circular cluster with avatars, badges and dots */
function VisualCluster() {
  return (
    <div className="relative h-full w-full">
      {/* soft circle background */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 h-[92%] aspect-square rounded-full bg-white/5 ring-1 ring-white/10" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[80%] aspect-square rounded-full bg-white/10 blur-[1px]" />

      {/* Main circle with photo */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 h-56 w-56 md:h-64 md:w-64 rounded-full overflow-hidden ring-4 ring-white/15 shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
          alt="Happy client"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Rating badge on left of main circle */}
      <div className="absolute right-[260px] md:right-[300px] top-1/2 -translate-y-1/2 bg-white text-[#0c2a7a] rounded-xl shadow-md px-3 py-2 flex items-center gap-2">
        <Stars />
        <span className="text-xs font-semibold">Rahul B</span>
      </div>

      {/* Verified badge bottom-right on main circle */}
      <div className="absolute right-10 md:right-8 bottom-6 md:bottom-8 grid place-items-center bg-white rounded-full p-1.5 shadow">
        <span className="grid place-items-center bg-[#20C997] text-white rounded-full size-6">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      {/* Floating side avatars */}
      <CircleAvatar
        src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop"
        alt="Client"
        className="absolute right-[310px] md:right-[360px] top-[14%]"
      />
      <CircleAvatar
        src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop"
        alt="Client"
        className="absolute right-3 top-[10%]"
      />
      <CircleAvatar
        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop"
        alt="Client"
        className="absolute right-2 bottom-[10%]"
      />

      {/* Yellow decorative dots */}
      <Dot className="absolute right-[220px] top-[22%]" />
      <Dot className="absolute right-[120px] top-[32%]" />
      <Dot className="absolute right-[180px] bottom-[26%]" />
    </div>
  );
}

function CircleAvatar({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`${className} grid place-items-center`}>
      <div className="h-14 w-14 rounded-full overflow-hidden ring-4 ring-white/20 shadow-lg bg-white/10">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-[#FFB800]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" className="fill-current">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Dot({ className }: { className?: string }) {
  return <span className={`${className} inline-block size-3 rounded-full bg-[#FFB800]`} aria-hidden />;
}