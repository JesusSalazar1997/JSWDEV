import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/About.module.css";

const Skills = () => {
  const [animacionTexto, setAnimacionTexto] = useState(
    "translate-x-[20rem] opacity-0"
  );
  const [animacionTextoUno, setAnimacionTextoUno] = useState(
    "md:translate-x-[20rem] md:opacity-0"
  );
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
      const texto =
        y <= 460
          ? "translate-x-0 opacity-100"
          : "translate-x-[20rem] opacity-0";
      const textoUno =
        y <= 400
          ? "md:translate-x-0 md:opacity-100"
          : "md:translate-x-[20rem] md:opacity-0";
      const cuadro =
        y <= 460
          ? "-translate-x-0 opacity-100"
          : "-translate-x-[20rem] opacity-0";
      const cuadroUno =
        y <= 400
          ? "md:-translate-x-0 md:opacity-100"
          : "md:-translate-x-[20rem] md:opacity-0";
      setAnimacionCuadroUno(cuadroUno);
      setAnimacionCuadro(cuadro);
      setAnimacionTexto(texto);
      setAnimacionTextoUno(textoUno);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section id="about" className={`pb-10 ${styles.back}`}>
      <div className="container px-14 md:px-0 mx-auto overflow-hidden">
        <div className="sm:px-20 py-12 flex flex-col items-center">
          <h2 className="text-sky-300 uppercase font-extrabold text-4xl">
            ABOUT
          </h2>
        </div>
        <div
          ref={imagenRef}
          className="content-center grid justify-items-center md:grid-cols-2 "
        >
          <div
            className={` grid content-center  transition-all ease-in-out duration-700 ${animacionCuadro} ${animacionCuadroUno}`}
          >
            <Image
              src="/img/Imagen_about.png"
              width={500}
              height={400}
              alt="Imagen About"
            />
          </div>
          <div
            className={`grid content-center transition-all ease-in-out  duration-700 ${animacionTexto}  ${animacionTextoUno}`}
          >
            <h3 className="text-sky-500 uppercase flex items-center font-bold text-3xl">
              I AM WEB DEVELOPER
            </h3>
            <p className="text-white text-xl pt-5 flex">
              With two years of personal experience, building websites using the
              best practices.
            </p>
            <p className="text-white text-xl pt-2 flex">
              Agile SCRUM methodology.
            </p>
            <p className="text-white pt-3 text-xl flex  ">
              I enjoy make sites for business, interactive and ease to use,
              always thinking on security of users.
            </p>
            <p className="text-white pt-3 text-xl flex">
              Also i have a passion for design. Given that producing a modern
              website requires the combination of design, image and video.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
