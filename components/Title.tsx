import Image from "next/image";
import { MainInterface } from "../@types/DataInterface";
import Bookmark from "./Bookmark";

interface TitleInterface {
  data: MainInterface;
}

const Title = ({ data }: TitleInterface) => {
  const title = data.title;
  const description = data.description;
  const master = data.images.master;
  const bookmark = data.images.bookmark;

  return (
    <article className="relative bg-white rounded-lg text-center px-6 py-4 sm:py-12">
      {master ? (
        <div className="absolute -top-6 left-[calc(50%-2rem)]">
          <Image src={master} alt="Mastercraft logo" width={56} height={56} />
        </div>
      ) : null}
      <h1 className="text-black font-bold text-xl sm:text-2xl px-2 py-4 mt-4">
        {title}
      </h1>
      <p className="text-base p-2">{description}</p>
      <div className="flex justify-between items-center py-4">
        <button className="bg-cyan-bg rounded-[2rem] py-4 px-8 text-white font-bold cursor-pointer hover:bg-cyan-active">
          Back this project
        </button>
        <button className="cursor-pointer">
          {bookmark ? (
            <div className="relative flex items-center gap-2 sm:bg-gray-100 rounded-[4rem]">
              <div className="hover:opacity-50 flex items-center">
                {/* <Image src={bookmark} alt="Bookmark" width={56} height={56} /> */}
                <Bookmark className="text-cyan-active fill-white" />
              </div>
              <span className="hidden sm:block pr-4 font-bold text-body-gray">
                Bookmark
              </span>
            </div>
          ) : null}
        </button>
      </div>
    </article>
  );
};

export default Title;
