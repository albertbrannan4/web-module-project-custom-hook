import { useState } from "react";

const useLocalStorage = (key, initValue) => {
  const [localStorage, setLocalStorage] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    window.localStorage.setItem(key, JSON.stringify(initValue));
    return initValue;
  });

  const setValue = (value) => {
    setLocalStorage(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [localStorage, setValue];
};

export default useLocalStorage;
