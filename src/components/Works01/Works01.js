import React from "react";
import { CreateIntersectionObserver } from "../hooks/CreateIntersectionObserver";
import * as styles from "./Works01.module.css";

const Works01 = () => {
    const [titleRef, isTitleVisible] = CreateIntersectionObserver(0.3);
    const [textRef, isTextVisible] = CreateIntersectionObserver(0.3);
    const [image01Ref, isImage01Visible] = CreateIntersectionObserver(0.3);
    const [image02Ref, isImage02Visible] = CreateIntersectionObserver(0.3);
    const [image03Ref, isImage03Visible] = CreateIntersectionObserver(0.3);

    return (
        <div className={styles.Works01}>
            <img src="/works/background.jpg" alt="background" className={styles.background} loading="lazy"/>
            <div className={styles.contents}>
                <div 
                    ref={titleRef}
                    className={`${styles.title} ${isTitleVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                >
                    <h1>
                        Our Works
                    </h1>
                </div>

                <div className={styles.works}>
                    <img src="/works/01.png" alt="01" 
                        ref={image01Ref}
                        className={`${styles.worksImage} ${isImage01Visible ? styles.slideInRight : styles.zeroOpacity}`}
                        loading="lazy"
                    />
                    <img src="/works/02.png" alt="02" 
                        ref={image02Ref}
                        className={`${styles.worksImage} ${isImage02Visible ? styles.slideInLeft : styles.zeroOpacity}`}
                        loading="lazy"
                    />
                    <img src="/works/03.png" alt="03" 
                        ref={image03Ref}
                        className={`${styles.worksImage} ${isImage03Visible ? styles.slideInRight : styles.zeroOpacity}`}
                        loading="lazy"
                    />
                </div>

                <p 
                    ref={textRef}
                    className={`${styles.text} ${isTextVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                >
                    あなたの物語を作り出す
                </p>
            </div>
        </div>

    );

}

export default Works01;
