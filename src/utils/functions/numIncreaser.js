import { useEffect, useState } from 'react';

const numsIncreaser = () => {
  const [nums, setNums] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      if (nums === 100) return;
      else {
        setNums(n => n + 1);
      }
    }, 10);

    return () => {
      clearInterval(int);
    };
  }, [nums]);
};

export default numsIncreaser;
