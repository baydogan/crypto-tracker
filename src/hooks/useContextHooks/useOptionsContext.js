import { OptionsContext } from "../../contexts/OptionsContext";
import { useContext } from "react";

export const useOptionsContext = () => {
  const context = useContext(OptionsContext);
  return context;
};
