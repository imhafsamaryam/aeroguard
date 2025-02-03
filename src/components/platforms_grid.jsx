import React, { useEffect, useRef, useState } from "react";
import commercialPlatforms from "../pages/commercial_platforms.json";
import specialProducts from "../pages/special_products.json";

const PlatformsGrid = ({ images }) => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ts-fadeInUp");
          entry.target.style.animationDelay = `${index * 0.2}s`; // Apply delay based on image index
          observer.unobserve(entry.target);
        }
      });
    }, options);

    imageRefs.current.forEach((img) => observer.observe(img));

    return () => {
      observer.disconnect();
    };
  }, []);
  const [modalImage, setModalImage] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [animation, setAnimation] = useState(""); // For animation class
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const toggleMenu = (imageSrc) => {
    if (menuOpen) {
      setAnimation("fade-out"); // Trigger fade-out animation
      setTimeout(() => {
        closeModal();
        setMenuOpen(false); // Close the menu after animation
        setAnimation(""); // Reset animation class
      }, 500); // Match animation duration (0.5s)
    } else {
      setMenuOpen(true);
      setAnimation("fade-in"); // Trigger fade-in animation
      openModal(imageSrc);
    }
  };

  return (
    <div className="container mx-auto px-[1rem] md:px-[3rem]  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <>
            {" "}
            <div
              key={index}
              className="relative group flex flex-col items-center"
            >
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={image.imageSrc}
                alt={image.title}
                className={`w-full ${
                  images === specialProducts ? " h-[80%]" : "h-full"
                } object-cover  rounded-xl shadow-md  opacity-0`}
              />

              {/* Overlay and content on hover */}
              <div
                className={`absolute inset-0  ${
                  images === specialProducts ? " h-[80%]" : "h-full"
                } bg-black opacity-0 group-hover:opacity-80 rounded-xl transition-opacity duration-300 flex items-center justify-center flex-col`}
              >
                {
                  <h3 className="text-white text-lg font-semibold opacity-100 hidden md:block">
                    {image.title}
                  </h3>
                }
                <button
                  onClick={() => toggleMenu(image.imageSrc)}
                  // onClick={toggleMenu}
                  className="mt-4  bg-white  text-gray-600 text-sm lg:text-[16px] tracking-wider leading-6 font-semibold px-4 py-2 rounded-full"
                >
                  View Image
                </button>
              </div>
            </div>
            <h3 className=" text-gray-600 text-sm md:hidden lg:text-md tracking-wider leading-6 text-center">
              {image.title}{" "}
            </h3>
          </>
        ))}
      </div>

      {/* Modal */}
      {/* Modal */}
      {/* {modalImage && ( */}
      {(menuOpen || animation === "fade-out") && (
        <div
          className={`fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-500 ${animation}`}
        >
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-black bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Full View"
              className={`w-[90vw] ${
                images === specialProducts ? "lg:w-[30vw]" : "lg:w-[70vw]"
              }  h-[40vh] lg:h-[80vh] object-cover rounded-xl shadow-lg`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatformsGrid;
