type StatsProps = {
  data: {
    currency: string;
    objective: string;
    pledged: string;
    backers: string;
    days: {
      left: string;
    };
  };
};

const Stats = ({ data }: StatsProps) => {
  const currency = data.currency;
  const objective = data.objective;
  const pledged = data.pledged;
  const backers = data.backers;
  const days = data.days.left;

  return (
    <article className="bg-white rounded-lg text-center p-4">
      <div className="sm:flex sm:p-4">
        <p className="p-4 text-sm">
          <span>
            {currency}
            {pledged}
          </span>
          <br />
          of {currency}
          {objective} backed
        </p>
        <hr className="w-1/4 m-auto sm:border-l-[1px] sm:border-solid sm:border-gray-100 sm:w-px sm:h-14 sm:opacity-50" />
        <p className="p-4 text-sm">
          <span>{backers}</span>
          <br />
          total backers
        </p>
        <hr className="w-1/4 m-auto sm:border-l-[1px] sm:border-solid sm:border-gray-100 sm:w-px sm:h-14 sm:opacity-50" />
        <p className="p-4 text-sm">
          <span>{days}</span>
          <br />
          days left
        </p>
      </div>
      <div className="my-4 w-full h-3 bg-gray-100 rounded-2xl overflow-hidden">
        <div className="bg-cyan-bg w-10/12 h-full"></div>
      </div>
    </article>
  );
};

export default Stats;
