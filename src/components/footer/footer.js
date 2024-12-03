import React from "react";
import { Link } from "gatsby";
import * as styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.leftSection}>
                    <img src="/logo/whitelogo.png" alt="Logo" className={styles.logo} />
                    <Link to="/contactPage" className={styles.contactButton}>
                        お問い合わせはこちら
                    </Link>
                </div>
                
                <div className={styles.menuSection}>
                    <div className={styles.menuColumn}>
                        <Link to="/">サービス</Link>
                        <Link to="/profile">会社案内</Link>
                        <Link to="/column">会社概要</Link>
                    </div>
                    <div className={styles.menuColumn}>
                        <Link to="/sitePolicyPage">サイトポリシー</Link>
                        <Link to="/privacyPolicyPage">個人情報保護方針</Link>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p className={styles.copyright}>© SToRy Web Solutions</p>
                    <div className={styles.socialIcons}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icon/facebook.svg" alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icon/twitter.svg" alt="Twitter" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icon/instagram.svg" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
