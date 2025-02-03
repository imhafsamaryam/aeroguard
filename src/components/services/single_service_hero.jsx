import React, { useRef, useState } from "react";
import "../animations.css"; // Import the CSS file for transitions
import AnimatedComponent from "../animated_component";

const SingleServiceHero = ({ pageTitle, imgSrc }) => {
  const [inView, setInView] = useState(false); // Track visibility
  const sectionRef = useRef(null);

  return (
    <AnimatedComponent
      setInView={setInView}
      sectionRef={sectionRef}
      component={
        <section id="SingleServiceHero" className="relative " ref={sectionRef}>
          <div className="h-[70vh] ">
            {/* Background Image */}
            <div
              className={"absolute  inset-0  bg-center bg-cover"}
              style={{
                backgroundImage: `url(${imgSrc})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center container   mx-auto px-[1rem] md:px-[3rem]">
              <h1
                className={`${
                  inView ? "ts-fadeInUp" : "opacity-0"
                } text-3xl lg:text-6xl font-bold text-white text-center `}
              >
                {pageTitle}
              </h1>

              <div className="  mt-4 ml-4 text-white">
                <nav aria-label="breadcrumb">
                  <ol className="list-none p-0 inline-flex ">
                    <li className="flex items-center justify-center">
                      <a href="/" className="text-white hover:underline">
                        Home
                      </a>
                      <svg
                        className="w-4 h-4 mx-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </li>
                    <li className="flex items-center">
                      <a
                        href="/services"
                        className="text-white hover:underline"
                      >
                        Services
                      </a>
                      <svg
                        className="w-4 h-4 mx-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#B9CDE9]">{pageTitle}</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
      }
    />
  );
};

export default SingleServiceHero;
