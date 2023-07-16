import { useState, useEffect, useRef } from "react";
import Button from "../button";
import Logo from "./Logo";
import "../../index.css";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const handleToogle = () => {
    setActive(!isActive);
  };
  const classButton = `sm:block sm:absolute right-4 hidden ${
    isActive ? "hamburger-active" : ""
  }`;
  const headerRef = useRef(null);
  const navMenu = `static sm:absolute py-5 bg-transparent sm:bg-primary-blue sm:shadow-lg rounded-b-lg max-w-full sm:max-w-[250px] w-screen right-0 top-full ${
    isActive ? "" : "sm:hidden"
  }`;
  useEffect(() => {
    window.onscroll = function () {
      const fixedNav = headerRef.current.offsetTop;
      if (window.scrollY > fixedNav) {
        headerRef.current.classList.add("navbar-fixed");
      } else {
        headerRef.current.classList.remove("navbar-fixed");
      }
    };
  }, []);
  return (
    <header
      ref={headerRef}
      className="bg-transparent absolute top-0 left-0  w-full flex items-center z-10 "
    >
      <div className="container">
        <div className="flex items-center justify-between relative px-10 py-3">
          <Logo />
          <div className="sm:flex sm:items-center sm:px-4">
            <button
              name="hamburger"
              id="hamburger"
              type="button"
              className={classButton}
              onClick={handleToogle}
            >
              <span className="hamburger-line origin-top-left"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line origin-bottom-left"></span>
            </button>
            <nav className={navMenu}>
              <ul className="sm:block flex">
                <li className="group">
                  <Button label="Home" href="/" />
                </li>
                <li className="group">
                  <Button label="About" href="/#about" />
                </li>
                <li className="group">
                  <Button label="Topics" href="/#topics" />
                </li>
                <li className="group">
                  <Button label="Speakers" href="/#speakers" />
                </li>
                <li className="group">
                  <Button label="Timeline" href="/#timeline" />
                </li>
                <li className="group">
                  <Button label="Registration" href="/#registration" />
                </li>
                <li className="group">
                  <Button label="Location" href="/#location" />
                </li>
                <li className="group">
                  <Button label="Contact Us" href="/#contact" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
