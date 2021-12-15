import Image from "next/image";
import { useEffect, useState } from "react";

type NavProps = {
  data: {
    images: {
      open: string;
      close: {
        menu: string;
      };
    };
  };
};

const Nav = ({ data }: NavProps) => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState("hidden");
  const hamburger = data.images.open;
  const closeMenu = data.images.close.menu;

  const handleToggle = () => {
    setOpen(!open);
  };

  const ToggleButton = () => {
    if (hamburger && closeMenu != null) {
      if (open) {
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
    if (open === true) {
      setHide("flex");
    } else {
      setHide("hidden");
    }
  }, [open]);

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
        <a className="ms:p-4 ms:text-black ms:font-bold sm:text-white" href="#">
          Discover
        </a>
        <hr className="ms:opacity-10 sm:hidden" />
        <a className="ms:p-4 ms:text-black ms:font-bold sm:text-white" href="#">
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Nav;
