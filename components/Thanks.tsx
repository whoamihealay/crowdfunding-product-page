import Image from "next/image";

type ThanksProps = {
  data: {
    title: string;
    description: string[];
    cta: string;
    images: {
      check: string;
    };
  };
  onClick: () => void;
};

const Thanks = ({ data, onClick }: ThanksProps) => {
  const title = data.title;
  const description = data.description;
  const cta = data.cta;
  const check = data.images.check;

  return (
    <article className="px-4 m-auto text-center fixed overflow-y-scroll overflow-x-hidden inset-0 bg-white rounded-lg shadow-2xl shadow-black w-full p-4 max-w-[90%] sm:max-w-lg sm:max-h-96">
      {check ? (
        <div className="flex justify-center p-4">
          <Image src={check} alt="check" width={64} height={64} />
        </div>
      ) : null}
      <h1 className="text-2xl font-bold text-black p-4">{title}</h1>
      <p className="text-base px-4 pb-4">{description}</p>
      <button
        onClick={onClick}
        className="bg-cyan-bg rounded-[2rem] m-4 py-4 px-8 text-white font-bold cursor-pointer hover:bg-cyan-active"
      >
        {cta}
      </button>
    </article>
  );
};

export default Thanks;
