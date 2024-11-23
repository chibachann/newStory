import { useEffect, useRef, useState } from "react";

export const CreateIntersectionObserver = (threshold = 0.3) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);  
    const ref = useRef(null);
  
    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {  // まだアニメーションしていない場合のみ
                    setIsVisible(true);
                    setHasAnimated(true);  // アニメーション実行済みとしてマーク
                }
            },
            { threshold }
        );
    
        if (currentRef) {
            observer.observe(currentRef);
        }
    
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);
  
    return [ref, isVisible];
};
