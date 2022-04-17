import { createContext, useEffect,useState } from "react";
import useFetch from "../hooks/useFetch";
import { CoinList, searchCoin } from "../config/api";
import useLocalStorage from "../hooks/useLocalStorage";
export const CryptoListContext = createContext();

export const CryptoListProvider = ({ children }) => {
  const [currency, setCurrency] = useLocalStorage("currency", "USD");
  const [symbol, setSymbol] = useLocalStorage("symbol", "$");

  useEffect(() => {
    const currencySymbol = currency === "USD" ? "$" : "€";
    setSymbol(currencySymbol);
  }, [currency]);

  const [url, setUrl] = useState(CoinList(currency));

  useEffect(() => {
    setUrl(CoinList(currency));
  }, [currency]);

  const { data, loading, error } = useFetch(url, true);
  const {
    data: cryptoNews,
    loading: cryotoNewsLoading,
    error: cryptoNewsError,
  } = useFetch(
    "https://newsapi.org/v2/everything?q=Blockchain&sortBy=popularity&apiKey=38a86b7e0bf74d13b68a07dfd9a30086",
    false
  );
  return (
    <CryptoListContext.Provider
      value={{
        data,
        loading,
        error,
        cryptoNews,
        cryotoNewsLoading,
        cryptoNewsError,
        currency,
        setCurrency,
        symbol,
        setSymbol,
      }}
    >
      {children}
    </CryptoListContext.Provider>
  );
};
