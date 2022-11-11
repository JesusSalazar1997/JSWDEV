import { useState, useEffect, createContext, useRef } from "react";

const PortContext = createContext();

const PortProvider = ({ children }) => {
  const [navFixed, setnavFixed] = useState("static");

  const imagenNavRef = useRef();

  useEffect(() => {
    const handleNav = () => {
      const div = imagenNavRef.current;
      const { y } = div.getBoundingClientRect();
      const movimiento = y <= -8 ? "fixed" : "static";
      setnavFixed(movimiento);
    };
    window.addEventListener("scroll", handleNav);
    return () => {
      window.removeEventListener("scroll", handleNav);
    };
  }, []);

  return (
    <PortContext.Provider
      value={{
        imagenNavRef,
        navFixed,
      }}
    >
      {children}
    </PortContext.Provider>
  );
};

export { PortProvider };
export default PortContext;
