import SearchBar from "./tools/SearchBar";
import CryptoMenu from "./CryptoMenu";
import CurrencySelect from "./tools/CurrencySelect";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const { id } = useParams();

  return (
    <>
      <div className=" border shadow-sm">
        <nav className="flex justify-between bg-white  mx-auto max-w-7xl  p-5 ">
          <div className="font-bold text-lg">LOGO</div>
          <>
            <CurrencySelect />
          </>
        </nav>
      </div>
      {location.pathname === "/" || location.pathname === "/favorites" ? (
        <div className="flex justify-center flex-col items-center mt-10">
          <SearchBar />
          <CryptoMenu />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
