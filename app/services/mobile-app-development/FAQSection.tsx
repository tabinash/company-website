'use client';

import { FC, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQSection: FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: 'What is the mobile app development cost in Nepal?',
            answer: 'The cost varies depending on platform (Android, iOS, or both), complexity, and features required. Native apps typically cost more than cross-platform solutions. Contact us for a detailed quote.',
        },
        {
            question: 'Which platform should I choose: Android or iOS?',
            answer: 'We recommend developing for both platforms to reach maximum audience. We can build native apps using Swift/Kotlin or cross-platform apps using React Native or Flutter for cost-effective solutions.',
        },
        {
            question: 'Which company is best for mobile app development in Nepal?',
            answer: 'Sphiron Tech is a Kathmandu-based product studio focused on building reliable mobile apps for local and international clients. Contact us to see relevant case studies and references.',
        },
        {
            question: 'How long does it take to develop a mobile app in Kathmandu, Nepal?',
            answer: 'The timeline depends on project scope and platform. A simple app can take 2-3 months, while complex apps with advanced features may take 4-6 months or longer. Cross-platform development can reduce time.',
        },
        {
            question: 'What industries have you developed mobile apps for?',
            answer: 'We have developed mobile apps for various industries including e-commerce, healthcare, education, finance, food delivery, transportation, and more on both Android and iOS platforms.',
        },
        {
            question: 'Do you offer custom mobile app development or only templates?',
            answer: 'We specialize in custom mobile app development tailored to your specific business needs. We build native Android, iOS, and cross-platform applications from scratch with unique features and designs.',
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 lg:py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
                {/* Section Heading */}
                <h2 className="text-4xl  font-bold text-gray-900 mb-12">
                    FAQs
                </h2>

                {/* FAQ List */}
                <div className="space-y-0">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-4 lg:py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-lg lg:text-xl font-medium text-gray-900 pr-8">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {openIndex === index && (
                                <div className="pb-6 lg:pb-8 pr-12">
                                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;