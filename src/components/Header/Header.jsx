//componentler
import SearchBar from "./tools/SearchBar";
import CryptoMenu from "./CryptoMenu";
import CurrencySelect from "./tools/CurrencySelect";
import Logo from "../common/Logo";
import Darkmodeselect from "../common/DarkModeSelect";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import { useCryptoListContext } from "../../hooks/useContextHooks/useCryptoListContext";

const Header = () => {
  const location = useLocation();
  const { data } = useCryptoListContext();

  return (
    <>
      <div className=" border shadow-sm dark:border-slate-900 dark:shadow-md transition-all duration-300">
        <nav className="flex justify-between bg-white dark:bg-slate-800  mx-auto max-w-7xl  p-5 transition-all duration-300 ">
          <Link to={"/"}>
            <div className="font-bold text-lg flex justify-center items-center dark:text-white">
              <Logo width="100px" height="100px" />
              <h1>Crypto Tracker</h1>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <CurrencySelect />
            <Darkmodeselect />
          </div>
        </nav>
      </div>
      {data.length > 0 && (
        <>
          {location.pathname === "/" || location.pathname === "/favorites" ? (
            <div className="flex justify-center flex-col items-center mt-10">
              <SearchBar />
              <CryptoMenu />
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default Header;
