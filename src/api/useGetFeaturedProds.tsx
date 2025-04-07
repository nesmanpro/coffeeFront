import { useEffect, useState } from "react";


export default function useGetFeaturedProds() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filter[isFeatured][$eq]=true&populate=*`;
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(()=>{
        const fetchData = async ()=>{
            try {

            const res = await fetch(url);
            const {data} = await res.json();
            setResult(data);
            setLoading(false);
                
            } catch (error) {
                setError(error)
                console.error(error)
            }
        }

        fetchData()
    }, [url]);

    console.log(result)
    return {result, loading, error}
}
