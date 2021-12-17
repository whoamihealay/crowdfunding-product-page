import Image from "next/image";
import { useEffect, useState } from "react";
import { MainInterface } from "../@types/DataInterface";

type NavProps = {
  data: MainInterface;
  onClick(): void;
};

const Nav = ({ data, onClick }: NavProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hide, setHide] = useState("hidden");
  const hamburger = data.images.open;
  const closeMenu = data.images.close.menu;

  const handleToggle = () => {
    setOpenMenu(!openMenu);
  };

  const ToggleButton = () => {
    if (hamburger && closeMenu != null) {
      if (openMenu) {
        return <Image src={closeMenu} alt="open" height={15} width={16} />;
      } else {
        return (
          <Image
            className="z-50"
            src={hamburger}
            alt="close"
            height={15}
            width={16}
          />
        );
      }
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (openMenu === true) {
      setHide("flex");
    } else {
      setHide("hidden");
    }
  }, [openMenu]);

  return (
    <nav>
      <button className="sm:hidden" onClick={handleToggle}>
        {/* <span>Navigation button</span> */}
        <ToggleButton />
      </button>
      <div
        className={`${hide} ms:absolute ms:z-40 ms:m-auto ms:top-16 ms:left-0 ms:right-0 ms:bg-white ms:rounded-lg ms:flex-col sm:flex sm:justify-evenly sm:gap-4`}
      >
        <a
          className="ms:p-4 ms:text-black ms:font-bold sm:text-white"
          href="#about"
        >
          About
        </a>
        <hr className="ms:opacity-10 sm:hidden" />
        <a
          className="ms:p-4 ms:text-black ms:font-bold sm:text-white"
          href="#discover"
        >
          Discover
        </a>
        <hr className="ms:opacity-10 sm:hidden" />
        <a
          className="ms:p-4 ms:text-black ms:font-bold sm:text-white"
          href="#"
          onClick={onClick}
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Nav;
