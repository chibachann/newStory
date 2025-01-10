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

  // フォームのバリデーション関数
  const validateForm = (data) => {
    const errors = [];
    
    // 必須項目のチェック
    if (!data.name.trim()) {
      errors.push('お名前は必須です');
    }

    if (data.inquiryType.length === 0) {
      errors.push('お問い合わせ内容を1つ以上選択してください');
    }

    if (!data.email && !data.tel) {
      errors.push('メールアドレスまたは電話番号のいずれかは必須です');
    }

    // メールアドレスの形式チェック（入力されている場合）
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('メールアドレスの形式が正しくありません');
    }

    // 電話番号の形式チェック（入力されている場合）
    if (data.tel && !/^[0-9-]{10,}$/.test(data.tel)) {
      errors.push('電話番号の形式が正しくありません');
    }
    
    // お問い合わせ内容の文字数制限
    if (data.details.length > 2000) {
      errors.push('お問い合わせ内容は2000文字以内でお願いします');
    }

    // URLの数を制限（スパム対策）
    const urlCount = (data.details.match(/https?:\/\//g) || []).length;
    if (urlCount > 3) {
      errors.push('URLの数が多すぎます');
    }

    // 連続する特殊文字のチェック
    if (/[!@#$%^&*]{5,}/.test(data.details)) {
      errors.push('不適切な文字の連続が含まれています');
    }

     // 制御文字のチェック
    if (/[\x00-\x08\x0B\x0C\x0E-\x1F]/.test(data.details)) {
      errors.push('使用できない文字が含まれています');
    }

    // 全角特殊文字のチェック
    if (/[︰-＠]/.test(data.details)) {
      errors.push('全角特殊文字は使用できません');
    }

    // フリガナのチェック
    if (data.nameKana && !/^[ァ-ヶー\s]*$/.test(data.nameKana)) {
      errors.push('フリガナは全角カタカナで入力してください');
    }

  // メールアドレスの詳細チェック
  if (data.email) {
    if (data.email.length > 256) {
      errors.push('メールアドレスが長すぎます');
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
      errors.push('有効なメールアドレスを入力してください');
    }
  }

  // 電話番号の詳細チェック
  if (data.tel) {
    if (!/^[0-9-]{10,}$/.test(data.tel)) {
      errors.push('電話番号は半角数字とハイフンで入力してください');
    }
    // 数字だけを抽出して桁数チェック
    const digitsOnly = data.tel.replace(/-/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 11) {
      errors.push('電話番号の桁数が正しくありません');
    }
  }

    return errors;
  };

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
    
    // 入力値の検証と整形
    let sanitizedValue = value;
    
    switch (name) {
        
      case 'tel':
        // 数字とハイフンのみを許可
        sanitizedValue = value.replace(/[^0-9-]/g, '');
        // 連続するハイフンを1つに
        sanitizedValue = sanitizedValue.replace(/-+/g, '-');
        break;
        
      case 'email':
        // スペースを除去
        sanitizedValue = value.replace(/\s/g, '');
        break;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // バリデーションチェック
    const errors = validateForm(formData);
    if (errors.length > 0) {
      // エラーメッセージを表示
      alert(errors.join('\n'));
      return;
    }

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
            maxLength={2000}  // 文字数制限
            pattern="[^<>]*"  // HTMLタグの入力防止
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
            maxLength={50}  // 文字数制限
            pattern="[^\x00-\x1F<>]*"  // 制御文字とHTMLタグの入力防止
          />
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>フリガナ<span className={styles.required}>※必須</span></h3>
          <input
            type="text"
            name="nameKana"
            value={formData.nameKana}
            onChange={handleChange}
            className={styles.input}
            maxLength={50}
            required
            pattern="^[ァ-ヶー\s]*$"  // カタカナとスペースのみ
            title="カタカナで入力してください"
          />
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>ご連絡先 <span className={styles.required}>※いずれか必須</span></h3>
          <div className={styles.contactField}>
            <label>MAIL</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              maxLength={256}  // 一般的なメールアドレスの最大長
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="有効なメールアドレスを入力してください"
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
              maxLength={15}  // 国際電話番号を考慮した長さ
              pattern="^[0-9-]{10,}$"  // 数字とハイフンのみ
              title="有効な電話番号を入力してください（例：03-1234-5678）"
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
