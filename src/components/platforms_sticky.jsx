// import React, { useRef, useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import "./animations.css"; // Import the CSS file for transitions
// import platforms from "../pages/platforms.json";

// const PlatformsSticky = () => {
//   const sectionsRef = useRef([]); // References for content sections
//   const tabsRef = useRef(); // Reference for the tabs container
//   const [activeTab, setActiveTab] = useState(0); // State to track the active tab
//   const [isSticky, setIsSticky] = useState(false); // State to track if tabs are sticky
//   const [tabsTopOffset, setTabsTopOffset] = useState(0); // To store the initial position of tabs
//   const [lastSectionBottomOffset, setLastSectionBottomOffset] = useState(0); // To store the bottom of the last section

//   // Extract query parameters or state from React Router
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   //   const hasTabInPath = location.pathname.includes("tab");
//   const initialTab = parseInt(searchParams.get("tab"));

//   // Scroll to the section when a tab is clicked
//   //   const handleTabClick = (index) => {
//   //     sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });
//   //     setActiveTab(index);
//   //   };

//   // Handle scroll to detect active tab and manage sticky behavior
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;

//       // Enable sticky only between the initial tabs position and the last section's bottom offset
//       if (
//         scrollPosition > tabsTopOffset - 150 &&
//         scrollPosition < lastSectionBottomOffset
//       ) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }

//       // Detect active tab based on scroll position
//       sectionsRef.current.forEach((section, index) => {
//         const sectionTop = section.offsetTop - tabsRef.current.offsetHeight;
//         const sectionBottom = sectionTop + section.offsetHeight;

//         if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//           setActiveTab(index);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [tabsTopOffset, lastSectionBottomOffset]);

//   // Store the initial position of the tabs and the last section's bottom offset on first render
//   useEffect(() => {
//     setTabsTopOffset(tabsRef.current.offsetTop);

//     // Calculate the bottom offset of the last section
//     const lastSection = sectionsRef.current[sectionsRef.current.length - 1];
//     if (lastSection) {
//       const lastSectionBottom =
//         lastSection.offsetTop + lastSection.offsetHeight;
//       setLastSectionBottomOffset(lastSectionBottom);
//     }

//     // Scroll to the initial tab if provided
//     if (sectionsRef.current[initialTab]) {
//       sectionsRef.current[initialTab].scrollIntoView({ behavior: "smooth" });
//       setActiveTab(initialTab);
//     }
//   }, [initialTab]);

//   return (
//     <div className="  flex gap-[2rem] items-start justify-between">
//       {/* Tabs */}
//       {/* Tab Content */}
//       <div>
//         {platforms.map((item, index) => (
//           <div
//             key={index}
//             ref={(el) => (sectionsRef.current[index] = el)}
//             className={`min-h-[70vh] pb-[2rem] `}
//           >
//             {/* <h2 className="text-lg font-semibold mb-12 text-center">
//               {item.title}
//             </h2> */}
//             <img
//               src={`${item.imageSrc}`}
//               alt="Aeroguard’s global operations and partnerships"
//               className={`${
//                 activeTab == index
//                   ? "w-[80%] h-[60%] ts-fadeInUp"
//                   : "w-[50%] h-[40%] "
//               }`}
//             />
//           </div>
//         ))}
//       </div>{" "}
//       <div
//         ref={tabsRef}
//         className={`hidden sm:flex  flex-col justify-start items-start text-left space-y-2 bg-white overflow-x-scroll no-scrollbar sticky top-[5rem] z-10`}
//       >
//         {platforms.map((item, index) => (
//           <button
//             key={index}
//             // onClick={() => handleTabClick(index)}
//             className={`py-2   text-sm lg:text-md ${
//               activeTab === index
//                 ? "text-[#004AAD] border-b-2 border-[#004AAD]"
//                 : "text-gray-600"
//             }`}
//           >
//             {item.title}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PlatformsSticky;
