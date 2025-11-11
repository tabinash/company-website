'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
{
  question: 'What technologies do you use for development?',
  answer: 'We specialize in a comprehensive tech stack: React and Next.js for modern web applications, Flutter for cross-platform mobile apps, Java Spring Boot for enterprise backend services, and robust databases including PostgreSQL and MongoDB. We also leverage Node.js and TypeScript for scalable solutions. We select the right combination of technologies that best fits your product goals and ensures long-term maintainability.'
},
{
  question: 'What technologies do you use for mobile development?',
  answer: 'We primarily use Flutter for cross-platform mobile development, enabling us to build beautiful, high-performance apps for both iOS and Android from a single codebase. This approach ensures faster time-to-market, consistent user experiences, and easier maintenance while maintaining native performance.'
},
  {
  question: 'How long does it typically take to develop a website or a mobile app?',
  answer: 'Timelines vary based on project complexity. A simple website can launch in 2-4 weeks, while a basic mobile app typically takes 4-10 weeks. Feature-rich web applications or complex mobile apps may take 3-6 months or more. We provide a detailed timeline and project roadmap after an initial discovery conversation to understand your specific requirements.'
},
  {
    question: 'What is the process for working with your company on a web or mobile development project?',
    answer: 'Our process: 1) Discovery & requirements, 2) Proposal & roadmap, 3) Design & prototyping, 4) Agile development in short sprints, 5) QA & launch, 6) Ongoing support. We provide regular updates and include you in key decisions.'
  },
 
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">

          {/* Left - Header Section */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base md:text-lg">
                Everything you need to know about working with us
              </p>

              {/* CTA Card */}
              {/* <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#FFF7E9] to-[#FFE8B8] p-6 shadow-lg">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Still have questions?
                </h3>
                <p className="text-sm text-neutral-700 mb-4">
                  Can't find the answer you're looking for? Our team is here to help.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-neutral-700 transition"
                >
                  Get in touch
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div> */}
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