import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Skillsback = () => {
  const [animacion, setAnimacion] = useState("scale-0");
  const imagenRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = imagenRef.current;
      const { y } = div.getBoundingClientRect();
      const movimiento = y <= 500 ? "scale-100" : "scale-0";
      setAnimacion(movimiento);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section id="skillback" className="bg-white pb-10">
      <div className="container mx-auto md:px-0">
        <div className="sm:px-20 py-12 flex flex-col items-center ">
          <h2 className="text-sky-900 uppercase font-extrabold text-4xl">
            SKILL SET
          </h2>
          <div className="py-7 flex justify-center gap-4 w-full">
            <Image
              src="/img/Server.png"
              width={50}
              height={35}
              alt="Imagen Skill"
            />
            <h3 className="text-sky-500 uppercase flex items-center font-bold text-xl">
              BACK-END AND DATABASES
            </h3>
          </div>
        </div>
        <div className="grid  mx-14 md:mx-5 gap-2 grid-cols-2 md:grid-cols-6 md:gap-10">
          <div className="grid content-center">
            <Image
              src="/img/Mysql.png"
              width={170}
              height={170}
              alt="Imagen MySql"
            />
          </div>
          <div className="grid content-center">
            <Image
              src="/img/Php.png"
              width={170}
              height={170}
              alt="Imagen Php"
            />
          </div>
          <div className="grid content-center">
            <Image
              src="/img/Express.png"
              width={170}
              height={170}
              alt="Imagen Express"
            />
          </div>
          <div className="grid content-center">
            <Image
              src="/img/Node.png"
              width={170}
              height={170}
              alt="Imagen Node"
            />
          </div>
          <div className="grid content-center">
            <Image
              src="/img/Next.png"
              width={170}
              height={170}
              alt="Imagen Next"
            />
          </div>
          <div className="grid content-center">
            <Image
              src="/img/Mongo.png"
              width={170}
              height={170}
              alt="Imagen Mongo"
            />
          </div>
        </div>
        <div
          ref={imagenRef}
          className="mt-16 mx-14 gap-2 grid justify-items-center md:grid-cols-2"
        >
          <div
            className={` grid content-center  transition-all ease-in-out  duration-500 ${animacion}`}
          >
            <Image
              src="/img/Preprocessors.png"
              width={450}
              height={450}
              alt="Imagen Preprocessors"
            />
          </div>
          <div
            className={`text-sky-900 text-xl font-medium grid content-center transition-all ease-in-out  duration-1000 ${animacion}`}
          >
            <p>
              Whithin of developmet, the backend has the responsability to
              create the best software to make that the website works correctly.
            </p>
            <p className="mt-4">
              This process is not visible for de users, but is important to
              connect databases to be accesible to searches, getting the
              information that we need for interactive with the site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillsback;
