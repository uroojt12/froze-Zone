import Subbanner from "@/components/components/common/subbanner";
import React from "react";
import Tab from "./work/tab";

const Work = () => {
  const work = {
    banner: {
      heading: "Work",
      para: "Work",
    },
  };
  return (
    <>
      <main>
        <Subbanner data={work.banner} />
        <Tab />
      </main>
    </>
  );
};

export default Work;
