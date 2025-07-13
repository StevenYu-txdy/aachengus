'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AboutUsPage() {
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
            关于我们
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Aacheng Limited - 您的日本之门
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">
              我们的使命
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-bold mb-4 text-blue-600">专业服务</h3>
                <p className="text-gray-700 leading-relaxed">
                  我们专注于为中国客户提供全方位的日本移民、投资和生活服务，
                  让您的日本梦想成为现实。
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl font-bold mb-4 text-green-600">文化桥梁</h3>
                <p className="text-gray-700 leading-relaxed">
                  深入理解中日两国文化，我们不仅是服务提供者，
                  更是您在日本生活的文化向导和贴心伙伴。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}