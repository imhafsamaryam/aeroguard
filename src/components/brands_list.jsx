import React, { useRef, useState } from "react";
import "./animations.css"; // Import the CSS file for transitions
import AnimatedComponent from "./animated_component";

const BrandsList = () => {
  const [inView, setInView] = useState(false); // Track visibility
  const sectionRef = useRef(null);

  return (
    <AnimatedComponent
      sectionRef={sectionRef}
      setInView={setInView}
      component={
        <div
          className="container    mx-auto px-[1rem] md:px-[3rem] "
          ref={sectionRef}
        >
          <div
            className={`${
              inView ? "ts-fadeInUp" : "opacity-0"
            }  flex flex-col justify-center items-center   pt-8 md:pt-16 lg:pt-24 pb-4 md:pb-8 lg:pb-16`}
          >
            {/* Section Title */}
            <h2 className="w-[95%] xl:w-[70%]  text-3xl md:text-4xl text-center font-bold mb-6  ">
              Trusted Partners for APU & Engines
            </h2>

            {/* Description */}
            <p className="w-[95%] xl:w-[70%]  my-4 text-sm lg:text-md text-gray-600 tracking-wider  leading-6  text-center">
              We collaborate with leading OEM-certified brands to deliver
              high-quality solutions for APU and engine systems. Our
              partnerships ensure reliability, compliance, and efficient
              performance for your fleet.
            </p>

            <div className="py-8 overflow-hidden relative container mx-auto">
              <div
                className="flex space-x-12 animate-scroll"
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                <img
                  src="/icons/logo_honeywell.svg"
                  alt="Honeywell Logo"
                  className="w-[12rem] h-16"
                />
                <img
                  src="/icons/logo_snecma.svg"
                  alt="Snecma Logo"
                  className="w-[12rem] h-16"
                />
                <img
                  src="/icons/logo_rr.svg"
                  alt="Rolls Royce Logo"
                  className="w-[12rem] h-16"
                />
                <img
                  src="/icons/logo_pw.svg"
                  alt="Pratt & Whitney Logo"
                  className="w-[12rem] h-16"
                />
                <img
                  src="/icons/logo_ge.svg"
                  alt="General Electric Logo"
                  className="w-[12rem] h-16"
                />
                <img
                  src="/icons/logo_textron.svg"
                  alt="Textron Logo"
                  className="w-[12rem] h-16"
                />
                <img
                  src="/icons/logo_lycoming.svg"
                  alt="Lycoming Logo"
                  className="w-[12rem] h-16"
                />
                {/* Duplicate logos for seamless scrolling */}
                <img
                  src="/icons/logo_honeywell.svg"
                  alt="Honeywell Logo"
                  className="w-[12rem] h-16"
                />
                <img
                  src="/icons/logo_snecma.svg"
                  alt="Snecma Logo"
                  className="w-[12rem] h-16"
                />{" "}
                <img
                  src="/icons/logo_rr.svg"
                  alt="Rolls Royce Logo"
                  className="w-[12rem] h-16"
                />
                <img
                  src="/icons/logo_pw.svg"
                  alt="Pratt & Whitney Logo"
                  className="w-[12rem] h-16"
                />
                <img
                  src="/icons/logo_ge.svg"
                  alt="General Electric Logo"
                  className="w-[12rem] h-16"
                />
                <img
                  src="/icons/logo_textron.svg"
                  alt="Textron Logo"
                  className="w-[12rem] h-16"
                />
                <img
                  src="/icons/logo_lycoming.svg"
                  alt="Lycoming Logo"
                  className="w-[12rem] h-16"
                />
              </div>
            </div>

            {/* Call to Action */}
            {/* <div className="text-center mt-8">
        <button
          className={`    px-6 py-3 bg-[#004AAD] text-white font-bold rounded-full text-md tracking-wider shadow-lg`}
        >
          Learn More{" "}
        </button>
      </div> */}
          </div>
        </div>
      }
    />
  );
};

export default BrandsList;
