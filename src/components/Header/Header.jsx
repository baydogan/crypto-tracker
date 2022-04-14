import SearchBar from "./SearchBar";
import CryptoMenu from "./CryptoMenu";
import CurrencySelect from "./CurrencySelect";
const Header = () => {
  return (
    <>
      <div className=" border shadow-sm">
        <nav className="flex justify-between bg-white container mx-auto max-w-7xl  p-5 ">
          <div className="font-bold text-lg">LOGO</div>
          <>
            <CurrencySelect />
          </>
        </nav>
      </div>
      <div className="flex flex-col container mx-auto items-center justify-center mt-20">
        <SearchBar />
        <CryptoMenu />
      </div>
    </>
  );
};

export default Header;
