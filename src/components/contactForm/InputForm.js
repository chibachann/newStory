// InputForm.js
import React, { useState } from 'react';
import * as styles from './contactForm.module.css';

const InputForm = ({ initialData, onConfirm }) => {
  const [formData, setFormData] = useState(initialData);

  const inquiryOptions = [
    {
      id: 'website',
      label: 'Webサイト制作のご相談',
      description: 'コーポレートサイト、ECサイト、ランディングページなど'
    },
    {
      id: 'system',
      label: 'システム開発のご相談',
      description: '業務システム、CRMシステム、予約システムなど'
    },
    {
      id: 'app',
      label: 'アプリ開発のご相談',
      description: 'スマートフォンアプリ、Webアプリケーションなど'
    },
    {
      id: 'maintenance',
      label: '保守・運用のご相談',
      description: '既存システムの保守、サーバー運用など'
    },
    {
      id: 'other',
      label: 'その他のご相談',
      description: 'その他、ご相談承ります'
    }
  ];

  const handleCheckboxChange = (id) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: prev.inquiryType.includes(id)
        ? prev.inquiryType.filter(type => type !== id)
        : [...prev.inquiryType, id]
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(formData);
  };

  return (
    <div className={styles.formWrapper}>
      <p className={styles.formDescription}>
        下記フォームよりご送信いただきますと、追って担当者よりご連絡差し上げます。<br />
        お電話でのお問い合わせも承っております。<br />
        ※必須がついている項目は必ず入力してください。<br />
        ＊電話番号とE-mailと資料送付先のどれかひとつ必ず入力してください。
      </p>
      <hr className={styles.divider} />

      <form onSubmit={handleSubmit}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>お問い合わせ内容 <span className={styles.required}>※必須</span></h3>
          {inquiryOptions.map(option => (
            <div key={option.id} className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id={option.id}
                checked={formData.inquiryType.includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
              />
              <label htmlFor={option.id}>
                <span className={styles.checkboxLabel}>{option.label}</span>
                <span className={styles.checkboxDescription}>{option.description}</span>
              </label>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>お問い合わせの詳細</h3>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            className={styles.textarea}
          />
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>お名前 <span className={styles.required}>※必須</span></h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>フリガナ</h3>
          <input
            type="text"
            name="nameKana"
            value={formData.nameKana}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>ご連絡先 <span className={styles.required}>※いずれかの必須</span></h3>
          <div className={styles.contactField}>
            <label>MAIL</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.contactField}>
            <label>TEL</label>
            <input
              type="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.submitSection}>
          <button
            type="submit"
            className={styles.submitButton}
          >
            確認する
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
