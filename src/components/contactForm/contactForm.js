// ContactForm.js
import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './contactForm.module.css';
import InputForm from './InputForm';
import ConfirmForm from './ConfirmForm';
import CompleteForm from './CompleteForm';

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
      // ここで実際のAPI送信処理を実装
      console.log('送信データ:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStep('complete');
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('エラー:', error);
      alert('送信に失敗しました。もう一度お試しください。');
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
