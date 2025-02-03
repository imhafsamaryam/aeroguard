import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactUsSection from "../components/contact_section";
import SingleServiceHero from "../components/services/single_service_hero";
import SingleServiceLayout from "../components/services/single_service_layout";
import BenefitsSection from "../components/services/benefits_section";

const OverhaulManagementPage = () => {
  return (
    <div>
      <Navbar />
      <SingleServiceHero
        pageTitle={"Overhaul Management"}
        imgSrc={"/stock_images/overhaul_service.webp"}
      />
      <SingleServiceLayout
        overviewText={
          "We offer comprehensive Overhaul Management services, restoring critical aircraft components to optimal performance. Utilizing OEM-approved facilities and certified workshops, our approach ensures cost efficiency, compliance with international standards, and minimal operational disruptions. We take a structured approach to overhauls, ensuring every component is meticulously disassembled, inspected, repaired, and reassembled to OEM specifications. "
        }
        imgSrc={"/stock_images/overhaul_page.webp"}
        secondTitle={"Revive with Precision"}
        secondDesc1={
          "Our Overhaul Management services encompass a comprehensive approach to restoring aircraft components to their original performance standards. We manage the entire overhaul process, from initial assessment and disassembly to cleaning, inspection, repair, reassembly, and rigorous testing. "
        }
        secondDesc2={
          "By adhering to OEM guidelines and utilizing state-of-the-art facilities, we ensure that each component meets or exceeds industry standards. Our strategic partnerships with certified workshops and suppliers enable us to offer cost-effective solutions without compromising on quality or safety."
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
                    Comprehensive Overhaul Process:
                  </span>
                  <span>
                    Includes inspection, disassembly, cleaning, replacement,
                    reassembly, and rigorous testing.
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
                  <span className="font-semibold">Certified Standards:</span>
                  <span>
                    All overhauls comply with OEM, FAA, and EASA standards,
                    ensuring your aircraft components meet stringent aviation
                    requirements.
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
                    Global Network of Workshops:
                  </span>
                  <span>
                    {" "}
                    Partnerships with certified repair stations for streamlined
                    service delivery.
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
                    Advanced Testing Facilities:
                  </span>
                  <span>
                    {" "}
                    Utilizes cutting-edge diagnostics and testing technologies
                    for precise evaluations.
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
                    Diverse Component Expertise:{" "}
                  </span>
                  <span>
                    {" "}
                    Covers landing gear, hydraulic systems, avionics, pneumatic
                    systems, and more.
                  </span>
                </div>
              </div>
            </li>
          </ul>
        }
        thirdTitle={" Key Benefits:"}
        thirdCotent={
          <BenefitsSection
            icon1={"/icons/reliability.svg"}
            title1={"  Enhanced Reliability"}
            desc1={
              "     Restores critical components to peak performance, reducing failure risks."
            }
            icon2={"/icons/cost_effective.svg"}
            title2={" Cost Efficiency"}
            desc2={
              "    Offers certified overhauled components at competitive pricing, minimizing long-term maintenance costs."
            }
            icon3={"/icons/faster.svg"}
            title3={"                   Shorter Turnaround Time "}
            desc3={
              "  Leverages strategic partnerships to ensure fast completion of overhauls, reducing downtime."
            }
            icon4={"/icons/guarantee.svg"}
            title4={"Regulatory Compliance"}
            desc4={
              "  Guarantees that all overhauled components meet international aviation standards."
            }
          />
        }
      />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default OverhaulManagementPage;
