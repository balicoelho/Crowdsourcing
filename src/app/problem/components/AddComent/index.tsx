"use client";

import Avatar from "@/components/Avatar";
import { twMerge } from "tailwind-merge";

type AddComentProps = {
  avatar?: string;
  placeholder: string;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const AddComentCard = ({
  avatar,
  placeholder,
  className,
  ...props
}: AddComentProps) => {
  const defaultTextAreaClasses =
    "leading-0 h-7 w-full resize-none outline-none bg-transparent border-b border-black placeholder-black";
  const mergedLabelClasses = twMerge(defaultTextAreaClasses);

  return (
    <div
      className="flex w-[26.875rem] py-4 px-5 rounded-[0.625rem] items-center"
      style={{ backgroundColor: "rgba(120, 37, 255, 0.10)" }}
    >
      <div className="border-lightgray pr-4">
        <Avatar avatar={avatar.src} />
      </div>
      <div className="w-full">
        <textarea
          placeholder={placeholder}
          className={`${mergedLabelClasses} ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default AddComentCard;
