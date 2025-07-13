'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutUsJaPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 relative z-10">
                わたしたちについて
              </h1>
              <div className="absolute top-0 left-0 opacity-20">
                <span className="text-4xl md:text-6xl font-black text-white tracking-wider">
                  ABOUT US
                </span>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              世界と日本の地方をつなぐ——それがAacheng Limitedの役割です。
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 relative z-10">
                ミッション
              </h2>
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-5xl md:text-6xl font-black text-gray-400 tracking-wider">
                  MISSION
                </span>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              日本の地方産業と世界を直接つなぎ、新しい価値と持続可能な未来を創出します。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              海外の資本と人材を導入することで、地域社会の再生・多様化を実現します。
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 relative z-10">
                Who We Are
              </h2>
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-4xl md:text-5xl font-black text-gray-400 tracking-wider">
                  WHO WE ARE
                </span>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Aacheng Limitedは米国コロラド州デンバーに本社を構え、東京・杭州に拠点を持つクロスボーダー企業です。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              「グローバルな視点×地域密着の実行力」を強みとし、日本の地方に最適な海外資本・人材・ノウハウを届けます。
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 relative z-10">
                主な事業内容
              </h2>
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-3xl md:text-4xl font-black text-gray-400 tracking-wider">
                  SERVICES
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">地域産業への資金・人材導入</h3>
              <p className="text-gray-700 leading-relaxed">
                農業、観光、伝統工芸等の衰退産業に対し、海外直接投資（FDI）やグローバル人材マッチングを実施。外国人起業家や技術者の受け入れ、新規事業の立ち上げも支援しています。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">空き家活用・海外向け移住サポート</h3>
              <p className="text-gray-700 leading-relaxed">
                アメリカやヨーロッパ等、生活コストの高い国の方に向けて、日本地方の空き家を活用した移住・投資・セカンドライフを提案。物件選びからリノベーション、コミュニティ参加までトータルでサポートします。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">国際交流・地域グローバル化プロジェクト</h3>
              <p className="text-gray-700 leading-relaxed">
                外国人材の受け入れを中心とした地方創生プロジェクトを設計・運営。多言語・多文化に対応した生活支援・地域定着サポートを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 relative z-10">
                各拠点の事業と役割
              </h2>
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-3xl md:text-4xl font-black text-gray-400 tracking-wider">
                  OFFICES
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* US Office */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">アメリカ本社（HQ: デンバー）</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                コロラド州デンバー中心部、州議会議事堂（Colorado State Capitol）正面に立地
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• 欧米圏の方々向けに、「日本の低コストで豊かな暮らし」を提案・発信</li>
                <li>• 現地ネットワークを活かし、移住希望者・投資家の相談・マッチングを実施</li>
              </ul>
            </div>
            
            {/* China Office */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">中国オフィス（杭州）</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                杭州市中心、「浙江省農業資本ビル」に拠点を設置（このビルは、中国全域の農業関連産業・資本・流通が集まる地域のランドマーク）
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• デジタルマーケティング（抖音ライブ等）を活用し、日本の空き家・地方産業の情報を中国国内に発信</li>
                <li>• 中国人起業家・投資家向けの日本進出サポートも展開</li>
              </ul>
            </div>
            
            {/* Japan Office */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">日本オフィス（東京）</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• 日本各地の地域産業・空き家物件の調査・選定</li>
                <li>• 外国人向け現地サポート、行政手続き、定住・コミュニティ定着までワンストップ支援</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              世界と日本の地方をつなぐ——
            </h2>
            <p className="text-xl md:text-2xl text-red-100 mb-8">
              それがAacheng Limitedの役割です。
            </p>
            <p className="text-lg text-red-100 mb-8">
              興味を持たれた方は、ぜひご相談ください。
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              お問い合わせ
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}