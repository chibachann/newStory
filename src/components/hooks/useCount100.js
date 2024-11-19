import { useEffect, useState } from 'react';

export const useCount100 = ({ initialDelay = 1000, duration = 500 } = {}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      const interval = duration / 100;
      
      const timer = setInterval(() => {
        setCount(prevCount => {
          if (prevCount >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prevCount + 1;
        });
      }, interval);

      return () => clearInterval(timer);
    }, initialDelay);

    return () => clearTimeout(startDelay);
  }, [duration, initialDelay]);

  const textColor = `rgb(${count * 1.7}, ${count * 1.7}, ${count * 1.7})`;

  return { count, textColor };
};
