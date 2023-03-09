import { useEffect } from 'react';

const useTitleSetter = title => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = 'Be Green';
    };
  }, [title]);
};

export default useTitleSetter;
