// src/components/ContactForm.js
import React, { useState } from 'react';
import { API } from 'aws-amplify';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await API.post('contactapi', '/contact', {
                body: formState
            });
            
            alert('お問い合わせを送信しました');
            setFormState({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error:', error);
            alert('エラーが発生しました');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };


    // API接続テスト
    useEffect(() => {
        const testAPI = async () => {
            try {
                const response = await API.get('contactapi', '/contact');
                console.log('API接続テスト成功:', response);
            } catch (error) {
                console.error('API接続テスト失敗:', error);
            }
        };
        
        testAPI();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">お名前:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="email">メールアドレス:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="message">メッセージ:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" disabled={loading}>
                {loading ? '送信中...' : '送信'}
            </button>
        </form>
    );
};

export default ContactForm;
