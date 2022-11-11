import Image from "next/image";
import usePort from "../hooks/usePort";
import styles from "../styles/Portfolio.module.css";
import Link from "next/link";

const Portfolio = () => {
  const { imagenNavRef } = usePort();
  return (
    <section ref={imagenNavRef} id="portfolio" className="bg-white pb-20">
      <div className="container mx-auto">
        <div className=" py-12 flex flex-col items-center w-full">
          <h1 className="text-sky-900 uppercase font-extrabold text-4xl">
            PORTFOLIO
          </h1>
          <p className=" font-semibold text-md md:text-lg lg:text-xl text-sky-800 pt-5">
            Some of my most outstanding personal projects
          </p>
        </div>
        <div className={`${styles.columnas} px-6  gap-10`}>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer grid content-center">
            <Link href="https://github.com/JesusSalazar1997/quioscoapp_deployment">
              <Image
                src="/img/Coffe.png"
                width={700}
                height={400}
                alt="Imagen MySql"
              />
            </Link>
            <p className="text-center mt-2 font-semibold text-sky-800">
              Just available on github
            </p>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer grid content-center">
            <Link href="https://github.com/JesusSalazar1997/GuitarLA_Strapi">
              <Image
                src="/img/Guitarla.png"
                width={330}
                height={350}
                alt="Imagen Guitarla"
              />
            </Link>
            <p className="text-center mt-2 font-semibold text-sky-800">
              Just available on github
            </p>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer grid content-center">
            <Link href="https://dynamic-pie-1438b9.netlify.app/">
              <Image
                src="/img/UpTasl.png"
                width={700}
                height={400}
                alt="Image Uptask"
              />
            </Link>
            <p className="text-center mt-2 font-semibold text-sky-800">
              Can check the code on github
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
