import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, auto = false) => {
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
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
        }
      } finally {
        isMounted && setLoading(false);
      }
    };

    if (auto) { //auto true ise otomatik olarak fetchData 5 saniyede bir çağrılır.
      const interval = setInterval(() => {
        fetchData(url);
      }, 5000);
      return () => {
        clearInterval(interval);
      };
    } else {
      fetchData(url);
    }

    return () => {
      isMounted = false;
      source.cancel();
    };
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
