import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Coin from "../components/Coin";
import Pagination from "../components/Pagination";
import { useSearchContext } from "../hooks/useSearchContext";
import { CoinList, searchCoin } from "../config/api";

const Home = () => {
  const { search, setSearch } = useSearchContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [url, setUrl] = useState(CoinList("usd", currentPage));
  const { data, loading, error } = useFetch(url, true);

  useEffect(() => {
    setUrl(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${search}`)
  }, [search]);

  console.log('data :>> ', data);

  return (
    <div className="container mx-auto p-3">
      {error && <div>Error...</div>}
      {data &&
        data.map((coin, index) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      <Pagination />
    </div>
  );
};

export default Home;
