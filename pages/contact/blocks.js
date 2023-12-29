import React from "react";

const Blocks = () => {
  return (
    <>
      <section class="cntct-grid">
        <div class="contain">
          <div class="flex">
            <div class="col">
              <div class="image">
                <img src="images/fast-delivery.png" alt="" />
              </div>
              <div class="img-cntnt">
                <h4>Free Shipping</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
            <div class="col">
              <div class="image">
                <img src="images/clock.png" alt="" />
              </div>
              <div class="img-cntnt">
                <h4>30 Minutes Delivery</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
            <div class="col">
              <div class="image">
                <img src="images/ice-cream.png" alt="" />
              </div>
              <div class="img-cntnt">
                <h4>Best Quality Guarantee</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blocks;
