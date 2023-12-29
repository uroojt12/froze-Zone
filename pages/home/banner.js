import Link from "next/link";
import React from "react";
const Banner = () => {
  return (
    <>
      <section id="banner">
        <div className="shape">
          <img src="images/h-shape.png" alt="" />
        </div>
        <div className="contain">
          <div className="flex">
            <div className="col col1">
              <div className="inner">
                <div className="sec_heading">
                  <h5>Best Icecream Store</h5>
                  <h1>Taste From The Good Old Days.</h1>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores sit, dolorem molestias nulla hic reiciendis aliquid
                  doloribus consequatur ipsa nisi quaerat blanditiis cum ipsum
                  perferendis deserunt voluptates ea voluptatem dolore!
                </p>
                <div className="cta btn-box ">
                  <Link
                    href="about.php"
                    className="site_btn lightBtn theme-btn-one"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col2">
              <div className="bg">
                <img src="images/banner-6.png" alt="" />
              </div>
              <div className="image">
                <img src="images/banner-1.png" alt="" />
              </div>
              <div className="bg-2">
                <img src="images/banner-7.png" alt="" />
              </div>
              <div className="rellax" data-rellax-speed="1"></div>
            </div>
          </div>
        </div>
        <div className="b-shape">
          <img src="images/b-shape.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Banner;
