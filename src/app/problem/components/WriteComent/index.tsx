"use client";

import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { twMerge } from "tailwind-merge";
import CommentButtons from "../CommentButtons";

type WriteComentProps = {
  avatar?: any;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const WriteComentCard = ({ avatar, className, ...props }: WriteComentProps) => {
  const defaultTextAreaClasses =
    "leading-0 h-auto w-full resize-none outline-none bg-transparent border-b border-black placeholder-black";
  const mergedLabelClasses = twMerge(defaultTextAreaClasses);

  return (
    <div
      className="flex w-[26.875rem] h-auto py-4 px-5 rounded-[0.625rem] items-center"
      style={{ backgroundColor: "rgba(120, 37, 255, 0.10)" }}
    >
      <div className="border-lightgray pr-4">
        <Avatar avatar={avatar.src} />
      </div>
      <div className="w-full">
        <textarea className={`${mergedLabelClasses} ${className}`} {...props} />
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-4">
            <a href="">
              <Icon icon="uil:smile" />
            </a>
            <a href="">
              <Icon icon="uil:image-plus" />
            </a>
          </div>
          <CommentButtons>Comentar</CommentButtons>
        </div>
      </div>
    </div>
  );
};

export default WriteComentCard;
