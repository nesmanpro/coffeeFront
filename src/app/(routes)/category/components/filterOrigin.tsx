"use client";

import useGetProductField from "@/api/useGetProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FilterOriginProps = {
  setFilterOrigin: (origin: string) => void;
};

const FilterOrigin = (props: FilterOriginProps) => {
  const { result, loading }: FilterTypes = useGetProductField();
  const { setFilterOrigin } = props;

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Origen</p>
      {loading && result === null ? (
        <p>Loading...</p>
      ) : (
        <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
          {result.schema.attributes.origin.enum.map((origin) => (
            <div key={origin} className="flex items-center space-x-2">
              <RadioGroupItem value={origin} id={origin} />
              <Label htmlFor={origin}>{origin}</Label>
            </div>
          ))}
        </RadioGroup>
      )}
    </div>
  );
};

export default FilterOrigin;
