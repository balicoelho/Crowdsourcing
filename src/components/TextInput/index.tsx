"use client"; //Tem que inserir para ele entender que deve renderizar no cliente

import { Icon } from "@iconify/react/dist/iconify.js";
import { twMerge } from "tailwind-merge";

type TextInputProps = {
  iconLeft?: string;
  iconRight?: string;
  placeholder?: string;
  label?: string;
  labelClassNames?: string; //O ? torna a pripriedade opcional
  subdescription?: string | React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({
  iconLeft,
  iconRight,
  placeholder,
  label,
  labelClassNames,
  subdescription,
  ...props
}: TextInputProps) {
  const defaultInputClasses =
    "flex-grow px-3 rounded-[8px] focus:border-none py-2 text-sm outline-0 w-full";
  const defaultLabelClasses = "block mb-2 text-sm font-bold text-gray-600";
  const mergedLabelClasses = twMerge(defaultLabelClasses, labelClassNames);

  return (
    <div className="mb-6">
      <label className={mergedLabelClasses}>{label}</label>
      <label>{subdescription}</label>
      <div className="flex items-center border border-sub rounded-[8px] bg-white ">
        {iconLeft && (
          <div className="pl-2">
            <Icon icon={iconLeft} className="text-sub" />
          </div>
        )}
        <input
          placeholder={placeholder}
          {...props}
          className={`${defaultInputClasses} ${iconLeft ? "pl-2" : ""}`}
        />
        {iconRight && <Icon icon={iconRight} />}
      </div>
    </div>
  );
}
