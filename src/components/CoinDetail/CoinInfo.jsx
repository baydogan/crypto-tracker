import { numberWithCommas } from "../../helpers";

const Coininfo = ({ name, image, market_data, description }) => {
  console.log("description :>> ", description);
  return (
    <>
      {" "}
      <div className="w-full md:w-1/3 flex flex-col items-center gap-y-2">
        {image && <img src={image.large} alt={name} className="w-32 h-32" />}
        <h1 className="text-4xl">{name}</h1>
        {description && (
          <p className="w-full text-base md:text-lg -tracking-tighter">{description.en.split(".", 5)}.</p>
        )}
      </div>
      <div className="flex flex-col mt-4">
        {market_data && (
          <p className="text-base md:text-lg ">
            {" "}
            <span className="font-bold text-xl mr-1">Current Price:</span> ${numberWithCommas(market_data.current_price.usd)}
          </p>
        )}
        {market_data && (
          <p className="text-base md:text-lg ">
            <span className="font-bold text-xl mr-1">24h Change: </span>
            {market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
        {market_data && (
          <p className="text-base md:text-lg ">
            {" "}
            <span className="font-bold text-lg md:text-xl mr-1">Market Cap:</span> ${numberWithCommas(market_data.market_cap.usd)}
          </p>
        )}
      </div>
    </>
  );
};

export default Coininfo;
