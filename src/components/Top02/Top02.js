import React from "react";
import * as styles from "./Top02.module.css";

const Top02 = () => {
    return (
        <div className={styles.Top02}>
            <img 
                src="/Top/Background.jpg" 
                alt="Background" 
                className={styles.Background}
                fetchpriority="high"
                />
            <div className={styles.top}>
                <div className={styles.topcontent}>
                    <div className={styles.logo}>
                        <img src="/logo/whitelogo.png" alt="logo" />
                    </div>
                    <div className={styles.Title}>
                        <h1>
                            Design <br/>
                            of your SToRy
                        </h1>
                        <h2>
                            思い描く社会を物語に載せて
                        </h2>
                    </div>
                    <div className={styles.viewImages}>
                        <p>View Image</p>
                    </div>
                    <div className={styles.topImages}>
                        <img src="/Top/01.jpg" alt="01" className={styles.Box}/>
                        <img src="/Top/02.jpg" alt="02" className={styles.Box}/>
                        <img src="/Top/03.jpg" alt="03" className={styles.Box}/>
                        <img src="/Top/04.jpg" alt="04" className={styles.Box}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Top02;
