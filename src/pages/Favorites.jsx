import { useFavoritesContext } from "../hooks/useContextHooks/useFavoritesContext";
import Favoritelistlayout from "../layouts/FavoriteListLayout";

const Favorites = () => {
  const { favorites, setFavorites } = useFavoritesContext();
  console.log("object :>> ", favorites);
  return (
    <div className="max-w-7xl mx-auto p-3">
        <Favoritelistlayout />
    </div>
      
   
  );
};

export default Favorites;
