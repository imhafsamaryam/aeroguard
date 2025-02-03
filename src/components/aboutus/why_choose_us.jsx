import React, { useRef, useEffect, useState } from "react";
import "../animations.css"; // Import the CSS file for transitions
const WhyChooseUs = () => {
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
      { threshold: window.innerWidth < 1200 ? 0.2 : 0.6 } // Trigger when 20% of the element is visible
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

  return (
    <div
      className="container    py-8 md:py-16 lg:py-24 mx-auto px-[1rem] md:px-[3rem]"
      ref={sectionRef}
    >
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
        <h2
          className={`${
            visibleIndex >= 1 ? "ts-fadeInUp" : "opacity-0"
          } text-md lg:text-lg font-semibold text-[#004AAD] mb-2`}
        >
          What Sets Us Apart
        </h2>
        <h2
          className={`${
            visibleIndex >= 1 ? "ts-zoomInOut" : "opacity-0"
          } text-2xl md:text-3xl lg:text-4xl text-center font-bold`}
        >
          Why opt for Aeroguard?
        </h2>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="p-4">
          <img
            src="/stock_images/why_us.webp"
            alt="Aeroguard’s global operations and partnerships"
            className={`${
              visibleIndex >= 1 ? "ts-slideLeft-Right" : "opacity-0"
            } w-full h-auto bg-cover rounded-lg shadow-lg`}
          />
        </div>

        {/* Content Section */}
        <div className=" space-y-6">
          {/* Fast Response */}
          <div
            className={`flex  flex-col lg:flex-row items-start gap-4 ${
              visibleIndex >= 1 ? "ts-fadeInUp" : "opacity-0"
            }`}
          >
            <img
              src="/icons/fast.svg"
              alt="Fast Response Icon"
              className={`w-16 h-16`}
            />
            <div>
              <h3 className="text-lg font-semibold">Fast Response</h3>
              <p className="text-gray-600 text-sm tracking-wider text-justify leading-6">
                {/* We are quick to respond to your needs, starting from the very
                first inquiry about availability and estimates. Our deep
                understanding of the urgency and critical nature of your
                requirements ensures that we stay proactive, guaranteeing a
                short turnaround time to minimize operational downtime. */}
                We prioritize prompt responses to your needs, beginning with the
                initial inquiry regarding availability and estimates. With a
                comprehensive understanding of the urgency and critical nature
                of your requirements, we remain proactive and committed to
                delivering swift turnaround times, effectively minimizing
                operational downtime.
              </p>
            </div>
          </div>

          {/* Competitive Pricing */}
          <div
            className={`flex flex-col lg:flex-row items-start gap-4 ${
              visibleIndex >= 1 ? "ts-fadeInUp" : "opacity-0"
            }`}
          >
            <img
              src="/icons/price.svg"
              alt="Competitive Pricing Icon"
              className="w-16 h-16"
            />
            <div>
              <h3 className="text-lg font-semibold">Competitive Pricing</h3>
              <p className="text-gray-600 text-sm tracking-wider text-justify leading-6">
                {/* We excel in sourcing genuine spares at competitive prices.
                Leveraging our extensive reach, we can swiftly identify part
                availability and use our volume of business to negotiate better
                pricing. Our long-term relationships with suppliers also enable
                us to secure cost-effective deals for our clients. */}
                We specialize in procuring authentic spare parts at highly
                competitive prices. By leveraging our extensive network, we
                efficiently identify part availability and capitalize on our
                business volume to negotiate favorable pricing. Our established
                long-term relationships with trusted suppliers further enable us
                to provide cost-effective solutions for our clients.
              </p>
            </div>
          </div>

          {/* Wide Scope */}
          <div
            className={`flex flex-col lg:flex-row items-start gap-4 ${
              visibleIndex >= 1 ? "ts-fadeInUp" : "opacity-0"
            }`}
          >
            <img
              src="/icons/scope.svg"
              alt="Wide Scope Icon"
              className="w-16 h-16"
            />
            <div>
              <h3 className="text-lg font-semibold">Wide Scope</h3>
              <p className="text-gray-600 text-sm tracking-wider text-justify leading-6">
                {/* We strive to be your one-stop solution for all aviation needs.
                Our constantly updated database allows us to locate the parts
                you need quickly. With an extensive network of resources, we
                supply a comprehensive range of rotables, consumables, and other
                critical components to meet your operational requirements. */}
                We aim to be your comprehensive solution for all aviation
                requirements. Our continuously updated database enables us to
                quickly locate the parts you need. Supported by an extensive
                network of resources, we provide a wide range of rotables,
                consumables, and essential components to seamlessly fulfill your
                operational needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
