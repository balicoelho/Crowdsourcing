"use client";

import LoginSidebarImage from "@/app/login/components/LoginSideBarImage";
import Button from "@/components/Button";
import SelectInput from "@/components/Select";
import TextArea from "@/components/TextArea";
import TextInput from "@/components/TextInput";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function CreateProblem() {
  const labelStyle = "text-base text-black text-2xl";
  const defaultLabelClasses = "block font-bold text-2xl";
  const mergedLabelClasses = twMerge(labelStyle, defaultLabelClasses);

  type CreateProblemState = {
    title?: string;
    description?: string;
    uf?: string;
    city?: string;
    neighborhood?: string;
    image?: string;
    pix?: string;
    votingPeriod?: string;
  };

  const [state, setState] = React.useState<CreateProblemState>({
    title: "",
    description: "",
    uf: "",
    city: "",
    neighborhood: "",
    image: "",
    pix: "",
    votingPeriod: "",
  });

  const handleChangeState = (updatedValues: CreateProblemState) => {
    setState((previousState) => ({
      ...previousState,
      ...updatedValues,
    }));
  };

  return (
    <div className="flex h-screen-navbar">
      <LoginSidebarImage />
      <div className="flex flex-1 justify-center pl-10 pr-10 overflow-auto">
        <div className="mt-20 max-w-[588px] w-[100%]">
          <TextInput
            label="Titulo da ação"
            placeholder="Titulo da ação"
            labelClassNames={labelStyle}
            onChange={(ev) => handleChangeState({ title: ev.target.value })}
            value={state.title}
          ></TextInput>
          <TextArea
            rows={4}
            label="Descrição do problema"
            labelClassNames={labelStyle}
            className="resize-none"
            onChange={(ev) =>
              handleChangeState({ description: ev.target.value })
            }
            value={state.description}
          />
          <div className="flex flex-col">
            <label className={mergedLabelClasses}>Localização</label>
            <div className="flex gap-2 max-w-[100%]">
              <TextInput
                placeholder="Estado - UF"
                onChange={(ev) => handleChangeState({ uf: ev.target.value })}
                value={state.uf}
              />
              <TextInput
                placeholder="Cidade"
                onChange={(ev) => handleChangeState({ city: ev.target.value })}
                value={state.city}
              />
              <TextInput
                placeholder="Bairro"
                onChange={(ev) =>
                  handleChangeState({ neighborhood: ev.target.value })
                }
                value={state.neighborhood}
              />
            </div>
          </div>
          <TextInput
            label="Carregue a sua imagem"
            labelClassNames={`${labelStyle} mb-0`}
            subdescription={
              <span>
                Coloque no campo abaixo o <strong>link</strong> para a sua
                imagem, ela será utilizada como capa da sua ação, a resolução
                mínima para não perder muita qualidade é de 800x400px.
              </span>
            }
            placeholder="Insira o link aqui"
            iconLeft="uil:image-upload"
            onChange={(ev) => handleChangeState({ image: ev.target.value })}
            value={state.image}
          />
          <TextInput
            label="Chave Pix"
            labelClassNames={`${labelStyle} mb-0`}
            subdescription="Insira a chave pix de quem ficará responsável por receber as doações e dar vida a solução encontrada, seja pessoa física ou jurídica."
            onChange={(ev) => handleChangeState({ pix: ev.target.value })}
            value={state.pix}
          />
          <SelectInput
            label="Período de votação"
            labelClassNames={`${labelStyle} mb-0`}
            subdescription="Escolha por quanto tempo as pessoas vão poder votar em uma solução para o seu problema. O perído de arrecadação é de 30 dias ou até bater a meta."
            options={[
              { value: "3", text: "3 dias" },
              { value: "7", text: "7 dias" },
              { value: "15", text: "15 dias" },
              { value: "20", text: "20 dias" },
            ]}
            onChange={(ev) =>
              handleChangeState({ votingPeriod: ev.target.value })
            }
            value={state.votingPeriod}
          />
          <div className="flex flex-col gap-10 pb-10">
            <Button className="rounded-[10px] pt-[24px] pb-[24px] ">
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
