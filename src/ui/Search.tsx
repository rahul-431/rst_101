import { useSearchParams } from "react-router-dom";
import Input from "./Input";
import { useEffect, useState } from "react";

const Search = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [search, setSearch] = useState(searchParam.get("search") || "");
  const handleSearch = (e: any) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    searchParam.set("search", newSearch);
    setSearchParam(searchParam);
  };
  useEffect(() => {
    const searchQuery = searchParam.get("search") || "";
    setSearch(searchQuery);
  }, [searchParam]);
  return (
    <Input
      label="Location"
      value={search}
      onChange={handleSearch}
      placeHolder="eg. kathmandu"
      id="location"
    />
  );
};

export default Search;
