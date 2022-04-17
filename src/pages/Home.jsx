//componentler

import CryptolistLayout from "../layouts/CryptoListLayout";
import Cryptonewslayout from "../layouts/CryptoNewsLayout";
import Spinner from "../components/common/spinner/Spinner";
import { useCryptoListContext } from "../hooks/useContextHooks/useCryptoListContext";
import Error from "../components/common/Error";


const Home = () => {
  const { data, loading, error, cryptoNews, cryotoNewsLoading, cryptoNewsError } = useCryptoListContext();

  return (
    <div className="max-w-7xl mx-auto p-3">
      {data.length > 0 && (
        <>
          <CryptolistLayout />
          <Cryptonewslayout />
        </>
      )}
      {data.length === 0 && <Spinner />}
      {error && <Error error={error} />}
    </div>
  );
};

export default Home;
