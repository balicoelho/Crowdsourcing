"use client";
import problemImage from "@/assets/Rectangle6.svg";
import Address from "@/components/Address";
import avatar from "@/assets/Avatar-img.svg";
import AddComentCard from "./components/AddComent";
import ComentCard from "./components/ComentCard";
import AddSolutionCard from "./components/AddSolution";
import SolutionCard from "./components/SolutionCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import WriteComentCard from "./components/WriteComent";
import React from "react";

export default function Problem() {
  const [showWriteComent, setshowWriteComent] = React.useState(false);
  const [showAddComent, setshowAddComent] = React.useState(true);

  const switchComponent = () => {
    setshowWriteComent(!showWriteComent);
    setshowAddComent(!showAddComent);
  };

  const comments = [
    {
      name: "Barbara Coelho",
      when: "Há 1 hora",
      comment: "Lorem ipsum dolor sit amet.",
    },
    {
      name: "Barbara Torres",
      when: "Há 2 horas",
      comment:
        "Et inventore rerum ab reprehenderit autem ut omnis pariatur! 33 rerum quia sit neque dolorum et neque repellat qui sapiente eius!",
    },
  ];

  const solutions = [
    {
      title: "Titulo solução 1",
      description:
        "Et fugiat laudantium et voluptates eius ea omnis fuga. Ea reiciendis expedita sit ducimus dolore hic ducimus galisum aut assumenda veritatis nam tempore iure est provident soluta ad repellat porro. Aut harum sequi cum consequatur dignissimos aut Quis quis aut minus recusandae aut ratione natus quo ipsam nesciunt. A quos minima et ipsam consequatur ut sint omnis ut eius praesentium non veritatis libero et possimus unde non quia animi.",
      ammount: 1000,
      votes: 5,
      voted: true,
    },
    {
      title: "Titulo solução 2",
      description:
        "Lorem ipsum dolor sit amet. Eum galisum atque sit ullam dicta non placeat neque et autem incidunt. Hic nemo assumenda id internos corrupti non doloremque illo rem quaerat voluptatem vel commodi possimus sed quisquam voluptas. Aut odit voluptatem et repudiandae voluptas nam dolor laborum qui earum omnis.",
      ammount: 2000,
      votes: 9,
      voted: false,
    },
  ];

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
    <main className="flex flex-col items-center mb-20">
      <div className="mt-[56px]">
        <h1 className="text-[56px] text-black font-extrabold">
          Titulo do problema
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
          <div className="pb-4">
            <Address city="Recife" neighborhood="Pina" uf="PE" />
          </div>
          <p className="pb-4">
            Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error
            dignissimos. Est fuga alias non neque sapiente et sint nemo qui
            labore fugit et quia quos id dicta adipisci. Sed perspiciatis amet
            qui doloribus voluptatem in eaque unde quo minima iste in odit
            quaerat id aliquam vitae eos reprehenderit aliquid. Et ipsum odio
            eos possimus saepe ex eligendi rerum ea dignissimos dicta sed atque
            suscipit aut architecto sequi.
          </p>
          <AddSolutionCard className="mb-6" />
          {solutions.map((solution, index) => {
            return (
              <SolutionCard
                className="mb-2"
                ammount={solution.ammount}
                votes={solution.votes}
                key={index}
                label={solution.title}
                description={solution.description}
                buttonText={solution.voted ? `Votado` : "Votar nesta solução"}
                iconLeft={
                  solution.voted
                    ? "fluent:star-24-filled"
                    : "fluent:star-24-filled"
                }
                variant={solution.voted ? "primary" : "secondary"}
              />
            );
          })}
        </div>
        <div className="flex flex-col w-[28.75rem]">
          <h1 className="text-center font-bold text-[2rem]">Discussão</h1>
          <p className="text-sm pt-4 pb-8">
            *Você pode votar até às 23h59 do dia 00/00/0000
          </p>
          {showAddComent && (
            <AddComentCard
              avatar={avatar}
              placeholder="Adicione um comentário..."
              onClick={switchComponent}
            />
          )}
          {showWriteComent && <WriteComentCard avatar={avatar} />}

          {comments.map((commentdb, index) => {
            return (
              <ComentCard
                className="mt-5"
                name={commentdb.name}
                when={commentdb.when}
                comment={commentdb.comment}
                avatar={avatar}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
