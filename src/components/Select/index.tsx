"use client"; //Tem que inserir para ele entender que deve renderizar no cliente

import { twMerge } from "tailwind-merge";

type SelectOption = {
  value: string;
  text: string;
};

type SelectInputProps = {
  label?: string;
  labelClassNames?: string; //O ? torna a propriedade opcional
  subdescription?: string | React.ReactNode;
  options: SelectOption[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export default function SelectInput({
  label,
  labelClassNames,
  subdescription,
  options,
  ...props
}: SelectInputProps) {
  const defaultSelectClasses =
    "flex-grow px-3 rounded-lg focus:border-none py-2 text-sm outline-0 w-full";
  const defaultLabelClasses = "block mb-2 text-sm font-bold text-gray-600";
  const mergedLabelClasses = twMerge(defaultLabelClasses, labelClassNames);

  return (
    <div className="mb-6">
      <label className={mergedLabelClasses}>{label}</label>
      <label>{subdescription}</label>
      <div className="flex items-center border border-sub rounded-lg bg-white">
        <select
          {...props}
          id="votingTime"
          className={`${defaultSelectClasses} bg-white border text-gray-900`}
        >
          {options.map((option, index) => (
            <option defaultValue="3" key={index} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
