import { useState, useEffect } from 'react';

const baseUrl = 'https://api.thecatapi.com/v1/';
const headers = { 'x-api-key': 'c2db22b7-52b8-4f16-82db-c0cbb4d39136' };

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
        console.log('paso por acá');
        setLoading(false);
      }
    }
    init();
  }, [url]);

  return { data, error, loading, notFound };
}
