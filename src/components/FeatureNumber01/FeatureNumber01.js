import React from "react";
import { CreateIntersectionObserver } from "../hooks/CreateIntersectionObserver";
import * as styles from "./FeatureNumber01.module.css";

const FeatureNumber01 = () => {
    const [titleRef, isTitleVisible] = CreateIntersectionObserver(0.3);
    const [subTitleRef, isSubTitleVisible] = CreateIntersectionObserver(0.3);
    const [textRef, isTextVisible] = CreateIntersectionObserver(0.3);
    const [image01Ref, isImage01Visible] = CreateIntersectionObserver(0.3);
    const [image02Ref, isImage02Visible] = CreateIntersectionObserver(0.3);
    const [image03Ref, isImage03Visible] = CreateIntersectionObserver(0.3);

    return (
        <div className={styles.featureNumber01}>
            <div className={styles.background}>
                <img 
                    src="/featureNumber01/background.jpg" 
                    alt="background" 
                    loading="lazy"
                />
            </div>
            <div className={styles.contents}>
                <div className={styles.textcontents}>
                    <h2 
                        ref={subTitleRef}
                        className={`${styles.subTitle} ${isSubTitleVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                    >
                        No. 1
                    </h2>
                    <h1 
                        ref={titleRef}
                        className={`${styles.title} ${isTitleVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                    >
                        完全オリジナル<br/>
                        モダンなデザイン
                    </h1>
                    <p 
                        ref={textRef}
                        className={`${styles.text} ${isTextVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                    >
                        SToRy Web Solutionsは、Webサイト制作を中心に、Webマーケティング、 コンテンツ制作など、 お客様のビジネスをトータルでサポートする会社です。
                    </p>
                </div>
                <div className={styles.images}>
                    <img 
                        src="/featureNumber01/image01.png" alt="image01" 
                        ref={image01Ref}
                        className={`${styles.image01} ${isImage01Visible ? styles.slideInRight : styles.zeroOpacity}`}
                        loading="lazy"
                    />
                    <div className={styles.mobileimages}>
                        <div>
                            <img src="/featureNumber01/image02.png" alt="image02"  
                                ref={image02Ref}
                                className={`${isImage02Visible ? styles.slideInLeft : styles.zeroOpacity}`}
                            />
                        </div>
                        <div className={styles.image03}>
                            <img src="/featureNumber01/image03.png" alt="image03"  
                                ref={image03Ref}
                                className={`${isImage03Visible ? styles.slideInRight : styles.zeroOpacity}`}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FeatureNumber01;
