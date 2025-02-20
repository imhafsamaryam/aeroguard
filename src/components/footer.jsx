import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#004AAD]  ">
      <div className=" ">
        <div className=" container mx-auto px-[2rem] md:px-[3rem]  py-8 md:py-16 lg:py-18 flex flex-col lg:flex-row justify-between items-start ">
          {/* <h1 className={`text-2xl font-bold text-white `}>AEROGUARD</h1> */}
          <a href="/">
            <img
              src="/icons/latest_white_font.svg"
              alt="Sourcing Icon"
              className="w-56 h-24  "
            />{" "}
          </a>

          <div className="flex justify-between flex-col lg:flex-row  lg:w-[45vw]">
            <div className=" flex flex-col  justify-start items-start space-y-4   pt-[2rem] lg:pt-0   ">
              <a
                href="/"
                className={`hover:underline hover:text-white text-sm text-[#B9CDE9] underline-offset-4`}
              >
                Home
              </a>
              <a
                href="/aboutus"
                className={`hover:underline hover:text-white text-sm text-[#B9CDE9] underline-offset-4`}
              >
                About Us
              </a>
              <a
                href="/services"
                className={`hover:underline hover:text-white text-sm text-[#B9CDE9] underline-offset-4`}
              >
                Our Services
              </a>
              <a
                href="#services"
                className={`hover:underline hover:text-white text-sm text-[#B9CDE9] underline-offset-4`}
              >
                Platforms
              </a>
              <a
                href="/contactus"
                className={`hover:underline hover:text-white text-sm text-[#B9CDE9] underline-offset-4`}
              >
                Contact Us
              </a>
            </div>
            <div className=" flex flex-col  justify-start items-start space-y-4   pt-[2rem] lg:pt-0   ">
              <a
                href="/services/preventative-maintenance"
                className={`hover:underline hover:text-white text-sm text-[#B9CDE9] underline-offset-4`}
              >
                Preventative Maintenance{" "}
              </a>
              <a
                href="/services/overhaul-management"
                className={`hover:underline hover:text-white text-sm text-[#B9CDE9] underline-offset-4`}
              >
                Overhaul Management{" "}
              </a>
              <a
                href="/services/aircraft-on-ground"
                className={`hover:underline hover:text-white text-sm text-[#B9CDE9] underline-offset-4`}
              >
                Aircraft on Ground
              </a>
              <a
                href="/services/products"
                className={`hover:underline hover:text-white text-sm text-[#B9CDE9] underline-offset-4`}
              >
                Products
              </a>
              <a
                href="/services/capabilities"
                className={`hover:underline hover:text-white text-sm text-[#B9CDE9] underline-offset-4`}
              >
                Capabilities
              </a>
            </div>
            <a
              href={"/files/Brochure-Aeroguard.pdf"}
              download="Aeroguard Brochure"
              rel="noreferrer"
            >
              <button className="mt-[2rem] lg:mt-0 border hover:border-[#B9CDE9] hover:bg-[#B9CDE9] hover:text-[#004AAD]  border-[#B9CDE9] text-[#B9CDE9] font-semibold px-4 py-2 rounded-md">
                Download Brochure
              </button>
            </a>
          </div>
        </div>
        <div className=" border-t border-[#B9CDE9] border-opacity-20"></div>
        <div className="container mx-auto px-[2rem] md:px-[3rem]  flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between items-center py-4">
          <p className="text-sm lg:text-[12px] font-light text-[#B9CDE9] tracking-wider ">
            {" "}
            Copyright &copy; 2025{" "}
          </p>
          <p className="text-sm lg:text-[12px] font-light text-center text-[#B9CDE9] tracking-wider ">
            {" "}
            Aeroguard - 360 Services | All rights reserved{" "}
          </p>
          <p className="text-sm lg:text-[12px] font-light text-[#B9CDE9] tracking-wider ">
            Powered by{" "}
            <a
              href="https://ablesoftwaresolutions.com/"
              target="_blank"
              className="underline cursor-pointer"
            >
              Able Software Solutions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
