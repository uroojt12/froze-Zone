import React, { useState } from "react";

const Made = () => {
  const [videoPopup, setVideoPopup] = useState(false);
  return (
    <>
      <section class="about-sec" id="about">
        <div class="contain">
          <div class="flex">
            <div class="col col2">
              <div class="right_grid">
                <div class="shape">
                  <img src="images/h7-shape3.png" alt="" />
                </div>
                <div
                  className="vidBlk"
                  style={{ backgroundImage: "url('images/about-3.jpeg')" }}
                >
                  <div
                    className="videoBtn fa-play popBtn"
                    data-popup="video"
                    onClick={() => setVideoPopup(true)}
                  ></div>
                </div>
              </div>
            </div>
            <div class="col col1">
              <div class="sec_heading">
                <h5>About Us</h5>
                <h2>How It’s Made</h2>
              </div>
              <div class="cntnt">
                <p>
                  {" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur, sequi nam voluptas dolores reiciendis, nostrum
                  aperiam commodi, nobis porro qui eum eos! Facere sequi
                  voluptas assumenda nesciunt doloribus, tenetur dolores. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                  voluptatum officia, praesentium optio minima nihi.{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  aliquam amet labore cum molestiae quam sit veritatis commodi
                  iure doloremque quod porro illo corrupti modi, sequi
                  accusamus. Nemo, sequi quo.
                </p>
              </div>
            </div>
            <div class="detail">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi veniam repudiandae sapiente consectetur repellendus
                temporibus unde, quasi fuga iusto quam magni labore delectus at
                nostrum, reiciendis blanditiis explicabo ex ducimus! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Incidunt, omnis ex
                eius nisi sunt dolores tenetur suscipit beatae fugiat, iure nemo
                dolorum tempora illum velit quae nihil quia itaque praesentium.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                impedit odio quasi, minima esse incidunt, error qui eum eveniet
                recusandae fugit laborum doloremque quod, excepturi rem totam
                officiis quas asperiores. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ratione, dolor. Cupiditate commodi molestiae
                velit dolores expedita facere eaque maiores. Totam illum a
                libero ducimus modi quasi ex distinctio nihil optio?
              </p>
            </div>
          </div>
        </div>
      </section>
      {videoPopup === true ? (
        <div className="popup" style={{ display: "block" }}>
          <div class="tableDv">
            <div class="tableCell">
              <div
                className="crosBtn"
                onClick={() => setVideoPopup(false)}
              ></div>

              <div class="contain">
                <div class=" inside">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/G3k0qlLag74"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Made;
