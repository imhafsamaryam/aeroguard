import React, { useRef, useEffect, useState } from "react";

import "./animations.css"; // Import the CSS file for transitions
// import PlatformsSticky from "./platforms_sticky";
// import PlatformsSlider from "./platforms_slider";
import PlatformsGrid from "./platforms_grid";
import militaryPlatforms from "../pages/military_platforms.json";
import commercialPlatforms from "../pages/commercial_platforms.json";
import otherPlatforms from "../pages/other_platforms.json";
import specialProducts from "../pages/special_products.json";
import jetAircrafts from "../pages/jet_platforms.json";

const PlatformsSection = () => {
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
      { threshold: 0.1 } // Trigger when 20% of the element is visible
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

  const [activeTab, setActiveTab] = useState("jet");

  const tabs = [
    { id: "jet", label: "Executive Jet Aircrafts/ Private Jet Aircrafts" },
    { id: "military", label: " Helicopters" },
    { id: "commercial", label: "Commercial Aircrafts" },
    { id: "special", label: "Special Products" },
  ];

  return (
    <div
      className="container    py-8 md:py-16 lg:py-24 mx-auto px-[1rem] md:px-[3rem]"
      ref={sectionRef}
    >
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
        {/* <h2
          className={`${
            visibleIndex >= 1 ? "ts-fadeInUp" : "opacity-0"
          } text-md lg:text-lg font-semibold text-[#004AAD] mb-2`}
        >
          What Sets Us Aparts
        </h2> */}
        <h2
          className={`${
            visibleIndex >= 1 ? "ts-zoomInOut" : "opacity-0"
          } text-2xl md:text-3xl lg:text-4xl text-center font-bold`}
        >
          Serviced Commercial Aircrafts
        </h2>
      </div>
      <div className="w-full   mx-auto">
        {/* (/* Tabs Navigation */}
        <div className="container mx-auto flex w-[90vw] overflow-x-scroll md:overflow-x-hidden justify-start md:justify-center  items-center space-x-4 bg-white pb-[2rem] sticky top-[4rem] z-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                sectionRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className={`px-4 py-2 text-gray-600 text-sm font-medium relative ${
                activeTab === tab.id
                  ? "after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#004AAD]"
                  : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="mt-4">
          {activeTab === "military" && (
            <>
              {
                /* <PlatformsSticky /> */
                // <PlatformsSlider />
                <PlatformsGrid images={militaryPlatforms} />
              }
            </>
          )}
          {activeTab === "commercial" && (
            <PlatformsGrid images={commercialPlatforms} />
          )}
          {/* {activeTab === "special" && <PlatformsGrid images={otherPlatforms} />} */}
          {activeTab === "special" && (
            <PlatformsGrid images={specialProducts} />
          )}
          {activeTab === "jet" && <PlatformsGrid images={jetAircrafts} />}
        </div>
      </div>{" "}
    </div>
  );
};

export default PlatformsSection;
