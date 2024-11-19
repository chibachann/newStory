import React from "react";
import { CreateIntersectionObserver } from "../hooks/CreateIntersectionObserver";
import * as styles from "./About02.module.css";


const About02 = () => {
    // 各要素に個別のrefとisVisibleを作成
    const [titleRef, isTitleVisible] = CreateIntersectionObserver(0.3);
    const [textRef, isTextVisible] = CreateIntersectionObserver(0.3);
    const [iconRef, isIconVisible] = CreateIntersectionObserver(0.3);

    return (
        <div className={styles.About02}>
            <div className={styles.background}>
                <img src="/about/background.svg" alt="background" loading="lazy"/>
            </div>
            <div className={styles.contents}>
                <div className={styles.textContent}>
                    <h1 
                        ref={titleRef}
                        className={`${styles.title} ${isTitleVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                    >
                        About<br/>
                        SToRy web<br/>
                        Solutions
                    </h1>
                    
                    <div 
                        ref={textRef}
                        className={`${styles.text} ${isTextVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                    >
                        <p>
                            SToRy Web Solutionsは、Webサイト制作を中心に、Webマーケティング、
                            コンテンツ制作など、
                            お客様のビジネスをトータルでサポートする会社です。                            
                        </p>
                    </div>  
                    
                    <img 
                        src="/about/icon.svg" 
                        alt="icon" 
                        ref={iconRef}
                        className={`${styles.icon} ${isIconVisible ? styles.slideInBottom : styles.zeroOpacity}`}
                    />
                </div>
               
                <div 
                    className={`${styles.mainImage} ${isTitleVisible ? styles.slideInRight : styles.zeroOpacity}`}
                >
                    <img src="/about/main.jpg" alt="main" loading="lazy"/>
                </div>
            </div>
        </div>
    );
}

export default About02;
