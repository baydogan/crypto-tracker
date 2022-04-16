import Coin from "../components/Coin";
import Pagination from "../components/Pagination";
import { useOptionsContext } from "../hooks/useContextHooks/useOptionsContext";
import { useCryptoListContext } from "../hooks/useContextHooks/useCryptoListContext";
import { useMemo, useState, useEffect } from "react";
import useScrollToTop from "../hooks/useScrollToTop";

const CryptolistLayout = () => {
  const { data, loading, error, cryptoNews, cryotoNewsLoading, cryptoNewsError } = useCryptoListContext();
  const { search, setSearch } = useOptionsContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [coinPerPage, setCoinPerPage] = useState(20);

  const handleSearch = useMemo(() => {
    if (search === "") {
      return data;
    } else {
      return data.filter((coin) => {
        setCurrentPage(1);
        return coin.name.toLowerCase().includes(search.toLowerCase());
      });
    }
  }, [data, search]);
  const indexOfLastItem = currentPage * coinPerPage;
  const indexOfFirstItem = indexOfLastItem - coinPerPage;
  const currentItems = handleSearch.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useScrollToTop("smooth", currentPage);

  console.log('data :>> ', data);

  return (
    <>
      <h1 className="text-xl  ml-2 md:text-2xl font-medium mb-4 md:ml-4">All Crypto Currencies</h1>
      <div className="container mx-auto">
      {data &&
        currentItems.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </div>
      <Pagination coinPerPage={coinPerPage} totalList={handleSearch.length} paginate={paginate} currentPage={currentPage} />
    </>
  );
};

export default CryptolistLayout;
