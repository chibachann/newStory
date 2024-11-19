// useImageScale.js
import { useState, useEffect } from 'react';

export const useImageScale = (imageRef, initialScale = 1.2) => {
    const [scale, setScale] = useState(initialScale);

    useEffect(() => {
        const handleScroll = () => {
            const imageElement = imageRef.current;
            
            if (imageElement) {
                const rect = imageElement.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const elementTop = rect.top;
                
                const progress = 1 - (elementTop / viewportHeight);
                const clampedProgress = Math.min(Math.max(progress, 0), 1);
                
                const newScale = initialScale - (clampedProgress * (initialScale - 1));
                setScale(newScale);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [imageRef, initialScale]);

    return scale;
};
