import React from "react";
import * as styles from "./chatbotSection.module.css";

const ChatbotSection = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>チャットボットの導入</h2>
            
            <div className={styles.content}>
                <div className={styles.textSection}>
                    <div className={styles.description}>
                        <p>
                            SNS、AI、Web... 様々なデジタルソリューションが存在する現代、<br />
                            時代に合わせて情報を発信、発信していくには中身の更新が重要となっています。
                        </p>
                        
                        <p>
                            魅力的なWebページは外部への価値観、新時感を高め、<br />
                            より良い人材、より良い印象へと繋がっていきます。
                        </p>
                        
                        <div className={styles.emphasis}>
                            <p>「もっと自社の商品を魅力的に伝えたい！」</p>
                            <p>「今よりも素敵なデザインにしたい！」</p>
                        </div>
                        
                        <p>
                            私たちは、そんなご期待に応えていくことができる<br />
                            Webソリューション事業を提供しています。
                        </p>
                        
                        <p>
                            私たちは、そんなご期待に応えていくことができる<br />
                            Webソリューション事業を提供しています。
                        </p>
                    </div>
                </div>
                
                <div className={styles.cardSection}>
                    <div className={styles.card}>
                        <img 
                            src="/icon/chatbot.svg" 
                            alt="チャットボット" 
                            className={styles.icon}
                        />
                        <h3>チャットボット</h3>
                        <p>
                            これまでの学歴や職歴、課外活動、<br />
                            国籍、人種などで入学希望者をフィルタリング<br />
                            することはありません。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatbotSection;
