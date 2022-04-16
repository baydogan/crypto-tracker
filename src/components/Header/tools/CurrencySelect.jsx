import { useCryptoListContext } from "../../../hooks/useContextHooks/useCryptoListContext";

const CurrencySelect = () => {
  const { currency, setCurrency } = useCryptoListContext();
  console.log("currency :>> ", currency);
  return (
    <div className="flex items-center gap-4">
      <select
        className="border px-2 py-1.5 rounded-md cursor-pointer hover:border-slate-800 transition-all duration-300"
        onChange={(e) => {
          const tempCurerncy = e.target.value;
          setCurrency(tempCurerncy);
        }}
        defaultValue={currency}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <div>DARK MODE</div>
    </div>
  );
};

export default CurrencySelect;
