import { useState, useEffect } from 'react';

const baseUrl = 'https://api.thecatapi.com/v1/';
const headers = { 'x-api-key': import.meta.env.VITE_CAT_API_KEY };

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(baseUrl + url, { headers });
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else if (response.status === 404) {
          setNotFound(true);
        } else {
          throw response;
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);

  return { data, error, loading, notFound };
}
