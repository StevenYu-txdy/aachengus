'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutUsPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 relative z-10">
                ABOUT US
              </h1>
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="text-8xl md:text-9xl font-black text-white tracking-wider">
                  ABOUT
                </span>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Connecting global capital and talent with Japan's local communities
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
                MISSION
              </h2>
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-6xl md:text-7xl font-black text-gray-400 tracking-wider">
                  MISSION
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">English</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We connect global capital and talent with Japan's local communities, 
                revitalizing industries and lifestyles for the future.
              </p>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">日本語</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                私たちは、世界中の資金と人材を日本の地域社会につなぎ、産業や暮らしを未来へと再生します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 relative z-10">
                WHO WE ARE
              </h2>
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-5xl md:text-6xl font-black text-gray-400 tracking-wider">
                  WHO WE ARE
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">English</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Aacheng Limited is a cross-border boutique agency headquartered in the United States, 
                with branch offices in both China and Japan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our strength lies in our deep understanding of both Western and Asian business cultures, 
                and in our ability to offer truly global solutions with local expertise.
              </p>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">日本語</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Aacheng Limited（アーチェンリミテッド）は米国本社を拠点とし、中国と日本にも拠点を持つクロスボーダー専門エージェンシーです。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                西洋とアジアのビジネス文化を深く理解し、グローバルな視点と地域密着のノウハウを融合したソリューションを提供しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 relative z-10">
                OUR SERVICES
              </h2>
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-4xl md:text-5xl font-black text-gray-400 tracking-wider">
                  SERVICES
                </span>
              </div>
            </div>
            <p className="text-xl text-gray-600 mb-4">事業内容</p>
          </div>
          
          <div className="space-y-16">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">
                    1. Local Industry Revitalization
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">地方産業再生支援</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">English</h5>
                      <p className="text-gray-700 leading-relaxed">
                        We bring foreign direct investment and highly skilled global talent to Japan's regional industries 
                        such as agriculture, hospitality, and manufacturing. Our mission: solve workforce shortages, 
                        fuel innovation, and help traditional communities thrive.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">日本語</h5>
                  <p className="text-gray-700 leading-relaxed">
                    農業・宿泊・製造などの地域産業に、海外からの直接投資と高度人材を呼び込みます。
                    人手不足や技術継承の課題に向き合い、地方の未来を共に創造します。
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    2. Cross-Border Talent Solutions
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">グローバル人材ソリューション</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">English</h5>
                      <p className="text-gray-700 leading-relaxed">
                        From visa acquisition to local onboarding, we support skilled workers and entrepreneurs 
                        seeking a new life and new opportunities in Japan. With offices in China and Japan, 
                        we facilitate smooth migration and integration for cross-border talent.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">日本語</h5>
                  <p className="text-gray-700 leading-relaxed">
                    中国・日本両拠点の強みを活かし、ビザ取得から現地定着まで、技術者・経営者の日本移住・活躍をトータルサポートします。
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-purple-600 mb-4">
                    3. "Akiya" (Vacant House) Life in Japan
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">English</h5>
                      <p className="text-gray-700 leading-relaxed">
                        For English-speaking clients from high-cost countries, we provide a unique path to affordable 
                        property ownership and a new lifestyle in Japan's beautiful countryside. Our team guides you 
                        from property search and purchase, to renovation, to community living.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">日本語</h5>
                  <p className="text-gray-700 leading-relaxed">
                    英語圏のお客様向けに、日本の美しい地方での"空き家購入・定住"をワンストップでサポート。
                    物件探しから購入、リノベーション、地域コミュニティへの参加まで、一緒に新しい暮らしを実現します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Edge Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 relative z-10">
                OUR EDGE
              </h2>
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-5xl md:text-6xl font-black text-gray-400 tracking-wider">
                  EDGE
                </span>
              </div>
            </div>
            <p className="text-xl text-gray-600 mb-4">私たちの強み</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">English</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  True cross-border operations (US, China, Japan)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Small, agile, and deeply client-focused
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Culturally bilingual, locally grounded
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  End-to-end support from initial consultation to post-move living
                </li>
              </ul>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">日本語</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  米国・中国・日本、三拠点のクロスボーダー運営
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  小規模だからこその機動力と親身な対応
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  バイリンガル・バイカルチャーの専門チーム
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  初回相談から移住後の暮らしまで、ワンストップでサポート
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">
                COMPANY PROFILE
              </h2>
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="text-4xl md:text-5xl font-black text-white tracking-wider">
                  PROFILE
                </span>
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-4">会社概要</p>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8" data-aos="fade-up">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">Company Name / 会社名</h3>
                <p className="text-gray-300 mb-6">Aacheng Limited / アーチェンリミテッド</p>
                
                <h3 className="text-xl font-bold mb-4 text-blue-400">Headquarters / 本社</h3>
                <p className="text-gray-300 mb-6">United States / 米国</p>
                
                <h3 className="text-xl font-bold mb-4 text-blue-400">Branch Offices / 支社</h3>
                <p className="text-gray-300">China, Japan / 中国、日本</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">Business Areas / 事業領域</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Cross-border investment consulting</li>
                  <li>• Global talent solutions</li>
                  <li>• Regional revitalization support</li>
                  <li>• Property & lifestyle consulting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100" data-aos="fade-up" data-aos-delay="100">
            Contact us to learn more about our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get in Touch
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}