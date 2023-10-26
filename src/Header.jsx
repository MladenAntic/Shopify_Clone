import React, { useEffect, useRef } from "react";
import logo from "./assets/logo.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  const headerRef = useRef(null);
  const hamburgerTopRef = useRef(null);
  const hamburgerMiddleRef = useRef(null);
  const hamburgerBottomRef = useRef(null);

  const hamburgerItems = [
    hamburgerTopRef,
    hamburgerMiddleRef,
    hamburgerBottomRef,
  ];

  const mobileItemsRef = useRef(null);
  const mobileHorizontalRuleRef = useRef(null);
  const mobileButtonsRef = useRef(null);
  const mobileLogInRef = useRef(null);
  const mobileFreeTrialRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0 && window.scrollX === 0) {
        headerRef.current.style.background = "transparent";
      } else {
        headerRef.current.style.background = "black";
      }
    });
  });

  function showMobileItems() {
    headerRef.current.style.background = "black";
    mobileItemsRef.current.style.display = "flex";
    mobileHorizontalRuleRef.current.style.display = "block";
    mobileButtonsRef.current.style.display = "flex";
    mobileLogInRef.current.style.display = "block";
    mobileFreeTrialRef.current.style.display = "block";

    window.addEventListener("scroll", () => {
      headerRef.current.style.background = "black";
    });

    document.body.style.overflow = "hidden";
  }

  function hideMobileItems() {
    headerRef.current.style.background = "transparent";
    mobileItemsRef.current.style.display = "none";
    mobileHorizontalRuleRef.current.style.display = "none";
    mobileButtonsRef.current.style.display = "none";
    mobileLogInRef.current.style.display = "none";
    mobileFreeTrialRef.current.style.display = "none";

    window.addEventListener("scroll", () => {
      if (window.scrollY === 0 && window.scrollX === 0) {
        headerRef.current.style.background = "transparent";
      }
    });

    document.body.style.overflowY = "scroll";
  }

  function toggleMenu() {
    hamburgerItems.forEach((item) => {
      item.current.classList.toggle("open");

      if (item.current.classList.contains("open")) {
        showMobileItems();

        window.addEventListener("resize", () => {
          if (window.innerWidth > 1024) {
            hideMobileItems();
            mobileItemsRef.current.style.display = "flex";
          } else {
            showMobileItems();
          }
        });
      } else {
        hideMobileItems();

        window.addEventListener("resize", () => {
          if (window.innerWidth < 1024) {
            hideMobileItems();
          } else {
            hideMobileItems();
            mobileItemsRef.current.style.display = "flex";
          }
        });
      }
    });
  }

  return (
    <header
      ref={headerRef}
      className="bg-transparent fixed top-0 left-0 right-0 z-10 text-white py-[1.25rem] duration-300"
    >
      <div className="wrapper flex items-center justify-between">
        <nav className="flex items-center gap-[1.875rem]">
          <a href="#">
            <img
              src={logo}
              alt="Shopify Logo"
              className="w-[7.8125rem] max-md:w-[6.25rem]"
            />
          </a>
          <ul
            ref={mobileItemsRef}
            className="hidden lg:flex items-center gap-[1.875rem] max-lg:absolute max-lg:top-[4.875rem] max-lg:right-0 max-lg:bottom-0 max-lg:left-0 max-lg:bg-black max-lg:flex-col max-lg:items-start max-lg:pt-[3.125rem] max-lg:pl-[1.5625rem] max-lg:text-[1.5rem] max-lg:font-bold max-lg:gap-[2.5rem] max-lg:h-[100vh]"
          >
            <li className="flex items-center hover:underline">
              <a href="#">Solutions</a>
              <ExpandMoreIcon />
            </li>
            <li className="flex items-center hover:underline">
              <a href="#">Pricing</a>
            </li>
            <li className="flex items-center hover:underline">
              <a href="#">Resources</a>
              <ExpandMoreIcon />
            </li>
            <li className="flex items-center hover:underline">
              <a href="#">What's new</a>
              <ExpandMoreIcon />
            </li>
          </ul>

          <hr
            ref={mobileHorizontalRuleRef}
            className="hidden max-lg:absolute max-lg:left-0 max-lg:bottom-[-37.5rem] max-lg:w-full max-lg:h-[0.0625rem] max-lg:bg-white max-md:bottom-[-26.5625rem]"
          />

          <div
            ref={mobileButtonsRef}
            className="hidden max-lg:w-full max-lg:absolute max-lg:left-0 max-lg:bottom-[-41.875rem] max-lg:items-center max-lg:justify-center max-lg:gap-[0.625rem] max-lg:px-[0.9375rem] max-md:flex-col max-md:bottom-[-34.375rem]"
          >
            <button
              ref={mobileLogInRef}
              className="max-lg:flex-[0.5] max-lg:border-2 max-lg:rounded-full max-lg:py-[0.5625rem] max-lg:px-[1.1875rem] max-md:w-full"
            >
              Log In
            </button>
            <button
              ref={mobileFreeTrialRef}
              className="bg-white text-black font-bold py-[0.625rem] px-[1.25rem] rounded-full max-lg:flex-[0.5] max-md:w-full"
            >
              Start free trial
            </button>
          </div>
        </nav>

        <div className="flex items-center gap-[1.875rem]">
          <button className="max-lg:hidden hover:underline">Log In</button>
          <button className="bg-white text-black font-bold py-[0.625rem] px-[1.25rem] rounded-full max-md:text-[0.75rem] hover:opacity-80">
            Start free trial
          </button>
          <button
            onClick={toggleMenu}
            className="z-10 cursor-pointer w-[1.25rem] h-[1.25rem] bg-none border-none top-[0.3125rem] max-lg:block relative hidden"
            type="button"
          >
            <span
              ref={hamburgerTopRef}
              className="hamburger-top absolute w-[1.25rem] h-[0.125rem] top-0 left-0 bg-white duration-500"
            ></span>
            <span
              ref={hamburgerMiddleRef}
              className="hamburger-middle absolute w-[1.25rem] h-[0.125rem] top-0 left-0 bg-white duration-500 translate-y-[0.3125rem]"
            ></span>
            <span
              ref={hamburgerBottomRef}
              className="hamburger-bottom absolute w-[1.25rem] h-[0.125rem] top-0 left-0 bg-white duration-500 translate-y-[0.625rem]"
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
