import { ReactNode } from "react";

type AboutProps = {
  data: {
    title: string;
    description: string[];
  };
  children: ReactNode;
};

const About = ({ data, children }: AboutProps) => {
  const title = data.title;

  const description = data.description;

  return (
    <article id="about" className="bg-white rounded-lg text-left p-4">
      <h2 className="text-lg font-bold text-black py-4">{title}</h2>
      {description.map((paragraph) => (
        <p key={paragraph} className="text-base py-4">
          {paragraph}
        </p>
      ))}
      <div id="discover" className="flex flex-col gap-6">
        {children}
      </div>
    </article>
  );
};

export default About;
