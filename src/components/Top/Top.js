import React from "react";
import * as styles from "./Top.module.css";

import TopSmallBox from "../TopSmallBox/TopSmallBox";

const Top = () => {
    return (
        <div className={styles.Top}>
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
                <div className={styles.SmallBoxes}>
                    <TopSmallBox 
                        title="OUR SERVICES"
                        imgsrc="/top/service.png"
                        alt={"service"}
                    />
                    <TopSmallBox 
                        title="WORKS"
                        imgsrc="/top/work.png"
                        alt={"work"}
                    />
                    <TopSmallBox 
                        title="FEATURE"
                        imgsrc="/top/feature.png"
                        alt={"feature"}
                    />
                    <TopSmallBox 
                        title="CONTACT"
                        imgsrc="/top/contact.png"
                        alt={"contact"}
                    />
                </div>
                
            </div>
        </div>
    );
}

export default Top;
