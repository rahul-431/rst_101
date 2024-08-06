type SelectType = {
  options: {
    label: string;
    value: string;
  }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
export default function Select({ options, value, onChange }: SelectType) {
  return (
    <>
      <div className="flex justify-start items-center gap-2 text-lg">
        <label htmlFor="sort">Sort :</label>
        <select
          value={value}
          onChange={onChange}
          name="sort"
          id="sort"
          className=" px-4 py-1 bg-transparent border-2 border-yellow-500 rounded-sm outline-none"
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
