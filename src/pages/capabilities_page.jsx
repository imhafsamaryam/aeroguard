import React, { useRef, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactUsSection from "../components/contact_section";
import SingleServiceHero from "../components/services/single_service_hero";
import SingleServiceLayout from "../components/services/single_service_layout";
import capabilities from "../components/services/capabilities.json";
import BrandsList from "../components/brands_list";
import AnimatedComponent from "../components/animated_component";

const CapabilitiesPage = () => {
  const [inView, setInView] = useState(false); // Track visibility
  const sectionRef = useRef(null);
  return (
    <div>
      <Navbar />
      <SingleServiceHero
        pageTitle={"Capabilities "}
        imgSrc={"/stock_images/capabilities_service.webp"}
      />

      <SingleServiceLayout
        overviewText={
          "Our capabilities include a full spectrum of aviation services, from routine maintenance to complex system repairs. Leveraging our partnerships with OEMs and certified workshops, we ensure precision, reliability, and adherence to aviation standards."
        }
        imgSrc={"/stock_images/capabilities_page.webp"}
        secondTitle={"Your Trusted Aviation Partner"}
        secondDesc1={
          "Our comprehensive suite of aviation services is designed to meet the diverse needs of our clients. From routine maintenance and repair operations (MRO) to specialized services such as avionics upgrades and structural modifications, we possess the expertise and resources to handle a wide array of aviation requirements."
        }
        secondDesc2={
          "Our team of seasoned professionals is committed to delivering solutions that enhance aircraft performance, ensure regulatory compliance, and extend operational lifespan. We continuously invest in training and technology to stay at the forefront of industry advancements, ensuring that we provide our clients with the most effective and efficient services available."
        }
        additionalSecondSection={
          <>
            <ul className=" mb-4">
              <li className={`mb-2 `}>
                <div className="text-sm lg:text-md text-gray-600 tracking-wider  leading-6 flex gap-2 items-top text-justify">
                  <img
                    src="/icons/tick.svg"
                    alt="Aeroguard’s global operations and partnerships"
                    className="w-5 h-5 lg:w-6 lg:h-6"
                  />
                  <div>
                    {" "}
                    <span className="font-semibold">Routine Maintenance: </span>
                    <span>
                      {" "}
                      Scheduled inspections and performance assessments.
                    </span>
                  </div>
                </div>
              </li>
              <li className={`mb-2 `}>
                <div className="text-sm lg:text-md text-gray-600 tracking-wider  leading-6 flex gap-2 items-top text-justify">
                  <img
                    src="/icons/tick.svg"
                    alt="Aeroguard’s global operations and partnerships"
                    className="w-5 h-5 lg:w-6 lg:h-6"
                  />
                  <div>
                    {" "}
                    <span className="font-semibold">Repair Operations: </span>
                    <span> On-demand repairs with quick turnaround times.</span>
                  </div>
                </div>
              </li>
            </ul>
          </>
        }
        brandsSection={<BrandsList />}
        thirdTitle={"Our Capabilities:"}
        productsContent={
          <AnimatedComponent
            sectionRef={sectionRef}
            setInView={setInView}
            component={
              <div className=" w-[95%] xl:w-[70%]" ref={sectionRef}>
                <div
                  className={`${
                    inView ? "ts-fadeInUp" : "opacity-0"
                  }    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}
                >
                  {capabilities.map((item, index) => (
                    <div key={index}>
                      <div
                        key={index}
                        className="flex flex-row justify-start gap-4 items-start"
                      >
                        <img
                          src="/icons/tick.svg"
                          alt="Aeroguard’s global operations and partnerships"
                          className="w-5 h-5 lg:w-6 lg:h-6"
                        />
                        <h3 className="text-sm lg:text-md text-gray-600 tracking-wider  leading-6 font-semibold ">
                          {item}
                        </h3>
                      </div>
                    </div>
                  ))}{" "}
                </div>
              </div>
            }
          />
        }
      />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default CapabilitiesPage;
