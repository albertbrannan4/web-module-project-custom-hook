import useLocalStorage from "./useLocalStorage";
export const useDarkMode = (key, value) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, value);

  return [darkMode, setDarkMode];
};
