import Link from "next/link";
import React from "react";
const About = () => {
  return (
    <>
      <section id="sec_about">
        <div className="contain">
          <div className="flex">
            <div className="col col1">
              <div className="image">
                <img src="images/about.png" alt="" />
              </div>
            </div>
            <div className="col col2">
              <div className="inner">
                <div className="sec_heading">
                  <h5>About Us</h5>
                  <h2>Taking Ice Cream To New Heights</h2>
                </div>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus qui excepturi obcaecati nulla consectetur amet
                    reiciendis, non provident soluta totam odit deserunt sint
                    natus libero cum voluptate ducimus suscipit voluptatem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio suscipit a nesciunt obcaecati expedita. Dolorem quod
                    deleniti aut omnis quos dolor quis aliquam iure. Est
                    doloribus dolorum nisi optio exercitationem. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Placeat, veniam
                    ipsa! Asperiores possimus dolore architecto dolorem, numquam
                    recusandae consectetur veniam officia quibusdam aperiam,
                    odit ducimus nobis esse amet voluptatum quis!
                  </p>
                </div>
                <div className="cta btn-box ">
                  <Link href="about.php" className="site_btn theme-btn-one">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
