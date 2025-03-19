import AnimatedComponent from "../animated_component";
import "../animations.css"; // Import the CSS file for transitions
import React, { useRef, useState } from "react";

const SingleServiceLayout = ({
  overviewText,
  secondTitle,
  secondDesc1,
  secondDesc2,
  additionalSecondSection,
  imgSrc,
  thirdTitle,
  thirdCotent,
  productsContent,
  brandsSection,
}) => {
  const [inView, setInView] = useState(false); // Track visibility
  const [inView2, setInView2] = useState(false); // Track visibility
  const [inView3, setInView3] = useState(false); // Track visibility
  const [inView4, setInView4] = useState(false); // Track visibility
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  return (
    <div className="container  py-8 md:py-12      mx-auto px-[1rem] md:px-[3rem]">
      <div className="flex flex-col gap-[2rem]   items-center">
        <div className=" w-[95%] xl:w-[70%] ">
          <div className="flex flex-col-reverse lg:flex-row justify-between gap-[2rem] items-center">
            <AnimatedComponent
              sectionRef={sectionRef}
              setInView={setInView}
              component={
                <div
                  className="w-[100%] lg:w-[60%] relative  "
                  ref={sectionRef}
                >
                  {/* Front Side */}
                  <div
                    className={`${
                      inView ? "ts-zoomInOut" : "opacity-0"
                    }   pt-[4rem] overflow-hidden`}
                  >
                    <div
                      className="absolute top-[2.2rem] left-0 text-transparent text-6xl font-bold"
                      style={{
                        WebkitTextStroke: "2px #B9CDE9", // Outline color
                      }}
                    >
                      01{" "}
                    </div>

                    <div className="relative z-20 pl-[1.5rem] w-full h-full  mx-auto  ">
                      <h3
                        c
                        className={`  text-2xl md:text-4xl text-left font-semibold mb-4 `}
                      >
                        {" "}
                        Overview
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`${
                      inView ? "ts-fadeInUp" : "opacity-0"
                    }  text-justify text-sm pb-[1rem] lg:text-md  `}
                  >
                    {" "}
                    <span className=" text-md text-gray-600 tracking-wider  leading-6 ">
                      {overviewText}
                    </span>
                  </div>
                </div>
              }
            />

            <AnimatedComponent
              sectionRef={sectionRef}
              setInView={setInView}
              component={
                <div className="w-[100%] lg:w-[40%]" ref={sectionRef}>
                  <div
                    className={`${
                      inView ? "ts-fadeInUp" : "opacity-0"
                    }   border rounded-md px-4 py-8 flex flex-col items-start justify-center`}
                  >
                    <h4 className="text-lg font-semibold mb-2">
                      Explore More with Our E-Brochure{" "}
                    </h4>{" "}
                    <p className=" text-sm text-gray-600 tracking-wider  leading-6 mb-2 ">
                      Download our comprehensive guide to discover detailed
                      insights about our services and solutions.
                    </p>
                    <a
                      href={"/files/Aeroguard-Brochure.pdf"}
                      download="Aeroguard Brochure"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="border border-[#B9CDE9] text-[#004AAD] font-semibold px-4 py-2 rounded-md">
                        Download
                      </button>
                    </a>
                  </div>
                </div>
              }
            />
          </div>
          {/* Front Side */}
          <AnimatedComponent
            sectionRef={sectionRef2}
            setInView={setInView2}
            component={
              <div ref={sectionRef2}>
                <div
                  className={`${
                    inView2 ? "ts-zoomInOut" : "opacity-0"
                  }   pt-[4rem] overflow-hidden  `}
                >
                  <div
                    className="absolute top-[2.2rem] left-0 text-transparent text-6xl font-bold"
                    style={{
                      WebkitTextStroke: "2px #B9CDE9", // Outline color
                    }}
                  >
                    02{" "}
                  </div>

                  <div className="relative z-20 pl-[1.5rem] w-full h-full  mx-auto  ">
                    <h3
                      c
                      className={`  text-2xl md:text-4xl text-left font-semibold mb-4 `}
                    >
                      {" "}
                      {secondTitle}{" "}
                    </h3>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        <AnimatedComponent
          sectionRef={sectionRef2}
          setInView={setInView2}
          component={
            <div className="w-[95%] xl:w-[70%]  relative" ref={sectionRef2}>
              <div
                className={`${
                  inView2 ? "ts-fadeInUp" : "opacity-0"
                }  h-[70vh] bg-center bg-cover rounded-xl shadow-md `}
                style={{
                  backgroundImage: `url(${imgSrc})`,
                }}
              ></div>
            </div>
          }
        />

        <AnimatedComponent
          sectionRef={sectionRef3}
          setInView={setInView3}
          component={
            <div className="w-[95%] xl:w-[70%]  " ref={sectionRef3}>
              <div className={`${inView3 ? "ts-fadeInUp" : "opacity-0"}  `}>
                {" "}
                <div className={`text-justify text-sm lg:text-md    `}>
                  {" "}
                  <span
                    className={`   my-4 text-sm lg:text-md text-gray-600 tracking-wider  leading-6  text-justify  `}
                  >
                    {secondDesc1}
                  </span>
                </div>
                <p
                  className={`   my-4 text-sm lg:text-md text-gray-600 tracking-wider  leading-6  text-justify  `}
                >
                  {secondDesc2}
                </p>
                {additionalSecondSection}
              </div>
            </div>
          }
        />
        {brandsSection}

        <div className="w-[95%] xl:w-[70%]  ">
          <AnimatedComponent
            sectionRef={sectionRef4}
            setInView={setInView4}
            component={
              <div ref={sectionRef4}>
                <div
                  className={`${
                    inView4 ? "ts-zoomInOut" : "opacity-0"
                  }   pt-[4rem] overflow-hidden  `}
                >
                  <div
                    className="absolute top-[2.2rem] left-0 text-transparent text-6xl font-bold"
                    style={{
                      WebkitTextStroke: "2px #B9CDE9", // Outline color
                    }}
                  >
                    03{" "}
                  </div>

                  <div className="relative z-20 pl-[1.5rem] w-full h-full  mx-auto  ">
                    <h3
                      c
                      className={`  text-2xl md:text-4xl text-left font-semibold mb-4 `}
                    >
                      {" "}
                      {thirdTitle}{" "}
                    </h3>
                  </div>
                </div>
              </div>
            }
          />
          {thirdCotent}
        </div>
        {productsContent}
      </div>
    </div>
  );
};

export default SingleServiceLayout;
