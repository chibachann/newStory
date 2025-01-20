import React from "react";
import * as styles from "./concept.module.css";  

const Concept = () => {    // コンポーネント名変更
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textSection}>
                    <h1 className={styles.title}>
                        ひとつひとつを<span className={styles.highlight}>丁寧</span>に<br />
                        確かな<span className={styles.highlight}>技術力</span>と共に
                    </h1>
                    
                    <div className={styles.description}>
                        <p className={styles.fadeIn}>
                            私たちは数多くのWebサイトの制作だけでなく、<br />
                            業務効率化のためのシステム、データの管理まで、<br />
                            幅広いデジタルソリューションを提供しています。
                        </p>
                        
                        <p className={styles.fadeIn}>
                            ただ作るだけではなく、お客様の業務フローを深く理解し、<br />
                            本当に必要な機能を実装します。<br />
                            「<span className={styles.emphasisText}>使いやすさ</span>」と「<span className={styles.emphasisText}>収益性</span>」を重視した設計により、<br />
                            柔軟性と運用性を兼ね備えたシステムを構築。
                        </p>
                        
                        <p className={styles.fadeIn}>
                            プロジェクトの始まりから運用後のサポートまで、<br />
                            私たちは常にお客様に寄り添い、様々な観点で<span className={styles.highlight}>最適なソリューション</span>を<br />
                            実現します。小規模から大規模なシステム開発まで、<br />
                            あらゆるニーズに対応いたします。
                        </p>
                    </div>
                </div>
                
                <div className={styles.imageSection}>
                    <div className={styles.phoneWrapper}>
                        <img src="/images/smartphone.png" alt="スマートフォン画面" className={styles.slideIn} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Concept;
