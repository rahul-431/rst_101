import { useSearchParams } from "react-router-dom";
import Select from "./Select";

type SortByType = {
  options: {
    label: string;
    value: string;
  }[];
};
export default function SortBy({ options }: SortByType) {
  const [searchParam, setSearchParam] = useSearchParams();
  const sortValue = searchParam.get("sortBy") || "";
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParam.set("sortBy", e.target.value);
    setSearchParam(searchParam);
  };
  return <Select options={options} onChange={handleChange} value={sortValue} />;
}
