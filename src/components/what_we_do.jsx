import React, { useRef, useEffect, useState } from "react";
import "./animations.css"; // Import the CSS file for transitions

const WhatWeDo = () => {
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
      { threshold: 0.3 } // Trigger when 60% of the element is visible
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
      const delays = [0, 100, 200, 300]; // Delays for each div in milliseconds
      delays.forEach((delay, index) => {
        setTimeout(() => setVisibleIndex(index), delay);
      });
    }
  }, [inView]);

  return (
    <div id="WhatWeDo" className="  " ref={sectionRef}>
      <section>
        <div className="container px-[1.5rem] md:px-[3rem] mx-auto text-center">
          {/* <div className="mb-12 flex justify-between items-start"> */}
          <div className=" flex  flex-col items-center justify-center">
            {" "}
            <h2
              className={`${
                visibleIndex >= 1 ? "ts-fadeInUp" : "opacity-0"
              } text-md lg:text-lg font-semibold text-[#004AAD] mb-4`}
            >
              What We Do
            </h2>
            <h2
              className={`${
                visibleIndex >= 1 ? "ts-zoomInOut" : "opacity-0"
              } w-[90vw] lg:w-[50vw] text-3xl md:text-4xl  font-bold mb-12 `}
            >
              {/* End-to-end support for spare parts, aircraft maintenance, and
              overhauls{" "} */}
              Holistic Solutions for Spare Parts, Aircraft Maintenance, and
              Overhaul Management
            </h2>
          </div>
          {/* <p className="text-gray-600 text-sm tracking-wider leading-6 w-[40vw] text-left">
              Our mission is to provide specialist support and sincere services
              to ensure the airworthiness of aircrafts serving defence and
              commercial purposes. Our goal is to provide the widest selection
              Of quality aviation products on time at economical pricing
            </p> */}
          {/* </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Div 1 */}
            <div
              className={`bg-white rounded-xl p-6 text-center border border-[#B9CDE9]  hover:shadow-lg ${
                visibleIndex >= 1 ? "ts-slideLeft-Right" : "opacity-0"
              }`}
            >
              <img
                src="/icons/spares.svg"
                alt="Components Icon"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                Spares and Supplies
              </h3>
              <p className="text-gray-600 text-sm lg:text-md  tracking-wider leading-6">
                {/* Aeroguard is your trusted partner for procuring spares,
                machinery, and consumables for both military and commercial
                fixed-wing and rotary aircraft. With a robust and well-connected
                network, we specialize in sourcing even the obsolete parts,
                including those not listed on conventional sourcing platforms
                like ILS. */}
                Aeroguard serves as your reliable partner for sourcing spare
                parts, machinery, and consumables for both military and
                commercial fixed-wing and rotary aircraft. Leveraging a strong
                and expansive network, we specialize in acquiring even
                hard-to-find or obsolete parts, including those not readily
                available on traditional sourcing platforms like ILS.
              </p>
            </div>

            {/* Div 2 */}
            <div
              className={` bg-white rounded-xl p-6 text-center border border-[#B9CDE9]  hover:shadow-lg ${
                visibleIndex >= 2 ? "ts-fadeInUp" : "opacity-0"
              }`}
            >
              <img
                src="/icons/certificate.svg"
                alt="Sourcing Icon"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                Certified and Cost Effective
              </h3>
              <p className="text-gray-600 text-sm lg:text-md  tracking-wider leading-6">
                {/* We provide cost-effective solutions with certified overhauled
                and repaired units. Our new units come with OEM certification,
                and we also supply OEM replacement parts. Trust us to source
                components from OEMs, airlines, workshops, and exchange pools
                with unmatched reliability. */}
                We offer cost-efficient solutions featuring certified overhauled
                and repaired units. Our new units are supplied with OEM
                certification, and we also provide OEM replacement parts. Rely
                on us for sourcing components from OEMs, airlines, workshops,
                and exchange pools, with a commitment to exceptional
                reliability.
              </p>
            </div>

            {/* Div 3 */}
            <div
              className={`bg-white rounded-xl p-6 text-center border border-[#B9CDE9]  hover:shadow-lg ${
                visibleIndex >= 3 ? "ts-slideRight-Left" : "opacity-0"
              }`}
            >
              <img
                src="icons/rely.svg"
                alt="Cost Icon"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Aircraft Support</h3>
              <p className="text-gray-600 text-sm lg:text-md  tracking-wider leading-6">
                {/* We are your trusted partner for ground support and tooling
                equipment, sourced from top manufacturers. Our mission is to
                provide expert support and dedicated services to ensure the
                airworthiness of both defense and commercial aircraft. */}
                As your dedicated partner for ground support and tooling
                equipment, we source high-quality products from leading
                manufacturers. Our goal is to deliver expert support and
                reliable services to ensure the continued airworthiness of both
                defense and commercial aircraft.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
