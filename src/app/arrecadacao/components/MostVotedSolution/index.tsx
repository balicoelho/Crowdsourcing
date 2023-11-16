"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

type MostVotedSolutionCardProps = {
  ammount: number;
  votes: number;
  label: string;
  description: string;
};

const MostVotedSolutionCard = ({
  label,
  description,
  ammount,
  votes,
}: MostVotedSolutionCardProps) => {
  const defaultCardClasses =
    "flex flex-col py-4 px-5 rounded-[0.625rem] border border-sub";
  const defaultTextAreaClasses = "leading-0 w-full pb-4";

  return (
    <div className={`${defaultCardClasses}`}>
      <label className="font-bold pb-2">{label}</label>
      <p className={`${defaultTextAreaClasses}`}>{description}</p>
      <div className="flex flex-col justify-between items-center">
        <div className="flex">
          <p className="font-bold pr-1">{`R$ ${ammount}`}</p>
          <p>Quantia necessária para esta solução</p>
        </div>
        <div className="flex items-center mt-[0.88rem] ">
          <Icon
            icon="fluent:star-24-filled"
            className="bg-on-code text-transparent  bg-clip-text"
          />
          <p className="font-bold pl-1 bg-on-code text-transparent bg-clip-text">
            {votes} votos recebidos
          </p>
        </div>
      </div>
    </div>
  );
};

export default MostVotedSolutionCard;
