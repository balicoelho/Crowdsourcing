"use client";

import { twMerge } from "tailwind-merge";

const AddSolutionCard = ({ className }) => {
  const defaultCardClasses = "flex flex-col py-4 px-5 rounded-[0.625rem]";
  const defaultTextAreaClasses =
    "leading-0 h-7 w-full resize-none outline-none bg-transparent border-b border-black placeholder-black";
  const mergedTextAreaClasses = twMerge(defaultTextAreaClasses);

  return (
    <div
      className={`${defaultCardClasses}  ${className}`}
      style={{ backgroundColor: "rgba(120, 37, 255, 0.10)" }}
    >
      <label className="font-bold pb-2">Adicione o título...</label>
      <textarea
        placeholder="Descreva a sua solução..."
        className={`${defaultTextAreaClasses}`}
      />
    </div>
  );
};

export default AddSolutionCard;
