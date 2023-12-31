"use client";

import { twMerge } from "tailwind-merge";

type AddSolutionCardProps = {
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const AddSolutionCard = ({ className, ...props }: AddSolutionCardProps) => {
  const defaultCardClasses = "flex flex-col py-4 px-5 rounded-[0.625rem]";
  const defaultTextAreaClasses =
    "leading-0 h-7 w-full resize-none outline-none bg-transparent border-b border-black placeholder-black";
  const mergedTextAreaClasses = twMerge(defaultTextAreaClasses);

  return (
    <div
      className={`${defaultCardClasses}  ${className}`}
      style={{ backgroundColor: "rgba(120, 37, 255, 0.10)" }}
    >
      <input
        className="font-bold pb-2 bg-transparent placeholder-black outline-none"
        {...props}
      ></input>
      <textarea
        placeholder="Descreva a sua solução..."
        className={`${defaultTextAreaClasses}`}
      />
    </div>
  );
};

export default AddSolutionCard;
