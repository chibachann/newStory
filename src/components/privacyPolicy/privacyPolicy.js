import React from 'react';
import * as styles from './privacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>プライバシーポリシー</h1>
      
      <section className={styles.section}>
        <p className={styles.introduction}>
          合同会社SToRy Web Solutions（以下「当社」といいます。）は、ご利用者様からの信頼を第一と考え、ご利用者様個人に関わる情報を正確、かつ機密に取り扱うことは、当社にとって重要な責務であると考えております。そのために、ご利用者様の個人情報に関する「個人情報保護方針」を制定し、個人情報の取り扱い方法について、全従業員及び関連会社への徹底を実践してまいります。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>当社について</h2>
        <div className={styles.orgInfo}>
          <div className={styles.infoItem}>
            <span className={styles.label}>名称：</span>
            <span>合同会社SToRy Web Solutions</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>所在地：</span>
            <span></span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>代表者：</span>
            <span></span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>個人情報の取り扱いについて</h2>
        <div className={styles.policyItem}>
          <h3>1. 個人情報の取得</h3>
          <p>当社は個人情報を適法かつ公正な手段により収集致します。お客様に個人情報の提供をお願いする場合は、事前に収集の目的、利用の内容を開示した上で、当社の正当な事業の範囲内で、その目的の達成に必要な限度において、個人情報を収集致します。</p>
        </div>

        <div className={styles.policyItem}>
          <h3>2. 利用目的の範囲</h3>
          <ul className={styles.purposeList}>

          </ul>
        </div>

        <div className={styles.policyItem}>
          <h3>3. 個人情報の第三者提供</h3>
          <p>当社は、以下の場合を除き、ご利用者様の同意なしに第三者へご利用者様の個人情報の提供は行いません：</p>
          <ul className={styles.purposeList}>
            
          </ul>
        </div>

        <div className={styles.policyItem}>
          <h3>4. 個人情報の開示・訂正・利用停止</h3>
          <p>ご提供いただいた個人情報について、開示、訂正、利用停止等のご要望がある場合は、下記の窓口までご連絡ください。ご本人確認の上、適切に対応させていただきます。</p>
        </div>

        <div className={styles.policyItem}>
          <h3>5. 安全管理措置</h3>
          <p>当社は、個人情報の漏えい、滅失またはき損を防止するため、以下を含む適切な安全管理措置を講じています：</p>
          <ul className={styles.purposeList}>
            <li>個人情報保護に関する規程の整備および従業者への教育</li>
            <li>個人情報への不正アクセス防止のための措置</li>
            <li>取引における情報管理体制の構築</li>
            <li>業務提携先との連携における情報セキュリティの確保</li>
          </ul>
        </div>

        <div className={styles.policyItem}>
          <h3>6. お問い合わせ窓口</h3>
          <div>
            <p>個人情報の取扱いに関するお問い合わせは、下記までご連絡ください：</p>
            <div>
              
            </div>
          </div>
        </div>

        <div className={styles.policyItem}>
          <h3>7. プライバシーポリシーの改定</h3>
          <p>当社は、必要に応じて本プライバシーポリシーを改定することがあります。重要な変更がある場合は、当社ウェブサイト上にてお知らせいたします。</p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
