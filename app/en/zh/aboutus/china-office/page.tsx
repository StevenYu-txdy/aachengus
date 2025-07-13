'use client'

export default function ChinaOffice() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-8">中国事务所</h1>

          <div className="prose max-w-none">
            <p className="mb-6">
              我们在中国上海设有事务所，致力于向当地企业和投资者推广日本的商业机会和房地产投资的魅力。
            </p>

            <p className="mb-12">
              近年来，中国企业进军日本市场和个人投资者对日本房地产投资的热情日益高涨。为了满足这些需求，我们提供全方位的支持服务。
            </p>

            <h2 className="text-2xl font-bold mb-4">办公室信息（中国事务所）</h2>
            <ul className="list-disc pl-6 mb-12">
              <li><strong>公司名称：</strong> ADLVA上海代表处</li>
              <li><strong>成立时间：</strong> 2023年</li>
              <li><strong>地址：</strong> 上海市浦东新区陆家嘴环路1000号 恒生银行大厦25楼</li>
              <li><strong>业务内容：</strong> 
                <ul className="list-disc pl-6 mt-2">
                  <li>日本房地产投资咨询</li>
                  <li>企业赴日发展支持</li>
                  <li>商务对接</li>
                  <li>市场调研</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">主要服务内容</h2>
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-3">1. 房地产投资支持</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>投资用房产推荐</li>
                <li>收益模拟分析</li>
                <li>房产调查与尽职调查</li>
                <li>合同与交易支持</li>
                <li>资产管理与运营服务</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2. 企业支持服务</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>日本市场进入战略制定</li>
                <li>公司注册支持</li>
                <li>办公场所推荐</li>
                <li>商业伙伴介绍</li>
                <li>各类许可证办理支持</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3. 咨询服务</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>市场调研与可行性研究</li>
                <li>法务与税务咨询</li>
                <li>并购与业务合作支持</li>
                <li>人才招聘支持</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">我们的优势</h2>
            <ul className="list-disc pl-6 mb-12">
              <li>
                <strong>丰富的经验与业绩</strong><br />
                我们已成功协助众多中国企业和投资者进入日本市场。
              </li>
              <li>
                <strong>专业人才网络</strong><br />
                与中日两国的房地产、法务、税务等领域的专家保持密切合作，提供高质量服务。
              </li>
              <li>
                <strong>一站式解决方案</strong><br />
                从投资考察到实施，再到后续运营，我们提供全程支持体系。
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">联系方式</h2>
            <p className="mb-6">
              <strong>我们可以用中文或日语为您服务，欢迎随时咨询。</strong>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}