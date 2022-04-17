import { createContext } from "react";

//custom hooklar
import useLocalStorage from "../hooks/useLocalStorage";

//favoriler için oluşturulan global state
export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  return <FavoritesContext.Provider value={{ favorites, setFavorites }}>{children}</FavoritesContext.Provider>;
};
