import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./animations.css";
import ReactGA from "react-ga4";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animation, setAnimation] = useState(""); // For animation class
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToTab = (tabIndex) => {
    navigate(`/services?tab=${tabIndex}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (menuOpen) {
      setAnimation("fade-out"); // Trigger fade-out animation
      setTimeout(() => {
        setMenuOpen(false); // Close the menu after animation
        setAnimation(""); // Reset animation class
      }, 500); // Match animation duration (0.5s)
    } else {
      setMenuOpen(true);
      setAnimation("fade-in"); // Trigger fade-in animation
    }
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? "text-[#004AAD]" : "text-black";
  };

  const handleClickNav = (label) => {
    ReactGA.event({
      category: "navigation",
      action: "button_click",
      label: label,
    });
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-white  " : "bg-white bg-opacity-60"
      }`}
    >
      <div className="container relative mx-auto px-[1rem] md:px-[3rem] lg:py-2 flex justify-between items-center">
        <a href="/">
          <img
            src="/icons/latest_blue_font.svg"
            alt="Sourcing Icon"
            className="w-36 lg:w-48 h-14"
          />
        </a>

        <div className="hidden lg:flex justify-center items-center space-x-12">
          <a
            onClick={() => handleClickNav("home page navigation")}
            href="/"
            className={`${getLinkClass(
              "/"
            )} border-b-2 border-transparent hover:border-b-2 text-sm hover:border-[#004AAD]`}
          >
            Home
          </a>
          <a
            onClick={() => handleClickNav("about us page navigation")}
            href="/aboutus"
            className={`${getLinkClass(
              "/aboutus"
            )} border-b-2 border-transparent hover:border-b-2 text-sm hover:border-[#004AAD]`}
          >
            About Us
          </a>
          <div className="dropdown  relative">
            <button className="border-b-2 border-transparent hover:border-b-2 text-sm hover:border-[#004AAD]  inline-flex items-center">
              <div className={`${getLinkClass("/services")} pr-2`}>
                {" "}
                <a
                  onClick={() => handleClickNav("our services page navigation")}
                  href="/services"
                >
                  Our Services
                </a>{" "}
              </div>
              <svg
                className={`${
                  location.pathname === "/services"
                    ? "fill-[#004AAD]"
                    : "fill-[#000]"
                } h-4 w-4`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu absolute hidden bg-white rounded-lg shadow-lg w-[15rem]  py-2 px-4  pt-1">
              <a
                onClick={() =>
                  handleClickNav("preventative-maintenance page navigation")
                }
                href="/services/preventative-maintenance"
              >
                <li
                  // onClick={() => navigateToTab(0)}
                  // onClick={() => {
                  //   navigate("/services/preventative-maintenance");
                  // }}
                  className={`border-b-2 border-transparent ${getLinkClass(
                    "/services/preventative-maintenance"
                  )} cursor-pointer hover:border-b-2 text-sm hover:border-[#004AAD]    py-2  block  `}
                >
                  {" "}
                  Preventative Maintenance{" "}
                </li>
              </a>
              <a
                onClick={() =>
                  handleClickNav("overhaul-management page navigation")
                }
                href="/services/overhaul-management"
              >
                <li
                  // onClick={() => navigateToTab(1)}
                  // onClick={() => {
                  //   navigate("/services/overhaul-management");
                  // }}
                  className={`border-b-2 border-transparent ${getLinkClass(
                    "/services/overhaul-management"
                  )} cursor-pointer hover:border-b-2 text-sm hover:border-[#004AAD]    py-2  block  `}
                >
                  {" "}
                  Overhaul Management{" "}
                </li>
              </a>
              <a
                onClick={() =>
                  handleClickNav("aircraft-on-ground page navigation")
                }
                href="/services/aircraft-on-ground"
              >
                <li
                  // onClick={() => navigateToTab(2)}
                  // onClick={() => {
                  //   navigate("/services/aircraft-on-ground");
                  // }}
                  className={`border-b-2 border-transparent ${getLinkClass(
                    "/services/aircraft-on-ground"
                  )} cursor-pointer hover:border-b-2 text-sm hover:border-[#004AAD]    py-2  block  `}
                >
                  Aircraft on Ground
                </li>
              </a>{" "}
              <a
                onClick={() => handleClickNav("products page navigation")}
                href="/services/products"
              >
                <li
                  // onClick={() => navigateToTab(3)}
                  // onClick={() => {
                  //   navigate("/services/products");
                  // }}
                  className={`border-b-2 border-transparent ${getLinkClass(
                    "/services/products"
                  )} cursor-pointer hover:border-b-2 text-sm hover:border-[#004AAD]    py-2  block  `}
                >
                  Products
                </li>{" "}
              </a>{" "}
              <a
                onClick={() => handleClickNav("capabilities page navigation")}
                href="/services/capabilities"
              >
                <li
                  // onClick={() => navigateToTab(4)}
                  // onClick={() => {
                  //   navigate("/services/capabilities");
                  // }}
                  className={`border-b-2 border-transparent ${getLinkClass(
                    "/services/capabilities"
                  )} cursor-pointer hover:border-b-2 text-sm hover:border-[#004AAD]    py-2  block  `}
                >
                  Capabilities
                </li>
              </a>
            </ul>
          </div>

          <a
            onClick={() => handleClickNav("platforms page navigation")}
            href="/platforms"
            className={`${getLinkClass(
              "/platforms"
            )} border-b-2 border-transparent hover:border-b-2 text-sm hover:border-[#004AAD]`}
          >
            Platforms
          </a>
          <a
            onClick={() => handleClickNav("contactus page navigation")}
            href="/contactus"
            className={`${getLinkClass(
              "/contactus"
            )} border-b-2 border-transparent hover:border-b-2 text-sm hover:border-[#004AAD]`}
          >
            Contact Us
          </a>
        </div>
        <div className="lg:hidden absolute right-[1rem] top-[1rem] z-20">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#004AAD"
                stroke="#004AAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#004AAD"
                stroke="#004AAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {(menuOpen || animation === "fade-out") && (
        <div
          className={`lg:hidden bg-white shadow-lg absolute top-0 left-0 w-full ${animation}`}
        >
          <div className="flex flex-col items-start justify-center h-screen space-y-8 container mx-auto px-[2rem] md:px-[3rem] py-2">
            <a
              href="/"
              className={`text-4xl font-bold ${getLinkClass(
                "/"
              )} border-b-2 border-transparent hover:border-b-2 hover:border-[#004AAD]`}
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="/aboutus"
              className={`text-4xl font-bold ${getLinkClass(
                "/aboutus"
              )} border-b-2 border-transparent hover:border-b-2 hover:border-[#004AAD]`}
              onClick={toggleMenu}
            >
              About Us
            </a>
            <div>
              <div className="flex gap-2 items-center">
                <a
                  href="/services"
                  className={`text-4xl font-bold ${getLinkClass(
                    "/services"
                  )} border-b-2 border-transparent hover:border-b-2 hover:border-[#004AAD]`}
                  onClick={toggleMenu}
                >
                  Our Services
                </a>

                <svg
                  className={`${
                    location.pathname === "/services"
                      ? "fill-[#004AAD]"
                      : "fill-[#000]"
                  } h-8 w-8`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </div>
              <ul className="pt-6 pl-6">
                <li
                  // onClick={() => navigateToTab(0)}
                  onClick={() => {
                    toggleMenu;
                    navigate("/services/preventative-maintenance");
                  }}
                  className={`border-b-2 border-transparent ${getLinkClass(
                    "/services/preventative-maintenance"
                  )} cursor-pointer hover:border-b-2 text-xl font-semibold   py-2  block  `}
                >
                  {" "}
                  Preventative Maintenance{" "}
                </li>
                <li
                  // onClick={() => navigateToTab(1)}
                  onClick={() => {
                    toggleMenu;
                    navigate("/services/overhaul-management");
                  }}
                  className={`border-b-2 border-transparent ${getLinkClass(
                    "/services/overhaul-management"
                  )} cursor-pointer hover:border-b-2 text-xl font-semibold   py-2  block  `}
                >
                  {" "}
                  Overhaul Management{" "}
                </li>
                <li
                  // onClick={() => navigateToTab(2)}
                  onClick={() => {
                    toggleMenu;
                    navigate("/services/aircraft-on-ground");
                  }}
                  className={`border-b-2 border-transparent ${getLinkClass(
                    "/services/aircraft-on-ground"
                  )} cursor-pointer hover:border-b-2 text-xl font-semibold   py-2  block  `}
                >
                  Aircraft on Ground
                </li>
                <li
                  // onClick={() => navigateToTab(3)}
                  onClick={() => {
                    toggleMenu;
                    navigate("/services/products");
                  }}
                  className={`border-b-2 border-transparent ${getLinkClass(
                    "/services/products"
                  )} cursor-pointer hover:border-b-2 text-xl font-semibold   py-2  block  `}
                >
                  Products
                </li>{" "}
                <li
                  // onClick={() => navigateToTab(4)}
                  onClick={() => {
                    toggleMenu;
                    navigate("/services/capabilities");
                  }}
                  className={`border-b-2 border-transparent ${getLinkClass(
                    "/services/capabilities"
                  )} cursor-pointer hover:border-b-2 text-xl font-semibold   py-2  block  `}
                >
                  Capabilities
                </li>
              </ul>
            </div>
            <a
              href="/platforms"
              className={`text-4xl font-bold ${getLinkClass(
                "/platforms"
              )} border-b-2 border-transparent hover:border-b-2 hover:border-[#004AAD]`}
              onClick={toggleMenu}
            >
              Platforms
            </a>
            <a
              href="/contactus"
              className={`text-4xl font-bold ${getLinkClass(
                "/contact"
              )} border-b-2 border-transparent hover:border-b-2 hover:border-[#004AAD]`}
              onClick={toggleMenu}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
