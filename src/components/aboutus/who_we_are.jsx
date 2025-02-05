import React, { useRef, useEffect, useState } from "react";
import "../animations.css"; // Import the CSS file for transitions
const WhoWeAre = () => {
  const [inView, setInView] = useState(false); // Track visibility
  const [visibleIndex, setVisibleIndex] = useState(-1); // Control which div is visible
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false); // Track if animation has already occurred

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setInView(true); // Update visibility state
          hasAnimated.current = true; // Mark animation as done
          console.log(`width ${window.innerWidth}`);
        }
      },
      { threshold: window.innerWidth < 1200 ? 0.2 : 0.6 } // Trigger based on screen width
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

  useEffect(() => {
    if (inView) {
      const delays = [0, 300, 600, 900]; // Delays for each div in milliseconds
      delays.forEach((delay, index) => {
        setTimeout(() => setVisibleIndex(index), delay);
      });
    }
  }, [inView]);
  return (
    <div
      className="container  py-8 md:py-16 lg:py-24    mx-auto px-[1rem] md:px-[3rem]"
      ref={sectionRef}
    >
      {" "}
      <div className=" flex  flex-col items-center justify-center">
        {" "}
        <h2
          className={` ${
            visibleIndex >= 1 ? "ts-fadeInUp" : "opacity-0"
          } text-md lg:text-lg font-semibold text-[#004AAD] mb-4`}
        >
          Who We Are{" "}
        </h2>
        <h2
          className={` ${
            visibleIndex >= 1 ? "ts-zoomInOut" : "opacity-0"
          } text-3xl md:text-4xl text-center font-bold mb-12 `}
        >
          Leaders in MRO Solutions, Your Global Aviation Partner
        </h2>
      </div>
      <div className="flex flex-col gap-[2rem] xl:flex-row items-center">
        <div className="xl:w-1/2  ">
          <div
            className={` text-justify text-sm lg:text-md ${
              visibleIndex >= 1 ? "ts-fadeInUp" : "opacity-0"
            } `}
          >
            {" "}
            <span className="text-[#004AAD] text-md  ">
              Aeroguard Solutions Pte Ltd,{" "}
            </span>
            <span className="ml-[0.5rem] text-md text-gray-600 tracking-wider  leading-6 ">
              is a specialist and strategic partner to leading defence and
              commercial aviation organization for aircraft maintenance, repair
              and overhaul (MRO).
            </span>
          </div>
          {/* <h2
            className={`text-2xl font-semibold my-4 ${
              visibleIndex >= 1 ? "ts-fadeInUp" : "opacity-0"
            }`}
          >
            Our Mission
          </h2> */}

          <p
            className={`mb-4 text-sm lg:text-md text-gray-600 tracking-wider  leading-6  text-justify ${
              visibleIndex >= 1 ? "ts-fadeInUp" : "opacity-0"
            }`}
          >
            {/* Aeroguard Solutions Pte Ltd, headquartered in Singapore, is a
            trusted partner for leading defence and commercial aviation
            organizations. */}
            Our goal is to provide the widest selection Of quality aviation
            products on time at economical pricing. We can take care of your
            complete requirement for rotables and consumables, and with our
            short-turnaround time and competitive sourcing, you have in us an
            ideal one-stop trusted and long-term supply chain partner.
          </p>
          <ul className=" mb-4">
            <li
              className={`mb-2 ${
                visibleIndex >= 1 ? "ts-fadeInUp" : "opacity-0"
              }`}
            >
              <div className="text-sm lg:text-md text-gray-600 tracking-wider  leading-6 flex gap-2 items-top text-justify">
                <img
                  src="/icons/tick.svg"
                  alt="Aeroguard’s global operations and partnerships"
                  className="w-5 h-5 lg:w-6 lg:h-6"
                />
                <div>
                  {" "}
                  Our expertise spans across providing comprehensive solutions
                  for aircraft maintenance, repair, and overhaul (MRO) services.
                </div>
              </div>
            </li>
            <li
              className={`mb-2 ${
                visibleIndex >= 1 ? "ts-fadeInUp" : "opacity-0"
              }`}
            >
              <div className="text-sm lg:text-md text-gray-600 tracking-wider  leading-6 flex gap-2 items-top text-justify">
                <img
                  src="/icons/tick.svg"
                  alt="Aeroguard’s global operations and partnerships"
                  className="w-5 h-5 lg:w-6 lg:h-6"
                />
                <div>
                  {" "}
                  Managed by industry professionals, we leverage global networks
                  of OEMs and reputed service partners to ensure operational
                  excellence.
                </div>
              </div>
            </li>
            <li
              className={`mb-2 ${
                visibleIndex >= 1 ? "ts-fadeInUp" : "opacity-0"
              }`}
            >
              <div className="text-sm lg:text-md text-gray-600 tracking-wider  leading-6 flex gap-2 items-top text-justify">
                <img
                  src="/icons/tick.svg"
                  alt="Aeroguard’s global operations and partnerships"
                  className="w-5 h-5 lg:w-6 lg:h-6"
                />
                <div>
                  {" "}
                  Our mission is to provide specialist support and sincere
                  services, ensuring the airworthiness of aircraft worldwide.
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="xl:w-1/2 ">
          <img
            src="/stock_images/who_we_are.webp"
            alt="Aeroguard’s global operations and partnerships"
            className={`${
              visibleIndex >= 1 ? "ts-slideRight-Left" : "opacity-0"
            } w-full h-auto bg-cover rounded-lg shadow-lg`}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
