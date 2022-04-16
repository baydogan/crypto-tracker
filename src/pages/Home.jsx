import CryptolistLayout from "../layouts/CryptoListLayout";
import Cryptonewslayout from "../layouts/CryptoNewsLayout";
import { useCryptoListContext } from "../hooks/useContextHooks/useCryptoListContext";

const Home = () => {
  const { data, loading, error, cryptoNews, cryotoNewsLoading, cryptoNewsError } = useCryptoListContext();

  return (
    <div className="max-w-7xl mx-auto p-3">
      {error && <div>{error}</div>}
      <CryptolistLayout />
      <Cryptonewslayout />
    </div>
  );
};

export default Home;
