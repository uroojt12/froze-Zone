import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="contain">
          <div className="flexRow">
            <div className="col">
              <div className="footerLogo">
                <Link href="index.php">
                  <img src="images/logo.png" alt="" />
                </Link>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto vitae veritatis accusamus, doloremque neque aperiam
                dolorem omnis, asperiores nam doloribus rem repudiandae nobis
                culpa eligendi perspiciatis eius illum odit aliquam!
              </p>
            </div>
            <div className="col">
              <h4>Get in touch</h4>
              <ul className="infoLst">
                <li>
                  <img src="images\icon-map-marker.svg" alt="" />
                  <Link href="">20, Somewhere in world</Link>
                </li>
                <li>
                  <img src="images\icon-envelope-fill.svg" alt="" />
                  <Link href="mailto:jetmeans@gmail.com">
                    abcinfo@gmail.com
                  </Link>
                </li>
                <li>
                  <img src="images\icon-phone.svg" alt="" />
                  <Link href="tel:(734) 219-2298">(734) 219-86796</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Usefull Links</h4>
              <ul className="fst">
                <li>
                  <Link href="index.php"> Home</Link>
                </li>
                <li>
                  <Link href="about.php">About us</Link>
                </li>
                <li>
                  <Link href="service.php">Catering</Link>
                </li>

                <li>
                  <Link href="contact.php">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Join our mailing list</h4>
              <form
                action="newsletter"
                method="post"
                autoComplete="off"
                className=""
              >
                <label htmlFor="email">
                  Stay up to date with the latest news and deals!
                </label>
                <div className="txtGrp relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="txtBox"
                    placeholder="@ your email address"
                  />
                  <button type="submit">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
              <h4>Follow Us</h4>
              <ul className="social flex">
                <li>
                  <Link href="?" style={{ display: "block" }}>
                    <img src="images/social-instagram.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="?" style={{ display: "block" }}>
                    <img src="images/social-facebook.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="?" style={{ display: "block" }}>
                    <img src="images/social-youtube.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link href="?" style={{ display: "block" }}>
                    <img src="images/social-twitter.svg" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright relative">
            <div className="contain">
              <div className="inner">
                <p>Copyright © Froze zone</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
