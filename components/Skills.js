import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  const [animacion, setAnimacion] = useState("rotate-180  opacity-0");
  const [animacionCuadro, setAnimacionCuadro] = useState(
    "-translate-x-[20rem] opacity-0 "
  );
  const [animacionCuadroUno, setAnimacionCuadroUno] = useState(
    "md:opacity-0 md:-translate-x-[20rem]"
  );
  const imagenRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = imagenRef.current;
      const { y } = div.getBoundingClientRect();
      const movimiento =
        y <= 330 ? "rotate-0  opacity-100" : "rotate-180  opacity-0";
      const cuadro =
        y <= 1000
          ? "-translate-x-0 opacity-100"
          : "-translate-x-[20rem] opacity-0";
      const cuadroUno =
        y <= 330
          ? "md:-translate-x-0 md:opacity-100"
          : "md:-translate-x-[20rem] md:opacity-0";
      setAnimacionCuadroUno(cuadroUno);
      setAnimacionCuadro(cuadro);
      setAnimacion(movimiento);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section id="skill" className={styles.skillfront}>
      <div className="container mx-auto ">
        <div className="sm:px-20 py-12 flex flex-col items-center">
          <h2 className="text-sky-300 uppercase font-extrabold text-4xl">
            SKILL SET
          </h2>
          <div className="py-7 flex justify-center gap-4 w-full">
            <Image
              src="/img/Backtips.png"
              width={50}
              height={35}
              alt="Imagen Skill"
            />
            <h3 className="text-sky-500 uppercase flex items-center font-bold text-xl">
              FRONT-END
            </h3>
          </div>
        </div>
        <div className="px-10 content-center grid justify-items-center md:grid-cols-2  ">
          <div
            className={` transition-all ease-in duration-700 ${animacionCuadroUno} ${animacionCuadro} ${styles.cuadro}`}
          >
            <Image
              src="/img/Cuadro_blanco.png"
              width={500}
              height={500}
              alt="Imagen Cuadro"
            />

            <div className={styles.texto}>
              <p className="text-white flex">
                Currently, I design and develop new projects in the Front-end
                with the latest technology.
              </p>
              <p className="text-white pt-5 flex font-semibold ">
                Responsive Web Design
              </p>
              <p className="text-white   font-semibold flex">
                Accesibility and Usability
              </p>
              <p className="text-white pt-5  font-bold flex">
                Graphic Design Software
              </p>
              <ul className="px-10 md:px-5 w-64 mt-3 text-white pl-3 font-semibold ml-4">
                <div className="flex">
                  <div className="pt-.5 mr-2">
                    <Image
                      src="/img/Design.svg"
                      width={20}
                      height={20}
                      alt="Imagen Ilustrator"
                    />
                  </div>
                  <li>Ilustrator</li>
                </div>
                <div className="flex">
                  <div className="pt-.5 mr-2">
                    <Image
                      src="/img/Picture.svg"
                      width={20}
                      height={20}
                      alt="Imagen Ilustrator"
                    />
                  </div>
                  <li>Photoshop</li>
                </div>
                <div className="flex">
                  <div className="pt-.5 mr-2">
                    <Image
                      src="/img/Video.svg"
                      width={20}
                      height={20}
                      alt="Imagen Ilustrator"
                    />
                  </div>
                  <li>Premiere</li>
                </div>
                <div className="flex">
                  <div className="sm:pt-.5 mr-2">
                    <Image
                      src="/img/Video.svg"
                      width={20}
                      height={20}
                      alt="Imagen Ilustrator"
                    />
                  </div>
                  <li>Final Cut Pro</li>
                </div>
              </ul>
            </div>
          </div>
          <div
            ref={imagenRef}
            className="grid gap-4 grid-cols-2 md:grid-cols-3 md:gap-10"
          >
            <div
              className={` grid content-center  transition-all ease-in-out  duration-700 ${animacion}`}
            >
              <Image
                src="/img/Html.png"
                width={170}
                height={170}
                alt="Imagen Html"
              />
            </div>
            <div
              className={` grid content-center  transition-all ease-in-out  duration-700 ${animacion}`}
            >
              <Image
                src="/img/Js.png"
                width={170}
                height={170}
                alt="Imagen Js"
              />
            </div>
            <div
              className={` grid content-center  transition-all ease-in-out  duration-700 ${animacion}`}
            >
              <Image
                src="/img/Css.png"
                width={170}
                height={170}
                alt="Imagen Css"
              />
            </div>
            <div
              className={` grid content-center  transition-all ease-in-out  duration-700 ${animacion}`}
            >
              <Image
                src="/img/Tailwind.png"
                width={170}
                height={170}
                alt="Imagen Tailwind"
              />
            </div>
            <div
              className={` grid content-center  transition-all ease-in-out  duration-700 ${animacion}`}
            >
              <Image
                src="/img/Bootstrap.png"
                width={170}
                height={170}
                alt="Imagen Bootstrap"
              />
            </div>
            <div
              className={` grid content-center  transition-all ease-in-out  duration-700 ${animacion}`}
            >
              <Image
                src="/img/React.png"
                width={170}
                height={170}
                alt="Imagen React"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
