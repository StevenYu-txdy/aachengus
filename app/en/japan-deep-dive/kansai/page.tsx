'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

export default function KansaiTourPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-teal-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kansai Region Deep Dive
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Osaka, Kyoto & Kobe: Fusion of Kansai Culture and Modern Business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/contact"
                className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Next Tour
              </Link>
              <Link
                href="/en/japan-deep-dive"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors"
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
              Experience the perfect blend of traditional Japanese culture and modern business innovation in the Kansai region
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up">
              <div className="text-4xl mb-4">🏯</div>
              <h3 className="text-xl font-bold mb-4">Cultural Heritage</h3>
              <p className="text-gray-600">
                Explore Kyoto's traditional crafts and learn how ancient techniques inspire modern business innovation
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">Startup Ecosystem</h3>
              <p className="text-gray-600">
                Visit Osaka's thriving startup scene and connect with innovative companies reshaping Japan's business landscape
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl mb-4">🍜</div>
              <h3 className="text-xl font-bold mb-4">Culinary Culture</h3>
              <p className="text-gray-600">
                Experience Kansai's renowned food culture and discover business opportunities in Japan's culinary industry
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
            <div className="bg-green-50 p-8 rounded-xl" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Day 1: Osaka Business Innovation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Morning: Arrival and orientation in Osaka</li>
                <li>• Afternoon: Startup company visits in Osaka Innovation Hub</li>
                <li>• Evening: Networking with local entrepreneurs and business leaders</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Day 2: Kyoto Traditional Meets Modern</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Morning: Traditional craft workshops and artisan meetings</li>
                <li>• Afternoon: Visit to tech companies preserving traditional values</li>
                <li>• Evening: Cultural dinner and reflection session</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Day 3: Kobe International Business</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Morning: Kobe port and international trade opportunities</li>
                <li>• Afternoon: Multinational company visits and career consultations</li>
                <li>• Evening: Farewell dinner and future planning session</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Explore Kansai?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover the unique blend of tradition and innovation that makes Kansai a perfect place for your Japan journey
          </p>
          <Link
            href="/en/contact"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us to Join
          </Link>
        </div>
      </section>
    </main>
  )
}