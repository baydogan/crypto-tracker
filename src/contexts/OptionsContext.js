import { createContext, useState,  } from "react";


export const OptionsContext = createContext();

export const OptionsProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <OptionsContext.Provider value={{ search, setSearch,  }}>
      {children}
    </OptionsContext.Provider>
  );
};
