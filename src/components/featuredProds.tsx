'use client'
import { Skeleton } from "@/components/ui/skeleton"
import useGetFeaturedProds from "@/api/useGetFeaturedProds"

export const FeaturedProds = () => {
    const {result, loading} = useGetFeaturedProds();
debugger
    console.log(result)
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
        {
            loading
            ? <Skeleton className="w-[100px] h-[20px] rounded-full" />
            : 'This is all'
        }
    </div>
  )
}
