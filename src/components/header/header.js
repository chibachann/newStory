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
            <img src="/logo/whitelogo.png" alt="ロゴ" className={styles.logo} />
            <nav className={styles.pcNav}>
                <ul>
                    <li><Link to="/">サービス</Link></li>
                    <li><Link to="/">会社案内</Link></li>
                    <li><Link to="/">会社概要</Link></li>
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
                    <li><Link to="/" onClick={toggleMenu}>サービス</Link></li>
                    <li><Link to="/" onClick={toggleMenu}>会社案内</Link></li>
                    <li><Link to="/" onClick={toggleMenu}>会社概要</Link></li>
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
