import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const clickNav = () => {
    setClick(!click);
  };

  return (
    <div className="container mx-auto w-full max-w-screen-2xl">
      <nav className="flex items-center justify-between relative p-5 md:px-14">
        <div>
          <h1 className="text-3xl font-bold">Wasp.</h1>
        </div>
        <ul
          className={
            click
              ? "flex flex-col items-center bg-[#DAE2B6] absolute top-0 right-0 w-[50%] h-screen pt-16 md:static md:flex-row md:w-auto md:pt-0 md:h-auto md:bg-transparent transition-all ease-in-out"
              : "flex flex-col items-center bg-[#DAE2B6] absolute top-0 right-[-100%] w-[50%] h-screen pt-16 md:static md:flex-row md:w-auto md:pt-0 md:h-auto md:bg-transparent transition-all ease-in-out"
          }
        >
          <li className="pb-5 px-5 w-full text-center md:p-0 md:ml-8">
            <a
              className="text-lg font-medium bg-white md:bg-transparent block rounded-lg"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="pb-5 px-5 w-full text-center md:p-0 md:ml-8">
            <a
              className="text-lg font-medium bg-white md:bg-transparent block rounded-lg"
              href="/"
            >
              Product
            </a>
          </li>
          <li className="pb-5 px-5 w-full text-center md:p-0 md:ml-8">
            <a
              className="text-lg font-medium bg-white md:bg-transparent block rounded-lg"
              href="/"
            >
              About
            </a>
          </li>
          <li className="pb-5 px-5 w-full text-center md:p-0 md:ml-8">
            <a
              className="text-lg font-medium bg-white md:bg-transparent block rounded-lg"
              href="/"
            >
              Blog
            </a>
          </li>
        </ul>
        <div
          onClick={clickNav}
          className="absolute top-6 right-6 cursor-pointer md:hidden"
        >
          <FaBars className="text-2xl" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
