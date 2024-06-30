// components/Navbar.tsx

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../images/logo.png";
import Dropdown from "../dropdown";
import Flag_EN from "../../../images/flag/en-flag.png";
import Flag_KO from "../../../images/flag/ko-flag.png";
import Flag_CN from "../../../images/flag/cn-flag.png";


const items = [
  {
    language: "English",
    flag: Flag_EN,
    path: "/en"
  },
  {
    language: "Korean",
    flag: Flag_KO,
    path: "/ko"
  },
  {
    language: "Chinese",
    flag: Flag_CN,
    path: "/cn"
  }
];


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 flex w-full flex-wrap items-center justify-between bg-gray-500 py-2 shadow-dark-mild lg:py-4 z-10">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div>
          <Link
            href="#"
            className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0"
          >
            <Image src={logo} alt="Dowinn Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Hamburger button for mobile view */}
        <button
          className="block border-0 bg-transparent px-2 text-black hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          aria-controls="navbarSupportedContent4"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          {/* Hamburger icon */}
          <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* Collapsible navbar container */}
        <div
          className={`!visible mt-2 ${
            isMenuOpen ? "flex" : "hidden"
          } flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto`}
          id="navbarSupportedContent4"
        >
          <ul className="me-auto">{/* Left Links here... */}</ul>

          <div className="flex items-end ">
            <div className="me-3">
              <Dropdown label={"lang"} items={items}/>
            </div>
            <button
              type="button"
              className="me-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-black text-white shadow transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none focus:ring-0 active:bg-primary-600 dark:shadow-black/30"
            >
              API
            </button>
            <button
              type="button"
              className="me-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-black text-white  shadow transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none focus:ring-0 active:bg-primary-600 dark:shadow-black/30"
            >
              HELP
            </button>

            <button
              type="button"
              className="me-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-black text-white  shadow transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none focus:ring-0 active:bg-primary-600 dark:shadow-black/30"
            >
              PROFILE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
