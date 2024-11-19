import { useEffect } from 'react';

// In: 始めはゆっくりで、終わりが速い
// Out: 始めは速く、終わりがゆっくり
// InOut: 始めと終わりがゆっくりで、中間が速い
// Bounce: バウンドするような動き
// その他: 数値が大きいほど（Quad < Cubic < Quart）よりカーブが急になりま

// イージング関数のコレクション
const easingFunctions = {
    // 基本的なイージング
    linear: t => t,
    
    // Quad系
    easeInQuad: t => t * t,
    easeOutQuad: t => 1 - (1 - t) * (1 - t),
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
    
    // Cubic系
    easeInCubic: t => t * t * t,
    easeOutCubic: t => 1 - Math.pow(1 - t, 3),
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    
    // Quart系
    easeInQuart: t => t * t * t * t,
    easeOutQuart: t => 1 - Math.pow(1 - t, 4),
    easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2,
    
    // Expo系
    easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * t - 10),
    easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
    easeInOutExpo: t => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? 
        Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2,
    
    // Sine系
    easeInSine: t => 1 - Math.cos((t * Math.PI) / 2),
    easeOutSine: t => Math.sin((t * Math.PI) / 2),
    easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
    
    // Bounce系
    easeOutBounce: t => {
        if (t < 1 / 2.75) {
            return 7.5625 * t * t;
        } else if (t < 2 / 2.75) {
            return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
        } else if (t < 2.5 / 2.75) {
            return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
        } else {
            return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        }
    }
};

export const useAutoScroll = ({
    intervals = [5000, 5000, 5000],
    scrollDistances = [0.5, 1.5, 0],
    initialDelay = 5000,
    duration = 1500,
    easing = 'easeOutCubic' // デフォルトのイージング
} = {}) => {
    useEffect(() => {
        let animationFrameId;
        let timeoutId;

        const easingFunction = easingFunctions[easing] || easingFunctions.easeOutCubic;

        const smoothScroll = (start, end, duration) => {
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                const eased = easingFunction(progress);
                const currentPosition = start + (end - start) * eased;

                window.scrollTo(0, currentPosition);

                if (progress < 1) {
                    animationFrameId = requestAnimationFrame(animate);
                }
            };

            animationFrameId = requestAnimationFrame(animate);
        };

        const scrollSequence = async () => {
            for (let i = 0; i < scrollDistances.length; i++) {
                const startPosition = window.pageYOffset;
                const targetPosition = window.innerHeight * scrollDistances[i];

                smoothScroll(startPosition, targetPosition, duration);

                await new Promise(resolve => {
                    timeoutId = setTimeout(resolve, intervals[i]);
                });
            }

            timeoutId = setTimeout(scrollSequence, intervals[intervals.length - 1]);
        };

        timeoutId = setTimeout(scrollSequence, initialDelay);

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [intervals, scrollDistances, duration, easing]);
};
