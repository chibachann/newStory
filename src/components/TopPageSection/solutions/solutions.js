import React from "react";
import * as styles from "./solutions.module.css";

const Solutions = () => {
    return (
        <div className={styles.solutions}>
            <h2 className={styles.title}>
                提供する<br />
                さまざまなソリューション
            </h2>
            
            <div className={styles.grid}>
                <div className={styles.card}>
                    <img src="/icon/homepage.svg" alt="ホームページ制作" />
                    <h3>ホームページ制作</h3>
                    <p>ビジネスの顔となるコーポレートサイトを制作。スマートフォン対応、SEO対策も万全で、企業価値を高めるWebサイトを実現します。</p>
                </div>

                <div className={styles.card}>
                    <img src="/icon/lp.svg" alt="LP制作" />
                    <h3>LP制作</h3>
                    <p>商品やサービスの魅力を最大限に引き出すランディングページを制作。高いコンバージョン率を実現する、説得力のあるデザインで成果を導きます。</p>
                </div>

                <div className={styles.card}>
                    <img src="/icon/ec.svg" alt="ECサイト制作" />
                    <h3>ECサイト制作</h3>
                    <p>商品管理から決済まで、オンラインショップの構築に必要な機能を全て実装。スマートフォン対応で、より多くのお客様にリーチします。</p>
                </div>

                <div className={styles.card}>
                    <img src="/icon/chatbot.svg" alt="チャットボット" />
                    <h3>チャットボット</h3>
                    <p>AI技術を活用した自動応答システムで、お客様のお問い合わせに24時間365日対応します。簡単な質問から複雑な案内まで、効率的な顧客対応を実現します。</p>
                </div>

                <div className={styles.card}>
                    <img src="/icon/payment.svg" alt="決済システム連携" />
                    <h3>決済システム連携</h3>
                    <p>クレジットカード、電子マネー、QRコード決済など、多様な決済手段に対応。セキュリティも万全で、安心してご利用いただけます。</p>
                </div>

                <div className={styles.card}>
                    <img src="/icon/crm.svg" alt="顧客管理システム" />
                    <h3>顧客管理システム</h3>
                    <p>顧客情報の管理から分析まで、包括的なCRMソリューションを提供。営業活動の効率化と顧客満足度の向上を実現します。</p>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
