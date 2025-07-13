import { Metadata } from "next"

export const metadata: Metadata = {
  title: "米国本社 | ADLVA株式会社",
  description: "ADLVA株式会社の米国本社についての情報をご紹介します。",
}

export default async function USOffice() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">海外から日本の家を買う時代へ</h1>

      <div className="prose max-w-none">
        <p className="mb-6">
          私たちは、アメリカ・コロラド州デンバーに拠点を置き、現地の生活者や投資家に向けて、日本不動産の魅力を発信・提案しています。
        </p>

        <p className="mb-6">
          急激な生活費・住宅価格の上昇、金利上昇などの影響により、多くのアメリカ市民が「暮らしやすい別の選択肢」を探し始めています。一方、日本では、人口減少・都市部集中の影響で、手頃で質の高い物件が全国各地に存在しています。
        </p>

        <p className="mb-12">
          当社では、こうした「日米間のギャップ」に着目し、アメリカから日本への不動産投資・移住・デュアルライフ（二拠点生活）などを希望するお客様に対し、安心・安全なサポートを提供しています。
        </p>

        <h2 className="text-2xl font-bold mb-4">オフィス情報（アメリカ本社）</h2>
        <ul className="list-disc pl-6 mb-12">
          <li><strong>会社名：</strong> ADLVA Limited</li>
          <li><strong>設立：</strong> 2023年</li>
          <li><strong>所在地：</strong> 1420 N Grant St, Denver, Colorado, USA（コロラド州議事堂の正面）</li>
          <li><strong>事業内容：</strong> 日本不動産の紹介・購入サポート、視察・内覧アレンジ、文化・法律アドバイザリー</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">なぜ今、アメリカ人に「日本の不動産」なのか？</h2>
        <ul className="list-disc pl-6 mb-12">
          <li>
            <strong>コスト対比の魅力</strong><br />
            アメリカの都市部では中古住宅でも$600,000以上が当たり前。<br />
            一方、日本では、リフォーム済みの戸建住宅が$50,000〜$150,000で購入可能です。
          </li>
          <li>
            <strong>文化的親和性と人気</strong><br />
            日本の「安全」「清潔」「食文化」「温泉」などに憧れるアメリカ人は年々増加中。YouTubeやTikTokなどの影響で"Japan Dream"が現実味を帯びています。
          </li>
          <li>
            <strong>高い購買力</strong><br />
            米国の1人あたりGDPは日本の約3倍。現金一括での購入ニーズも多く、手続きさえ明確ならば十分な市場性があります。
          </li>
          <li>
            <strong>移住・2拠点生活の新たな選択肢</strong><br />
            フルリモート勤務や早期リタイアを背景に、自然豊かな地方都市や温泉地でのセカンドライフを志向する中高年層が急増しています。
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">当社サービスの流れ</h2>
        <ol className="list-decimal pl-6 mb-12">
          <li>お問い合わせ（ご希望の地域・予算・用途をお知らせください）</li>
          <li>希望条件に合う物件をピックアップし、リストでご提案</li>
          <li>必要に応じて、日本側の内覧・専門家（建築士・税理士）アレンジ</li>
          <li>通訳サポート＋契約支援＋登記・送金までワンストップ対応</li>
          <li>ご希望があれば、現地渡航・視察ツアーの手配も承ります</li>
        </ol>

        <h2 className="text-2xl font-bold mb-4">私たちのミッション</h2>
        <p className="mb-6">
          単なる「物件の斡旋」ではなく、<strong>文化と価値観を越えてつながる不動産サービス</strong>を目指します。
        </p>

        <p className="mb-6">
          「アメリカの暮らしに疲れたが、どこにも逃げ場がない」<br />
          「老後の選択肢として、安全な海外拠点を持ちたい」<br />
          そんなお悩みを持つ方に、私たちは「日本」という選択肢を届けていきます。
        </p>

        <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
        <p className="mb-6">
          <strong>日本語・英語どちらでも対応可能です。お気軽にご相談ください。</strong>
        </p>

        <ul className="list-none pl-0 mb-12">
          <li>📩 <strong>メール</strong>：contact@adlva.com</li>
          <li>📍 <strong>オフィス住所</strong>：1420 N Grant St, Denver, Colorado, USA</li>
          <li>📱 <strong>電話番号</strong>：+1(650)495-4968</li>
        </ul>
      </div>
    </main>
  )
} 