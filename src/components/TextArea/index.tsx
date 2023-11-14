"use client";

import { twMerge } from "tailwind-merge";

type TextAreaProps = {
  label?: string;
  labelClassNames?: string; //A ? indica que a prop é opcional
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>; //Com isso, ele herda todas as propriedades padrão html que essa textarea possui

export default function TextArea({
  label,
  labelClassNames,
  className,
  ...props //Permite utilizar todos os tipos possíveis padrão dessa textarea, pq do React.TextareaHTMLAttributes<HTMLTextAreaElement>, que inserimos acima
}: TextAreaProps) {
  const defaultTextAreaClasses =
    "flex-grow px-3 rounded-lg focus:border-none py-2 text-sm outline-0";
  const defaultLabelClasses = "block mb-2 text-sm font-bold text-gray-600";
  const mergedLabelClasses = twMerge(defaultLabelClasses, labelClassNames); //Ele junta as classes do tailwind, que passamos primeiro, com as classes que passarmos depois. Serve para resolver conflitos, podemos mudar uma classe tailwind padrão no momento que quisermos ao usar o componente.

  return (
    <div className="mb-6">
      <label className={mergedLabelClasses}>{label}</label>
      <div className="flex items-center border border-sub rounded-lg">
        <textarea
          {...props}
          className={`${defaultTextAreaClasses} ${className}`}
        ></textarea>
      </div>
    </div>
  );
}
