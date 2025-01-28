import React from "react";
import { Link } from "gatsby";
import * as styles from "./notFound.module.css";

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textSection}>
                    <h1 className={styles.title}>
                        <span className={styles.highlight}>404</span><br />
                        Page Not Found
                    </h1>
                    
                    <div className={styles.description}>
                        <p className={styles.fadeIn}>
                            お探しのページは見つかりませんでした。<br />
                            移動または削除された可能性があります。
                        </p>
                        
                        <Link href="/" className={styles.button}>
                            トップページに戻る
                        </Link>
                    </div>
                </div>
                
                <div className={styles.imageSection}>
                    <div className={styles.imageWrapper}>
                        <img src="/images/404.png" alt="404 イラスト" className={styles.slideIn} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
