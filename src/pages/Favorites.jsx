import { useFavoritesContext } from "../hooks/useContextHooks/useFavoritesContext";

const Favorites = () => {

    const { favorites, setFavorites } = useFavoritesContext();
    console.log('object :>> ', favorites);
    return (
        <div>
            <h1>Favorites</h1>
        </div>
    );
}

export default Favorites;
