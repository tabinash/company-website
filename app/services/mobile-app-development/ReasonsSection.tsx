import { FC } from 'react';
import Link from 'next/link';

const ReasonsSection: FC = () => {
    return (
        <section className="py-12 lg:py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Content - Heading with Background */}
                    <div className="bg-blue-50 p-12 lg:p-16 rounded-2xl">
                        <h2 className="text-4xl  font-normal text-gray-900 leading-tight">
                            Why companies choose <span className="text-blue-600">Sphiron Tech</span> for Mobile Apps
                        </h2>
                    </div>

                    {/* Right Content - Description Text */}
                    <div className="space-y-6 text-gray-600 text-base lg:text-lg leading-relaxed text-justify">
                        <p>
                            We go beyond the traditional approach and look to satisfy your
                            audience and goals more than just satisfying you.
                        </p>

                        <p>
                            At Sphiron Tech, we build thoughtful mobile experiences tailored to your business. Whether you need a native Android app, iOS application, or a cross-platform product, our teams deliver apps that solve real problems and scale with your users.
                        </p>

                        <p>
                            Just don't take our words - our proven record says it all. We have
                            served businesses of all kinds with their kind of challenges and
                            objectives. Check out{' '}
                            <Link href="#" className="text-blue-600 hover:underline">
                                our portfolio
                            </Link>{' '}
                            to check our past projects and their stories.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReasonsSection;