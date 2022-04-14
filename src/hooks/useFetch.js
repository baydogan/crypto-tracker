import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          console.log("updated");
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
        }
      } finally {
        isMounted && setLoading(false);
      }
    };
    const interval = setInterval(() => {
      //her 5 saniyede bir güncel değerlerii çekmek için fetchData fonksiyonu çağırılıyor
      fetchData(url);
    }, 5000);

    return () => {
      // cleanup fonksiyonu
      isMounted = false;
      source.cancel();
      clearInterval(interval);
    };
  }, []);
  return { data, loading, error };
};

export default useFetch;
