"use client";

import Button from "@/components/Button";
type ButtonVariants = "primary" | "secondary";

type SolutioCardProps = {
  className: string;
  ammount: number;
  votes: number;
  label: string;
  description: string;
  buttonText: string;
  iconLeft: string;
  variant: ButtonVariants;
};

const SolutionCard = ({
  className,
  label,
  description,
  ammount,
  votes,
  buttonText,
  iconLeft,
  variant,
}: SolutioCardProps) => {
  const defaultCardClasses =
    "flex flex-col py-4 px-5 rounded-[0.625rem] border border-sub";
  const defaultTextAreaClasses = "leading-0  w-full pb-4";

  return (
    <div className={`${defaultCardClasses}  ${className}`}>
      <label className="font-bold pb-2">{label}</label>
      <p className={`${defaultTextAreaClasses}`}>{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex">
          <p className="font-bold pr-1">{`R$ ${ammount}`}</p>
          <p>Quantia necessária para esta solução</p>
        </div>
        <div className="flex items-center">
          <p className="font-bold pr-2">{votes}</p>
          <p className="pr-2">votos</p>
          <Button
            className="rounded-[0.625rem] font-extrabold"
            iconLeft={iconLeft}
            variant={variant}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
