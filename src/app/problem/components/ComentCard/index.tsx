"use client";

import Avatar from "@/components/Avatar";
import { twMerge } from "tailwind-merge";

type ComentProps = {
  avatar: any;
  className: string;
  name: string;
  when: string;
  comment: string;
};

const ComentCard = ({
  avatar,
  className,
  name,
  when,
  comment,
}: ComentProps) => {
  const defaultComentCardClasses =
    "flex w-[26.875rem] py-4 px-5 rounded-[0.625rem] border border-sub";
  const mergedLabelClasses = twMerge(defaultComentCardClasses);

  return (
    <div className={`${mergedLabelClasses} ${className}`}>
      <div className="border-lightgray pr-4">
        <Avatar avatar={avatar.src} />
      </div>
      <div className="flex-col">
        <div className="flex gap-4 items-center">
          <h2 className="font-bold text-base">{name}</h2>
          <p className="text-xs">{when}</p>
        </div>
        <p className="text-sm">{comment}</p>
      </div>
    </div>
  );
};

export default ComentCard;
