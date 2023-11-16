"use client";

import Button from "@/components/Button";
import { twMerge } from "tailwind-merge";

type CommentButtonsProps = {
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const CommentButtons = ({
  className,
  children,
  ...props
}: CommentButtonsProps) => {
  const defaultTextAreaClasses =
    "leading-0 h-auto w-full resize-none outline-none bg-transparent border-b border-black placeholder-black";
  const mergedLabelClasses = twMerge(defaultTextAreaClasses);

  return (
    <div className="flex gap-4">
      <button className="font-extrabold  text-xs">Cancelar</button>
      <Button
        variant="primary"
        className="px-4 py-2 rounded-[0.625rem] text-xs"
      >
        {children}
      </Button>
    </div>
  );
};

export default CommentButtons;
