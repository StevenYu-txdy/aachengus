'use client'

export default function JapanOffice() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-8">日本总部</h1>

          <div className="prose max-w-none">
            <p className="mb-6">
              我们的日本总部位于东京都中央区，作为集团的核心运营中心，负责统筹管理各项业务，
              并为客户提供全方位的服务支持。
            </p>

            <h2 className="text-2xl font-bold mb-4">办公室信息</h2>
            <ul className="list-disc pl-6 mb-12">
              <li><strong>公司名称：</strong> ADLVA株式会社</li>
              <li><strong>成立时间：</strong> 2023年</li>
              <li><strong>地址：</strong> 东京都中央区日本桥1-1-1</li>
              <li><strong>业务内容：</strong> 
                <ul className="list-disc pl-6 mt-2">
                  <li>人才引进与培训</li>
                  <li>企业咨询服务</li>
                  <li>商务对接</li>
                  <li>投资咨询</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">主要业务</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. 人才服务</h3>
                <ul className="list-disc pl-6">
                  <li>技能实习生引进</li>
                  <li>特定技能人才引进</li>
                  <li>高度人才引进</li>
                  <li>人才培训体系</li>
                  <li>在职培训支持</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">2. 企业支持</h3>
                <ul className="list-disc pl-6">
                  <li>商务签证办理</li>
                  <li>公司注册服务</li>
                  <li>法务税务咨询</li>
                  <li>市场调研服务</li>
                  <li>业务拓展支持</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">我们的优势</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">专业团队</h3>
                <p>拥有丰富经验的中日双语团队，提供专业的咨询和服务。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">资源网络</h3>
                <p>与日本各地企业、政府机构保持密切合作关系。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">一站式服务</h3>
                <p>从签证申请到工作安排，提供全流程支持。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">联系方式</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>电话：</strong> +81-3-XXXX-XXXX</p>
              <p className="mb-2"><strong>邮箱：</strong> info@adlva.com</p>
              <p className="mb-2"><strong>工作时间：</strong> 周一至周五 9:00-18:00（日本时间）</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}