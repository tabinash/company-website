'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: 'How long does it actually take to build a mobile app?',
    answer: 'Honestly? Most apps take 3-6 months from our first meeting to App Store launch. A simple app with 5-6 screens might be done in 8-10 weeks. Something with user accounts, payments, real-time features, and a backend takes closer to 4-5 months. We ll give you a detailed timeline in our proposal—and we stick to it (barring major scope changes).'
  },
  {
    question: 'Do I need both iOS and Android, or can I start with just one?',
    answer: 'It depends on your audience. If you re targeting general consumers in Nepal or India, you probably need both—Android still dominates here. For enterprise or niche apps, starting with one platform makes sense to test the market. The good news: we use Flutter/React Native, so building for both platforms costs about 30-40% more than building for one (not double).'
  },
  {
    question: 'What happens if the app needs changes after it launches?',
    answer: 'We include 3 months of free maintenance—bug fixes, minor tweaks, performance monitoring. After that, you can either hire us on a monthly retainer for ongoing updates, or pay per-feature for new additions. Most clients stick with a retainer because app stores and phone OS updates require regular maintenance anyway.'
  },
  {
    question: 'Can you give me a rough cost estimate?',
    answer: 'A basic app (login, profiles, simple features) starts around NPR 8-12 lakhs. Mid-complexity apps (payments, notifications, admin dashboards) run NPR 15-25 lakhs. Complex apps with custom backends, real-time features, or advanced integrations go higher. We ll give you an exact quote after understanding your requirements—usually within 3-5 days of our first call.'
  },
  {
    question: 'Will you handle the App Store and Play Store submissions for me?',
    answer: 'Yes, completely. We set up your developer accounts (you ll need to pay Apple $99/year and Google $25 one-time), prepare all the screenshots and descriptions, submit everything, and handle any feedback from the review teams. First-time submissions usually take 2-5 days to get approved.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">

          {/* Left - Header Section */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
                Questions people actually ask us
              </h2>
              <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base md:text-lg">
                Real answers about timelines, costs, and what to expect
              </p>
            </div>
          </div>

          {/* Right - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-3 sm:space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-xl sm:rounded-2xl bg-gray-50 border-2 transition-all ${
                    openIndex === index
                      ? 'border-neutral-900 shadow-lg'
                      : 'border-transparent hover:border-gray-200 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start justify-between gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 text-left group"
                  >
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-neutral-900 group-hover:text-neutral-700 transition flex-1">
                      {faq.question}
                    </h3>

                    <div className={`flex-shrink-0 grid place-items-center size-7 sm:size-8 rounded-full transition-all ${
                      openIndex === index
                        ? 'bg-[#FFB800] text-neutral-900 rotate-180'
                        : 'bg-white text-neutral-700 group-hover:bg-gray-100'
                    }`}>
                      {openIndex === index ? (
                        <Minus className="size-4 sm:size-5" strokeWidth={2.5} />
                      ) : (
                        <Plus className="size-4 sm:size-5" strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                      <div className="h-px bg-gradient-to-r from-gray-200 to-transparent mb-3 sm:mb-4" />
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}