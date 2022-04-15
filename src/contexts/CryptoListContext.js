import { createContext } from "react";
import useFetch from "../hooks/useFetch";
import { CoinList, searchCoin } from "../config/api";

export const CryptoListContext = createContext();

export const CryptoListProvider = ({ children }) => {
  const { data, loading, error } = useFetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&", true);
  const {
    data: cryptoNews,
    loading: cryotoNewsLoading,
    error: cryptoNewsError,
  } = useFetch(
    "https://newsapi.org/v2/everything?q=Blockchain&sortBy=popularity&apiKey=38a86b7e0bf74d13b68a07dfd9a30086",
    false
  );
  return (
    <CryptoListContext.Provider value={{ data, loading, error, cryptoNews, cryotoNewsLoading, cryptoNewsError }}>
      {children}
    </CryptoListContext.Provider>
  );
};
