import { useEffect, useState } from "react";

function useFetch(url) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

  }, [url]);

  return {
    data,
    loading
  };
}

export default useFetch;