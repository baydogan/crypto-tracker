import { CryptoListContext } from "../../contexts/CryptoListContext";
import { useContext } from "react";

export const useCryptoListContext = () => {
  const context = useContext(CryptoListContext);
  return context;
};
