import ProblemItem from "./components/ProblemCard";

export default function Home() {
  const actions: IProblem[] = [
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
      pix: "email",
      deadline: "2023-11-23",
    },
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
      pix: "email",
      deadline: "2023-11-23",
    },
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
      pix: "email",
      deadline: "2023-11-23",
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <div className="mt-[56px]">
        <h1 className="text-[56px] text-black font-extrabold">
          Conheça os problemas em votação
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 max-w-[1360px] w-full justify-center py-4">
        {actions.map((action, index) => {
          return <ProblemItem key={index} problem={action} />;
        })}
      </div>
    </main>
  );
}
