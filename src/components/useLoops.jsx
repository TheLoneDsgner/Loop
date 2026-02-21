import { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'user_loops';

const useLoops = () => {
  // Initialize state with data from localStorage, or an empty array if not found/invalid
  const [loops, setLoops] = useState(() => {
    try {
      const storedLoops = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedLoops ? JSON.parse(storedLoops) : [];
    } catch (error) {
      console.error("Error parsing user loops from localStorage:", error);
      return [];
    }
  });

  // Effect to update localStorage whenever the 'loops' state changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(loops));
    } catch (error) {
      console.error("Error saving user loops to localStorage:", error);
    }
  }, [loops]); // Depend on 'loops' state

  return [loops, setLoops];
};

export default useLoops;
