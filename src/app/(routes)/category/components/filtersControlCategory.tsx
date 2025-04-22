import FilterOrigin from "./filterOrigin";

type FiltersControlCategoryProps = {
  setFilterOrigin: (origin: string) => void;
};

const FiltersControlCategory = (props: FiltersControlCategoryProps) => {
  const { setFilterOrigin } = props;
  return (
    <div className="sm:min-w-[200px] sm:mt-5 p-6">
      <FilterOrigin setFilterOrigin={setFilterOrigin} />
    </div>
  );
};

export default FiltersControlCategory;
