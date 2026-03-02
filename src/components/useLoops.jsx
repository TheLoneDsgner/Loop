import { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'user_loops';

const useLoops = () => {
  const [loops, setLoops] = useState(() => {
    try {
      const storedLoops = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedLoops ? JSON.parse(storedLoops) : [];
    } catch (error) {
      console.error("Error parsing user loops from localStorage:", error);
      return [];
    }
  });
  const [saveError, setSaveError] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(loops));
      // On a successful save, always ensure the error state is null.
      setSaveError(null);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    
    } catch (error) {
      const errorMessage = "Failed to save loops to localStorage.";
      console.error(errorMessage, error);
      setSaveError(errorMessage);
    }
  }, [loops, setSaveError]);

  const clearSaveError = () => {
    setSaveError(null);
  };

  return [loops, setLoops, saveError, clearSaveError];
};

export default useLoops;
