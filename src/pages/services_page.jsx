import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactUsSection from "../components/contact_section";
import ServicesHero from "../components/services/services_hero";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const [inView, setInView] = useState(false); // Track visibility
  const [visibleIndex, setVisibleIndex] = useState(-1); // Control which div is visible
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false); // Track if animation has already occurred
  // const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setInView(true); // Update visibility state
          hasAnimated.current = true; // Mark animation as done
        }
      },
      { threshold: 0.2 } // Trigger when 60% of the element is visible
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
    <div>
      <Navbar />
      <ServicesHero />

      <div className="bg-[#B9CDE9] bg-opacity-20 ">
        <div className="container  mx-auto px-[1rem] md:px-[3rem] py-16 ">
          {" "}
          <h2
            className={` ${
              visibleIndex >= 0 ? "ts-zoomInOut" : "opacity-0"
            } text-3xl md:text-4xl text-center  font-bold mb-12 `}
          >
            Explore Our Services
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={sectionRef}
          >
            {/* Div 1 */}
            <a href="/services/preventative-maintenance">
              <div
                className={`bg-white  p-2 rounded-xl cursor-pointer   hover:shadow-lg  hover:shadow-gray-500/10 ${
                  visibleIndex >= 0 ? "ts-zoomInOut" : "opacity-0"
                }`}
                //   onClick={() => {
                //     navigate(`/services/preventative-maintenance`);
                //   }}
              >
                <img
                  src="/stock_images/preventive_service.webp"
                  alt="Components Icon"
                  className="w-full h-auto rounded-xl  mb-4"
                />
                <div className="px-4 pb-4 pt-2">
                  <div className="flex justify-between items-end">
                    <h3 className="text-lg font-semibold mb-2">
                      Preventative Maintenance{" "}
                    </h3>
                    <button className="border border-[#B9CDE9] text-[#004AAD] font-semibold   p-3 rounded-full">
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
                    </button>
                  </div>
                  <p className="text-gray-600  text-sm lg:text-md  tracking-wider leading-7  line-clamp-4 overflow-ellipsis ">
                    Our Preventative Maintenance solutions are designed to
                    uphold your aircraft's operational readiness and extend its
                    service life. Leveraging partnerships with trusted OEMs and
                    service providers, we offer timely inspections, parts
                    replacement, and performance assessments to prevent
                    unexpected downtimes.
                  </p>
                </div>
              </div>
            </a>
            {/* Div 2 */}
            <a href="/services/overhaul-management">
              <div
                className={` bg-white rounded-xl  p-2 cursor-pointer    hover:shadow-lg  hover:shadow-gray-500/10 ${
                  visibleIndex >= 1 ? "ts-zoomInOut" : "opacity-0"
                }`}
                //   onClick={() => {
                //     navigate(`/services/overhaul-management`);
                //   }}
              >
                {" "}
                <img
                  src="/stock_images/overhaul_service.webp"
                  alt="Components Icon"
                  className="w-full h-auto rounded-xl  mb-4"
                />
                <div className="px-4 pb-4 pt-2">
                  <div className="flex justify-between items-end">
                    <h3 className="text-lg font-semibold mb-2">
                      Overhaul Management{" "}
                    </h3>
                    <button className="border border-[#B9CDE9] text-[#004AAD] font-semibold   p-3 rounded-full">
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
                    </button>
                  </div>
                  <p className="text-gray-600  text-sm lg:text-md  tracking-wider leading-7  line-clamp-4 overflow-ellipsis ">
                    Our Overhaul Management services provide comprehensive
                    solutions for restoring your aircraft components to peak
                    performance. Collaborating with certified repair stations
                    and utilizing OEM-certified parts, we ensure quality and
                    compliance with aviation regulations.
                  </p>
                </div>
              </div>
            </a>
            {/* Div 2 */}
            <a href="/services/aircraft-on-ground">
              {/* Div 3 */}
              <div
                className={`bg-white rounded-xl p-2 cursor-pointer   hover:shadow-lg  hover:shadow-gray-500/10 ${
                  visibleIndex >= 2 ? "ts-zoomInOut" : "opacity-0"
                }`}
                //   onClick={() => {
                //     navigate(`/services/aircraft-on-ground`);
                //   }}
              >
                <img
                  src="/stock_images/aog_service.webp"
                  alt="Components Icon"
                  className="w-full h-auto rounded-xl  mb-4"
                />
                <div className="px-4 pb-4 pt-2">
                  <div className="flex justify-between items-end">
                    <h3 className="text-lg font-semibold mb-2">
                      Aircraft on Ground
                    </h3>
                    <button className="border border-[#B9CDE9] text-[#004AAD] font-semibold   p-3 rounded-full">
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
                    </button>
                  </div>
                  <p className="text-gray-600  text-sm lg:text-md  tracking-wider leading-7  line-clamp-4 overflow-ellipsis ">
                    When time is critical, our Aircraft on Ground (AOG) services
                    provide swift solutions to minimize downtime. With a robust
                    network of suppliers and logistics partners, we ensure
                    urgent delivery of critical parts and services.
                  </p>
                </div>
              </div>{" "}
            </a>
            <a href="/services/products">
              <div
                className={` bg-white rounded-xl p-2 cursor-pointer    hover:shadow-lg  hover:shadow-gray-500/10 ${
                  visibleIndex >= 3 ? "ts-zoomInOut" : "opacity-0"
                }`}
                //   onClick={() => {
                //     navigate(`/services/products`);
                //   }}
              >
                <img
                  src="/stock_images/products_service.webp"
                  alt="Components Icon"
                  className="w-full h-auto rounded-xl  mb-4"
                />
                <div className="px-4 pb-4 pt-2">
                  <div className="flex justify-between items-end">
                    <h3 className="text-lg font-semibold mb-2">Products </h3>
                    <button className="border border-[#B9CDE9] text-[#004AAD] font-semibold   p-3 rounded-full">
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
                    </button>
                  </div>
                  <p className="text-gray-600  text-sm lg:text-md  tracking-wider leading-7  line-clamp-4 overflow-ellipsis ">
                    Our product portfolio includes OEM-certified spares,
                    consumables, and overhauled units tailored to meet diverse
                    aviation needs. We specialize in sourcing hard-to-find parts
                    and provide solutions for commercial aircrafts.
                  </p>
                </div>
              </div>{" "}
            </a>
            <a href="/services/capabilities">
              <div
                className={` bg-white rounded-xl p-2 cursor-pointer    hover:shadow-lg  hover:shadow-gray-500/10 ${
                  visibleIndex >= 4 ? "ts-zoomInOut" : "opacity-0"
                }`}
                //   onClick={() => {
                //     navigate(`/services/capabilities`);
                //   }}
              >
                <img
                  src="/stock_images/capabilities_service.webp"
                  alt="Components Icon"
                  className="w-full h-auto rounded-xl  mb-4"
                />
                <div className="px-4 pb-4 pt-2">
                  <div className="flex justify-between items-end">
                    <h3 className="text-lg font-semibold mb-2">
                      Capabilities{" "}
                    </h3>
                    <button className="border border-[#B9CDE9] text-[#004AAD] font-semibold   p-3 rounded-full">
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
                    </button>
                  </div>
                  <p className="text-gray-600  text-sm lg:text-md  tracking-wider leading-7  line-clamp-4 overflow-ellipsis ">
                    Our capabilities span a wide range of aviation services,
                    from routine maintenance to complex repairs. Backed by a
                    global network of OEMs and repair stations, we deliver
                    unmatched expertise and efficiency.
                  </p>
                </div>
              </div>{" "}
            </a>
          </div>
          {/* /* Services Grid  */}
          {/* <section className=" grid grid-cols-1 md:grid-cols-10 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`${
                  index === 0
                    ? "md:col-span-5"
                    : index === 1
                    ? "md:col-span-5"
                    : index === 2
                    ? "md:col-span-6"
                    : index === 3
                    ? "md:col-span-4"
                    : "md:col-span-5"
                } h-[40vh] rounded-[2rem] relative group overflow-hidden`}
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-0 p-4 bg-white w-[100%]">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">{service.title}</h2>
                    <div
                      className={`relative border border-gray-600 cursor-pointer rounded-full p-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
                    >
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
                    </div>
                  </div>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </section> */}
        </div>
      </div>
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default ServicesPage;
