import { numberWithCommas } from "../helpers/index";
import { StarIcon } from "@heroicons/react/outline";
import { useState } from "react";

const Coin = ({ coin }) => {
  return (
    <div className="flex items-center p-3 md:p-6 border-b border-slate-200 w-full cursor-pointer hover:bg-slate-200 transition-all duration-300">
      <div className="w-1/12">
        <StarIcon className="h-6 w-6 text-yellow-400 hover:fill-yellow-400" />
      </div>
      <div className="flex items-center gap-x-5 w-2/6 md:w-2/6 lg:w-1/6">
        <img src={coin.image} alt={coin.name} className="w-10 h-10" />
        <span className="text-xs md:text-base">{coin.name}</span>
      </div>
      <span className="text-left uppercase   hidden lg:block w-1/6">{coin.symbol}</span>
      <span className=" text-xs md:text-base  w-1/6">${numberWithCommas(coin.current_price.toFixed(2))}</span>
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
        ${numberWithCommas(coin.market_cap_change_24h.toString().slice(0, -6))}M
      </span>
    </div>
  );
};

export default Coin;
