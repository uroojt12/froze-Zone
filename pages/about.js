import React from "react";
import Subbanner from "../components/common/subbanner";
import Scop from "../components/common/scop";
import Made from "./about/made";

const About = () => {
  const about = {
    banner: {
      heading: "About Us",
      para: "About Us",
    },
  };

  return (
    <>
      <main>
        <Subbanner data={about.banner} />
        <Made />
        <Scop />
      </main>
    </>
  );
};

export default About;
