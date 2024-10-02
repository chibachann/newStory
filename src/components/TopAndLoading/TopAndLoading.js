import React, { useEffect, useState } from "react";
import * as styles from "./TopAndLoading.module.css";

import TopSmallBox from "../TopSmallBox/TopSmallBox";
import AnimatedElement from "../AnimatedElement";

const Top = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false)
        }, 3000) 

        return () => clearTimeout(timer)
    }, [])
    
    return (
        <div className={styles.Top}>
            <div className={`${styles.loadingScreen} ${!isLoading ? styles.loaded : ''}`}>
                <img src="background/OxfordBlue.png" alt="OxfordBlue" className={styles.loadingBackground} />
                <div className={styles.loadingContent}>
                    <img src="logo/loading_title_2.png" alt="Loading_2" className={styles.loadingImage} />
                    <img src="logo/loading_title_1.png" alt="Loading_1" className={styles.loadingImage} />
                    
                </div>
            </div>
           <img src="/top/background.png" alt="background_top" className={styles.Background}/>
           <div className={styles.TextContent}>
                <h1 className={styles.Title}>
                    BEYOND<br/>
                    WEB-SITE
                </h1>
                <h2 className={styles.SubTitle}>
                    従来のウェブサイトの<br/>
                    その先へ
                </h2>
                <div className={styles.AnimeText}>
                    <img src="/top/surcletext.svg" alt="surcletext" className={styles.SurcleText} />
                    <img src="/top/downarrow.svg" alt="downarrow" className={styles.DownArrow} />
                </div>
            </div>

            <div className={styles.ImageContent}>
                

                <img src="/top/main.png" alt="main" className={styles.MainImage}/>
              
                
            </div>
        </div>
    );
}

export default Top;
