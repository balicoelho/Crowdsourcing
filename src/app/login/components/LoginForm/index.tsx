"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import TextInput from "@/components/TextInput";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LoginPageActionTypes } from "../../page";

type LoginFormProps = {
  handleSetAction: (action: LoginPageActionTypes) => void;
};

const LoginForm = ({ handleSetAction }: LoginFormProps) => {
  return (
    <Card className="border-[#121212]">
      <TextInput
        placeholder="E-mail"
        label="E-mail"
        labelClassNames="text-black"
        type="email"
        className="rounded-md"
        iconLeft="uil:envelope-alt"
      />
      <TextInput
        placeholder="Senha"
        label="Senha"
        labelClassNames="text-black"
        type="password"
        className="rounded-md"
        iconLeft="uil:key-skeleton-alt"
      />

      <div className="mb-[1.5rem] text-left">
        <a href="#" className="text-sub text-sm underline">
          Esqueci a senha
        </a>
      </div>

      <div className="flex flex-col gap-[10px]">
        <Button className="rounded-md">Entrar</Button>
        <Button
          variant="secondary"
          iconLeft="uil:facebook-f"
          className="rounded-md"
        >
          Entrar com Facebook
        </Button>
        <Button variant="secondary" iconLeft="fe:google" className="rounded-md">
          Entrar com Google
        </Button>
      </div>
      <div className="mt-[1.5rem] text-left">
        <span
          className="flex cursor-pointer gap-2 items-center underline"
          onClick={() => handleSetAction("register")}
        >
          <Icon icon="uil:plus-square" />
          Quero criar uma conta
        </span>
      </div>
    </Card>
  );
};

export default LoginForm;
