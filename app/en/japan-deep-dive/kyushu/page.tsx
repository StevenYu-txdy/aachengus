'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

export default function KyushuTourPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kyushu Region Deep Dive
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto mb-8">
              Fukuoka, Kumamoto & Kagoshima: Harmony of Kyushu Nature and Innovation Technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/contact"
                className="bg-white text-orange-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Next Tour
              </Link>
              <Link
                href="/en/japan-deep-dive"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-900 transition-colors"
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
              Discover Kyushu's unique combination of natural beauty, innovative agriculture technology, and regional revitalization projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-4">AgriTech Innovation</h3>
              <p className="text-gray-600">
                Explore cutting-edge agricultural technology and sustainable farming practices that are revolutionizing rural Japan
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl mb-4">♨️</div>
              <h3 className="text-xl font-bold mb-4">Wellness & Hot Springs</h3>
              <p className="text-gray-600">
                Experience Japan's famous onsen culture and discover business opportunities in the wellness and tourism industry
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-xl font-bold mb-4">Regional Revitalization</h3>
              <p className="text-gray-600">
                Participate in local community projects and learn about Japan's innovative approaches to rural development
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
            <div className="bg-orange-50 p-8 rounded-xl" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Day 1: Fukuoka Tech Hub</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Morning: Arrival and orientation in Fukuoka</li>
                <li>• Afternoon: Visit to Fukuoka startup ecosystem and tech companies</li>
                <li>• Evening: Networking dinner with local entrepreneurs and government officials</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Day 2: Kumamoto AgriTech & Nature</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Morning: Visit to advanced agricultural facilities and smart farming projects</li>
                <li>• Afternoon: Hot spring culture experience and wellness industry exploration</li>
                <li>• Evening: Local community dinner and cultural exchange</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Day 3: Kagoshima Regional Innovation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Morning: Regional revitalization project participation</li>
                <li>• Afternoon: Local business opportunities and lifestyle exploration</li>
                <li>• Evening: Reflection session and future planning workshop</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Explore Kyushu?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the natural beauty and innovative spirit of Kyushu while discovering your path to life in Japan
          </p>
          <Link
            href="/en/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us to Join
          </Link>
        </div>
      </section>
    </main>
  )
}