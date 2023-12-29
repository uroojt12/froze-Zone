import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const ToggleAction = () => {
    setToggle(!toggle);
  };
  const [userDrop, setUserDrop] = useState(false);
  const ToggleUserDrop = () => {
    setUserDrop(!userDrop);
  };
  return (
    <header>
      <div className="contain">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo.jpg" alt="" />
          </Link>
        </div>
        <div
          className={toggle ? "toggle active" : "toggle"}
          onClick={ToggleAction}
        >
          <span></span>
        </div>
        <nav id="nav" className={toggle ? "active" : ""}>
          <ul>
            <li>
              <Link href="/" onClick={ToggleAction}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={ToggleAction}>
                About us
              </Link>
            </li>
            {/* <li>
              <Link href="" onClick={ToggleAction}>
                Work
              </Link>
            </li> */}
            <li>
              <Link href="/work" onClick={ToggleAction}>
                Work
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={ToggleAction}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="clearfix"></div>
      </div>
    </header>
  );
}
