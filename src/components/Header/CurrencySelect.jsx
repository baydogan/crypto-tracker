

const CurrencySelect = () => {
  return (
    <div className="flex items-center gap-4">
      <select
        className="border px-2 py-1.5 rounded-md cursor-pointer hover:border-slate-800 transition-all duration-300"
        name=""
        id=""
      >
        <option value="USD">USD</option>
        <option value="TRY">TRY</option>
      </select>
      <div>DARK MODE</div>
    </div>
  );
};

export default CurrencySelect;
