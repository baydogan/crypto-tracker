import { numberWithCommas } from "../helpers/index";
import { StarIcon } from "@heroicons/react/outline";
import { useFavoritesContext } from "../hooks/useContextHooks/useFavoritesContext";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
  const { favorites, setFavorites } = useFavoritesContext();

  const handleFavorite = () => {
    const newFavorites = [...favorites];
    const index = newFavorites.findIndex((favorite) => favorite.id === coin.id);
    if (index === -1) {
      newFavorites.push(coin);
      setFavorites(newFavorites);
    } else {
      newFavorites.splice(index, 1);
      setFavorites(newFavorites);
    }
  };
  return (
    <>
      {/* <Link to={`/${coin.id}`}> */}
      <div className="flex items-center p-2 md:p-6 border-b border-slate-200 w-full cursor-pointer hover:bg-slate-200 transition-all duration-300 ">
        <div className="w-1/12">
          <StarIcon
            onClick={handleFavorite}
            className={`w-5 h-5 md:w-6 md:h-6 hover:fill-yellow-400 transition-all duration-300 ${
              favorites.find((favorite) => favorite.id === coin.id)
                ? "text-yellow-400 fill-yellow-400"
                : "text-yellow-400"
            }`}
          />
        </div>
        <div className="flex items-center gap-x-2 md:gap-x-5 w-36 md:w-2/6 lg:w-3/12">
          <img src={coin.image} alt={coin.name} className="h-8 w-8 md:w-10 md:h-10" />
          <span className="text-xs md:text-base">{coin.name}</span>
        </div>
        <span className="text-left uppercase   hidden lg:block w-2/12">{coin.symbol}</span>
        <span className=" text-xs md:text-base  w-24 md:w-1/6">${numberWithCommas(coin.current_price.toFixed(2))}</span>
        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-red-600 w-1/6   text-xs md:text-base"
              : "text-green-800 w-1/6 text-xs  md:text-base"
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
        <span className="text-xs md:text-base w-1/6 ">
          ${numberWithCommas(coin.market_cap.toString().slice(0, -6))}M
        </span>
      </div>
      {/* </Link> */}
    </>
  );
};

export default Coin;
