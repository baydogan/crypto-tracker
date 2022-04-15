import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CoinInfo from "../components/CoinDetail/CoinInfo";
const Coindetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}`, false);
  const { name, image, market_data, description } = data;

  console.log("data :>> ", data);
  return (
    <div className="container mx-auto p-3">
      <CoinInfo name={name} image={image} market_data={market_data} description={description} />
    </div>
  );
};

export default Coindetail;
