import React, { useState } from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <header className="absolute z-10 p-10 w-full flex items-center justify-center lg:items-center lg:justify-start">
        <div>
          <img src={logo} alt="" className="lg:mr-10" />
        </div>

        <div
          className={`${
            isOpen
              ? "bg-black bg-opacity-75 absolute top-0 left-0 right-0 bottom-0 h-screen"
              : "bg-transparent lg:bg-transparent"
          } lg:bg-transparent lg:h-auto lg:relative`}
        >
          <nav
            className={`${isOpen ? "open w-full py-8 lg:py-0 lg:w-auto" : " "}`}
          >
            <ul className="flex items-center justify-center flex-wrap gap-6">
              <li>
                <button className="border-b-2 border-transparent hover:border-neutral-400 transition-all duration-200 lg:text-white lg:hover:border-b-white ">
                  home
                </button>
              </li>
              <li>
                <button className="border-b-2 border-transparent hover:border-neutral-400 transition-all duration-200 lg:text-white lg:hover:border-b-white ">
                  shop
                </button>
              </li>
              <li>
                <button className="border-b-2 border-transparent hover:border-neutral-400 transition-all duration-200 lg:text-white lg:hover:border-b-white ">
                  about
                </button>
              </li>
              <li>
                <button className="border-b-2 border-transparent hover:border-neutral-400 transition-all duration-200 lg:text-white lg:hover:border-b-white ">
                  contact
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="absolute left-10 top-10 z-20 lg:hidden">
          {isOpen ? (
            <button onClick={() => setIsOpen(false)}>
              <img src={close}  rel="noreferrer" alt="button img1" />
            </button>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <img src={menu}  rel="noreferrer" alt="button img2"/>
            </button>
          )}
        </div>
      </header>
    </>
  );
}
