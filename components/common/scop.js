import Link from "next/link";
import React from "react";
const Scop = () => {
  return (
    <>
      <section id="sec_scope">
        <div class="shape">
          <img src="images/h-shape.png" alt="" />
        </div>
        <div class="overlay"></div>
        <div class="contain">
          <div class="inner">
            <div class="sec_heading">
              <h5>Flavors</h5>
              <h2>SEE WHAT’S SCOOPIN’</h2>
            </div>
            <div class="cta btn-box ">
              <Link href="flavor.php" class="site_btn theme-btn-one">
                Scope Flavors
              </Link>
            </div>
          </div>
        </div>
        <div class="image-s">
          <img src="images/scope-2.png" alt="" />
        </div>
        <div class="b-shape">
          <img src="images/b-shape.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Scop;
