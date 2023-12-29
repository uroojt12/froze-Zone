import React from "react";
import Form from "./contact/form";
import Subbanner from "../components/common/subbanner";
import Blocks from "./contact/blocks";

const Contact = () => {
  const contact = {
    banner: {
      heading: "Contact Us",
      para: "Contact Us",
    },
  };
  return (
    <>
      <main>
        <Subbanner data={contact.banner} />
        <Blocks />
        <Form />
      </main>
    </>
  );
};

export default Contact;
