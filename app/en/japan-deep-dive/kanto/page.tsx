'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

export default function KantoTourPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kanto Region Deep Dive
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Exploring Tokyo, Yokohama & Kofu: 3-Day Practical Career, Entrepreneurship & Immigration Tour
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Next Tour
              </Link>
              <Link
                href="/en/japan-deep-dive"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Back to Tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tour Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A comprehensive 3-day exploration of the Kanto region's business opportunities and lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-4">Business Visits</h3>
              <p className="text-gray-600">
                Visit leading companies in Tokyo, participate in real interviews, and network with industry professionals
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl mb-4">🗼</div>
              <h3 className="text-xl font-bold mb-4">Tokyo Experience</h3>
              <p className="text-gray-600">
                Explore Tokyo's business districts, startup ecosystem, and experience the metropolitan lifestyle
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl mb-4">🗻</div>
              <h3 className="text-xl font-bold mb-4">Mount Fuji Region</h3>
              <p className="text-gray-600">
                Experience the slower pace of life in Kofu and the Mount Fuji area, perfect for those considering rural living
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              3-Day Itinerary
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-xl" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Day 1: Tokyo Business District</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Morning: Arrival and orientation in Shibuya</li>
                <li>• Afternoon: Company visits in Marunouchi business district</li>
                <li>• Evening: Networking dinner with local entrepreneurs</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Day 2: Yokohama Innovation Hub</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Morning: Visit to Yokohama startup incubators</li>
                <li>• Afternoon: Government consultation sessions</li>
                <li>• Evening: Cultural experience in Minato Mirai</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Day 3: Kofu & Mount Fuji Area</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Morning: Travel to Kofu, explore local business opportunities</li>
                <li>• Afternoon: Mount Fuji area lifestyle experience</li>
                <li>• Evening: Reflection session and departure planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Explore Kanto?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our next Kanto region deep dive tour and discover your opportunities in Japan's business capital
          </p>
          <Link
            href="/en/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us to Join
          </Link>
        </div>
      </section>
    </main>
  )
}