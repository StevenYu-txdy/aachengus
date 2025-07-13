'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [showCircle, setShowCircle] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })

    const handleScroll = () => {
      if (typeof window === 'undefined') return
      
      const scrollPosition = window.scrollY
      setScrollY(scrollPosition)
      
      // Show circle when arrow reaches center of screen
      const heroHeight = window.innerHeight
      const centerPoint = heroHeight * 0.6
      setShowCircle(scrollPosition > centerPoint)
      
      // Determine current section with flip animation
      const sectionHeight = window.innerHeight * 0.8
      const newSectionIndex = Math.floor((scrollPosition - centerPoint) / sectionHeight)
      const clampedIndex = Math.max(0, Math.min(2, newSectionIndex))
      
      if (clampedIndex !== currentSection) {
        setIsFlipping(true)
        setTimeout(() => {
          setCurrentSection(clampedIndex)
          setIsFlipping(false)
        }, 150)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [currentSection])

  const circleRotation = scrollY * 0.3
  const lineHeight = typeof window !== 'undefined' ? Math.min(scrollY * 0.2, window.innerHeight * 0.4) : 0

  // Different icons for each section
  const sectionIcons = [
    '🏯', // Japan/Travel icon
    '💻', // Work/Digital nomad icon
    '🏠'  // House/Akiya icon
  ]

  return (
    <main className="flex flex-col min-h-screen relative">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] lg:h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 text-white overflow-hidden">
        <div className="text-center z-10" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-black mb-4">Live, Work & Discover Japan</h1>
          <p className="text-lg md:text-xl opacity-90" data-aos="fade-up" data-aos-delay="200">Your Gateway to the Rising Sun</p>
        </div>
        
        {/* Initial scroll indicator - only show when not scrolled */}
        {!showCircle && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Central Circle Animation */}
      {showCircle && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
          {/* Vertical Line */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-t from-blue-500 to-transparent transition-all duration-300"
            style={{ height: `${lineHeight}px` }}
          ></div>
          
          {/* Central Circle with flip animation */}
           <div className="w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-lg relative" style={{ perspective: '1000px' }}>
             <div 
               className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
               style={{ 
                 transformStyle: 'preserve-3d',
                 transform: isFlipping ? 'rotateY(180deg)' : 'rotateY(0deg)'
               }}
             >
               <span className="text-2xl">
                 {sectionIcons[currentSection]}
               </span>
             </div>
           </div>
        </div>
      )}

      {/* Content Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Section 1: Short-Term Immersion + Curated Travel */}
          <div className="mb-32">
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-4" data-aos="fade-up">
                Begin with Japan: Immersion + Travel
              </h2>
              <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="100">
                Explore Japan beyond the surface through intimate, meaningful experiences
              </p>
            </div>
            
            <div className="flex items-stretch gap-16">
              <div className="flex-1" data-aos="fade-right">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-2xl font-semibold mb-4 text-purple-600">Small-Group Immersions</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      <strong>6–12 people:</strong> Stay in traditional homes, visit local artisans, enjoy regional foods—perfect for a lifestyle preview.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      These experiences aren't superficial tours—they're built for interaction, reflection, and genuine cultural exchange.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1" data-aos="fade-left">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-2xl font-semibold mb-4 text-red-600">Cultural Deep Dives & Workshops</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      <strong>Cultural Deep Dives:</strong> Walk ancient pilgrimage routes, visit hidden shrines, or experience seasonal traditions—immersive, responsible, and off the beaten path.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Immersive Workshops:</strong> Pottery with fifth-generation artisans, cooking classes in countryside homes, or meditation retreats—designed to help you live like a local.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Work & Digital Nomad Support */}
          <div className="mb-32">
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-4" data-aos="fade-up">
                  Work & Digital Nomad Support
                </h2>
              <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="100">
                Once you've dipped your toes, stay longer with confidence
              </p>
            </div>
            
            <div className="flex items-stretch gap-16">
              <div className="flex-1" data-aos="fade-right">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-600">Digital Nomad Visa Pathways</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Perfect if you wish to work remotely for your current job—stay up to six months legally.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We guide you through the application process and help you understand all requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1" data-aos="fade-left">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-2xl font-semibold mb-4 text-green-600">Remote Work & Community Access</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      <strong>Job Support:</strong> From freelance tech roles to part-time teaching, we help you find the right opportunity.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Co-Working Communities:</strong> Access spaces and meetups in Tokyo and regions tailored to global professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Akiya Project */}
          <div className="mb-32">
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-4" data-aos="fade-up">
                  Akiya Project: Affordable Living
                </h2>
              <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="100">
                Finally, settle into your own home—through Japan's Akiya (vacant house) initiative
              </p>
            </div>
            
            <div className="flex items-stretch gap-16">
              <div className="flex-1" data-aos="fade-right">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-2xl font-semibold mb-4 text-orange-600">Vast Reserve & Incentives</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      <strong>Access a vast reserve:</strong> Japan has nearly 11 million vacant homes (~14%) nationwide.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>Supportive incentives:</strong> Many local governments offer tax breaks, subsidies, and renovation grants to revitalize properties.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1" data-aos="fade-left">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="border-l-4 border-teal-500 pl-6">
                    <h3 className="text-2xl font-semibold mb-4 text-teal-600">Guided Transition</h3>
                    <p className="text-gray-600 leading-relaxed">
                      From selection to renovation to moving in, we walk every step with you—connecting you with local communities, artisans, and support services.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Complete support from house hunting to community integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Begin - Full Width */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-600 to-green-600 text-white" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">Ready to Begin?</h2>
          <p className="text-lg mb-4" data-aos="fade-up" data-aos-delay="100">Ready for your next chapter in Japan?</p>
          <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="200">Curious about akiya homes or working remotely here?</p>
          <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="300">Reach out—let's explore the possibilities together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors transform hover:scale-105">
              Download Our Free Guide
            </button>
          </div>
        </div>
      </section>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
        
        .animate-pulse {
           animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
         }
      `}</style>
    </main>
  )
}