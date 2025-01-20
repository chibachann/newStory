import React from "react";
import * as styles from "./top.module.css";

const Top = () => {
    return (
        <div className={styles.Top}>

            <div className={styles.MainContent}>
                <video 
                    className={styles.BackgroundVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/particles-background.mp4" type="video/mp4" />
                </video>
                <div className={styles.TextContent}>
                    <h1 className={styles.Title}>
                        Web Design & Producing
                    </h1>
                    <h2 className={styles.SubTitle}>
                        Degital & AI Solution
                    </h2>
                    <p className={styles.Description}>
                        STORy Web Solutionsは<br/>
                        webに関するソリューションを提供する会社です
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default Top;
