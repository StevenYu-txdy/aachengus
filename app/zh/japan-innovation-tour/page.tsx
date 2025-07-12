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
      title: '关东地区考察团',
      subtitle: '探索东京、横滨与甲府：3天2晚就业·创业·移居实战考察',
      date: '2024年5月28日-30日',
      location: '东京、横滨、甲府',
      status: '已结束',
      participants: 7,
      highlights: ['政府咨询会 & 面试观摩', '创业者深度社交', '富士山下慢生活体验'],
      link: '/zh/japan-innovation-tour/kanto',
      image: '/images/japan-tours/kanto-tour.jpg',
      bgColor: 'from-blue-600 to-purple-600'
    },
    {
      id: 2,
      title: '关西地区考察团',
      subtitle: '大阪、京都、神户商业文化深度体验',
      date: '2024年6月15日-17日',
      location: '大阪、京都、神户',
      status: '已结束',
      participants: 8,
      highlights: ['传统文化体验', '现代商业考察', '历史古迹参观'],
      link: '/zh/japan-innovation-tour/kansai',
      image: '/images/japan-tours/kansai-tour.jpg',
      bgColor: 'from-red-500 to-pink-500'
    },
    {
      id: 3,
      title: '九州地区考察团',
      subtitle: '福冈、熊本温泉与农业创新之旅',
      date: '2024年7月20日-22日',
      location: '福冈、熊本',
      status: '已结束',
      participants: 6,
      highlights: ['温泉文化体验', '农业技术考察', '地方特色美食'],
      link: '/zh/japan-innovation-tour/kyushu',
      image: '/images/japan-tours/kyushu-tour.jpg',
      bgColor: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: '北海道地区考察团',
      subtitle: '札幌、小樽农业科技与冰雪文化探索',
      date: '2024年8月10日-12日',
      location: '札幌、小樽',
      status: '已结束',
      participants: 9,
      highlights: ['农业科技创新', '冰雪产业考察', '海鲜美食体验'],
      link: '/zh/japan-innovation-tour/hokkaido',
      image: '/images/japan-tours/hokkaido-tour.jpg',
      bgColor: 'from-indigo-500 to-blue-600'
    },
    {
      id: 5,
      title: '中部地区考察团',
      subtitle: '名古屋、静冈制造业与茶文化深度体验',
      date: '2024年9月5日-7日',
      location: '名古屋、静冈',
      status: '已结束',
      participants: 10,
      highlights: ['制造业创新', '茶文化体验', '工业4.0考察'],
      link: '/zh/japan-innovation-tour/chubu',
      image: '/images/japan-tours/chubu-tour.jpg',
      bgColor: 'from-orange-500 to-red-500'
    },
    {
      id: 6,
      title: '四国地区考察团',
      subtitle: '高松、德岛传统工艺与现代农业融合',
      date: '2024年10月12日-14日',
      location: '高松、德岛',
      status: '即将开始',
      participants: 0,
      highlights: ['传统工艺传承', '智慧农业', '地方创生案例'],
      link: '/zh/japan-innovation-tour/shikoku',
      image: '/images/japan-tours/shikoku-tour.jpg',
      bgColor: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* 页面标题 */}
        <section className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800">日本考察计划</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            深度体验日本文化，探索商业机会，为您的事业发展和生活规划提供全方位支持
          </p>
        </section>

        {/* 近期动态标题 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-pink-600 mb-8" data-aos="fade-up">近期动态</h2>
          
          {/* 大图片卡片网格 */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tourHistory.map((tour, index) => (
              <Link
                key={tour.id}
                href={tour.link}
                className="group block"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* 背景渐变 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tour.bgColor} opacity-90`}></div>
                  
                  {/* 背景图片 */}
                   <div className="relative h-64 bg-cover bg-center" style={{
                     backgroundImage: tour.id === 1 
                       ? `url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')` // 东京
                       : tour.id === 2
                       ? `url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')` // 京都
                       : tour.id === 3
                       ? `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')` // 九州
                       : tour.id === 4
                       ? `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')` // 北海道
                       : tour.id === 5
                       ? `url('https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')` // 名古屋
                       : `url('https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')` // 四国
                   }}>
                    {/* 内容覆盖层 */}
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    
                    {/* 状态标签 */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tour.status === '已结束' 
                          ? 'bg-gray-800 bg-opacity-70 text-white' 
                          : tour.status === '即将开始'
                          ? 'bg-green-500 text-white'
                          : 'bg-blue-500 text-white'
                      }`}>
                        {tour.status}
                      </span>
                    </div>
                    
                    {/* 参与人数 */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded text-xs">
                        {tour.participants > 0 ? `${tour.participants} 人参加` : '报名中'}
                      </span>
                    </div>
                    
                    {/* 主要内容 */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                        {tour.title}
                      </h3>
                      <p className="text-sm opacity-90 mb-3 line-clamp-2">
                        {tour.subtitle}
                      </p>
                      
                      {/* 日期和地点 */}
                      <div className="flex items-center justify-between text-xs opacity-80">
                        <div className="flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {tour.date}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {tour.location}
                        </div>
                      </div>
                    </div>
                    
                    {/* 悬停效果箭头 */}
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 联系我们 */}
        <section className="text-center bg-white rounded-xl p-8 shadow-lg" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4">想参加下一次考察团？</h2>
          <p className="text-gray-600 mb-6">
            我们定期组织各种主题的日本考察团，为您提供深度的文化体验和商业机会探索。
          </p>
          <Link
            href="/zh/contact"
            className="inline-block bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            联系我们了解更多
          </Link>
        </section>
      </div>

         {/* 项目特色介绍 */}
         <div className="mt-20 bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">项目特色</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                     我们的日本考察项目致力于为青少年提供深度的文化体验和学习机会
                  </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                     <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                     </div>
                     <h3 className="text-xl font-semibold text-gray-900 mb-2">文化深度体验</h3>
                     <p className="text-gray-600">深入了解日本传统文化与现代创新的完美融合</p>
                  </div>
                  
                  <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                     <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                     </div>
                     <h3 className="text-xl font-semibold text-gray-900 mb-2">企业参访</h3>
                     <p className="text-gray-600">参观知名企业，了解日本商业文化和管理理念</p>
                  </div>
                  
                  <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                     <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                     </div>
                     <h3 className="text-xl font-semibold text-gray-900 mb-2">青年交流</h3>
                     <p className="text-gray-600">与当地青年深度交流，建立国际友谊</p>
                  </div>
               </div>
            </div>
         </div>

         {/* 联系我们 */}
         <div className="bg-blue-600 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">
                  想了解更多项目详情？
               </h2>
               <p className="text-xl text-blue-100 mb-8" data-aos="fade-up" data-aos-delay="100">
                  联系我们获取最新的考察项目信息和报名详情
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                     立即咨询
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                     下载手册
                  </button>
               </div>
            </div>
         </div>
    </main>
  )
}