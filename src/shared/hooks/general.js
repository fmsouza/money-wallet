import { useState, useEffect } from 'react';

export const useOnMount = fn => {
  const [isFirstRun, setIsFirstRun] = useState(true);
  useEffect(() => {
    if (!isFirstRun) return;
    fn();
    setIsFirstRun(false);
  }, [isFirstRun, setIsFirstRun, fn]);
};
