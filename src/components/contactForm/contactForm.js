// ContactForm.js
import React, { useState } from 'react';
import * as styles from './contactForm.module.css';
import InputForm from './InputForm';
import ConfirmForm from './ConfirmForm';
import CompleteForm from './CompleteForm';

const API_ENDPOINT = process.env.GATSBY_API_ENDPOINT;

const ContactForm = () => {
  const [step, setStep] = useState('input'); // input, confirm, complete
  const [formData, setFormData] = useState({
    inquiryType: [],
    details: '',
    name: '',
    nameKana: '',
    email: '',
    tel: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = (data) => {
    setFormData(data);
    setStep('confirm');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setStep('input');
    window.scrollTo(0, 0);
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      // フォームデータのバリデーション
      if (!formData.name || formData.inquiryType.length === 0 || (!formData.email && !formData.tel)) {
        throw new Error('必須項目を入力してください');
      }
  
      // API Gatewayへのリクエスト形式に合わせる
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          body: JSON.stringify(formData),  // フォームデータを文字列化
          headers: {
            origin: window.location.origin
          }
        })
      });
  
      console.log('送信データ:', formData);  // デバッグ用
  
      const result = await response.json();
      console.log('APIレスポンス:', result);  // デバッグ用
  
      if (result.statusCode === 200) {
        setStep('complete');
        window.scrollTo(0, 0);
      } else {
        const error = JSON.parse(result.body);
        throw new Error(error.message || '送信に失敗しました');
      }
  
    } catch (error) {
      console.error('Error details:', error);
      alert(error.message || '送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>CONTACT</h1>
      <p className={styles.subTitle}>総合お問い合わせ</p>

      {step === 'input' && (
        <InputForm 
          initialData={formData} 
          onConfirm={handleConfirm} 
        />
      )}

      {step === 'confirm' && (
        <ConfirmForm 
          formData={formData} 
          onBack={handleBack}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}

      {step === 'complete' && (
        <CompleteForm />
      )}
    </div>
  );
};

export default ContactForm;
