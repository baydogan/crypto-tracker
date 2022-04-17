import { useCryptoListContext } from "../hooks/useContextHooks/useCryptoListContext";

//komponentler
import Cryptonews from "../components/CryptoNews";

const Cryptonewslayout = () => {
  const { cryptoNews, cryotoNewsLoading, cryptoNewsError } = useCryptoListContext();
  const { articles } = cryptoNews;

  return (
    <>
      <h1 className=" text-2xl font-medium ml-10 mt-10 dark:text-white ">Crypto News</h1>

      <div className="grid container mx-auto gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5 pb-10">
        {articles &&
          articles.map((article, index) => {
            return <Cryptonews key={index} article={article} />;
          })}
      </div>
    </>
  );
};

export default Cryptonewslayout;
