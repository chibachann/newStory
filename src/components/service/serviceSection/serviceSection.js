import React from "react";
import * as styles from "./serviceSection.module.css";

const ServiceSection = ({ 
    title, 
    mainText, 
    emphasisTexts, 
    cardTitle, 
    cardDescription, 
    iconSrc, 
    iconAlt 
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                <div className={styles.titleLine}></div>
            </div>
            
            <div className={styles.content}>
                <div className={styles.textSection}>
                    <div className={styles.description}>
                        {mainText.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                        
                        {emphasisTexts && emphasisTexts.length > 0 && (
                            <div className={styles.emphasis}>
                                {emphasisTexts.map((text, index) => (
                                    <p key={index}>{text}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                
                <div className={styles.cardSection}>
                    <div className={styles.cardWrapper}>
                        <div className={styles.card}>
                            <img 
                                src={iconSrc} 
                                alt={iconAlt} 
                                className={styles.icon}
                            />
                            <h3>{cardTitle}</h3>
                            <p>{cardDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
