import { useOptionsContext } from "../../../hooks/useContextHooks/useOptionsContext";
import { useRef, useEffect } from "react";

const Searchbar = () => {
  const { search, setSearch } = useOptionsContext();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        className="px-3  py-2 border-b w-4/5 md:w-2/5  border-slate-300 outline-none focus:border-cyan-800 focus:shadow-outline focus:outline-none dark-mode dark:placeholder:text-gray-20 dark:border-slate-900 transition-all duration-300"
        placeholder="Search for crypto currencies"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default Searchbar;
