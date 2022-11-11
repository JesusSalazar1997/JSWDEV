import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Alerta from "./Alerta";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const [alerta, setAlerta] = useState({});
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);
    setTimeout(() => {
      setAlerta({});
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, email, mensaje].includes("")) {
      mostrarAlerta({
        msg: "All fields are required",
        error: true,
      });
      return;
    }
    mostrarAlerta({
      msg: "Message Sent",
      error: false,
    });
    setEmail("");
    setMensaje("");
    setNombre("");
  };
  const { msg } = alerta;

  return (
    <footer id="contact" className="pb-5 bg-gray-700">
      <div className="container px-14 md:px-0 mx-auto">
        <div className="sm:px-20 py-12 flex flex-col items-center">
          <h2 className="text-sky-300 uppercase font-extrabold text-4xl">
            CONTACT
          </h2>
        </div>
        <form className="lg:px-80" onSubmit={handleSubmit}>
          {msg && <Alerta alerta={alerta} />}
          <div className="mb-5">
            <label
              className="block text-white uppercase font-bold"
              htmlFor="name"
            >
              Name
            </label>
            <div className={styles.email_cuadro}>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className={`border-2 p-2 mt-2 w-full placeholderbg-gray-400 rounded-md`}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <div className={styles.email}>
                <Image
                  src="/img/user.svg"
                  width={30}
                  height={30}
                  alt="Image User"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              className="block text-white uppercase font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <div className={styles.email_cuadro}>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={styles.email}>
                <Image
                  src="/img/email.svg"
                  width={30}
                  height={30}
                  alt="Image Email"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              className="block text-white uppercase font-bold"
              htmlFor="mensaje"
            >
              Message
            </label>
            <textarea
              type="date"
              id="mensaje"
              className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
              placeholder="Your Message"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <input
              type="submit"
              className="hover:bg-sky-700 cursor-pointer text-sm rounded-md transition-all bg-sky-600 px-8 py-2 text-white uppercase font-bold"
              value="Send"
            />
          </div>
        </form>
        <div className="mt-4 flex items-center gap-3 justify-center">
          <Image src="/img/Bar.png" width={80} height={5} alt="Image Email" />
          <div className=" hover:cursor-pointer duration-300 transition-all ease-in-out hover:scale-125 ">
            <Link href="https://github.com/JesusSalazar1997">
              <Image
                src="/img/Github.png"
                width={60}
                height={60}
                alt="Image Email"
              />
            </Link>
          </div>
          <div className="hover:cursor-pointer duration-300 transition-all ease-in-out hover:scale-125 ">
            <Link href="https://www.linkedin.com/in/jos%C3%A9-de-jes%C3%BAs-salazar-mart%C3%ADnez-42254b233/">
              <Image
                src="/img/Linkedin.png"
                width={60}
                height={60}
                alt="Image Email"
              />
            </Link>
          </div>
          <Image src="/img/Bar.png" width={80} height={5} alt="Image Email" />
        </div>
        <div className="mt-8 text-center ">
          <p className="text-white text-sm uppercase">
            CREATED BY JSWDEV
            <span className="font-bold"> All rights reserved ©2022</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
