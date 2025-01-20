import React from "react";
import * as styles from "./serviceIntro.module.css";

const ServiceIntro = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <span className={styles.pageTitle}>事業内容</span>
                
                <div className={styles.mainContent}>
                    <div className={styles.textSection}>
                        <h1 className={styles.title}>
                            業務を、ブランドを高める<br />
                            Webソリューションの提供を
                        </h1>
                        
                        <div className={styles.description}>
                            <p>
                                SNS、AI、Web...様々なデジタルソリューションが存在する現代、<br />
                                特色に合わせて適切な発信、発信していくには中身の更新が大となっています。
                            </p>
                            
                            <p>
                                魅力的なWebページは外部への価値観、目標値を高め、<br />
                                より良い人材、より良い仲間へと繋がっていきます。
                            </p>
                            
                            <ul>
                                <li>「もっと自社の強みを伝力強く伝えたい！」</li>
                                <li>「今より効果的なデザインにしたい！」</li>
                            </ul>
                            
                            <p>
                                私たちは、そんなご要望に応えていくことができる<br />
                                Webソリューションの提案をしていきます。
                            </p>
                        </div>
                    </div>
                    

                    <div className={styles.imageSection}>
                        <img 
                            src="/images/service-image.png" 
                            alt="サービスイメージ" 
                            className={styles.serviceImage}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceIntro;
