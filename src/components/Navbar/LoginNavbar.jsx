import React from "react";
import { IoMdSearch } from "react-icons/io";
import "./Navbar.css";
import DarkMode from "./DarkMode";

const LoginNavbar = ({ handleOrderPopup }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-300 relative z-40">
      <div className="p-4">
        <div className="container flex justify-between items-center">
          {/* logo and links section */}
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-primary font-semibold
            tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Sammie<span>VIBE</span>x
            </a>
            {/* {menu items} */}
          </div>
          {/* navbar right section */}
          <div className="flex justify-between items-center gap-4">
            {/* {search bar section} */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            <div></div>
            {/* order-button section */}

            {/* {dark mode section} */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNavbar;
