//helper fonksiyonlar
import { numberWithCommas } from "../helpers";

//use context hookları
import { useCryptoListContext } from "../hooks/useContextHooks/useCryptoListContext";

const Coininfo = ({ name, image, market_data }) => {
  const {symbol, currency} = useCryptoListContext();
  return (
    <>
      <div className="w-full">
        <div className="flex items-center flex-col">
          {image && <img src={image.large} alt={name} className="w-32 h-32" />}
          <h1 className="text-4xl dark:text-white">{name}</h1>
        </div>
        <div className="flex justify-center items-center flex-col mt-4">
          {market_data && (
            <p className="text-base md:text-lg dark:text-white ">
              <span className="font-bold text-xl mr-1 ">Current Price:</span> {symbol}
              {currency === "USD" ? numberWithCommas(market_data.current_price.usd) : numberWithCommas(market_data.current_price.eur)}
            </p>
          )}
          {market_data && (
            <p className="text-base md:text-lg dark:text-white">
              <span className="font-bold text-xl mr-1">24h Change: </span>
              {market_data.price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
          {market_data && (
            <p className="text-base md:text-lg dark:text-white">
              <span className="font-bold text-lg md:text-xl mr-1">Market Cap:</span> {symbol}
              {currency === "USD" ? numberWithCommas(market_data.market_cap.usd) : numberWithCommas(market_data.market_cap.eur)}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Coininfo;
