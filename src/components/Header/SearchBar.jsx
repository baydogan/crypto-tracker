import { useSearchContext } from "../../hooks/useSearchContext";

const Searchbar = () => {
  const { search, setSearch } = useSearchContext();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <input
        className="px-3 rounded-sm py-2 border w-4/5 "
        placeholder="Search for crypto currencies"
        type="text"
        value={search}
        onChange={handleChange}
      />
    </>
  );
};

export default Searchbar;
