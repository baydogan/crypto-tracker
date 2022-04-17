import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const OptionsContext = createContext();

export const OptionsProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [days, setDays] = useState(1);
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add("dark");
    } else {
      window.document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const removeTheme = () => {
    setDarkMode(!darkMode);
  };

  console.log('darkMode :>> ', darkMode);

  return (
    <OptionsContext.Provider value={{ search, setSearch, days, setDays, darkMode, removeTheme }}>
      {children}
    </OptionsContext.Provider>
  );
};
