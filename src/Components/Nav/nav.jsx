import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Nav() {
  const [navToggle, setNavToggle] = useState(false);

  const navToggleFunction = () => {
    setNavToggle((prevNavToggle) => !prevNavToggle);
  };
  return (
    <div>
      <header
        className="flex justify-between items-center 
                            shadow-lg px-3 py-3 fixed w-full bg-white z-20
                            md:px-10 md:mx-auto"
      >
        <p className="sm:text-[20px]">Nuvel Global Venture, INC</p>
        <nav
          className={`
                            absolute top-0 right-0 ${
                              navToggle ? "block" : "hidden"
                            }
                            flex flex-col items-center gap-5 
                            border w-44 py-6 rounded-lg 
                            bg-white shadow-sm

                            md:static md:flex-row md:bg-transparent
                            md:border-none md:shadow-none md:py-0
                            md:flex md:w-auto md:gap-7

                            lg:gap-14
                            `}
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="z-10 md:hidden">
          <button onClick={navToggleFunction} className="text-lg">
            {navToggle ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </header>
    </div>
  );
}
