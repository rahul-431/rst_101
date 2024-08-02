import { ChangeEventHandler } from "react";

type inputProp = {
  type?: string;
  placeHolder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  id?: string;
  label?: string;
};
const Input = ({
  id,
  value,
  type = "text",
  placeHolder,
  onChange,
  label,
}: inputProp) => {
  return (
    <div className="flex justify-between lg:w-1/3">
      {label && <label htmlFor={id}>{label} : </label>}
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeHolder}
        className="px-2 outline-none outline-yellow-500 rounded-md w-3/4"
      />
    </div>
  );
};

export default Input;
