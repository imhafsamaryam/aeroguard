// import React from "react";

// const AboutUs = () => {
//   return (
//     <div id="AboutUs">
//       <div className="container px-[2rem] md:px-[4rem] h-[100vh] flex flex-col justify-center items-center mx-auto  ">
//         <h2 className="text-4xl font-bold mb-12">About Us</h2>

//         <div className="w-full flex  gap-[6rem] items-center">
//           {" "}
//           <div
//             className={"w-[35vw] h-[70vh] rounded-3xl bg-center bg-cover"}
//             style={{
//               backgroundImage: "url('/e22.jpg')",
//             }}
//           ></div>
//           <div className="  w-[40vw] text-justify mb-12">
//             <span className="text-lg text-[#00003d80]">
//               Aeroguard Solutions Pte Ltd, incorporated in Singapore, is a
//               specialist and strategic partner to leading defence and commercial
//               aviation organization for aircraft maintenance, repair and
//               overhaul (MRO).
//             </span>
//             <span className="  ml-[1rem] text-md">
//               Aeroguard Solutions Pte Ltd, based in Singapore, is a strategic
//               partner for global defense and commercial aviation organizations.
//               Specializing in aircraft maintenance, repair, and overhaul (MRO),
//               we offer comprehensive solutions for rotables, consumables, and
//               more. Our extensive network of OEMs and repair workshops ensures
//               quick turnarounds and unmatched reliability. Trust us to keep your
//               aircraft airworthy and operations seamless.
//             </span>
//           </div>
//           {/* <img
//             src="/repair5.jpg"
//             alt="about us"
//             className="w-[35vw] bg-cover h-[80vh]"
//           /> */}
//           {/* <button className="px-6 py-3 border border-[#004AAD] text-[#004AAD] font-bold rounded-full">
//             Read More{" "}
//           </button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
import React, { useRef, useEffect, useState } from "react";
import "./animations.css"; // Import the CSS file for transitions

const AboutUs = () => {
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
        }
      },
      { threshold: 0.2 } // Trigger when 60% of the element is visible
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
      const delays = [0, 200, 400, 600]; // Delays for each div in milliseconds
      delays.forEach((delay, index) => {
        setTimeout(() => setVisibleIndex(index), delay);
      });
    }
  }, [inView]);

  return (
    <div id="AboutUs" ref={sectionRef}>
      <section>
        <div className="container mx-auto px-[1.5rem] md:px-[3rem] py-16 md:py-24 lg:py-32">
          <h1
            className={`${
              visibleIndex >= 1 ? "ts-fadeInUp" : "opacity-0"
            } w-[85vw] lg:w-[55vw] text-4xl md:text-6xl  font-bold text-gray-900 mb-11 `}
          >
            {/* Everything you need to keep your aircraft airworthy. */}
            {/* Comprehensive aircraft maintenance to guarantee optimal
            airworthiness at all times. */}
            End-to-end solutions to maintain the airworthiness of your aircraft.
          </h1>
          <div
            className={`${
              visibleIndex >= 2 ? "ts-fadeInUp" : "opacity-0"
            } w-full flex flex-col lg:flex-row items-end lg:items-start  justify-between  `}
          >
            <div className="flex  items-start  justify-start ">
              <div className="w-16  border-t-2  mt-4 mr-[1rem]  border-gray-600"></div>{" "}
              <div className="  mb-12 max-w-2xl">
                {" "}
                <span className="text-[#004AAD]  text-lg md:text-xl   ">
                  {/* One-stop trusted & long-term supply chain partner. */}
                  As your trusted, long-term supply chain partner,
                </span>
                <span className="ml-[1rem] text-lg md:text-xl  ">
                  {/* Our mission is to provide specialist support and sincere
                  services to ensure the airworthiness of aircrafts serving
                  defence and commercial purposes. */}
                  we are committed to delivering expert support and dedicated
                  services to ensure the airworthiness of both defense and
                  commercial aircraft.
                </span>
              </div>
            </div>{" "}
            <a href="/aboutus">
              <button className="border border-[#B9CDE9] text-[#004AAD] font-semibold px-4 py-4 rounded-full">
                <div className="flex items-center space-x-2">
                  <p className="uppercase text-xs tracking-widest">Read More</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6h12v12"
                    />
                  </svg>
                </div>{" "}
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
