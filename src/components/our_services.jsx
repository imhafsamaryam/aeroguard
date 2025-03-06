import React, { useRef, useEffect, useState } from "react";
import "./animations.css"; // Import the CSS file for transitions

const OurServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which image is hovered
  const [inView, setInView] = useState(false); // Track visibility
  const [inView2, setInView2] = useState(false); // Track visibility
  const [inView3, setInView3] = useState(false); // Track visibility
  const [visibleIndex, setVisibleIndex] = useState(-1); // Control which div is visible
  const [visibleIndex2, setVisibleIndex2] = useState(-1); // Control which div is visible
  const [visibleIndex3, setVisibleIndex3] = useState(-1); // Control which div is visible
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const hasAnimated = useRef(false); // Track if animation has already occurred

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Update visibility state
          // hasAnimated.current = true; // Mark animation as done
        }
      },
      { threshold: window.innerWidth < 1200 ? 0.1 : 0.2 } // Trigger when 60% of the element is visible
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView2(true); // Update visibility state
          // hasAnimated.current = true; // Mark animation as done
        }
      },
      { threshold: window.innerWidth < 1200 ? 0.2 : 0.7 } // Trigger when 60% of the element is visible
    );

    if (sectionRef2.current) {
      observer.observe(sectionRef2.current);
    }

    return () => {
      if (sectionRef2.current) {
        observer.unobserve(sectionRef2.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView3(true); // Update visibility state
          // hasAnimated.current = true; // Mark animation as done
        }
      },
      { threshold: window.innerWidth < 1200 ? 0.2 : 0.7 } // Trigger when 60% of the element is visible
    );

    if (sectionRef3.current) {
      observer.observe(sectionRef3.current);
    }

    return () => {
      if (sectionRef3.current) {
        observer.unobserve(sectionRef3.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const delays = [0, 200, 400, 500, 600]; // Delays for each div in milliseconds
      delays.forEach((delay, index) => {
        setTimeout(() => {
          setVisibleIndex((prev) => {
            return index;
          });
        }, delay);
      });
    }
  }, [inView]);
  useEffect(() => {
    if (inView2) {
      const delays = [0, 200, 400, 500, 600]; // Delays for each div in milliseconds
      delays.forEach((delay, index) => {
        setTimeout(() => {
          setVisibleIndex2((prev) => {
            return index;
          });
        }, delay);
      });
    }
  }, [inView2]);
  useEffect(() => {
    if (inView3) {
      const delays = [0, 200, 400, 500, 600]; // Delays for each div in milliseconds
      delays.forEach((delay, index) => {
        setTimeout(() => {
          setVisibleIndex3((prev) => {
            return index;
          });
        }, delay);
      });
    }
  }, [inView3]);
  const items = [
    {
      number: "01",
      title: "Preventive Maintenance",
      description:
        "Ensure the continued operational efficiency of your fleet with our proactive preventative maintenance services. We identify and resolve potential issues before they become critical, keeping your aircraft airworthy and minimizing downtime. Leveraging our expertise and partnerships with accredited MRO facilities, we optimize your maintenance schedules for maximum efficiency.",
      image: "/stock_images/home_service1.webp",
    },
    {
      number: "02",
      title: "Overhaul Management",
      description:
        "Optimize your overhaul processes with our comprehensive management services. We collaborate with FAA/EASA-certified workshops and OEM partners to ensure fast turnaround times and cost-effective solutions. Receive regular updates on delivery schedules, allowing you to plan operations with greater confidence and efficiency.",
      image: "/stock_images/home_service2.webp",
    },
    {
      number: "03",
      title: "Aircraft on Ground (AOG)",
      description:
        "When unplanned downtime occurs, our AOG services ensure a swift return to operation. By utilizing a global network of OEM-approved MRO shops, we prioritize urgent repairs with prompt estimates and expedited solutions. Our team works diligently to minimize operational disruptions, ensuring your fleet remains mission-ready.",
      image: "/stock_images/home_service3.webp",
    },
  ];

  return (
    <div className="bg-[#B9CDE9] bg-opacity-20">
      {/* Section Title */}
      <div className="container px-[1.5rem] md:px-[3rem] mx-auto py-8 md:py-16 lg:py-24">
        <div className="flex flex-col items-start justify-center">
          <h2
            className={`${
              visibleIndex >= 0 ? "ts-zoomInOut" : "opacity-0"
            } text-md lg:text-lg font-semibold text-[#004AAD] mb-4`}
          >
            Our Services
          </h2>
          <div className="w-full flex flex-col lg:flex-row justify-between">
            <h2
              className={`${
                visibleIndex >= 0 ? "ts-zoomInOut" : "opacity-0"
              } lg:w-[40vw] text-3xl md:text-4xl font-bold mb-12`}
            >
              Precision-Focused Performance: Elevating Aircraft Excellence with
              Streamlined Services
            </h2>
            <p
              className={`${
                visibleIndex >= 0 ? "fade-in" : "opacity-0"
              } lg:w-[40vw] mb-12 lg:mb-0 text-gray-600 text-sm tracking-wider text-justify leading-6`}
            >
              Enhance your aircraft operations with Aeroguard’s expert MRO
              services. We offer comprehensive maintenance solutions, backed by
              a global network of engineering workshops and OEM partnerships.
              Enjoy fast estimates, proactive updates on delivery schedules, and
              efficient management of both preventive and breakdown maintenance.
            </p>
          </div>
        </div>
        {/* Services Grid */}
        <div>
          <div
            ref={sectionRef}
            className={`${
              visibleIndex >= 0 ? "ts-slideLeft-Right" : "opacity-0"
            }  flex flex-col lg:flex-row gap-[1.5rem] lg:gap-[3rem] mb-[4rem] lg:items-start ${"justify-start"}`}
          >
            <div
              className={` h-[60vh] lg:h-[80vh] w-full lg:w-[50vw] fade-in bg-cover bg-center rounded-lg shadow-lg transition-all duration-300 `}
              style={{
                backgroundImage: `url(${items[0].image})`,
                backgroundSize: hoveredIndex == "01" ? "cover" : "cover",
                backgroundPosition: "center",
              }}
              onMouseEnter={() => setHoveredIndex(items[0].number)}
              onMouseLeave={() => setHoveredIndex(null)}
            ></div>
            <div
              className={`${
                visibleIndex >= 3 ? "ts-fadeInUp" : "opacity-0"
              } lg:w-[30vw] relative cursor-pointer`}
            >
              <div className="pt-[2rem] overflow-hidden">
                <div
                  className="absolute top-[0.2rem] left-0 text-transparent text-6xl font-bold"
                  style={{
                    WebkitTextStroke: "2px #B9CDE9",
                  }}
                >
                  {items[0].number}
                </div>
                <div className="relative z-20 pl-[1.5rem] w-full h-full mx-auto">
                  <h3 className="text-xl font-bold mb-2">{items[0].title}</h3>
                  <p className="text-gray-600 text-justify mb-4">
                    {items[0].description}
                  </p>
                  <a href="/services/preventative-maintenance">
                    <button className="border border-[#B9CDE9] text-[#004AAD] font-semibold px-4 py-3 rounded-full">
                      <div className="flex items-center space-x-2">
                        <p className="uppercase text-xs tracking-widest">
                          Read More
                        </p>
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
            </div>
          </div>
          <div
            ref={sectionRef2}
            className={` ${
              visibleIndex2 >= 0 ? "ts-slideRight-Left" : "opacity-0"
            }  flex flex-col lg:flex-row gap-[1.5rem] lg:gap-[3rem] mb-[4rem] lg:items-start ${
              "lg:flex-row-reverse items-end"
              // : "justify-start"
            }`}
          >
            <div
              className="h-[60vh] lg:h-[80vh] w-full lg:w-[50vw] fade-in bg-cover bg-no-repeat bg-center rounded-lg shadow-lg transition-all duration-500"
              style={{
                backgroundImage: `url(${items[1].image})`,
                backgroundSize: hoveredIndex == "02" ? "cover" : "cover",
                backgroundPosition: "center",
              }}
              onMouseEnter={() => setHoveredIndex(items[1].number)}
              onMouseLeave={() => setHoveredIndex(null)}
            ></div>
            <div
              className={`${
                visibleIndex2 >= 3 ? "ts-fadeInUp" : "opacity-0"
              } lg:w-[30vw] relative cursor-pointer`}
            >
              <div className="pt-[2rem] overflow-hidden">
                <div
                  className="absolute top-[0.2rem] left-0 text-transparent text-6xl font-bold"
                  style={{
                    WebkitTextStroke: "2px #B9CDE9",
                  }}
                >
                  {items[1].number}
                </div>
                <div className="relative z-20 pl-[1.5rem] w-full h-full mx-auto">
                  <h3 className="text-xl font-bold mb-2">{items[1].title}</h3>
                  <p className="text-gray-600 text-justify mb-4">
                    {items[1].description}
                  </p>
                  <a href="/services/overhaul-management">
                    <button className="border border-[#B9CDE9] text-[#004AAD] font-semibold px-4 py-3 rounded-full">
                      <div className="flex items-center space-x-2">
                        <p className="uppercase text-xs tracking-widest">
                          Read More
                        </p>
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
            </div>
          </div>
          <div
            ref={sectionRef3}
            className={`${
              visibleIndex3 >= 0 ? "ts-slideLeft-Right" : "opacity-0"
            } flex flex-col lg:flex-row gap-[1.5rem] lg:gap-[3rem] mb-[4rem] lg:items-start ${"justify-start"}`}
          >
            <div
              className="h-[60vh] lg:h-[80vh] w-full lg:w-[50vw] fade-in bg-cover bg-bottom rounded-lg shadow-lg transition-all duration-500"
              style={{
                backgroundImage: `url(${items[2].image})`,
                backgroundSize: hoveredIndex == "03" ? "cover" : "cover",
                backgroundPosition: "center",
              }}
              onMouseEnter={() => setHoveredIndex(items[2].number)}
              onMouseLeave={() => setHoveredIndex(null)}
            ></div>
            <div
              className={`${
                visibleIndex3 >= 3 ? "ts-fadeInUp" : "opacity-0"
              } lg:w-[30vw] relative cursor-pointer`}
            >
              {" "}
              <div className="pt-[2rem] overflow-hidden">
                <div
                  className="absolute top-[0.2rem] left-0 text-transparent text-6xl font-bold"
                  style={{
                    WebkitTextStroke: "2px #B9CDE9",
                  }}
                >
                  {items[2].number}
                </div>
                <div className="relative z-20 pl-[1.5rem] w-full h-full mx-auto">
                  <h3 className="text-xl font-bold mb-2">{items[2].title}</h3>
                  <p className="text-gray-600 text-justify mb-4">
                    {items[2].description}
                  </p>
                  <a href="/services/aircraft-on-ground">
                    <button className="border border-[#B9CDE9] text-[#004AAD] font-semibold px-4 py-3 rounded-full">
                      <div className="flex items-center space-x-2">
                        <p className="uppercase text-xs tracking-widest">
                          Read More
                        </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
