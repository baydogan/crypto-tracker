const Header = () => {
  return (
    <div className=" border shadow-sm">
      <nav className="flex justify-between bg-white container mx-auto max-w-7xl  p-5 ">
        <div className="font-bold text-lg">LOGO</div>
        <div>
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
        </div>
      </nav>
    </div>
  );
};

export default Header;
