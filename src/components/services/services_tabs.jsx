import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../animations.css"; // Import the CSS file for transitions
import products from "./products.json";

const StickyTabs = () => {
  const sectionsRef = useRef([]); // References for content sections
  const tabsRef = useRef(); // Reference for the tabs container
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab
  const [isSticky, setIsSticky] = useState(false); // State to track if tabs are sticky
  const [tabsTopOffset, setTabsTopOffset] = useState(0); // To store the initial position of tabs
  const [lastSectionBottomOffset, setLastSectionBottomOffset] = useState(0); // To store the bottom of the last section

  const tabs = [
    "Airframe Components",
    "Avionics & Electrical Systems",
    "Hydraulic & Pneumatic Systems",
    "Engine & Mechanical Components",
    "Consumables & Fasteners",
    "Seals & Gaskets",
    "Tools & Ground Support Equipment",
    "Structural Components",
    "Filters & Lubrication Systems",
  ];

  // Extract query parameters or state from React Router
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  //   const hasTabInPath = location.pathname.includes("tab");
  const initialTab = parseInt(searchParams.get("tab"));

  // Scroll to the section when a tab is clicked
  const handleTabClick = (index) => {
    sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });
    setActiveTab(index);
  };

  // Handle scroll to detect active tab and manage sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Enable sticky only between the initial tabs position and the last section's bottom offset
      if (
        scrollPosition > tabsTopOffset - 150 &&
        scrollPosition < lastSectionBottomOffset
      ) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Detect active tab based on scroll position
      sectionsRef.current.forEach((section, index) => {
        const sectionTop = section.offsetTop - tabsRef.current.offsetHeight;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveTab(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabsTopOffset, lastSectionBottomOffset]);

  // Store the initial position of the tabs and the last section's bottom offset on first render
  useEffect(() => {
    setTabsTopOffset(tabsRef.current.offsetTop);

    // Calculate the bottom offset of the last section
    const lastSection = sectionsRef.current[sectionsRef.current.length - 1];
    if (lastSection) {
      const lastSectionBottom =
        lastSection.offsetTop + lastSection.offsetHeight;
      setLastSectionBottomOffset(lastSectionBottom);
    }

    // Scroll to the initial tab if provided
    if (sectionsRef.current[initialTab]) {
      sectionsRef.current[initialTab].scrollIntoView({ behavior: "smooth" });
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  return (
    <div className="w-[95%] xl:w-[70%] flex gap-[2rem] items-start justify-between">
      {/* Tabs */}
      <div
        ref={tabsRef}
        className={`hidden sm:flex flex-col justify-start items-start text-left space-y-2 bg-white overflow-x-scroll no-scrollbar sticky top-[5rem] z-10`}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`py-2 text-sm lg:text-md ${
              activeTab === index
                ? "text-[#004AAD] border-b-2 border-[#004AAD]"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1">
        {tabs.map((item, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={`min-h-[70vh] py-[2rem] `}
          >
            <h2 className="text-lg font-semibold mb-12 text-center">{item}</h2>

            {products
              .filter((product) => product.category === item)
              .map((product, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12"
                >
                  {/* Render product details here */}
                  {product.items.map((item, index) => (
                    // <div
                    //   key={index}
                    //   className="flex flex-col justify-center gap-4 items-center"
                    // >
                    //   <img
                    //     src={item.image}
                    //     alt={item.title}
                    //     className="w-16 h-16"
                    //   />
                    //   <h3 className="text-sm lg:text-md text-gray-600 tracking-wider  leading-6 font-semibold text-justify">
                    //     {item.title}
                    //   </h3>
                    //   {/* <p>{item.description}</p> */}
                    // </div>
                    <div
                      key={index}
                      className="flex flex-row justify-start gap-4 items-start"
                    >
                      <img
                        src="/icons/tick.svg"
                        alt="Aeroguard’s global operations and partnerships"
                        className="w-5 h-5 lg:w-6 lg:h-6"
                      />
                      <h3 className="text-sm lg:text-md text-gray-600 tracking-wider  leading-6 font-semibold text-justify">
                        {item.title}
                      </h3>
                      {/* <p>{item.description}</p> */}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyTabs;
