import React from 'react'
import ServicesSection from './_hompage/ServiceSection'
import HeroSection from './_hompage/HeroSection'
import EliminateITChallengesSection from './_hompage/Intos'
import WhyChooseUsSection from './_hompage/WhyChooseUsSection'
import CTASection from './_hompage/CTASection'
import TestimonialsSection from './_hompage/TestimonialsSection'
import ShowcaseSection from './_hompage/ShowcaseSection'
import BlogSection from './_hompage/BlogSection'
import FAQ from './_hompage/FAQ'

const page = () => {
  return (
    <div>
      <HeroSection />
      <EliminateITChallengesSection />
      <ServicesSection />
      {/* <WhyChooseUsSection /> */}
  <CTASection />
      <ShowcaseSection />
      <FAQ />
      <TestimonialsSection />
    <BlogSection />
    </div>
  )
}

export default page