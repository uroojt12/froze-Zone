import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
const Testimonials = () => {
  const testiSlider = {
    autoplay: true,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      '<img src="/images/arrow-left.svg" />',
      '<img src="/images/arrow-right.svg" />',
    ],
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      580: {
        items: 1,
      },
      991: {
        items: 1,
      },
      1200: {
        items: 1,
      },
      1600: {
        items: 1,
      },
    },
  };
  return (
    <>
      <section id="testimonials">
        <div class="contain">
          <div class="shape">
            <img src="images/ice4.png" alt="" />
          </div>
          <div class="sec_heading">
            <h5>Testimonials</h5>
            <h2>What Our Clients Say?</h2>
          </div>
          <OwlCarousel className="owl-carousel owl-theme" {...testiSlider}>
            <div class="item">
              <div class="inner">
                <div class="quote">
                  <img src="images/icon-bg-5.png" alt="" />
                  <div class="icon-1">
                    <img src="images/icon-1.png" alt="" />
                  </div>
                </div>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    atque eius reprehenderit, voluptatibus quam corporis rerum
                    asperiores optio distinctio numquam repellendus minima ea
                    sed quas a earum blanditiis architecto veritatis!
                  </p>
                </div>
                <div class="detail">
                  <div class="photo">
                    <img src="images/testimonial-1.jpg" alt="" />
                  </div>
                  <div class="name">
                    <h4>Kalley Janner</h4>
                    <p>worker</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="inner">
                <div class="quote">
                  <img src="images/icon-bg-5.png" alt="" />
                  <div class="icon-1">
                    <img src="images/icon-1.png" alt="" />
                  </div>
                </div>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    atque eius reprehenderit, voluptatibus quam corporis rerum
                    asperiores optio distinctio numquam repellendus minima ea
                    sed quas a earum blanditiis architecto veritatis!
                  </p>
                </div>
                <div class="detail">
                  <div class="photo">
                    <img src="images/testimonial-1.jpg" alt="" />
                  </div>
                  <div class="name">
                    <h4>Kalley Janner</h4>
                    <p>worker</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="inner">
                <div class="quote">
                  <img src="images/icon-bg-5.png" alt="" />
                  <div class="icon-1">
                    <img src="images/icon-1.png" alt="" />
                  </div>
                </div>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    atque eius reprehenderit, voluptatibus quam corporis rerum
                    asperiores optio distinctio numquam repellendus minima ea
                    sed quas a earum blanditiis architecto veritatis!
                  </p>
                </div>
                <div class="detail">
                  <div class="photo">
                    <img src="images/testimonial-1.jpg" alt="" />
                  </div>
                  <div class="name">
                    <h4>Kalley Janner</h4>
                    <p>worker</p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
        <div class="shape-1">
          <img src="images/t-1.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Testimonials;
