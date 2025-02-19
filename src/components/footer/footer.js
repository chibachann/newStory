import React from "react";
import { Link } from "gatsby";
import * as styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.leftSection}>
                    <Link to="/" className={styles.logoLink}>
                        <img src="/logo/whitelogo.png" alt="Logo" className={styles.logo} />
                    </Link>
                    <Link to="/contactPage" className={styles.contactButton}>
                        お問い合わせはこちら
                    </Link>
                </div>
                
                <div className={styles.menuSection}>
                    <div className={styles.menuColumn}>
                        <Link to="/servicePage">サービス</Link>
                        <Link to="/companyInfoPage">会社概要</Link>
                    </div>
                    <div className={styles.menuColumn}>
                        <Link to="/">サイトポリシー</Link>
                        <Link to="/">個人情報保護方針</Link>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p className={styles.copyright}>© SToRy Web Solutions</p>
                    <div className={styles.socialIcons}>
                        <a href="https://www.instagram.com/story_web_solutions/" target="_blank" rel="noopener noreferrer">
                            <img src="/icon/instagram.svg" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
