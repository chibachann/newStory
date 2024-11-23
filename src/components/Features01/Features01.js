import React from "react";
import { CreateIntersectionObserver } from "../hooks/CreateIntersectionObserver";
import * as styles from "./Features01.module.css";

const Features01 = () => {
    const [titleRef, isTitleVisible] = CreateIntersectionObserver(0.3);
    const [subTitleRef, isSubTitleVisible] = CreateIntersectionObserver(0.3);
    const [textRef, isTextVisible] = CreateIntersectionObserver(0.3);
    const [featureRef, isFeatureVisible] = CreateIntersectionObserver(0.3);

    return (
        <div className={styles.Features01}>
            <div className={styles.background}>
                <img src="/features/background.svg" alt="background" />
            </div>
            <div className={styles.contents}>
                <h2 
                    ref={subTitleRef}
                    className={`${styles.subTitle} ${isSubTitleVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                >
                    Features<br/>
                    <span>& Support</span>
                </h2>
                <h1 
                    ref={titleRef}
                    className={`${styles.title} ${isTitleVisible ? styles.slideInRight : styles.zeroOpacity}`}
                >
                    <span>今の時代に嬉しい</span><br/>
                    ３つのサポート
                </h1>
                <p 
                    ref={textRef}
                    className={`${styles.text} ${isTextVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                >
                    Webサイトの制作、運用から保守まで、私たちSToRy Web Solutionsにお任せください。
                    高品質なWebサイトを作成することはもちろん、その後の運用もお客様の成長をご支援する手厚く幅広いサポートをご提供いたします。
                </p>

                <div 
                    ref={featureRef}
                    className={`${styles.features} ${isFeatureVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                >
                    <div className={styles.feature}>
                        <p>No. 1</p>
                        <h3>完全オリジナル<br/>モダンなデザイン</h3>
                    </div>
                    <div className={styles.feature}>
                        <p>No. 2</p>
                        <h3>SEOを含む<br/>安心安全の保守サポート</h3>
                    </div>
                    <div className={styles.feature}>
                        <p>No. 3</p>
                        <h3>お客様に寄り添った<br/>安心の値段設定</h3>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Features01;
