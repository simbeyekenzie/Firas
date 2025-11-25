"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import { Button } from "./ui/button";
import { menuData2 } from "./Navbar/menuData";

const useAzan = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};


function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= breakpoint);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, [breakpoint]);

  return isDesktop;
}

export function Navbar1() {
  const useActive = useAzan();
  const isDesktop = useIsDesktop();

  const mobileVariants = {
    open: { height: "auto", width: "30dvw" },
    close: { height: "0", width: "60dvw" },
  };

  const desktopVariants = {
    open: { height: "100dvh", width: "100dvw" },
    close: { height: "0", width: "100dvw" },
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  return (
    <section
      className={`
        flex fixed lg:opacity-100 md:bg-transparent z-1 w-full top24 items-center 
        md:-top-5.5 borderb border-border-primary bgbackground-primary 
        lg:min-h-1 lg:px-[5%] lg:py-0  ${sticky && 'shadow-lg backdrop-blur-sm' }`}
    >
      <div className="size-ful relative w-full md:px-4 text-mint-lightest lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h16 w-full items-center justify-between pr[5%] md:px-[5%] md:min-h18 lg:min-h-full ">
          <Link
              href="/"
              className={`bg-mint-dark h-20 mt1.5 rounded block relative top-10 -ml8 py-3 md:ml0 md:top12 
                } `}
            >
              <Image
                src="/assets/logo.PNG"
                alt="logo"
                width={40}
                height={20}
                className="w-full dark:idden"
              />
            </Link>
          <button
            className="-mr-2 flex relative top-4 size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open)", width: "var(--w-open)" }, 
            close: { height: "var(--height-close)", width: "var(--w-close)" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}  
          className="overflow-hidden text-black px-[5%] max-w-7xl bg-mint-dark lg:bg-transparent lg:mt-16 lg:py-4 absolute lg:static w-full right-2 rounded lg:backdrop-blurmd lg:shadowlg lg:flex lg:justify-center lg:items-center 
            [--w-open:10dvw] [--height-open:auto]
            [--w-close:40dvw] [--height-close:0]
            lg:[--w-close:100dvw] lg:[--height-close:auto]
          "
          >
          {menuData2.map((menu)=> {
            return(
              <a
                key={menu.id}
                href={menu.path}
                className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
              >
                {menu.title}
              </a>)
          })
          }
          
          <div
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <button
              className="flex w-full items-center justify-between gap-2 py-3 text-left text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
              onClick={useActive.openOnMobileDropdownMenu}
            >
              <span>Products</span>
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownMenuIcon}
                transition={{ duration: 0.3 }}
              >
                <RxChevronDown />
              </motion.span>
            </button>
            <AnimatePresence>
              <motion.nav
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: "var(--opacity-open, 100%)",
                    display: "block",
                    y: 0,
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "var(--opacity-close, 0)",
                    display: "none",
                    y: "var(--y-close, 0%)",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]"
              >
                <a
                  href="/dairy"
                  className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base"
                  >
                  Dairy
                </a>
                <a
                  href="/poultry"
                  className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base"
                >
                  Poultry
                </a>
              </motion.nav>
            </AnimatePresence>
          </div>
          <div 
            className="mt6 pb-3 flex flex-row items-center gap-4 lg:ml-4 lg:mt0 "
          >
            <Button
              title="Contact"
              variant="ghost"
              size="sm"
              className=""
            >
              Contact
            </Button>
            <Button title="Order" size="sm" className="bg-orange">
              Order
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
