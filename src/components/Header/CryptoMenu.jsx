import { NavLink } from "react-router-dom";

const CryptoMenu = () => {
  return (
    <div className="flex gap-4 mt-10 mb-8">
      <NavLink to={`/`} className="text-slate-900 p-3 hover:bg-slate-200 rounded-md">
        All Coins
      </NavLink>
      <NavLink to={`/favorites`} className="text-slate-900 p-3 hover:bg-slate-200 rounded-md">
        Favorites
      </NavLink>
    </div>
  );
};

export default CryptoMenu;
