import { useEffect, useState } from "react";

export type PledgeProps = {
  data: {
    name: string;
    title: string;
    pledge: number;
    description: string[];
    amount: number;
  };
  onClick: () => void;
};

const Pledge = ({ data, onClick }: PledgeProps) => {
  const name = data.name;
  const title = data.title;
  const pledge = data.pledge;
  const description = data.description;
  const amount = data.amount;

  const [disable, setDisable] = useState("");

  useEffect(() => {
    const disablePledge = () => {
      if (amount < 1) {
        setDisable("opacity-50 grayscale");
      }
    };
    disablePledge();
  }, [amount]);
  if (name !== "noreward") {
    return (
      <article
        className={`${disable} border-2 border-solid border-gray-100 rounded-lg p-4 text-base flex flex-col gap-6 sm:p-12`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <h3 className="font-bold text-black">{title}</h3>
          <p className="text-cyan-bg">Pledge ${pledge} or more</p>
        </div>
        <p>{description}</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <p className="inline-flex items-center gap-2">
            <span className="text-3xl text-black font-bold">{amount}</span> left
          </p>
          <a
            href="#header"
            onClick={onClick}
            className="bg-cyan-bg rounded-[2rem] p-4 max-w-[12rem] text-white text-center font-bold cursor-pointer hover:bg-cyan-active"
          >
            Select Reward
          </a>
        </div>
      </article>
    );
  } else {
    return null;
  }
};

export default Pledge;
