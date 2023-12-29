import Link from "next/link";
import React from "react";
const Subbanner = ({ data }) => {
  return (
    <>
      <section id="sub_banner">
        <div className="shape-1">
          <img src="images/h-shape.png" alt="" />
        </div>
        <div className="shape">
          <img src="images/sub-3.png" alt="" />
        </div>
        <div className="contain">
          <div className="inner">
            <h1>{data.heading}</h1>
            <p>
              <Link href="">Home</Link> &gt; {data.para}
            </p>
          </div>
        </div>
        <div className="b-shape">
          <img src="images/sub-2.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Subbanner;
