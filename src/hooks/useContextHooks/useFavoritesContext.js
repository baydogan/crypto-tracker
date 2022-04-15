import { FavoritesContext } from "../../contexts/FavoritesContext";
import { useContext } from "react";

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  return context;
};
