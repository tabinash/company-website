'use client';

import Consultation from "./Consultation";

// Custom Viber icon component
function ViberIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.176.584 4.214 1.6 5.97L.134 23.863a.5.5 0 0 0 .632.632l5.893-1.466A11.956 11.956 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.568 17.568c-.292.292-.76.292-1.052 0L12 13.052 7.484 17.568c-.292.292-.76.292-1.052 0-.292-.292-.292-.76 0-1.052L10.948 12 6.432 7.484c-.292-.292-.292-.76 0-1.052.292-.292.76-.292 1.052 0L12 10.948l4.516-4.516c.292-.292.76-.292 1.052 0 .292.292.292.76 0 1.052L13.052 12l4.516 4.516c.292.292.292.76 0 1.052z"/>
    </svg>
  );
}

// Custom WhatsApp icon component  
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
    </svg>
  );
}

export default function Contact() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14 relative overflow-hidden">
                {/* Decorative Circle in Top Right Corner */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start relative z-10">

                    {/* Left Section - Contact Information */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 sm:mb-8">
                            Get in <span className="">touch.</span>
                        </h2>

                        <div className="border-t border-gray-200 my-6 sm:my-8"></div>

                        {/* Location Section */}
                        <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                                Kathmandu, Nepal
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </h3>

                            {/* Address */}
                            <div className="flex items-start gap-2.5 sm:gap-3 mb-3 sm:mb-4 text-gray-600">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#1445cc] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <p className="text-sm sm:text-base">Gaurighat, Kathmandu</p>
                            </div>

                            

                            {/* Email */}
                            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 text-gray-600">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#1445cc] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <div className="flex flex-col gap-1">
                                    <a href="mailto:sphirontech@outlook.com" className="text-sm sm:text-base hover:text-[#1445cc] transition-colors font-semibold">sphirontech@outlook.com</a>
                                 </div>
                            </div>

                            {/* Viber */}
                            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 text-gray-600">
                                <ViberIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                                <a href="viber://chat?number=%2B9779742555741" className="text-sm sm:text-base hover:text-purple-600 transition-colors font-semibold">+9779742555741</a>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 text-gray-600">
                                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                                <a href="https://wa.me/9779742555741" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base hover:text-green-600 transition-colors font-semibold">+9779742555741</a>
                            </div>
                        </div>

                      
                    </div>

                    {/* Right Section - Google Map */}
                    <div className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-lg">
                     
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2060.1475104574297!2d85.3480302484769!3d27.714262550148167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197b8e6280bd%3A0x36b86f75890c83eb!2sP87X%2BJPM%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1763191161866!5m2!1sen!2snp"
                         width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        
                    </div>

                </div>
            </div>
            <Consultation />
        </section>
    );
}