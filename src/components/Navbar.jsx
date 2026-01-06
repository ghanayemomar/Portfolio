import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
       <Link
  to="/"
  className="flex items-center gap-2 min-w-0"
  onClick={() => {
    setActive("");
    window.scrollTo(0, 0);
  }}
>
  <img src={logo} alt="logo" className="w-9 h-9 object-contain" />

  {/* Text block */}
  <div className="min-w-0 flex flex-col leading-tight">
    {/* Row 1: Name + Title */}
    <p className="text-white text-[18px] font-bold flex items-center gap-2 min-w-0">
      <span className="whitespace-nowrap">Omar</span>
      <span className="sm:block hidden text-secondary font-medium whitespace-nowrap">
        | Software Engineer
      </span>
    </p>

    {/* Row 2: Email (responsive) */}
    <a
      href="mailto:omar.mohd.ghanayem@gmail.com"
      className="text-[12px] text-secondary hover:text-white transition truncate max-w-[220px] sm:max-w-[320px] md:max-w-none"
      title="omar.mohd.ghanayem@gmail.com"
      onClick={(e) => e.stopPropagation()}
    >
      omar.mohd.ghanayem@gmail.com
    </a>
  </div>
</Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
