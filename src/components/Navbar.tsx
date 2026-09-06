import React, { useEffect, useState } from "react";
import "../index.css";
import logo from "../../assets/logo.png";
import { LoginModal } from "./AuthModals";

export default function Navbar() {
  const [showLogin, setshowLogin] = useState(false);

  useEffect(() => {
    showLogin && console.log("login");
  }, [showLogin]);

  return (
    <>
      <nav className="nav">
        <div className="nav__wrapper">
          <figure className="nav__img--mask">
            <img className="nav__img" src={logo} alt="logo" />
          </figure>
          <ul className="nav__list--wrapper">
            <li
              className="nav__list nav__list--login"
              onClick={() => setshowLogin(true)}
            >
              Login
            </li>
            <li className="nav__list nav__list--mobile">About</li>
            <li className="nav__list nav__list--mobile">Contact</li>
            <li className="nav__list nav__list--mobile">Help</li>
          </ul>
        </div>
      </nav>
      {showLogin && <LoginModal />}
    </>
  );
}
