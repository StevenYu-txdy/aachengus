'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactZhPage() {
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
                联系我们
              </h1>
              <div className="absolute top-0 left-0 opacity-20">
                <span className="text-4xl md:text-6xl font-black text-white tracking-wider">
                  CONTACT US
                </span>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              欢迎联系我们，开启您的日本新生活
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* WeChat */}
            <div className="text-center bg-gray-50 p-8 rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.882-1.932 7.621-.55-.302-2.676-2.476-4.991-5.748-6.364a9.024 9.024 0 0 0-3.619-.272zm11.309 5.918c-3.402 0-6.162 2.329-6.162 5.2 0 1.854 1.047 3.528 2.674 4.645a.472.472 0 0 1 .185.555l-.333 1.247c-.027.093-.027.186 0 .279.054.186.267.279.427.186l1.617-.927a.7.7 0 0 1 .606-.093 8.73 8.73 0 0 0 2.386.333c3.403 0 6.162-2.329 6.162-5.2s-2.759-5.225-6.162-5.225z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">微信</h3>
              <p className="text-lg text-gray-700 font-mono">
                aacheng2024
              </p>
            </div>

            {/* Phone */}
            <div className="text-center bg-gray-50 p-8 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">电话</h3>
              <p className="text-lg text-gray-700 font-mono">
                +1 (720) 555-0123
              </p>
            </div>

            {/* Address */}
            <div className="text-center bg-gray-50 p-8 rounded-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">地址</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                美国科罗拉多州丹佛市<br/>
                州议会大厦正面<br/>
                Aacheng Limited
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16" data-aos="fade-up">
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">营业时间</h3>
              <p className="text-lg text-gray-700">
                周一至周五：9:00 AM - 6:00 PM (MST)<br/>
                周六：10:00 AM - 4:00 PM (MST)<br/>
                周日：休息
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}