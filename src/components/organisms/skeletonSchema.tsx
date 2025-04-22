import { Skeleton } from "../ui/skeleton";

type SkeletonSchemaProps = {
  grid: number;
};

export const SkeletonSchema = (props: SkeletonSchemaProps) => {
  const { grid } = props;
  return Array.from({ length: grid }).map((_, index) => (
    <div key={index} className="flex flex-col gap-4 mx-auto space-y-2">
      <Skeleton className="w-[13rem] h-[200px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[13rem]" />
        <Skeleton className="h-4 w-[13rem]" />
      </div>
    </div>
  ));
};
