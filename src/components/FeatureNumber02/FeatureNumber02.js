import React from "react";
import { CreateIntersectionObserver } from "../hooks/CreateIntersectionObserver";
import * as styles from "./FeatureNumber02.module.css";

const FeatureNumber02 = () => {

    const [titleRef, isTitleVisible] = CreateIntersectionObserver(0.3);
    const [subTitleRef, isSubTitleVisible] = CreateIntersectionObserver(0.3);
    const [text01Ref, isText01Visible] = CreateIntersectionObserver(0.3);
    const [text02Ref, isText02Visible] = CreateIntersectionObserver(0.3);
    const [image01Ref, isImage01Visible] = CreateIntersectionObserver(0.3);
    const [image02Ref, isImage02Visible] = CreateIntersectionObserver(0.3);

    return (
        <div className={styles.featureNumber02}>
            <div className={styles.contents}>
                <div className={styles.textcontents}>
                    <h2 
                        ref={subTitleRef}
                        className={`${styles.subTitle} ${isSubTitleVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                    >
                        No. 2
                    </h2>
                    <h1 
                        ref={titleRef}
                        className={`${styles.title} ${isTitleVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                    >
                        SEOを含む<br/>
                        安心安全なサポート
                    </h1>
                    <div 
                        ref={text01Ref}
                        className={`${styles.t} ${isText01Visible ? styles.slideInBottom : styles.zeroOpacity}`}
                    >
                        <h3 className={styles.aaa}>
                            <span>01</span>
                            SEO対策
                        </h3>
                        <p className={styles.text}>
                        SToRy Web Solutionsは、Webサイト制作を中心に、Webマーケティング、 コンテンツ制作など、 お客様のビジネスをトータルでサポートする会社です。
                        </p>
                    </div>

                    <div 
                        ref={text02Ref}
                        className={`${styles.t} ${isText02Visible ? styles.slideInBottom : styles.zeroOpacity}`}
                    >
                        <h3 className={styles.aaa}>
                            <span>02</span>
                            サポート体制
                        </h3>
                        <p className={styles.text}>
                        SToRy Web Solutionsは、Webサイト制作を中心に、Webマーケティング、 コンテンツ制作など、 お客様のビジネスをトータルでサポートする会社です。
                        </p>
                    </div>
                </div>
                <div className={styles.images}>
                    <img src="/featureNumber02/image01.jpg" alt="image01" 
                        ref={image01Ref}
                        className={`${styles.image01} ${isImage01Visible ? styles.slideInRight : styles.zeroOpacity}`}
                    />
                    <img src="/featureNumber02/image02.jpg" alt="image02" 
                        ref={image02Ref}
                        className={`${styles.image01} ${isImage02Visible ? styles.slideInLeft : styles.zeroOpacity}`}
                    />
                </div>

            </div>
        </div>
    );

}

export default FeatureNumber02;
