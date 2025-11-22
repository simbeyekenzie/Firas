'use client'

import React, { SetStateAction, useEffect, useRef, useState } from 'react'
import styles from './navbar.module.css';
import Link from 'next/link';
import menuData from './menuData';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const usePathName = usePathname();
  const [openIndex, setOpenIndex] = useState(-1);
  
  const handleSubmenu = (index: SetStateAction<number>) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }

  };

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setNavbarOpen(false); // Close the navbar
      }
    };

    if (navbarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up on unmount
    };
  }, [navbarOpen]);

  return (
    <>
      <a className="logo-fixed" href="index.html" aria-label="FIRAS Sunrise Farms">
        <img src="./assets/logo.PNG" alt="FIRAS Sunrise Farms logo" />
      </a>

      {/* <div className='bg-transparent' > */}
        <button
          onClick={navbarToggleHandler}
          id="navbarToggler"
          aria-label="Mobile Menu"
          className="absolute w- right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
        >
          <span
            className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "
              }`}
          />
          <span
            className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0 " : " "
              }`}
          />
          <span
            className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "
              }`}
          />
        </button>
        {/* <!-- Non-sticky Nav Links --> */}
        <nav 
          ref={navbarRef}
          aria-label="Primary"
          id="navbarCollapse"
          className={`navbar absolute opacity-400 bg-[#852882] right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 px-6 py-4 duration-300 dark:border-body-color/20 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent !bg-transaparent lg:p-0 lg:opacity-100 ${navbarOpen
            ? "visibility top-full opacity-100"
            : "invisible top-[120%] opacity-0"
          }`}
        >
          <ul className="block lg:flex lg:space-x-12 bg-transparent">
            {menuData.map((menuItem, index) => (
              <li key={index} className=" relative">
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    onClick={() => setNavbarOpen(false)}
                    className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path
                        ? "text-primary dark:text-current dark:hover:text-white/50"
                      : "text-dark hover:text-primary dark:text-current/70 dark:hover:text-white/50"
                      }`}
                  >
                    {menuItem.title}
                  </Link>
                ) : (
                  <>
                    <p
                      onClick={() => handleSubmenu(index)}
                      className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                    >
                      {menuItem.title}
                      <span className="pl-3">
                        <svg width="25" height="24" viewBox="0 0 25 24">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </p>
                  </>
                )}
              </li>
            ))}
          </ul>
          {/* <a href="./about-us.html">About Us</a>
          <a href="./how-we-farm.html">How We Farm</a>
          <a href="./why-choose-us.html">Why Choose Us?</a>
          <a href="./vegetables-products.html">Vegetables</a>
          <a href="./poultry-products.html">Poultry</a>
          <a href="./dairy-products.html">Dairy</a> */}
        </nav>
      {/* </div> */}
      {/* <div
        className={`relative left-0 top-full rounded-sm bg-[#852882] transition-[top] duration-300 group-hover:opacity-100 dark:bg-transparent shadow-none lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full hidden md:block"
          `}
      >
        {menuData!.map((submenuItem, index) => (
          <Link
            href={submenuItem.path!}
            key={index}
            className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
          >
            {submenuItem.title}
          </Link>
        ))}
      </div> */}
    </>
  )
}

export default Navbar