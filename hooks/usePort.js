import { useContext } from "react";
import PortContext from "../context/PortProvider";

const usePort = () => {
  return useContext(PortContext);
};

export default usePort;
