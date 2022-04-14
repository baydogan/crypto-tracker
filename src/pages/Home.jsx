import { useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import Searchbar from "../components/SearchBar";
import CryptoMenu from "../components/CryptoMenu";
import Coin from "../components/Coin";
import Pagination from "../components/Pagination";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, loading, error } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&", {auto: true});

    console.log('data :>> ', data);
  return (
    <div className="container mx-auto p-3">
      <div className="flex flex-col items-center justify-center mt-5">
        <Searchbar />
        <CryptoMenu />
        {error && <div>Error...</div>}
        {data &&
          data.map((coin, index) => {
            return <Coin key={coin.id} coin={coin} />;
          })}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
