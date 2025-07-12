'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function KantoPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🇯🇵 日本就业创业实战特训营：<br />
            数字移民与事业拓展加速器(5月)
          </h1>
          <div className="text-xl mb-6">
            📍东京・横滨・山梨
          </div>
          <p className="text-lg mb-8">
            3天2晚，解锁在日工作、创业与生活新机遇
          </p>
        </div>
      </section>

      {/* 独家资源对接 */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">独家资源对接：</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">在日生活基石快速构建</h3>
              <p className="text-gray-700 leading-relaxed">
                协助办理非居民难以企及的日本本土银行账户（含实体借记卡）、实体电话号码，打通主流线上支付。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-green-600">全球资产配置视野</h3>
              <p className="text-gray-700 leading-relaxed">
                提供美国支票账户远程开户指导。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-600">官方政策直通</h3>
              <p className="text-gray-700 leading-relaxed">
                对接地方政府"空屋银行"资源，解读创业签证（Start-Up Visa）申请路径。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 实战考察与深度体验 */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">实战考察与深度体验：</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-600">东京就业前线</h3>
              <p className="text-gray-700 leading-relaxed">
                亲临官方咨询会、观摩真实面试，获取一手人才市场资讯与求职技巧。
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-green-600">横滨创业生态</h3>
              <p className="text-gray-700 leading-relaxed">
                与本土创业者、投资人深度社交，链接商业资源，洞察产业机会。
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-purple-600">甲府移居生活</h3>
              <p className="text-gray-700 leading-relaxed">
                考察地方"空屋计划"，体验富士山下的健康慢生活，探索移居新可能。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 小班精英社群 */}
      <section className="py-16 bg-blue-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">小班精英社群（限额7席）：</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  领队、翻译、行业顾问全程陪同，保障深度交流与个性化指导。
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  与志同道合的伙伴共同探索，拓展优质人脉圈。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 全程无忧与专业保障 */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">全程无忧与专业保障：</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <p className="text-gray-700 leading-relaxed mb-4">
                  所有资讯与服务均以合规为前提，专业团队为您保驾护航。
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <p className="text-gray-700 leading-relaxed mb-4">
                  我们专注核心价值，不捆绑销售旅游产品。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 基本信息 */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">基本信息</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-center">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="font-semibold text-gray-700">日期</span>
                  <span className="text-gray-600">2025 / 5 / 28 – 5 / 30（3 天 2 晚）</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">价格</span>
                  <span className="text-gray-600">￥3 000 / 人 （限时首发价；不含国际/国内机票及住宿）</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 每日行程概览 */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">每日行程概览</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Day</th>
                  <th className="px-6 py-4 text-left font-semibold">地点</th>
                  <th className="px-6 py-4 text-left font-semibold">活动</th>
                  <th className="px-6 py-4 text-left font-semibold">说明</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-6 font-semibold text-blue-600" rowSpan={6}>D1 – 5/28</td>
                  <td className="px-6 py-6 text-gray-700">渋谷</td>
                  <td className="px-6 py-6 text-gray-700">爱媛县政府"抢人大战"现场咨询会</td>
                  <td className="px-6 py-6 text-gray-700">现场体验日本各地政府如何吸引人才、提供就业移居优惠条件，探索定居可能性</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-6 text-gray-700">神保町</td>
                  <td className="px-6 py-6 text-gray-700">真实日企群体面试观摩会</td>
                  <td className="px-6 py-6 text-gray-700">观摩日本企业实际招聘场景，了解中途职场切入点，职场经验与技巧直观获取</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-6 text-gray-700">新宿</td>
                  <td className="px-6 py-6 text-gray-700">午餐：东京都厅职员食堂</td>
                  <td className="px-6 py-6 text-gray-700">在东京最高行政机关的职员食堂，用餐同时俯瞰东京都市全景</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-6 text-gray-700">飯田桥</td>
                  <td className="px-6 py-6 text-gray-700">东京官方就业政策与面试技巧入门课</td>
                  <td className="px-6 py-6 text-gray-700">政府官方专家主讲，简单明了，迅速掌握赴日就业核心要点</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-6 text-gray-700">大崎</td>
                  <td className="px-6 py-6 text-gray-700">创新型企业社长面对面交流（可选参加）</td>
                  <td className="px-6 py-6 text-gray-700">与创业企业决策者零距离交流，快速积累商务人脉与日本职场资源</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-6 text-gray-700">浜松町</td>
                  <td className="px-6 py-6 text-gray-700">国际设计建材展览</td>
                  <td className="px-6 py-6 text-gray-700">拓宽国际视野、了解日本最新设计趋势及商业机会、计算日本自建房成本</td>
                </tr>
                
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-6 font-semibold text-purple-600" rowSpan={4}>D2 – 5/29</td>
                  <td className="px-6 py-6 text-gray-700">横滨地标塔</td>
                  <td className="px-6 py-6 text-gray-700">横滨创业者深度社交午餐会（英语）</td>
                  <td className="px-6 py-6 text-gray-700">横滨当地创业者、投资人与企业主自由交流，深入了解当地创业政策与资源</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-6 text-gray-700">横滨站东口</td>
                  <td className="px-6 py-6 text-gray-700">日产总部参观</td>
                  <td className="px-6 py-6 text-gray-700">现场体验最新电动车与自动驾驶科技，近距离感受世界一流品牌文化</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-6 text-gray-700">横滨中华街</td>
                  <td className="px-6 py-6 text-gray-700">横滨中华街文化体验与城市探索</td>
                  <td className="px-6 py-6 text-gray-700"></td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-6 text-gray-700"></td>
                  <td className="px-6 py-6 text-gray-700">自由休息 & 专属一对一数字移民咨询</td>
                  <td className="px-6 py-6 text-gray-700">一对一现场咨询服务：银行开户、手机号、线上支付、签证等</td>
                </tr>
                
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-6 font-semibold text-green-600" rowSpan={2}>D3 – 5/30</td>
                  <td className="px-6 py-6 text-gray-700">甲府</td>
                  <td className="px-6 py-6 text-gray-700">富士山脚特别规划跑步线路体验</td>
                  <td className="px-6 py-6 text-gray-700">欣赏富士山近景，跑步后温泉入浴，深入体验日本式户外健康休闲生活</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-6 text-gray-700">甲府</td>
                  <td className="px-6 py-6 text-gray-700">甲府特色"空屋计划"现场考察</td>
                  <td className="px-6 py-6 text-gray-700">实地参访当地特色"空屋银行"，全面了解日本地方定居优惠政策与居住生活可能性</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-blue-50 p-6 rounded-xl">
            <h4 className="font-semibold mb-4">特别说明：</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• 乘坐观光特急前往山梨县，在温泉酒店寄存行李</li>
              <li>• 大泉高原路线 5km 30分钟，清里高原路线 14km 120分钟</li>
              <li>• 跑步结束后，尽情享受温泉和当地美食。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 特别服务 */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">💡 特别服务：一对一数字移民专属咨询</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">服务类别</th>
                  <th className="px-6 py-4 text-left font-semibold">说明</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-6 font-semibold text-blue-600">🇯🇵 日本发行日元借记卡</td>
                  <td className="px-6 py-6 text-gray-700">现场指导非居民开立日本本土发行的借记卡</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-6 font-semibold text-purple-600">🇺🇸 美国支票账户</td>
                  <td className="px-6 py-6 text-gray-700">远程开户全流程辅导，便于全球资金流转</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-6 font-semibold text-green-600">📱 日本实体电话号码</td>
                  <td className="px-6 py-6 text-gray-700">协助申请本地手机号，回国后也可使用日本海外漫游数据</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-6 font-semibold text-orange-600">💳 日本线上支付工具</td>
                  <td className="px-6 py-6 text-gray-700">指导开通主流收付款平台，打通在日支付链</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-6 font-semibold text-red-600">🏡 日本地方移住</td>
                  <td className="px-6 py-6 text-gray-700">介绍日本"空屋银行"等地方移住项目，讲解申请流程与常见市场现状</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-6 font-semibold text-indigo-600">📑 日本创业签证 (Start-Up Visa)</td>
                  <td className="px-6 py-6 text-gray-700">解析创业签证类型、申请思路与行业常见操作案例</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 特训营费用 */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">💰 特训营费用</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-center mb-4">价格：¥3000 人民币 / 人</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-8 rounded-xl">
                <h4 className="text-xl font-bold mb-4 text-green-600">费用包含：</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 特训营期间所有既定考察、交流活动及工作坊的组织与入场费用。</li>
                  <li>• "数字移民与在地生活启动包"相关咨询、指导及协助办理服务。</li>
                  <li>• 行程内统一安排的市内公共交通及城市间（东京-横滨-甲府-东京）指定交通费用。</li>
                  <li>• Day 1 特色午餐。</li>
                  <li>• 全程专业领队、翻译及行业顾问服务。</li>
                  <li>• 团体意外险。</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-8 rounded-xl">
                <h4 className="text-xl font-bold mb-4 text-red-600">费用不包含：</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 往返中国的国际机票及个人签证费用。</li>
                  <li>• 全程住宿费用（我们可提供符合团队集合要求的协议酒店建议，您可自行预订或委托我们代订）。</li>
                  <li>• 除已列明外的其他餐饮及个人消费。</li>
                  <li>• 其他个人自选付费项目。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">准备好开启你的日本新生活了吗？</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
              立即报名特训营
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg font-semibold">
              下载详细资料
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}