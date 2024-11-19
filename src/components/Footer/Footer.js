import * as React from 'react';
import * as styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contents}>
                <h2 className={styles.Title}>
                    よりよいサービスを<br/>
                    未来に向けて
                </h2>
                <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfirlg2t94_6LwpV0N8MjfHQ9m_QDcVCUhO20Eg2c6dNcx0MQ/viewform" 
                className={styles.contact}
                target="_blank" rel="noopener noreferrer"
                >
                    お問い合わせ
                </a>

                <div className={styles.bottoms}>
                    <div className={styles.logo}>
                        <img src="/logo/whitelogo.png" alt="logo" />
                    </div>
                    <div className={styles.sns}>
                        <a href="https://twitter.com/">
                            <img src="/footer/twitter.svg" alt="twitter" />
                        </a>
                        <a href="https://www.facebook.com/">
                            <img src="/footer/facebook.svg" alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src="/footer/instagram.svg" alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <p className={styles.copyRight}>
                ©SToRy web Solutions
            </p>
        </footer>
    );
}

export default Footer;
