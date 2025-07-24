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
      <section className="hero-section relative h-[60vh] md:h-[80vh] lg:h-screen">
        {/* Hero Content - Image with embedded text */}
        <div className="relative z-10 h-full">
          <Image
             src="/hero-jp.jpg"
             alt="海外の資本と人材で、日本の地方を未来へ"
             width={1200}
             height={600}
             className="w-full h-full object-cover"
             priority
             placeholder="blur"
             blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
           />
           
           {/* Hero Text Overlay */}
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center px-4 sm:px-6 lg:px-8">
               <h1 className="hero-text hero-text-mobile text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
                  海外の資本と人材で、日本の地方を未来へ
                </h1>
                <p className="hero-subtitle-mobile text-sm sm:text-base md:text-lg lg:text-xl text-white/90 drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
                  グローバルネットワークで地域を活性化
                </p>
             </div>
           </div>
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
      {/* 必要に応じて日本語のコンテンツを追加してください */}

      {/* こんなお悩みありませんか？ */}
      <section className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">こんなお悩みありませんか？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
             <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up">
               <div className="text-red-500 text-4xl mb-4">📉</div>
               <h3 className="text-xl font-semibold mb-4 border-l-4 border-red-500 pl-4">■ 全国的な人口減少</h3>
               <p className="text-gray-600">少子高齢化により、日本全国で人口が年々減少しています。多くの業界や地域経済に深刻な影響を与えています。</p>
             </div>
             <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
               <div className="text-orange-500 text-4xl mb-4">🚇</div>
               <h3 className="text-xl font-semibold mb-4 border-l-4 border-orange-500 pl-4">■ 地方のインフラ維持が困難</h3>
               <p className="text-gray-600">地方や過疎地域では、人口流出に伴い、鉄道・バス・医療・教育など公共インフラの維持が难しくなっています。JRのローカル線廃止や診療所の撤退も増えています。</p>
             </div>
             <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
               <div className="text-blue-500 text-4xl mb-4">🏚️</div>
               <h3 className="text-xl font-semibold mb-4 border-l-4 border-blue-500 pl-4">■ 空き家の増加と地域衰退</h3>
               <p className="text-gray-600">住宅や店舗が空き家化し、管理できないまま放置されるケースが急増。地域の景観悪化や治安不安、資産価値の低下にもつながっています。</p>
             </div>
             <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
               <div className="text-green-500 text-4xl mb-4">👥</div>
               <h3 className="text-xl font-semibold mb-4 border-l-4 border-green-500 pl-4">■ 地域産業の担い手不足</h3>
               <p className="text-gray-600">農業・観光・製造など地域産業の現場では、働き手や後継者が見つからず、事業継続や技術継承が大きな課題となっています。</p>
             </div>
           </div>
        </div>
      </section>

      {/* Aacheng Limitedのソリューション */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Aacheng Limitedのソリューション</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center" data-aos="fade-up">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">地域産業への資本・人材導入</h3>
              <p className="text-gray-600">農業・観光・伝統産業に対して、海外からの投資（FDI）と日本語話せる人材をマッチングし、現場で即戦力として活躍できる形で導入します。</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">空き家活用・海外移住サポート</h3>
              <p className="text-gray-600">欧米・米国の高生活コスト地域に住む方々に、日本の地方で空き家を活用し、生活・セカンドライフ支援を一括して提供。住まい、場所選定から地域コミュニティ参加まで伴走サポートします。</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">国境を超えた人材マッチング</h3>
              <p className="text-gray-600">中国経済の減速を背景に、海外のハイスキル人材・投資家の流動性が高まっています。日本文化に親しむ彼らを、地方企業の経営・技術支援人材として招く橋渡しを行います。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 拠点紹介 */}
      <section className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">拠点紹介（Aachengのネットワーク）</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up">
               <h3 className="text-xl font-semibold mb-4">米国本社（コロラド州デンバー）</h3>
               <p className="text-gray-600">欧米からの移住・投資ニーズを起点に、日本のデータ・コンテンツ発信、相談受付の前線拠点。</p>
             </div>
             <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
               <h3 className="text-xl font-semibold mb-4">中国オフィス（杭州）</h3>
               <p className="text-gray-600">経済変動期の中国富裕層・ハイスキル人材との接点。抖音ライブ等による情報発信と投資相談で、日本の地方へ資本と人を呼び込みます。</p>
             </div>
             <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
               <h3 className="text-xl font-semibold mb-4">日本オフィス（東京）</h3>
               <p className="text-gray-600">国内の支援窓口として、現地でのプロジェクト実行、行政調整、人材受け入れ支援を行います。</p>
             </div>
           </div>
        </div>
      </section>

      {/* 事例紹介 */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">事例紹介</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center" data-aos="fade-up">
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <div className="text-3xl mb-2">🏡</div>
                <h3 className="text-lg font-semibold">欧米投資家の地方空き家購入・移住実現</h3>
              </div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <div className="text-3xl mb-2">🌾</div>
                <h3 className="text-lg font-semibold">農業法人への外国人材受け入れコーディネート</h3>
              </div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-purple-50 p-6 rounded-lg mb-4">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="text-lg font-semibold">杭州オフィスによる日本観光資源の中国向けプロモーション</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問／お問い合わせCTA */}
      <section className="py-20 bg-blue-600 text-white" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">世界と日本の地方をつなぐパートナーをお探しですか？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            まずは無料相談から、お気軽にご連絡ください。
          </p>
          <div className="flex justify-center">
             <a
               href="/ja/contact"
               className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
             >
               無料相談
             </a>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Aacheng Limited</h3>
              <p className="text-gray-300 mb-4">
                世界と日本の地方をダイレクトにつなぐ、グローバルネットワーク
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-gray-300">
                <li>地域産業への海外資本・人材導入</li>
                <li>空き家活用・海外移住支援</li>
                <li>国際交流＆地域グローバル化</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
              <div className="space-y-2 text-gray-300">
                <p>📍 中国：杭州市滨江区泰安路199号浙江农资大厦2103</p>
                <p>📍 アメリカ：1500 N GRANT ST STE C DENVER CO</p>
                <p>📞 +1 702-426-5298</p>
                <p>📍 日本：東京都品川区上大崎3-1-1 目黒セントラルスクエア</p>
                <p>📞 +81 70-9328-4415 SMSのみ</p>
                <p>📧 info@aachengus.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Aacheng Limited All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}