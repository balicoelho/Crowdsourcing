"use client";
import { StringUtils } from "@/utils/stringUtils";
import { twMerge } from "tailwind-merge";

type RemainingDaysProps = {
  deadline: string | Date;
  label: string;
} & React.HTMLAttributes<HTMLDivElement>;

const RemainingDays = ({ deadline, label, ...props }: RemainingDaysProps) => {
  const defaultClasses = "flex flex-col items-center text-sm";
  const mergedClasses = twMerge(defaultClasses, props.className);

  return (
    <div {...props} className={mergedClasses}>
      <h3 className="font-bold">
        {StringUtils.getRemainingDays(`${deadline}`)}
      </h3>
      <h4>{label}</h4>
    </div>
  );
};

export default RemainingDays;
