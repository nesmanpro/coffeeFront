import { useEffect, useState } from "react";

export default function useGetProductBySlug(slug: string | string[]) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`;
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
          throw err;
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
