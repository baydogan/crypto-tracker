import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, auto = true) => {
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

    if (auto) {
      const interval = setInterval(() => {
        //eğer auto parametresi true ise otomatik olarak her beş saniyede bir data çeker
        fetchData(url);
      }, 5000);
    } else {
      fetchData(url);
    }

    return () => {
      // cleanup fonksiyonu
      isMounted = false;
      source.cancel();
    };
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
