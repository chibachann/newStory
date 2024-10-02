import React from "react";
import * as styles from "./TopAndLoading.module.css";

import TopSmallBox from "../TopSmallBox/TopSmallBox";
import AnimatedElement from "../AnimatedElement";

const Top = () => {
    return (
        <div className={styles.Top}>
            
           


            <div className={styles.Loading}>
                <img src="background/OxfordBlue.png" alt="OxfordBlue" className={styles.loadingBackground} />
                <div className={styles.loadingContent}>
                    <img src="logo/loading_title_2.png" alt="Loading_2" className={styles.loadingImage} />
                    <img src="logo/loading_title_1.png" alt="Loading_1" className={styles.loadingImage} />
                </div>
            </div>
        </div>
    );
}

export default Top;
