import React, { useRef, useEffect, useState } from "react";
import "../animations.css"; // Import the CSS file for transitions

const ServicesHero = () => {
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
    <section id="ServicesHero" className="relative " ref={sectionRef}>
      <div className="h-[60vh] lg:h-[80vh] ">
        {/* Background Image */}
        <div
          className={"absolute  inset-0  bg-fixed bg-bottom bg-cover"}
          style={{
            backgroundImage: "url('/stock_images/service_hero.webp",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* Content */}
        {/* <div className="absolute inset-0 flex flex-col items-start justify-end container pb-8 md:pb-16 lg:pb-24 mx-auto px-[1rem] md:px-[3rem]">
          <h1
            className={`${
              inView ? "ts-fadeInUp" : "opacity-0"
            } text-4xl lg:text-6xl font-bold text-white text-opacity-70`}
          >
            Our
          </h1>
          <h1
            className={`${
              inView ? "ts-fadeInUp" : "opacity-0"
            } text-4xl lg:text-6xl font-bold text-white `}
          >
            Services{" "}
          </h1>
          <p
            className={`${
              inView ? "ts-fadeInUp delay-200" : "opacity-0"
            } mt-4 text-md lg:text-xl lg:max-w-[40vw] text-white`}
          >
            Explore our expert solutions designed for precision, performance,
            and reliability.
          </p>
          <button
            className={`${
              inView ? "ts-fadeInUp delay-400" : "opacity-0"
            } mt-6 px-6 py-3 text-white bg-[#004AAD] font-bold rounded-full text-md tracking-wider shadow-lg`}
          >
            View all services{" "}
          </button>
        </div> */}
        <div className="absolute inset-0 flex flex-col items-start justify-end container pb-[1rem]  mx-auto px-[1rem] md:px-[3rem]">
          <h1
            className={`${
              inView ? "ts-fadeInUp" : "opacity-0"
            } text-4xl lg:text-6xl font-bold text-white text-opacity-70`}
          >
            Our{" "}
          </h1>
          <h1
            className={`${
              inView ? "ts-fadeInUp" : "opacity-0"
            } text-4xl lg:text-6xl font-bold text-white `}
          >
            Services{" "}
          </h1>

          <p
            className={`${
              inView ? "ts-fadeInUp delay-200" : "opacity-0"
            } mt-4 text-md text-gray-200 lg:max-w-[35vw] `}
          >
            Explore our expert solutions designed for precision, performance,
            and reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
