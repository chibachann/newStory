import React from "react";
import * as styles from "./Service.module.css";

const Service = () => {
    return (
        <div className={styles.Service}>
            <img src="/service/background.png" alt="background_service" className={styles.Background}/>
            <div className={styles.Content}>
                <div className={styles.Title}>
                    <h1>SERVICES</h1>
                    <h2>サービス</h2>
                </div>
                
                <div className={styles.Card}>
                    <img src="/service/a.png" alt="service1"/>
                    <h3>ｗｅｂサイト制作</h3>
                    <p>
                        お客様のご要望に合わせて、ホームページを制作いたします。デザインからコーディングまで、一貫して私たちが行います。
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Service;
