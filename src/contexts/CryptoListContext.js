import { createContext, useEffect, useState } from "react";

//custom hooklar
import useLocalStorage from "../hooks/useLocalStorage";
import useFetch from "../hooks/useFetch";

//api endpointleri
import { CoinList, allCryptoNews } from "../config/api";



export const CryptoListContext = createContext();
export const CryptoListProvider = ({ children }) => { //crypto listesiyle birlikte global olarak state üzerinde tutulan para birimi ve sembol değerleri. 
  const [currency, setCurrency] = useLocalStorage("currency", "USD");
  const [symbol, setSymbol] = useLocalStorage("symbol", "$");

  useEffect(() => { //para birimi ve para simggesinin değişimi
    const currencySymbol = currency === "USD" ? "$" : "€";
    setSymbol(currencySymbol);
  }, [currency]);

  const [url, setUrl] = useState(CoinList(currency));

  useEffect(() => { //para birimi değiştirilirse endpoint değiştirilir.
    setUrl(CoinList(currency));
  }, [currency]);

  const { data, loading, error } = useFetch(url, true);
  const {
    data: cryptoNews,
    loading: cryotoNewsLoading,
    error: cryptoNewsError,
  } = useFetch(
    `https://newsapi.org/v2/everything?q=Blockchain&sortBy=popularity&apiKey=${process.env.REACT_APP_KEY}`,
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
