import "../styles/globals.css";
import { PortProvider } from "../context/PortProvider";

function MyApp({ Component, pageProps }) {
  return (
    <PortProvider>
      <Component {...pageProps} />;
    </PortProvider>
  );
}

export default MyApp;
