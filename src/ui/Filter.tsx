import { useSearchParams } from "react-router-dom";

type filterProp = {
  filterField: string;
  options: {
    label: string;
    value: string;
  }[];
};
const Filter = ({ filterField, options }: filterProp) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const currentFilter = searchParam.get(filterField) || options[0].value;
  const handleClick = (value: string) => {
    searchParam.set(filterField, value);
    setSearchParam(searchParam);
  };
  return (
    <div className="flex border-yellow-200 border rounded-md gap-1 overflow-auto">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleClick(option.value)}
          className={`${
            currentFilter === option.value && "bg-yellow-500 "
          } border-none rounded-md px-2 hover:bg-yellow-500 `}
          disabled={currentFilter === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
