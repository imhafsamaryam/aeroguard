import React, { useRef, useEffect, useState } from "react";

const BenefitsSection = ({
  icon1,
  icon2,
  icon3,
  icon4,
  title1,
  title2,
  title3,
  title4,
  desc1,
  desc2,
  desc3,
  desc4,
}) => {
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
      { threshold: 0.6 } // Trigger when 60% of the element is visible
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
      const delays = [0, 200, 400, 600, 800]; // Delays for each div in milliseconds
      delays.forEach((delay, index) => {
        setTimeout(() => setVisibleIndex(index), delay);
      });
    }
  }, [inView]);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      ref={sectionRef}
    >
      {/* Div 1 */}
      <div
        className={` ${
          visibleIndex >= 0 ? "ts-zoomInOut" : "opacity-0"
        } bg-white rounded-xl py-12 px-0 text-center`}
      >
        <img
          src={icon1}
          alt="Components Icon"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h3 className="text-sm lg:text-md text-gray-600 tracking-wider font-semibold mb-2">
          {title1}{" "}
        </h3>
        <p className="text-gray-600 text-sm lg:text-md tracking-wider leading-6">
          {desc1}
        </p>
      </div>

      {/* Div 2 */}
      <div
        className={` ${
          visibleIndex >= 1 ? "ts-zoomInOut" : "opacity-0"
        } bg-white rounded-xl py-12 px-0 text-center`}
      >
        <img
          src={icon2}
          alt="Sourcing Icon"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h3 className="text-sm lg:text-md text-gray-600 tracking-wider font-semibold mb-2">
          {title2}
        </h3>
        <p className="text-gray-600 text-sm lg:text-md tracking-wider leading-6">
          {desc2}
        </p>
      </div>

      {/* Div 3 */}
      <div
        className={` ${
          visibleIndex >= 2 ? "ts-zoomInOut" : "opacity-0"
        } bg-white rounded-xl py-12 px-0 text-center`}
      >
        <img src={icon3} alt="Cost Icon" className="w-20 h-20 mx-auto mb-4" />
        <h3 className="text-sm lg:text-md text-gray-600 tracking-wider font-semibold mb-2">
          {title3}{" "}
        </h3>
        <p className="text-gray-600 text-sm lg:text-md tracking-wider leading-6">
          {desc3}
        </p>
      </div>

      {/* Div 4 - Center Align Last Row Item */}
      {icon4 != null ? (
        <div
          className={` ${
            visibleIndex >= 3 ? "ts-zoomInOut" : "opacity-0"
          } bg-white rounded-xl py-12 px-0 text-center   lg:col-start-2`}
        >
          <img src={icon4} alt="Cost Icon" className="w-20 h-20 mx-auto mb-4" />
          <h3 className="text-sm lg:text-md text-gray-600 tracking-wider font-semibold mb-2">
            {title4}
          </h3>
          <p className="text-gray-600 text-sm lg:text-md tracking-wider leading-6">
            {desc4}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default BenefitsSection;
