import { useEffect, useState } from "react";

export default function useGetCategory() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}
/api/categories?populate=*`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const { data } = await res.json();
        setResult(data);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
          setLoading(false);
          throw new Error(err.message);
        } else {
          setError("An unknown error occurred");
          setLoading(false);
          throw new Error("An unknown error occurred");
        }
      }
    })();
  }, [url]);

  return { result, error, loading };
}
