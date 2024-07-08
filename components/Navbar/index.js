/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Navbar = ({ isLandingPage }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      const isStickyLocal = currPos.y < 0;
      if (isStickyLocal !== isSticky) setIsSticky(isStickyLocal);
    },
    [isSticky]
  );

  const handleLinkClick = (e) => {
    if (!isLandingPage) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const href = e.target.getAttribute("href").replace("/", "");

      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 60,
      });
    }
  };

  const handleNavbarToggler = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return useMemo(
    () => (
      <div>
        <div
          className={`
        bg-transparent
        absolute
        top-0
        left-0
        z-40
        w-full
        flex
        items-center
        ${isSticky ? "sticky" : ""}
      `}
        >
          <div className="container">
            <div className="flex -mx-4 items-center justify-between relative">
              <div className="px-4 w-60 max-w-full">
                <Link href="/">
                  <a className="navbar-logo w-full block py-5">
                    {isSticky ? (
                      <img
                        src="/assets/images/logo/logo.svg"
                        alt="logo"
                        className="w-full max-h-10 header-logo"
                      />
                    ) : (
                      <img
                        src="/assets/images/logo/logo-white.svg"
                        alt="logo"
                        className="w-full max-h-10 header-logo"
                      />
                    )}
                  </a>
                </Link>
              </div>
              <div className="flex px-4 justify-between items-center w-full">
                <div>
                  <button
                    onClick={handleNavbarToggler}
                    id="navbarToggler"
                    className={`
                  block
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  lg:hidden
                  focus:ring-2
                  ring-primary
                  px-3
                  py-[6px]
                  rounded-lg
                  ${isMobileMenuOpen ? "navbarTogglerActive" : ""}
                `}
                  >
                    <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                    <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                    <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                  </button>
                  <nav
                    id="navbarCollapse"
                    className={`
                  absolute
                  py-5
                  lg:py-0 lg:px-4
                  xl:px-6
                  bg-white
                  lg:bg-transparent
                  shadow-lg
                  rounded-lg
                  max-w-[250px]
                  w-full
                  lg:max-w-full lg:w-full
                  right-4
                  top-full
                  lg:block lg:static lg:shadow-none
                  ${isMobileMenuOpen ? "" : "hidden"}
                `}
                  >
                    <ul className="blcok lg:flex">
                      <li className="relative group">
                        <Link href="/#home" passHref>
                          <a
                            onClick={handleLinkClick}
                            className="
                        ud-menu-scroll
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0
                      "
                          >
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className="relative group">
                        <Link href="/#products" passHref>
                          <a
                            onClick={handleLinkClick}
                            className="
                        ud-menu-scroll
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0 lg:ml-7
                        xl:ml-12
                      "
                          >
                            Products
                          </a>
                        </Link>
                      </li>

                      <li className="relative group">
                        <a
                          href="https://docs.sklabs.dev"
                          target="_blank"
                          rel="noreferrer"
                          className="
                        ud-menu-scroll
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0 lg:ml-7
                        xl:ml-12
                      "
                        >
                          Documentation
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    [isSticky, isMobileMenuOpen]
  );
};

export default Navbar;
