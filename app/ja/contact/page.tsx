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
            お問い合わせ
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Aacheng Limitedへのお問い合わせ
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">
              オフィス一覧
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* China Office */}
              <div className="bg-gray-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-bold mb-4 text-green-600">📍 中国オフィス</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>住所:</strong> 杭州市滨江区泰安路199号浙江农资大厦2103</p>
                  <p><strong>メール:</strong> info@aachengus.com</p>
                  <p><strong>営業時間:</strong> 月-金 9:00-18:00 CST</p>
                </div>
              </div>
              
              {/* US Office */}
              <div className="bg-gray-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl font-bold mb-4 text-purple-600">📍 アメリカオフィス</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>住所:</strong> 1500 N GRANT ST STE C DENVER CO</p>
                  <p><strong>電話:</strong> +1 702-426-5298</p>
                  <p><strong>メール:</strong> info@aachengus.com</p>
                  <p><strong>営業時間:</strong> 月-金 9:00-17:00 MST</p>
                </div>
              </div>
              
              {/* Japan Office */}
              <div className="bg-gray-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-xl font-bold mb-4 text-blue-600">📍 日本オフィス</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>住所:</strong> 東京都品川区上大崎3-1-1 目黒セントラルスクエア</p>
                  <p><strong>電話:</strong> +81 70-9328-4415 (SMSのみ)</p>
                  <p><strong>メール:</strong> info@aachengus.com</p>
                  <p><strong>営業時間:</strong> 月-金 9:00-18:00 JST</p>
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
              メッセージを送信
            </h2>
            
            <form className="space-y-6" data-aos="fade-up" data-aos-delay="100">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    名前
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
                    姓
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
                  メールアドレス
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
                  件名
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
                  メッセージ
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
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
