'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Link from 'next/link'
import Image from 'next/image'

export default function JapanDeepDivePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const tourHistory = [
    {
      id: 1,
      title: 'Kanto Region Tour',
      subtitle: 'Exploring Tokyo, Yokohama & Kofu: 3-Day Practical Career, Entrepreneurship & Immigration Tour',
      date: 'May 28-30, 2024',
      location: 'Tokyo, Yokohama, Kofu',
      status: 'Completed',
      participants: 7,
      highlights: ['Government consultation & interview observation', 'In-depth entrepreneur networking', 'Mount Fuji slow life experience'],
      link: '/en/japan-deep-dive/kanto',
      image: '/images/japan-tours/kanto-tour.jpg',
      bgColor: 'from-blue-600 to-purple-600'
    },
    {
      id: 2,
      title: 'Kansai Region Tour',
      subtitle: 'Osaka, Kyoto & Kobe: Fusion of Kansai Culture and Modern Business',
      date: 'July 15-17, 2024',
      location: 'Osaka, Kyoto, Kobe',
      status: 'Completed',
      participants: 12,
      highlights: ['Traditional craft experience', 'Startup company visits', 'Kansai gourmet tour'],
      link: '/en/japan-deep-dive/kansai',
      image: '/images/japan-tours/kansai-tour.jpg',
      bgColor: 'from-green-600 to-teal-600'
    },
    {
      id: 3,
      title: 'Kyushu Region Tour',
      subtitle: 'Fukuoka, Kumamoto & Kagoshima: Harmony of Kyushu Nature and Innovation Technology',
      date: 'September 20-22, 2024',
      location: 'Fukuoka, Kumamoto, Kagoshima',
      status: 'Completed',
      participants: 8,
      highlights: ['Hot spring culture experience', 'AgriTech facility tours', 'Regional revitalization project participation'],
      link: '/en/japan-deep-dive/kyushu',
      image: '/images/japan-tours/kyushu-tour.jpg',
      bgColor: 'from-orange-600 to-red-600'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Japan Deep Dive
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Practical exploration programs to realize your career, entrepreneurship, and immigration goals in Japan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Next Tour
              </Link>
              <Link
                href="#tour-history"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Past Tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Deep Dive Tour */}
      <section className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What is Japan Deep Dive?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A practical and comprehensive experience program to start your new life in Japan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Practical Experience</h3>
              <p className="text-gray-600">
                Beyond theory - real Japan experience through actual company visits, interview experiences, and living environment assessments
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-4">Networking</h3>
              <p className="text-gray-600">
                Valuable networking opportunities with like-minded participants, local entrepreneurs, and business professionals
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-4">Personal Support</h3>
              <p className="text-gray-600">
                Individual consultation and follow-up services tailored to each participant's goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour History */}
      <section id="tour-history" className="py-20 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Past Tour Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Results and participant feedback from our previous deep dive tours
            </p>
          </div>
          
          <div className="space-y-12">
            {tourHistory.map((tour, index) => (
              <div key={tour.id} className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${tour.bgColor} text-white`} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="relative p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                          {tour.status}
                        </span>
                        <span className="text-sm opacity-90">{tour.date}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">{tour.title}</h3>
                      <p className="text-lg mb-6 opacity-90">{tour.subtitle}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-2xl font-bold">{tour.participants} people</div>
                          <div className="text-sm opacity-80">Participants</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold">{tour.location}</div>
                          <div className="text-sm opacity-80">Destinations</div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Highlights:</h4>
                        <ul className="space-y-2">
                          {tour.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link
                        href={tour.link}
                        className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        View Details
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                    
                    <div className="relative">
                      <div className="aspect-video bg-white bg-opacity-10 rounded-xl flex items-center justify-center">
                        <span className="text-6xl opacity-50">📸</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Next Tour CTA */}
      <section className="py-20 bg-blue-600 text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Join Our Next Tour?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards your new life in Japan with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/en/aboutus"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}