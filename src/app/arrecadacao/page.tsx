"use client";
import problemImage from "@/assets/Rectangle6.svg";
import React from "react";
import ArrecadacaoCard from "./components/ArrecadacaoCard";
import Button from "@/components/Button";
import MostVotedSolutionCard from "./components/MostVotedSolution";

export default function Problem() {
  return (
    <main className="flex flex-col items-center mb-20">
      <div className="mt-[56px]">
        <h1 className="text-[56px] text-black font-extrabold">
          Titulo da ação
        </h1>
      </div>
      <div className="flex pt-6 gap-8">
        <div className="flex flex-col w-[53.75rem] ">
          <div
            className={`mb-4 w-[53.75rem] h-[30.25rem] bg-cover bg-no-repeat bg-center`}
            style={{
              backgroundImage: `url(${problemImage.src})`,
              backgroundColor: "lightgray",
            }}
          ></div>

          <p className="pb-4">
            Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error
            dignissimos. Est fuga alias non neque sapiente et sint nemo qui
            labore fugit et quia quos id dicta adipisci. Sed perspiciatis amet
            qui doloribus voluptatem in eaque unde quo minima iste in odit
            quaerat id aliquam vitae eos reprehenderit aliquid. Et ipsum odio
            eos possimus saepe ex eligendi rerum ea dignissimos dicta sed atque
            suscipit aut architecto sequi.
          </p>
        </div>
        <div className="flex flex-col w-[28.75rem]">
          <ArrecadacaoCard
            arrecadado={1000}
            author="Barbara Coelho"
            daysRemaining={7}
            goal={10000}
            numberPeopleSupported={3}
            percent={0.1}
          />
          <div className="my-6 w-full">
            <Button
              iconLeft="fluent:handshake-24-filled"
              className="rounded-[0.625rem] p-6 w-full"
            >
              Apoiar ação com Pix
            </Button>
          </div>

          <p className="text-sm pb-8">
            *Você pode apoiar esta ação até às 23h59 do dia 00/00/0000{" "}
          </p>
          <h1 className="text-center font-bold text-[2rem] mb-4">
            Solução mais votada
          </h1>
          <MostVotedSolutionCard
            ammount={10000}
            description="Et fugiat laudantium et voluptates eius ea omnis fuga. Ea reiciendis expedita sit ducimus dolore hic ducimus galisum aut assumenda veritatis nam tempore iure est provident soluta ad repellat porro. Aut harum sequi cum consequatur dignissimos aut Quis quis aut minus recusandae aut ratione natus quo ipsam nesciunt. A quos minima et ipsam consequatur ut sint omnis ut eius praesentium non veritatis libero et possimus unde non quia animi."
            votes={9}
            label="Título solução"
          />
        </div>
      </div>
    </main>
  );
}
