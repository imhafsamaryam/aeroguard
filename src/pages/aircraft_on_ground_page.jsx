import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactUsSection from "../components/contact_section";
import SingleServiceHero from "../components/services/single_service_hero";
import SingleServiceLayout from "../components/services/single_service_layout";
import React, { useRef, useEffect, useState } from "react";
import BenefitsSection from "../components/services/benefits_section";

const AircraftOnGroundPage = () => {
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
      <SingleServiceHero
        pageTitle={"Aircraft-on-Ground(AOG)"}
        imgSrc={"/stock_images/aog_service.webp"}
      />
      <SingleServiceLayout
        overviewText={
          "Our Aircraft on Ground (AOG) services prioritize speed and reliability, ensuring that critical parts and services reach you in the shortest possible time. With a robust supply chain and 24/7 customer support, we help you minimize downtime and keep operations running."
        }
        imgSrc={"/stock_images/aog_page.webp"}
        secondTitle={"Rapid AOG Assistance 24/7 "}
        secondDesc1={
          "In critical AOG situations, our dedicated team is available 24/7 to provide immediate assistance. We understand that time is of the essence, and our rapid response protocol ensures that expert technicians are dispatched promptly to your location. Leveraging a global network of suppliers and logistics partners, we expedite the sourcing and delivery of necessary parts and equipment. "
        }
        secondDesc2={
          "Our goal is to minimize aircraft downtime, ensuring a swift return to service while maintaining the highest safety standards."
        }
        additionalSecondSection={
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
                  <span className="font-semibold">
                    Rapid Response for AOG Situations:
                  </span>
                  <span>
                    {" "}
                    Aeroguard emphasizes quick responses to urgent needs,
                    ensuring minimal delays in restoring grounded aircraft.
                    Their understanding of the urgency behind AOG cases drives
                    their commitment to swift resolutions.
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
                  <span className="font-semibold">
                    Global Sourcing Capability:
                  </span>
                  <span>
                    {" "}
                    Aeroguard leverages a well-established network of OEMs,
                    workshops, and suppliers across the globe to locate and
                    deliver critical spare parts for commercial aircrafts.
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
                  <span className="font-semibold">
                    Reliable Communication and Updates:{" "}
                  </span>
                  <span>
                    {" "}
                    The team provides regular updates on delivery times and
                    progress, enabling clients to make informed decisions and
                    plan operations effectively.
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
                  <span className="font-semibold">
                    Expert Coordination and Logistics:{" "}
                  </span>
                  <span>
                    Aeroguard’s expertise in managing the movement of machinery
                    and assemblies ensures efficient handling of components
                    required to resolve AOG scenarios.
                  </span>
                </div>
              </div>
            </li>
          </ul>
        }
        thirdTitle={" Key Benefits:"}
        thirdCotent={
          <BenefitsSection
            icon1={"/icons/recovery.svg"}
            title1={"Faster Operational Recovery"}
            desc1={
              "The company’s focus on quick response times and reliable delivery ensures grounded aircraft are returned to service as soon as possible."
            }
            icon2={"/icons/trusted.svg"}
            title2={"Trusted Partner for Critical Needs"}
            desc2={
              " With a global network and deep industry expertise, Aeroguard serves as a dependable partner for resolving emergencies efficiently."
            }
            icon3={"/icons/cost_effective.svg"}
            title3={" Cost-Effective Solutions "}
            desc3={
              "    Our strategic sourcing capabilities and partnerships help reduce costs associated with acquiring and delivering necessary parts for AOG cases."
            }
            icon4={"/icons/seamless.svg"}
            title4={" Seamless Operations"}
            desc4={
              "Frequent updates on delivery timelines allow clients to streamline planning and operations, reducing downtime and financial impact."
            }
          />
        }
      />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default AircraftOnGroundPage;
