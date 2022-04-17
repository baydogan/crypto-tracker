import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CoinInfo from "../layouts/CoinInfo";
import Cryptonews from "../components/CryptoNews";
import { HistoricalChart } from "../config/api";
import { useCryptoListContext } from "../hooks/useContextHooks/useCryptoListContext";
import { useOptionsContext } from "../hooks/useContextHooks/useOptionsContext";
import Chartbar from "../components/ChartBar";
import { cryptoNews, SingleCoin } from "../config/api";

const Coindetail = () => {
  const { id } = useParams();
  const { currency } = useCryptoListContext();
  const { days } = useOptionsContext();
  const { data, loading, error } = useFetch(SingleCoin(id), false);
  const { data: historicalData } = useFetch(HistoricalChart(id, days, currency), false);

  const { name, image, market_data, description } = data;
  const { data: relatedNews } = useFetch(cryptoNews(id), false);
  const { articles } = relatedNews;
  const { prices } = historicalData;

  return (
    <div className="container mx-auto p-3 flex flex-col h-full ">
      <div className="flex flex-col justify-center items-center">
        <CoinInfo name={name} image={image} market_data={market_data} description={description} />
        {data && <Chartbar name={name} prices={prices} />}
      </div>
      {articles && (
        <>
          <h1 className=" text-2xl font-medium ml-10 mt-10 dark:text-white ">Related News</h1>
          <div className="grid container mx-auto gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5 pb-10">
            {articles && articles.length > 0 &&
              articles.map((article, index) => {
                return <Cryptonews key={index} article={article} />;
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default Coindetail;
