// CompleteForm.js
import React from 'react';
import { Link } from 'gatsby';
import * as styles from './contactForm.module.css';

const CompleteForm = () => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.completeContent}>
        <h2 className={styles.completeTitle}>送信完了</h2>
        <p className={styles.completeMessage}>
          お問い合わせありがとうございました。<br />
          内容を確認の上、担当者より連絡させていただきます。
        </p>
        <div className={styles.buttonGroup}>
          <Link to="/" className={styles.backToHomeButton}>
            トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompleteForm;
