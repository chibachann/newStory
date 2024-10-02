import React from "react";
import * as styles from "./Contact.module.css";
import QuestionComponent from '../QuestionComponent/QuestionComponent';

const Contact = () => {
    const projectQuestion = "どのようなプロジェクトをお望みですか？";
    const projectOptions = ["Webサイト制作", "Webアプリ制作", "その他"];

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
                    <div className={styles.Question}>
                        <p>どのようなプロジェクトをお望みですか？<span className={styles.red}>*</span></p>
                        <div className={styles.ButtonArea}>
                            <button>Webサイト制作</button>
                            <button>Webアプリ制作</button>
                            <button>その他</button>
                        </div>
                    </div>
                   
                </div>

            </div>
        </div>
    );
}

export default Contact;
