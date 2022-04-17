import { useCryptoListContext } from "../../../hooks/useContextHooks/useCryptoListContext";

const CurrencySelect = () => {
  const { currency, setCurrency } = useCryptoListContext();

  return (
    <div className="flex items-center gap-4">
      <select
        className="border px-2 py-1.5 rounded-md cursor-pointer hover:border-slate-800 transition-all duration-300 dark-mode shadow-md"
        onChange={(e) => {
          const tempCurerncy = e.target.value;
          setCurrency(tempCurerncy);
        }}
        defaultValue={currency}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default CurrencySelect;
