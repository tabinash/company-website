import { FC } from 'react';

const CTASection: FC = () => {
    return (
        <section className="relative py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 overflow-hidden">
            {/* Background Decorative Curved Shapes */}
            <div className="absolute inset-0">
                {/* Top Left Curve */}
                <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-blue-500/40 to-transparent transform -skew-y-3 origin-top-left"></div>

                {/* Bottom Right Curve */}
                <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-tl from-blue-800/50 to-transparent transform skew-y-3 origin-bottom-right"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
                <h2 className="text-4xl  font-bold text-white mb-6 leading-tight">
                    Ready to launch your mobile app with Sphiron Tech?
                </h2>

                <p className="text-white text-lg lg:text-xl mb-12 font-light">
                    Let's bring your app idea to life. Chat with our team and we'll outline a clear, fast path to launch.
                </p>

                <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 md:px-12 py-3 md:py-5 rounded-full transition-all duration-300 shadow-2xl hover:shadow-blue-900/50 text-base md:text-lg">
                    Book your free consultation
                </button>
            </div>
        </section>
    );
};

export default CTASection;