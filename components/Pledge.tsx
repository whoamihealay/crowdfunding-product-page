import { useEffect, useState } from "react";

type PledgeProps = {
  data: {
    title: string;
    pledge: number;
    description: string[];
    amount: number;
  };
};

const Pledge = ({ data }: PledgeProps) => {
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
        <button className="bg-cyan-bg rounded-[2rem] p-4 max-w-[12rem] text-white font-bold cursor-pointer hover:bg-cyan-active">
          Select Reward
        </button>
      </div>
    </article>
  );
};

export default Pledge;
