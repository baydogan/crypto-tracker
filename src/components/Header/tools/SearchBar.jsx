import { useOptionsContext } from "../../../hooks/useContextHooks/useOptionsContext";

const Searchbar = () => {
  const { search, setSearch } = useOptionsContext();
  return (
    <>
      <input
        className="px-3 rounded-sm py-2 border w-4/5 "
        placeholder="Search for crypto currencies"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default Searchbar;
