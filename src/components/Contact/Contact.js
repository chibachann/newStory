import React from "react";
import * as styles from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={styles.Contact}>
            <div className={styles.Content}>
                <div className={styles.Title}>
                    <h1>Lets discuss your project</h1>
                    <h2>お問い合わせ</h2>
                </div>
                <p className={styles.Text}>
                    お客様が目指しているビジョンやアイデアを<br/>
                    ぜひお聞かせください。<br/>
                    お客様のビジョンを形にする<br/>
                    お手伝いをさせていただきます。
                </p>

                <div className={styles.Container}>
                    s
                </div>

            </div>
        </div>
    );
}

export default Contact;
