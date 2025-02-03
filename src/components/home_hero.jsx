import React, { useRef, useEffect, useState } from "react";
import "./animations.css"; // Import the CSS file for transitions

const Hero = () => {
  const [inView, setInView] = useState(false); // Track visibility
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
      { threshold: 0.6 } // Trigger when 50% of the element is visible
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

  return (
    <section id="home" className="relative" ref={sectionRef}>
      <div className="sticky top-0 h-[110vh] bg-cover bg-top">
        {/* Background Image */}
        <div
          className={"  absolute inset-0 bg-fixed bg-center bg-cover "}
          style={{
            backgroundImage: "url('/stock_images/homer_hero.webp')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-2 lg:px-4">
          <h1
            className={`${
              inView ? "ts-fadeInUp" : "opacity-0"
            } text-3xl lg:text-6xl font-bold`}
          >
            Your Trusted Partner in <br /> Aircraft Maintenance{" "}
          </h1>
          <p
            className={`${
              inView ? "ts-fadeInDown delay-200" : "opacity-0"
            } mt-4 text-md lg:text-xl`}
          >
            {/* From preventive maintenance to hard-to-find spares, we've got you
            covered{" "} */}
            Making More Possible through Preventive Maintenance and Access to
            Hard-to-Find Components.
          </p>
          <a href="/contactus">
            <button
              className={`${
                inView ? "ts-fadeInDown delay-400" : "opacity-0"
              } mt-6 px-6 py-3 bg-[#004AAD] text-white font-bold rounded-full text-md tracking-wider shadow-lg`}
            >
              Contact Us{" "}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
