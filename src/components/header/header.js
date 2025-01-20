import React, { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./header.module.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleMenu();
        }
    };

    return (
        <header className={styles.header}>
            {/* PC用ナビゲーション */}
            <Link to="/" className={styles.logoLink}>
                <img src="/logo/whitelogo.png" alt="ロゴ" className={styles.logo} />
            </Link>
            <nav className={styles.pcNav}>
                <ul>
                    <li><Link to="/">ホーム</Link></li>
                    <li><Link to="/servicePage">サービス</Link></li>
                    <li><Link to="/companyInfoPage">会社概要</Link></li>
                </ul>
            </nav>

            
            
            {/* お問い合わせボタン */}
            <Link to="/contactPage" className={styles.contactBtn}>
                お問い合わせはこちら
            </Link>

            {/* ハンバーガーメニュー */}
            <button 
                className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                onClick={toggleMenu}
                aria-label="メニュー"
                aria-expanded={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* スマホ用サイドナビゲーション */}
            <nav className={`${styles.spNav} ${isMenuOpen ? styles.open : ''}`}>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>ホーム</Link></li>
                    <li><Link to="/servicePage" onClick={toggleMenu}>サービス</Link></li>
                    <li><Link to="/companyInfoPage" onClick={toggleMenu}>会社概要</Link></li>
                </ul>
                <Link to="/contactPage" className={styles.contactBtnMobile}>
                    お問い合わせはこちら
                </Link>
            </nav>

            {/* オーバーレイ */}
            {isMenuOpen && (
                <div 
                    className={styles.overlay}
                    onClick={toggleMenu}
                    onKeyDown={handleKeyDown}
                    role="button"
                    tabIndex={0}
                    aria-label="メニューを閉じる"
                />
            )}
        </header>
    );
};

export default Header;
