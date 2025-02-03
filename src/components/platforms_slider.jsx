// // import { useState } from "react";
// // import { motion } from "framer-motion";

// // const images = [
// //   {
// //     imageSrc: "/aircraft_images/agusta_westland109.jpg",
// //     title: "Agusta Westland 109",
// //   },
// //   {
// //     imageSrc: "/aircraft_images/bell_212.jpg",
// //     title: "AH-64 Apache",
// //   },
// //   {
// //     imageSrc: "/aircraft_images/Bell-214.jpg",
// //     title: "F-16 Fighting Falcon",
// //   },
// //   {
// //     imageSrc: "/aircraft_images/agusta_westland109.jpg",
// //     title: "C-130 Hercules",
// //   },
// //   {
// //     imageSrc: "/aircraft_images/agusta_westland109.jpg",
// //     title: "Boeing 737",
// //   },
// // ];

// // export default function ImageSlider() {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const prevSlide = () => {
// //     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// //   };

// //   const nextSlide = () => {
// //     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
// //   };

// //   return (
// //     <div className="relative flex items-center justify-center h-[80vh] w-full overflow-hidden">
// //       {/* Left Arrow */}
// //       <button
// //         className="absolute left-4 z-10 bg-white p-2 rounded-full shadow-md"
// //         onClick={prevSlide}
// //       >
// //         Left
// //       </button>

// //       <div className="relative flex w-full justify-center items-center">
// //         {images.map((img, index) => {
// //           const position = index - currentIndex;

// //           let scale = position === 0 ? 1 : 0.6;
// //           let zIndex = position === 0 ? 10 : position > 0 ? 5 : 1;
// //           let translateX = position * 350;

// //           // Ensure previous images move left to avoid overlap
// //           if (position < 0) translateX -= 450;

// //           return (
// //             <motion.div
// //               key={index}
// //               className="absolute flex flex-col items-center"
// //               style={{ zIndex }}
// //               initial={{ scale: 0.8 }}
// //               animate={{ scale, x: translateX }}
// //               transition={{ type: "spring", stiffness: 30, damping: 10 }}
// //               //   transition={{ duration: 1, times: [0, 0.3, 0.7, 1] }}
// //               //   transition={{ type: "tween", duration: 0.6, ease: "anticipate" }}
// //               //   transition={{ ease: "easeInOut", duration: 0.5 }}
// //             >
// //               <div className="relative">
// //                 <img
// //                   src={img.imageSrc}
// //                   alt={img.title}
// //                   className="rounded-lg shadow-lg w-[60vw] h-[80vh] object-cover relative"
// //                 />
// //                 {/* Black overlay for unfocused images */}
// //                 {position !== 0 && (
// //                   <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg"></div>
// //                 )}
// //               </div>
// //             </motion.div>
// //           );
// //         })}
// //       </div>

// //       {/* Title Overlay */}
// //       <motion.p
// //         className="absolute bottom-0 text-lg font-semibold text-center bg-white bg-opacity-75 px-4 py-2 z-20 w-full"
// //         initial={{ opacity: 0, y: 10 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //       >
// //         {images[currentIndex].title}
// //       </motion.p>

// //       {/* Right Arrow */}
// //       <button
// //         className="absolute right-4 z-10 bg-white p-2 rounded-full shadow-md"
// //         onClick={nextSlide}
// //       >
// //         Right
// //       </button>
// //     </div>
// //   );
// // }
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const images = [
//   {
//     imageSrc: "/aircraft_images/agusta_westland109.jpg",
//     title: "Agusta Westland 109",
//   },
//   { imageSrc: "/aircraft_images/bell_212.jpg", title: "AH-64 Apache" },
//   { imageSrc: "/aircraft_images/Bell-214.jpg", title: "F-16 Fighting Falcon" },
//   {
//     imageSrc: "/aircraft_images/agusta_westland109.jpg",
//     title: "C-130 Hercules",
//   },
//   { imageSrc: "/aircraft_images/agusta_westland109.jpg", title: "Boeing 737" },
// ];

// export default function ImageSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [offset, setOffset] = useState(0);
//   const totalImages = images.length;

//   useEffect(() => {
//     const calculateOffset = () => {
//       // Calculate 60vw in pixels
//       const vw = Math.max(
//         document.documentElement.clientWidth || 0,
//         window.innerWidth || 0
//       );
//       const imageWidth = vw * 0.3;

//       // Calculate 10rem in pixels
//       const rootFontSize = parseFloat(
//         getComputedStyle(document.documentElement).fontSize
//       );
//       //   const spacingInRem = 10 * rootFontSize;

//       // Set total offset
//       //   setOffset(imageWidth + spacingInRem);
//       setOffset(imageWidth);
//     };

//     // Calculate initially
//     calculateOffset();

//     // Recalculate on window resize
//     window.addEventListener("resize", calculateOffset);

//     // Cleanup
//     return () => window.removeEventListener("resize", calculateOffset);
//   }, []);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative flex items-center justify-center h-[80vh] w-full overflow-hidden">
//       {/* Left Arrow */}
//       <button
//         className="absolute left-4 z-10 bg-white p-2 rounded-full shadow-md"
//         onClick={prevSlide}
//       >
//         Left
//       </button>

//       <div className="relative flex w-full justify-center items-center">
//         {images.map((img, index) => {
//           let position = index - currentIndex;

//           // Loop backward correctly when currentIndex === 0
//           if (currentIndex === 0 && index === totalImages - 1) {
//             position = -1;
//           } else if (currentIndex === totalImages - 1 && index === 0) {
//             position = 1;
//           }

//           // Hide images that are not prev, current, or next
//           if (position < -1 || position > 1) return null;

//           let scale = position === 0 ? 1 : 0.7;
//           let translateX = position * 350;

//           // Apply dynamic offset based on image width + spacing
//           if (position < 0) translateX -= offset;
//           if (position > 0) translateX += offset;

//           return (
//             <motion.div
//               key={index}
//               className="absolute flex flex-col items-center"
//               style={{ zIndex: position === 0 ? 10 : 5 }}
//               initial={{ scale: 0.7, x: translateX, opacity: 0 }}
//               animate={{ scale, x: translateX, opacity: 1 }}
//               transition={{ type: "spring", stiffness: 30, damping: 10 }}
//             >
//               <div className="relative">
//                 <img
//                   src={img.imageSrc}
//                   alt={img.title}
//                   className="rounded-lg shadow-lg w-[60vw] h-[50vh] lg:h-[80vh] object-cover relative"
//                 />
//                 {/* Black overlay for unfocused images */}
//                 {position !== 0 && (
//                   <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg"></div>
//                 )}
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Title Overlay */}
//       <motion.p
//         className="absolute bottom-0 text-lg font-semibold text-center bg-white bg-opacity-75 px-4 py-2 z-20 w-full"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {images[currentIndex].title}
//       </motion.p>

//       {/* Right Arrow */}
//       <button
//         className="absolute right-4 z-10 bg-white p-2 rounded-full shadow-md"
//         onClick={nextSlide}
//       >
//         Right
//       </button>
//     </div>
//   );
// }
