"use client";

import ProgressBar from "@/components/ProgressBar";
import { Icon } from "@iconify/react/dist/iconify.js";

type ArrecadacaoCardProps = {
  numberPeopleSupported: number;
  percent: number;
  daysRemaining: number;
  goal: number;
  author: string;
  arrecadado: number;
};

const ArrecadacaoCard = ({
  numberPeopleSupported,
  percent,
  daysRemaining,
  goal,
  author,
  arrecadado,
}: ArrecadacaoCardProps) => {
  return (
    <div className="flex flex-col w-full h-[20rem] py-8 px-6 gap-8 rounded-[0.625rem] border bg-transparent border-black">
      <h1 className="text-6xl font-bold">R$ {arrecadado}</h1>
      <p>
        Apoiados por{" "}
        <span className="font-bold">{numberPeopleSupported} pessoas</span>
      </p>
      <div className="w-full flex flex-col">
        <ProgressBar
          percent={percent}
          secondElement={
            <p>
              <span className="font-bold">{daysRemaining}</span> dias restantes
            </p>
          }
        />
        <div className="flex mt-8 justify-center">
          <h3 className="font-bold text-xl pr-8">Meta R$ {goal}</h3>
          <Icon icon="uil:money-bill" className="w-8 h-8" />
        </div>
        <div className="flex justify-center mt-[0.88rem]">
          <p className="text-sub text-base">Por [{author}]</p>
        </div>
      </div>
    </div>
  );
};

export default ArrecadacaoCard;
