import { createContext, useState, useEffect } from "react";

//custom hooklar
import useLocalStorage from "../hooks/useLocalStorage";

export const OptionsContext = createContext();

//global option stateleri
export const OptionsProvider = ({ children }) => {

  const [search, setSearch] = useState("");
  const [days, setDays] = useState(1); //chart için tarih stateini tutmak için oluşturulan state
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false); //dark mode stateini tutmak için oluşturulan state useLocalStorage hooku ile local storage üzerinde saklanıyor

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



  return (
    <OptionsContext.Provider value={{ search, setSearch, days, setDays, darkMode, removeTheme }}>
      {children}
    </OptionsContext.Provider>
  );
};
