import { NavLink } from "react-router-dom";

const CryptoMenu = () => {
  return (
    <div className="flex gap-4 mt-10 mb-8">
      <NavLink to={`/`} className={(navData) => (navData.isActive ? "menu-button-active" : "menu-button")}>
        All Coins
      </NavLink>
      <NavLink to={`/favorites`} className={(navData) => (navData.isActive ? "menu-button-active" : "menu-button")}>
        Favorites
      </NavLink>
    </div>
  );
};

export default CryptoMenu;
