import { useState, useCallback, useEffect } from "react";

export default function useFetch(url, fetchOptions) {
  const [payload, setPayload] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch(url, fetchOptions);
      const json = await response.json();

      if (!response.ok) {
        const error =
          { 404: "Things brake all the time..." }[response.status] ||
          "Wrong username or password (⊙ˍ⊙)";

        throw new Error(error);
      }
      setLoading(false);
      setPayload(json);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }, [url, fetchOptions]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { payload, error, loading };
}
