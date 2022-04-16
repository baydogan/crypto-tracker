import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CoinInfo from "../layouts/CoinDetail/CoinInfo";
import Cryptonews from "../components/CryptoNews";
import { HistoricalChart } from "../config/api";
import { useCryptoListContext } from "../hooks/useContextHooks/useCryptoListContext";
import Chartbar from "../components/ChartBar";

const Coindetail = () => {
  const { id } = useParams();
  const { currency } = useCryptoListContext();
  const { data, loading, error } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}`, false);
  const { data: historicalData } = useFetch(HistoricalChart(id, 1, currency), false);

  const { name, image, market_data, description } = data;
  const { data: relatedNews } = useFetch(
    `https://newsapi.org/v2/everything?q=${id}&sortBy=popularity&apiKey=38a86b7e0bf74d13b68a07dfd9a30086`,
    false
  );
  const { articles } = relatedNews;

  console.log("relatedNews :>> ", historicalData);

  return (
    <div className="container mx-auto p-3 flex flex-col ">
      <div className="flex flex-col md:flex-row items-center gap-3 p-3">
        <CoinInfo name={name} image={image} market_data={market_data} description={description} />
        <Chartbar />
      </div>
      <h1 className=" text-2xl font-medium ml-10 mt-10 ">Related News</h1>
      <div className="grid container mx-auto gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5 pb-10">
        {articles &&
          articles.map((article, index) => {
            return <Cryptonews key={index} article={article} />;
          })}
      </div>
    </div>
  );
};

export default Coindetail;
