// ConfirmForm.js
import React from 'react';
import * as styles from './contactForm.module.css';

const ConfirmForm = ({ formData, onBack, onSubmit, isSubmitting }) => {
  const inquiryTypeLabels = {
    website: 'Webサイト制作のご相談',
    system: 'システム開発のご相談',
    app: 'アプリ開発のご相談',
    maintenance: '保守・運用のご相談',
    other: 'その他のご相談'
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.confirmTitle}>入力内容の確認</h2>
      <div className={styles.confirmContent}>
        <div className={styles.confirmItem}>
          <h3>お問い合わせ内容</h3>
          <p>
            {formData.inquiryType.map(type => inquiryTypeLabels[type]).join(', ')}
          </p>
        </div>

        <div className={styles.confirmItem}>
          <h3>お問い合わせの詳細</h3>
          <p style={{ whiteSpace: 'pre-wrap' }}>{formData.details}</p>
        </div>

        <div className={styles.confirmItem}>
          <h3>お名前</h3>
          <p>{formData.name}</p>
        </div>

        <div className={styles.confirmItem}>
          <h3>フリガナ</h3>
          <p>{formData.nameKana}</p>
        </div>

        <div className={styles.confirmItem}>
          <h3>メールアドレス</h3>
          <p>{formData.email}</p>
        </div>

        <div className={styles.confirmItem}>
          <h3>電話番号</h3>
          <p>{formData.tel}</p>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button 
          type="button" 
          onClick={onBack} 
          className={styles.backButton}
          disabled={isSubmitting}
        >
          戻る
        </button>
        <button 
          type="button" 
          onClick={onSubmit} 
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? '送信中...' : '送信する'}
        </button>
      </div>
    </div>
  );
};

export default ConfirmForm;
