import { PledgesInterface } from "../@types/DataInterface";

type PledgeProps = {
  data: PledgesInterface;
  onClick: () => void;
};

const SelectionPledge = ({ data, onClick }: PledgeProps) => {
  const name = data.name;
  const title = data.title;
  const pledge = data.pledge;
  const description = data.description;
  const amount = data.amount;

  return (
    <article className="p-4 border-2 border-solid border-gray-100 rounded-lg">
      <div className="flex gap-4 items-center">
        <input
          type="radio"
          name="pledges"
          id={name}
          className="w-6 h-6 checked:accent-cyan-400"
        />
        <div>
          <label className="font-bold text-black" htmlFor={name}>
            {title}
          </label>
          {name !== "noreward" ? (
            <p className="text-cyan-bg font-medium">Pledge ${pledge} or more</p>
          ) : null}
        </div>
      </div>
      <p className="py-4">{description}</p>
      {name !== "noreward" ? (
        <p className="py-4">
          <span className="text-3xl text-black font-bold">{amount}</span> left
        </p>
      ) : null}
      {name !== "noreward" ? (
        <div>
          <hr className="w-full opacity-50" />
          <form className="pt-4 text-center">
            <label className="font-medium">Enter your pledge</label>
            <div className="flex justify-between items-center mt-4">
              <div className="border-2 border-solid border-gray-100 rounded-full py-4 px-3 max-w-fit">
                <span>$</span>
                <input
                  className="max-w-[5rem] appearance-none outline-none text-center"
                  type="number"
                  placeholder={`${pledge}`}
                  min={pledge}
                  required
                />
              </div>
              <button
                onClick={onClick}
                className="bg-cyan-bg rounded-full px-8 py-4 text-white font-bold cursor-pointer hover:bg-cyan-active"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </article>
  );
};

export default SelectionPledge;
