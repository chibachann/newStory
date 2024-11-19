import React from "react";
import { CreateIntersectionObserver } from "../hooks/CreateIntersectionObserver";
import * as styles from "./FeatureNumber03.module.css";

const FeatureNumber03 = () => {
    const [subTitleRef, isSubTitleVisible] = CreateIntersectionObserver(0.3);
    const [titleRef, isTitleVisible] = CreateIntersectionObserver(0.3);
    const [image01Ref, isImage01Visible] = CreateIntersectionObserver(0.3);
    const [image02Ref, isImage02Visible] = CreateIntersectionObserver(0.3);
    const [image03Ref, isImage03Visible] = CreateIntersectionObserver(0.3);
    const [image04Ref, isImage04Visible] = CreateIntersectionObserver(0.3);
    const [step01Ref, isStep01Visible] = CreateIntersectionObserver(0.3);
    const [step02Ref, isStep02Visible] = CreateIntersectionObserver(0.3);
    const [step03Ref, isStep03Visible] = CreateIntersectionObserver(0.3);
    const [step04Ref, isStep04Visible] = CreateIntersectionObserver(0.3);
    const [stepTitle01Ref, isStepTitle01Visible] = CreateIntersectionObserver(0.3);
    const [stepTitle02Ref, isStepTitle02Visible] = CreateIntersectionObserver(0.3);
    const [stepTitle03Ref, isStepTitle03Visible] = CreateIntersectionObserver(0.3);
    const [stepTitle04Ref, isStepTitle04Visible] = CreateIntersectionObserver(0.3);

    return (
        <div className={styles.featureNumber03}>
            <div className={styles.contents}>
                <div className={styles.textcontents}>
                    <h2 
                        ref={subTitleRef}
                        className={`${styles.subTitle} ${isSubTitleVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                    >
                        No. 3
                    </h2>
                    <h1 
                        ref={titleRef}
                        className={`${styles.title} ${isTitleVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                    >
                        安心の値段設定
                    </h1>
                </div>
                <div className={styles.images}>
                    <div className={styles.container}>
                        <div className={styles.step}>
                            <img src="/featureNumber03/image01.jpg" alt="step01" 
                                ref={image01Ref}
                                className={`${styles.image01} ${isImage01Visible ? styles.slideInBottom : styles.zeroOpacity}`}
                            />
                        </div>
                        <h3 
                            ref={stepTitle01Ref}
                            className={`${styles.stepTitle} ${isStepTitle01Visible ? styles.slideInBottom : styles.zeroOpacity}`}
                        >
                            寄り添った価格
                        </h3>
                        <p 
                            ref={step01Ref}
                            className={`${styles.text} ${isStep01Visible ? styles.slideInBottom : styles.zeroOpacity}`}
                        >
                            SToRy Web Solutionsは、Webサイト制作を中心に、Webマーケティング、 コンテンツ制作など、 お客様のビジネスをトータルでサポートする会社です。
                        </p>
                    </div>
                    
                    <div className={styles.container}>
                        <div className={styles.step}>
                            <img src="/featureNumber03/image02.jpg" alt="step02" 
                                ref={image02Ref}
                                className={`${styles.image01} ${isImage02Visible ? styles.slideInBottom : styles.zeroOpacity}`}
                            />
                        </div>
                        <h3 
                            ref={stepTitle02Ref}
                            className={`${styles.stepTitle} ${isStepTitle02Visible ? styles.slideInBottom : styles.zeroOpacity}`}
                        >
                            充実したサービス
                        </h3>
                        <p 
                            ref={step02Ref}
                            className={`${styles.text} ${isStep02Visible ? styles.slideInBottom : styles.zeroOpacity}`}
                        >
                            SToRy Web Solutionsは、Webサイト制作を中心に、Webマーケティング、 コンテンツ制作など、 お客様のビジネスをトータルでサポートする会社です。
                        </p>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.step}>
                            <img src="/featureNumber03/image03.jpg" alt="step01" 
                                ref={image03Ref}
                                className={`${styles.image01} ${isImage03Visible ? styles.slideInBottom : styles.zeroOpacity}`}
                            />
                        </div>
                        <h3 
                            ref={stepTitle03Ref}
                            className={`${styles.stepTitle} ${isStepTitle03Visible ? styles.slideInBottom : styles.zeroOpacity}`}
                        >
                            構築から運用まで
                        </h3>
                        <p 
                            ref={step03Ref}
                            className={`${styles.text} ${isStep03Visible ? styles.slideInBottom : styles.zeroOpacity}`}
                        >
                            SToRy Web Solutionsは、Webサイト制作を中心に、Webマーケティング、 コンテンツ制作など、 お客様のビジネスをトータルでサポートする会社です。
                        </p>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.step}>
                            <img src="/featureNumber03/image04.jpg" alt="step01" 
                                ref={image04Ref}
                                className={`${styles.image01} ${isImage04Visible ? styles.slideInBottom : styles.zeroOpacity}`}
                            />
                        </div>
                        <h3 
                            ref={stepTitle04Ref}
                            className={`${styles.stepTitle} ${isStepTitle04Visible ? styles.slideInBottom : styles.zeroOpacity}`}
                        >
                            予算に合わせた設計
                        </h3>
                        <p 
                            ref={step04Ref}
                            className={`${styles.text} ${isStep04Visible ? styles.slideInBottom : styles.zeroOpacity}`}
                        >
                            SToRy Web Solutionsは、Webサイト制作を中心に、Webマーケティング、 コンテンツ制作など、 お客様のビジネスをトータルでサポートする会社です。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default FeatureNumber03;
