'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] lg:h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Hero Content - Image with embedded text */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <Image
            src="/hero-zh.jpg"
            alt="Aacheng Limited - 您的日本之门"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="absolute bottom-16 md:bottom-20 lg:bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-8 text-white drop-shadow-lg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 md:py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed text-gray-800 max-w-4xl mx-auto text-center">
            在喧嚣与内卷之外，一衣带水的日本，为您和家人提供一个确定、安心的未来。
          </h1>
        </div>
      </section>

      {/* 第二屏：直击痛点，引发同理心 */}
      <section className="py-12 md:py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-gray-800">我们知道你可能会在想：</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">资产安全</h3>
                <p className="text-gray-700 leading-relaxed">辛苦积累的钱，要怎样让它稳稳留下、跨代传承？</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-purple-600">子女教育</h3>
                <p className="text-gray-700 leading-relaxed">孩子的人生，不该只是"内卷"，还能否拥有更自在的童年？</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-green-600">生活品质</h3>
                <p className="text-gray-700 leading-relaxed">当清新空气、安心医疗成为稀缺，哪里的生活才是真的安心？</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-600">事业家庭</h3>
                <p className="text-gray-700 leading-relaxed">想兼顾事业和家人，新环境里真的能两全其美？</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 italic">
              每一条，都是与你一起思考的问题。我们也曾在这里，想得透彻，也踏出了第一步。
            </p>
          </div>
        </div>
      </section>

      {/* 第三屏：我们的 Plan B 方案 */}
      <section className="py-12 md:py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-800">我们的 Plan B 方案</h2>
            <p className="text-lg md:text-xl text-center mb-8 md:mb-12 text-gray-600">日本，是离我们最近的理想答案</p>
            
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">方案</th>
                    <th className="px-6 py-4 text-left font-semibold">核心内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-6 font-semibold text-blue-600">资产的永久权与避风港</td>
                    <td className="px-6 py-6 text-gray-700">拥有真正产权的日本房产和土地，稳健配置海外资产，让财富落地有根。</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-6 font-semibold text-purple-600">教育的多元与平常心</td>
                    <td className="px-6 py-6 text-gray-700">日本教育注重人格与多元素养，让孩子在广阔世界里，带着勇气自由成长。</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-6 font-semibold text-green-600">生活的高品质与安心感</td>
                    <td className="px-6 py-6 text-gray-700">国民医保、食品安全、社会治安——生活的每个细节，都值得信赖。</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-6 font-semibold text-orange-600">事业延伸与低门槛</td>
                    <td className="px-6 py-6 text-gray-700">经营管理签证不是终点，而是跨地域事业的新起点；周末回国，两地自由往来。</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-blue-600 mb-3">资产的永久权与避风港</h3>
                <p className="text-gray-700 leading-relaxed">拥有真正产权的日本房产和土地，稳健配置海外资产，让财富落地有根。</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-purple-600 mb-3">教育的多元与平常心</h3>
                <p className="text-gray-700 leading-relaxed">日本教育注重人格与多元素养，让孩子在广阔世界里，带着勇气自由成长。</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-green-600 mb-3">生活的高品质与安心感</h3>
                <p className="text-gray-700 leading-relaxed">国民医保、食品安全、社会治安——生活的每个细节，都值得信赖。</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-orange-600 mb-3">事业延伸与低门槛</h3>
                <p className="text-gray-700 leading-relaxed">经营管理签证不是终点，而是跨地域事业的新起点；周末回国，两地自由往来。</p>
              </div>
            </div>
            
            <p className="text-center mt-8 text-gray-600 italic text-lg">
              ——每个方案，我们都当成自己的生活，认真对待。
            </p>
          </div>
        </div>
      </section>

      {/* 第四屏：为什么选 Aacheng Limited */}
      <section className="py-12 md:py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-800">为什么选 Aacheng Limited</h2>
            <p className="text-lg md:text-xl text-center mb-8 md:mb-12 text-gray-600">我们不只是顾问，更是与你并肩同行的伙伴：</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">深入理解</h3>
                <p className="text-gray-600 leading-relaxed">中日文化双向耕耘，我们明白为什么你想来，也知道日本能给什么。</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">聚焦日本</h3>
                <p className="text-gray-600 leading-relaxed">专注日本经营管理/技术/教育移民，方案精准、专业。</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">全程陪伴</h3>
                <p className="text-gray-600 leading-relaxed">从咨询、材料准备、签证申请到落地安家、子女入学、更新指导……我们在每一步里陪你到底。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 第五屏：4 步开启日本新生活 */}
      <section className="py-12 md:py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">4 步开启日本新生活</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-800">免费咨询·资格评估</h3>
                <p className="text-gray-600 leading-relaxed">一对一沟通，帮你和我们看清可能性。</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-800">方案定制·材料准备</h3>
                <p className="text-gray-600 leading-relaxed">定制专属路线，由专业团队指导资料整理。</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-800">签证申请·成功获批</h3>
                <p className="text-gray-600 leading-relaxed">提交申请，我们负责全程跟进到取得在留资格。</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-800">登陆安家·后续支持</h3>
                <p className="text-gray-600 leading-relaxed">提供入境安顿、日常指导，让你和家人真正落地。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 第六屏：启动你的 Plan B */}
      <section className="py-12 md:py-20 bg-green-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800">启动你的 Plan B</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-600">你的下一步，就在这里：</p>
            
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <p className="text-lg text-gray-700 mb-8">
                想知道自己是否适合？想掌握最新政策？<br/>
                立即预约我们的 30 分钟一对一咨询<br/>
                或者<br/>
                下载《2025 日本经营管理签证白皮书》
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold">
                  立即预约咨询
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-600 hover:text-white transition-colors text-lg font-semibold">
                  下载白皮书
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">联系我们</h3>
            <div className="grid md:grid-cols-3 gap-8 text-gray-300">
              {/* 中国地址 */}
              <div>
                <h4 className="font-semibold text-white mb-2">中国办公室</h4>
                <p>浙江省杭州市滨江区泰安路199号</p>
                <p>浙江农资大厦2103</p>
              </div>
              
              {/* 美国地址 */}
              <div>
                <h4 className="font-semibold text-white mb-2">美国办公室</h4>
                <p>1500 N GRANT ST STE C</p>
                <p>DENVER CO 80203</p>
                <p>电话：+1 (702) 426-5298</p>
              </div>
              
              {/* 日本地址 */}
              <div>
                <h4 className="font-semibold text-white mb-2">日本办公室</h4>
                <p>東京都品川区上大崎3-1-1</p>
                <p>目黒セントラルスクエア</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                © 2025 Aacheng Limited All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}