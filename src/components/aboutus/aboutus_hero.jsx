import React, { useRef, useEffect, useState } from "react";
import "../animations.css"; // Import the CSS file for transitions

const AboutUsHero = ({ title1, title2, desc, imgSrc, btnText }) => {
  const [inView, setInView] = useState(false); // Track visibility
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false); // Track if animation has already occurred

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setInView(true); // Update visibility state
          hasAnimated.current = true; // Mark animation as done
        }
      },
      { threshold: 0.8 } // Trigger when 50% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="aboutushero"
      className=" bg-[#B9CDE9] bg-opacity-20  flex flex-col justify-center"
      ref={sectionRef}
    >
      <div className="container   mx-auto px-[1rem] md:px-[3rem] pt-[15vh] lg:pt-[20vh] pb-[4rem]    flex flex-col justify-center items-center xl:flex-row    xl:justify-between  ">
        <div className="w-[80vw] xl:w-[40vw]  flex flex-col xl:items-start items-center justify-center">
          <h1
            className={`${
              inView ? "ts-fadeInUp" : "opacity-0"
            } text-3xl xl:text-6xl text-center lg:text-left font-bold`}
          >
            <span className="text-black ">{title1}</span>
            <span className="text-[#004AAD]"> {title2} </span>{" "}
          </h1>
          <p
            className={`${
              inView ? "ts-fadeInDown delay-200" : "opacity-0"
            } mt-4 text-sm lg:text-lg w-[80vw] xl:w-[30vw] text-center pb-[3rem]   xl:text-left`}
          >
            {desc}
          </p>
          {btnText != null ? (
            <a href="#learn-more">
              <button
                className={`${
                  inView ? "ts-fadeInUp delay-400" : "opacity-0"
                } px-6 py-3 border bg-white border-[#004AAD] text-[#004AAD]  font-bold rounded-full text-md lg:text-md tracking-wider shadow-lg`}
              >
                {btnText}{" "}
              </button>
            </a>
          ) : null}
        </div>{" "}
        <div
          className={`${
            inView ? "fade-in delay-400" : "opacity-0"
          } h-[50vh] xl:h-[55vh] xl:w-[40vw] container mx-auto  bg-center  bg-cover   rounded-lg shadow-lg`}
          style={{
            backgroundImage: ` url(${imgSrc})`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default AboutUsHero;
