// componentler
import Coin from "../components/Coin";
import Pagination from "../components/Pagination";

import { useMemo, useState,  } from "react";

// custom hooklar
import useScrollToTop from "../hooks/useScrollToTop";

//usecontext hookları
import { useOptionsContext } from "../hooks/useContextHooks/useOptionsContext";
import { useCryptoListContext } from "../hooks/useContextHooks/useCryptoListContext";

const CryptolistLayout = () => {
  const { data, loading, error, cryptoNews, cryotoNewsLoading, cryptoNewsError } = useCryptoListContext();
  const { search, setSearch } = useOptionsContext();
  const [currentPage, setCurrentPage] = useState(1); //default page  için state
  const [coinPerPage, setCoinPerPage] = useState(20); //sayfa başına gösterilecek coin sayısı

  const handleSearch = useMemo(() => { // arama işlemi için kullanılan fonksiyon
    if (search === "") {
      return data;
    } else {
      return data.filter((coin) => {
        setCurrentPage(1);
        return coin.name.toLowerCase().includes(search.toLowerCase());
      });
    }
  }, [data, search]);

  //pagination işlemi için kullanılan değişkenler. ilk index ve son index üzerinde mevcut gösterilecek coin listesi bulunur.
  const indexOfLastItem = currentPage * coinPerPage; 
  const indexOfFirstItem = indexOfLastItem - coinPerPage; 
  const currentItems = handleSearch.slice(indexOfFirstItem, indexOfLastItem); 

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useScrollToTop("smooth", currentPage); // mevcut sayfa değiştiğinde useScrollToTop fonksiyonu çalıştırılır. smooth bir şekilde yukarı scroll edilir.

  return (
    <>
      {data.length > 0 && (
        <h1 className="text-xl  ml-2 md:text-2xl font-medium mb-4 md:ml-4 dark:text-white">All Crypto Currencies</h1>
      )}
      <div className="container mx-auto">
        {data &&
          currentItems.map((coin) => {
            return <Coin key={coin.id} coin={coin} />;
          })}
      </div>
      <Pagination
        coinPerPage={coinPerPage}
        totalList={handleSearch.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default CryptolistLayout;
