'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Get in Touch with Aacheng Limited
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">
              Our Offices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Japan Office */}
              <div className="bg-gray-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Japan Headquarters</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Address:</strong> Tokyo, Japan</p>
                  <p><strong>Phone:</strong> +81-XX-XXXX-XXXX</p>
                  <p><strong>Email:</strong> japan@aacheng.com</p>
                  <p><strong>Business Hours:</strong> Mon-Fri 9:00-18:00 JST</p>
                </div>
              </div>
              
              {/* China Office */}
              <div className="bg-gray-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl font-bold mb-4 text-green-600">China Office</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Address:</strong> Shanghai, China</p>
                  <p><strong>Phone:</strong> +86-XXX-XXXX-XXXX</p>
                  <p><strong>Email:</strong> china@aacheng.com</p>
                  <p><strong>Business Hours:</strong> Mon-Fri 9:00-18:00 CST</p>
                </div>
              </div>
              
              {/* US Office */}
              <div className="bg-gray-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-xl font-bold mb-4 text-purple-600">US Office</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Address:</strong> Denver, Colorado, USA</p>
                  <p><strong>Phone:</strong> +1-XXX-XXX-XXXX</p>
                  <p><strong>Email:</strong> usa@aacheng.com</p>
                  <p><strong>Business Hours:</strong> Mon-Fri 9:00-17:00 MST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">
              Send Us a Message
            </h2>
            
            <form className="space-y-6" data-aos="fade-up" data-aos-delay="100">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}