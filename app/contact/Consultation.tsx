'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Trophy,
  Users,
  MapPin,
  RefreshCw,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

// Custom Viber icon component
function ViberIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.176.584 4.214 1.6 5.97L.134 23.863a.5.5 0 0 0 .632.632l5.893-1.466A11.956 11.956 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.568 17.568c-.292.292-.76.292-1.052 0L12 13.052 7.484 17.568c-.292.292-.76.292-1.052 0-.292-.292-.292-.76 0-1.052L10.948 12 6.432 7.484c-.292-.292-.292-.76 0-1.052.292-.292.76-.292 1.052 0L12 10.948l4.516-4.516c.292-.292.76-.292 1.052 0 .292.292.292.76 0 1.052L13.052 12l4.516 4.516c.292.292.292.76 0 1.052z"/>
    </svg>
  );
}

export default function Consultation() {
  // Simple math captcha
  const [a, b] = useMemo(() => {
    const x = Math.floor(Math.random() * 5) + 1;
    const y = Math.floor(Math.random() * 5) + 1;
    return [x, y];
  }, []);
  const [ans, setAns] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    requirements: '',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validate captcha
    if (Number(ans) !== a + b) {
      alert('Incorrect captcha answer. Please try again.');
      return;
    }

    // Prepare form data for logging
    const submissionData = {
      ...formData,
      fullPhone: `+977${formData.phone}`,
      captchaAnswer: ans,
      submittedAt: new Date().toISOString(),
    };

    console.log('Form Submitted:', submissionData);

    alert('Form submitted successfully! Check console for details.');
  }

  const phoneNumber = '9779742555741';

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left trust/contacts panel */}
          <aside className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-[#FFFDF7] to-[#FFF3D9] p-5 sm:p-6 md:p-8 h-full shadow-lg">
              {/* Quick contact links */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
                <Link
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-neutral-900 hover:text-green-600 transition"
                >
                  <MessageCircle className="size-3.5 sm:size-4" />
                  WhatsApp
                </Link>
                <span className="h-4 w-px bg-neutral-300" />
                <Link
                  href={`viber://chat?number=%2B${phoneNumber}`}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-neutral-900 hover:text-purple-600 transition"
                >
                  <ViberIcon className="size-3.5 sm:size-4" />
                  Viber
                </Link>
                <span className="h-4 w-px bg-neutral-300" />
                <Link
                  href="mailto:sphirontech@outlook.com"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-neutral-900 hover:text-neutral-700 transition"
                >
                  <Mail className="size-3.5 sm:size-4" />
                  Email us
                </Link>
              </div>

              <h3 className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-neutral-900">
                Trusted by startups and enterprises across Nepal
              </h3>

              <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-0.5 grid place-items-center size-9 sm:size-10 rounded-full bg-white/80 shadow-sm flex-shrink-0">
                    <Trophy className="size-4 sm:size-5 text-neutral-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-neutral-900">Experienced team</p>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-700">We handle projects of any complexity.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-0.5 grid place-items-center size-9 sm:size-10 rounded-full bg-white/80 shadow-sm flex-shrink-0">
                    <Users className="size-4 sm:size-5 text-neutral-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-neutral-900">Customer-first delivery</p>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-700">From startups to enterprises, across industries in Nepal.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-0.5 grid place-items-center size-9 sm:size-10 rounded-full bg-white/80 shadow-sm flex-shrink-0">
                    <MapPin className="size-4 sm:size-5 text-neutral-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-neutral-900">Based in Kathmandu</p>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-700">Local support, Nepal Standard Time (NPT).</p>
                  </div>
                </li>
              </ul>

              {/* Response guarantee badge */}
              <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="sm:w-4 sm:h-4 text-[#20C997]">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs sm:text-sm font-semibold text-neutral-900">Response within 8 business hours</span>
              </div>
            </div>
          </aside>

          {/* Right form */}
          <div className="lg:col-span-7">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
                Book Free Consultation
              </h2>
              <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base md:text-lg">
                Let's discuss your project requirements and explore how we can help you succeed.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Fieldset label="Full Name">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-transparent outline-none px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-neutral-900 placeholder:text-gray-400"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </Fieldset>

                <Fieldset label="Email Address">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent outline-none px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-neutral-900 placeholder:text-gray-400"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </Fieldset>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Fieldset label="Phone Number">
                  <div className="flex">
                    <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 border-r border-gray-200 text-gray-700 text-sm sm:text-base">
                      <span className="text-lg sm:text-xl leading-none">🇳🇵</span>
                      +977
                    </span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="98XXXXXXXX"
                      className="w-full bg-transparent outline-none px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-neutral-900 placeholder:text-gray-400"
                      pattern="^(9[6-8]\d{8})$"
                      title="Enter a valid Nepal mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </Fieldset>

                <Fieldset label="Location">
                  <input
                    type="text"
                    placeholder="e.g., Kathmandu, Bagmati"
                    className="w-full bg-transparent outline-none px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-neutral-900 placeholder:text-gray-400"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </Fieldset>
              </div>

              {/* Service */}
              <Fieldset label="Select Your Service">
                <select
                  className="w-full bg-transparent outline-none px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-neutral-900 appearance-none cursor-pointer"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <option value="web-design-development">Web Design and Development</option>
                  <option value="app-development">App Development</option>
                  <option value="ecommerce-website">Ecommerce Website</option>
                  <option value="enterprise-software-development">Enterprise Software Development</option>
                  <option value="software-maintenance">Software Maintenance</option>
                  <option value="it-consultant">IT Consultant</option>
                </select>
              </Fieldset>

              {/* Requirements */}
              <Fieldset label="Project Requirements">
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent outline-none px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-neutral-900 placeholder:text-gray-400 resize-y"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                />
              </Fieldset>

              {/* Captcha + CTA */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="rounded-xl border-2 border-gray-300 bg-white px-3 sm:px-5 py-2 sm:py-3 text-base sm:text-lg font-bold text-gray-800 flex items-center gap-2 sm:gap-3 shadow-sm">
                    {a} + {b}
                    <button
                      type="button"
                      onClick={() => window.location.reload()}
                      className="ml-1 text-gray-500 hover:text-gray-700 transition"
                      aria-label="Refresh captcha"
                      title="Refresh captcha"
                    >
                      <RefreshCw className="size-4 sm:size-5" />
                    </button>
                  </div>
                  <span className="text-xl sm:text-2xl text-gray-400">=</span>
                  <input
                    type="number"
                    value={ans}
                    onChange={(e) => setAns(e.target.value)}
                    placeholder="?"
                    className="w-16 sm:w-20 rounded-xl border-2 border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center font-semibold text-neutral-900 focus:border-neutral-900 outline-none transition"
                    required
                  />
                </div>

                <div className="sm:ml-auto">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-[#FFB800] text-neutral-900 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base shadow-lg hover:brightness-95 transition-all"
                  >
                    ENQUIRE NOW
                    <span className="grid place-items-center rounded-full bg-black/10 size-7 sm:size-8">
                      <ArrowRight className="size-3.5 sm:size-4" />
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fieldset({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="rounded-xl border-2 border-gray-300 bg-white focus-within:border-neutral-900 transition-all shadow-sm">
      <legend className="ml-2 sm:ml-3 px-1.5 sm:px-2 text-xs sm:text-sm font-semibold text-gray-600">{label}</legend>
      <div className="pb-1">{children}</div>
    </fieldset>
  );
}