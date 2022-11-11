import Head from "next/head";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Skillsback from "./SkillsBack";
import About from "./About";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>JSWDev</title>
        <meta name="description" content="Jesús Salazar Web Developer" />
      </Head>
      <Header />
      <Portfolio />
      <Skills />

      <Skillsback />
      <About />
      <Footer />
    </div>
  );
};

export default Layout;
