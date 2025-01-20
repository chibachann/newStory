import React from "react";
import * as styles from "./companyInfo.module.css";

const CompanyInfo = () => {
    const companyData = {
        companyOverview: [
            { label: "会社名", value: "合同会社STοRy Web Solutions" },
            { label: "所在地", value: "東京都渋谷区渋谷2-19-15 宮益坂ビルディング609" },
            { label: "設立", value: "2024年" },
            { label: "代表社員", value: "千葉 泰生" },
        ],
        businessContent: [
            "Webサイト制作・運営",
            "ECサイトの構築・運営",
            "業務システム開発",
            "チャットボットの開発・導入支援",
            "決済システムの導入・運用",
            "顧客管理システムの構築・運用サポート",
            "デジタルマーケティング支援",
            "AIソリューションの提供"
        ]
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.pageTitle}>Company</h1>
                <div className={styles.titleLine}></div>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>会社概要</h2>
                    <div className={styles.companyOverview}>
                        {companyData.companyOverview.map((item, index) => (
                            <div key={index} className={styles.infoRow}>
                                <dt>{item.label}</dt>
                                <dd>{item.value}</dd>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>事業内容</h2>
                    <ul className={styles.businessList}>
                        {companyData.businessContent.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>アクセス</h2>
                    <div className={styles.accessInfo}>
                        <div className={styles.accessDetail}>
                            <p>〒150-0002</p>
                            <p>東京都渋谷区渋谷2-19-15</p>
                            <p>宮益坂ビルディング609</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CompanyInfo;
