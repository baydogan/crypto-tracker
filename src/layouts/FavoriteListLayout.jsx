//custom hooklar
import { useFavoritesContext } from "../hooks/useContextHooks/useFavoritesContext";
import { useCryptoListContext } from "../hooks/useContextHooks/useCryptoListContext";
import { useOptionsContext } from "../hooks/useContextHooks/useOptionsContext";

import { useMemo } from "react";
import Coin from "../components/Coin";

const Favoritelistlayout = () => {
  const {search } = useOptionsContext();
  const { favorites } = useFavoritesContext();
  const { data } = useCryptoListContext();

  const handleFavorites = useMemo(() => {
    const favoritesArray = [];
    data.forEach((coin) => {
      favorites.forEach((favorite) => {
        if (favorite.id === coin.id) {
          favoritesArray.push(coin);
        }
      });
    });
    return favoritesArray;
  }, [favorites, data]);

  const handleSearch = useMemo(() => {
    if (search === "") {
      return handleFavorites;
    } else {
      return handleFavorites.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase());
      });
    }
  }, [handleFavorites, search]);

 


  return (
    <div className="container mx-auto">
      {favorites.length > 0 && <h1 className="text-xl  ml-2 md:text-2xl font-medium mb-4 md:ml-4 dark:text-white">Favorites</h1>}
      {handleSearch.map((coin) => {
        return <Coin key={coin.id} coin={coin} />;
      })}
    </div>
  );
};

export default Favoritelistlayout;
