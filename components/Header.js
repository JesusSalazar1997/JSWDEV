import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Header.module.css";
import usePort from "../hooks/usePort";

const Header = () => {
  const { navFixed } = usePort();
  const [open, setOpen] = useState(false);
  return (
    <header className={`${navFixed} ${styles.header}`}>
      <div className="container mx-auto">
        <div className="px-10 py-3 sm:px-10 sm:py-24 flex justify-between flex-row items-center ">
          <div className="pt-3 w-32 sm:pt-0 sm:w-max">
            <Link href="/">
              <Image
                className="cursor-pointer "
                src="/img/Logo.png"
                width={400}
                height={150}
                alt="Imagen Logo"
              />
            </Link>
          </div>
          <div>
            <div className="flex flex-col md:flex-row items-center md:hidden ">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center px-3 py-2 border rounded-md border-teal-400 hover:bg-sky-500 ease-in duration-500"
              >
                <div className={open ? "hidden" : "flex"}>
                  <Image
                    src="/img/bars-solid.svg"
                    width={20}
                    height={20}
                    alt="Imagen Menus"
                  ></Image>
                </div>
                <div className={open ? "flex" : "hidden"}>
                  <Image
                    src="/img/xmark-solid.svg"
                    width={20}
                    height={20}
                    alt="Imagen Menus"
                  ></Image>
                </div>
              </button>
            </div>

            <nav
              className={` md:flex w-full items-center sm:mb-11  flex-col md:flex-row mt-5 md:mt-0 text-base gap-1 uppercase text-white font-bold  ${
                open ? `flex ${styles.animacion}` : "hidden"
              }`}
            >
              <Link href="#portfolio">Portfolio</Link>
              <Link href="#skill">Skills Front-End</Link>
              <Link href="#skillback">Skills Back-End</Link>
              <Link href="#about">About</Link>
              <Link href="#contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
