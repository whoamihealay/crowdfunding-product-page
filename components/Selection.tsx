import Image from "next/image";
import { ReactNode } from "react";
import { PledgeProps } from "./Pledge";

type SelectionProps = {
  data: {
    header: {
      title: string;
      hook: string;
    };
  };
  children: ReactNode;
  onClick: () => void;
};

const Selection = ({ data, children, onClick }: SelectionProps) => {
  const title = data.header.title;
  const hook = data.header.hook;

  return (
    <section
      id="selection"
      className="px-4 mx-auto fixed overflow-y-scroll overflow-x-hidden top-0 left-0 right-0 bottom-0 bg-white rounded-lg shadow-2xl shadow-black w-full p-4 mt-32 mb-4 max-w-[90%] sm:max-w-3xl"
    >
      <header className="flex justify-between items-center p-4">
        <h2 className="text-lg text-black font-bold">{title}</h2>
        <div className="cursor-pointer">
          <Image
            src="/images/icon-close-modal.svg"
            alt="close"
            width={30}
            height={30}
            onClick={onClick}
          />
        </div>
      </header>
      <p className="pb-4 px-4">{hook}</p>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
};

export default Selection;
