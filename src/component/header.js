import React, { useState, useEffect } from "react";
// import logo from "../assets/img/logo.svg";
import Nav from "../component/Nav";
import NavMobile from "../component/NavMobile";
import Socials from "../component/Socials"
import logo2 from "../assets/img/logo2.png";

export const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex  fixed top-0 w-full text-white z-10 transition-all duration-300 `}
    >
      <div className=" container mx-auto h-full flex items-center justify-between">
        <a href="app.js">
          <img className="mt-2 mb-5 " src={logo2} alt="" />
        </a>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* navmobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};
