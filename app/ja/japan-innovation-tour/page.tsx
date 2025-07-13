'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Link from 'next/link'
import Image from 'next/image'

export default function JapanInnovationTourPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const tourHistory = [
    {
      id: 1,
      title: '関東地区視察団',
      subtitle: '東京・横浜・甲府を探索：3日2泊就職・起業・移住実戦視察',
      date: '2024年5月28日-30日',
      location: '東京、横浜、甲府',
      status: '終了',
      participants: 7,
      highlights: ['政府相談会・面接見学', '起業家深度交流', '富士山麓スローライフ体験'],
      link: '/ja/japan-innovation-tour/kanto',
      image: '/images/japan-tours/kanto-tour.jpg',
      bgColor: 'from-blue-600 to-purple-600'
    },
    {
      id: 2,
      title: '関西地区視察団',
      subtitle: '大阪・京都・神戸：関西文化と現代ビジネスの融合体験',
      date: '2024年7月15日-17日',
      location: '大阪、京都、神戸',
      status: '終了',
      participants: 12,
      highlights: ['伝統工芸体験', 'スタートアップ企業訪問', '関西グルメツアー'],
      link: '/ja/japan-innovation-tour/kansai',
      image: '/images/japan-tours/kansai-tour.jpg',
      bgColor: 'from-green-600 to-teal-600'
    },
    {
      id: 3,
      title: '九州地区視察団',
      subtitle: '福岡・熊本・鹿児島：九州の自然と革新技術の調和',
      date: '2024年9月20日-22日',
      location: '福岡、熊本、鹿児島',
      status: '終了',
      participants: 8,
      highlights: ['温泉文化体験', 'アグリテック見学', '地方創生プロジェクト参加'],
      link: '/ja/japan-innovation-tour/kyushu',
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
              日本革新ツアー
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              日本での就職・起業・移住を実現するための実戦的視察プログラム
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ja/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                次回ツアーに参加
              </Link>
              <Link
                href="#tour-history"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                過去のツアーを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Innovation Tour */}
      <section className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              革新ツアーとは？
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              日本での新しい人生を始めるための、実践的で包括的な体験プログラムです
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">実戦的体験</h3>
              <p className="text-gray-600">
                理論だけでなく、実際の企業訪問、面接体験、生活環境の確認など、リアルな日本体験を提供
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-4">ネットワーキング</h3>
              <p className="text-gray-600">
                同じ志を持つ参加者や現地の起業家、企業関係者との貴重な人脈作りの機会
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-4">個別サポート</h3>
              <p className="text-gray-600">
                参加者一人ひとりの目標に合わせた個別相談とアフターフォローサービス
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
              過去のツアー実績
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              これまでに実施した革新ツアーの成果と参加者の声
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
                          <div className="text-2xl font-bold">{tour.participants}名</div>
                          <div className="text-sm opacity-80">参加者数</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold">{tour.location}</div>
                          <div className="text-sm opacity-80">訪問地</div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">ハイライト：</h4>
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
                        詳細を見る
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

      {/* Success Stories */}
      <section className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              参加者の成功事例
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ツアー参加後に日本での新しい人生を実現した方々の声
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">L</span>
                </div>
                <div>
                  <h4 className="font-semibold">李さん（中国）</h4>
                  <p className="text-sm text-gray-600">IT起業家</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                「関東ツアーで出会った投資家の方との縁で、東京でAIスタートアップを立ち上げることができました。」
              </p>
              <div className="text-sm text-blue-600 font-semibold">✅ 東京で起業成功</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-semibold">Michaelさん（アメリカ）</h4>
                  <p className="text-sm text-gray-600">エンジニア</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                「関西ツアーで訪問した企業から内定をいただき、現在大阪で働いています。日本の技術力の高さに感動しました。」
              </p>
              <div className="text-sm text-green-600 font-semibold">✅ 大阪で就職成功</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarahさん（カナダ）</h4>
                  <p className="text-sm text-gray-600">デザイナー</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                「九州ツアーで地方の魅力を発見し、熊本に移住しました。自然豊かな環境でクリエイティブな仕事ができています。」
              </p>
              <div className="text-sm text-purple-600 font-semibold">✅ 熊本で移住成功</div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Tour CTA */}
      <section className="py-20 bg-blue-600 text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            次回ツアーに参加しませんか？
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            あなたの日本での新しい人生の第一歩を、私たちと一緒に踏み出しましょう
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ja/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              お問い合わせ
            </Link>
            <Link
              href="/ja/aboutus"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              会社について
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}