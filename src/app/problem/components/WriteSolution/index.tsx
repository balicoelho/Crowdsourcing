"use client";

import { twMerge } from "tailwind-merge";
import CommentButtons from "../CommentButtons";

type WriteSolutionCardProps = {
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const WriteSolutionCard = ({ className, ...props }: WriteSolutionCardProps) => {
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
      <div className="flex mt-[0.88rem]">
        <p>
          Quanto será preciso para realizar esta solução?
          <span className="font-bold"> R$ </span>
        </p>
        <input className=" outline-none border border-b-2 border-b-black bg-transparent pl-1 font-bold" />
      </div>
      <div className="flex justify-end mt-[0.88rem]">
        <CommentButtons>Sugerir solução</CommentButtons>
      </div>
    </div>
  );
};

export default WriteSolutionCard;
