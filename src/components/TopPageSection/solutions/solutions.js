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
                    <p>これまでの学歴や職歴、課外活動、国籍、人種などで入学希望者をフィルタリングすることはありません。</p>
                </div>

                <div className={styles.card}>
                    <img src="/icon/lp.svg" alt="LP制作" />
                    <h3>LP制作</h3>
                    <p>これまでの学歴や職歴、課外活動、国籍、人種などで入学希望者をフィルタリングすることはありません。</p>
                </div>

                <div className={styles.card}>
                    <img src="/icon/ec.svg" alt="ECサイト制作" />
                    <h3>ECサイト制作</h3>
                    <p>これまでの学歴や職歴、課外活動、国籍、人種などで入学希望者をフィルタリングすることはありません。</p>
                </div>

                <div className={styles.card}>
                    <img src="/icon/chatbot.svg" alt="チャットボット" />
                    <h3>チャットボット</h3>
                    <p>これまでの学歴や職歴、課外活動、国籍、人種などで入学希望者をフィルタリングすることはありません。</p>
                </div>

                <div className={styles.card}>
                    <img src="/icon/payment.svg" alt="決済システム連携" />
                    <h3>決済システム連携</h3>
                    <p>これまでの学歴や職歴、課外活動、国籍、人種などで入学希望者をフィルタリングすることはありません。</p>
                </div>

                <div className={styles.card}>
                    <img src="/icon/crm.svg" alt="顧客管理システム" />
                    <h3>顧客管理システム</h3>
                    <p>これまでの学歴や職歴、課外活動、国籍、人種などで入学希望者をフィルタリングすることはありません。</p>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
