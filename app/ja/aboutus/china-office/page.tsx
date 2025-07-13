import { Metadata } from "next"

export const metadata: Metadata = {
  title: "中国事務所 | ADLVA株式会社",
  description: "ADLVA株式会社の中国事務所についての情報をご紹介します。",
}

export default async function ChinaOffice() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">中国事務所</h1>

      <div className="prose max-w-none">
        <p className="mb-6">
          私たちは、中国・上海に事務所を構え、現地の企業や投資家に向けて、日本のビジネス機会や不動産投資の魅力を発信・提案しています。
        </p>

        <p className="mb-12">
          近年、中国企業の日本進出や、個人投資家による日本不動産投資が活発化しています。当社では、こうした需要に応えるため、包括的なサポートサービスを提供しています。
        </p>

        <h2 className="text-2xl font-bold mb-4">オフィス情報（中国事務所）</h2>
        <ul className="list-disc pl-6 mb-12">
          <li><strong>会社名：</strong> ADLVA上海代表処</li>
          <li><strong>設立：</strong> 2023年</li>
          <li><strong>所在地：</strong> 上海市浦東新区陸家嘴環路1000号 恒生銀行大厦25階</li>
          <li><strong>事業内容：</strong> 
            <ul className="list-disc pl-6 mt-2">
              <li>日本不動産投資コンサルティング</li>
              <li>企業の日本進出支援</li>
              <li>ビジネスマッチング</li>
              <li>市場調査・リサーチ</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">主なサービス内容</h2>
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-3">1. 不動産投資サポート</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>投資用不動産の物件紹介</li>
            <li>収益シミュレーション作成</li>
            <li>物件調査・デューデリジェンス</li>
            <li>契約・決済サポート</li>
            <li>資産管理・運用サービス</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">2. 企業支援サービス</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>日本市場進出戦略の策定</li>
            <li>会社設立支援</li>
            <li>オフィス物件の紹介</li>
            <li>ビジネスパートナーの紹介</li>
            <li>各種許認可取得支援</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">3. コンサルティングサービス</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>市場調査・フィージビリティスタディ</li>
            <li>法務・税務アドバイザリー</li>
            <li>M&A・事業提携支援</li>
            <li>人材採用支援</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4">私たちの強み</h2>
        <ul className="list-disc pl-6 mb-12">
          <li>
            <strong>豊富な実績と経験</strong><br />
            多数の中国企業・投資家の日本進出をサポートしてきた実績があります。
          </li>
          <li>
            <strong>専門家ネットワーク</strong><br />
            日中両国の不動産、法務、税務の専門家と緊密に連携し、高品質なサービスを提供します。
          </li>
          <li>
            <strong>ワンストップソリューション</strong><br />
            投資検討から実行、その後の運用まで、一貫したサポート体制を整えています。
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
        <p className="mb-6">
          <strong>日本語・中国語どちらでも対応可能です。お気軽にご相談ください。</strong>
        </p>

        <ul className="list-none pl-0 mb-12">
          <li>📩 <strong>メール</strong>：shanghai@adlva.com</li>
          <li>📍 <strong>オフィス住所</strong>：上海市浦東新区陸家嘴環路1000号 恒生銀行大厦25階</li>
          <li>📱 <strong>電話番号</strong>：+86(21)5888-8888</li>
          <li>💬 <strong>WeChat</strong>：ADLVA_Shanghai</li>
        </ul>
      </div>
    </main>
  )
} 