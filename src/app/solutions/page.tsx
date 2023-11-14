"use client";
import ActionCard from "../components/ActionCard";

export default function Solutions() {
  const actions: IAction[] = [
    {
      img: "https://jpeg.org/images/jpeg-home.jpg",
      title: "Action",
      author: "Barbara",
      description: "Uma pequena descrição",
      address: {
        uf: "pe",
        city: "recife",
        neighborhood: "Pina",
      },
      ammountCollected: 150,
      totalGoal: 1000,
      deadline: "2023-11-23",
    },
    {
      img: "https://jpeg.org/images/jpeg-home.jpg",
      title: "Action 2",
      author: "barbara de oliveira",
      description: "Uma pequena descrição",
      address: {
        uf: "pe",
        city: "recife",
        neighborhood: "Pina",
      },
      ammountCollected: 300,
      totalGoal: 1000,
      deadline: "2023-11-23",
    },
    {
      img: "https://jpeg.org/images/jpeg-home.jpg",
      title: "Action 3",
      author: "Barbara da Silva",
      description: "Uma pequena descrição",
      address: {
        uf: "sp",
        city: "recife",
        neighborhood: "Pina",
      },
      ammountCollected: 500,
      totalGoal: 1000,
      deadline: "2023-11-23",
    },
    {
      img: "https://jpeg.org/images/jpeg-home.jpg",
      title: "Action 3",
      author: "Barbara da Silva",
      description: "Uma pequena descrição",
      address: {
        uf: "sp",
        city: "recife",
        neighborhood: "Pina",
      },
      ammountCollected: 500,
      totalGoal: 1000,
      deadline: "2023-11-23",
    },
    {
      img: "https://jpeg.org/images/jpeg-home.jpg",
      title: "Action 3",
      author: "Barbara da Silva",
      description: "Uma pequena descrição",
      address: {
        uf: "sp",
        city: "recife",
        neighborhood: "Pina",
      },
      ammountCollected: 500,
      totalGoal: 1000,
      deadline: "2023-11-23",
    },
    {
      img: "https://jpeg.org/images/jpeg-home.jpg",
      title: "Action 3",
      author: "Barbara da Silva",
      description: "Uma pequena descrição",
      address: {
        uf: "sp",
        city: "recife",
        neighborhood: "Pina",
      },
      ammountCollected: 500,
      totalGoal: 1000,
      deadline: "2023-11-23",
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <div className="mt-[56px]">
        <h1 className="text-[56px] text-black font-extrabold">
          Escolha uma ação para apoiar
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 max-w-[1360px] w-full justify-center py-4">
        {actions.map((action, index) => {
          return <ActionCard key={index} action={action} />;
        })}
      </div>
    </main>
  );
}
