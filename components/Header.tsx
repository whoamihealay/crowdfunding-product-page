import Image from "next/image";
import { MainInterface } from "../@types/DataInterface";
import Nav from "./Nav";

type HeaderProps = {
  data: MainInterface;
  onClick(): void;
};

const Header = ({ data, onClick }: HeaderProps) => {
  const logo: string = data.images.logo;

  return (
    <header
      id="header"
      className="bg-gradient-to-b from-black to-transparent w-full flex justify-between items-center p-4 mb-40"
    >
      {logo ? <Image src={logo} alt="logo" width={128} height={20} /> : null}
      <Nav data={data} onClick={onClick} />
    </header>
  );
};

export default Header;
