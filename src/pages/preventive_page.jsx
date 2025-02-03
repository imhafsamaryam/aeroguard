import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactUsSection from "../components/contact_section";
import SingleServiceHero from "../components/services/single_service_hero";
import SingleServiceLayout from "../components/services/single_service_layout";
import BenefitsSection from "../components/services/benefits_section";

const PreventiveMaintenancePage = () => {
  return (
    <div>
      <Navbar />
      <SingleServiceHero
        pageTitle={"Preventative Maintenance"}
        imgSrc={"/stock_images/preventive_service.webp"}
      />
      <SingleServiceLayout
        imgSrc={"/stock_images/preventive_page.webp"}
        secondTitle={" Proactive Care for Your Fleet"}
        secondDesc1={
          "Our Preventative Maintenance services are meticulously designed to uphold the highest standards of safety and efficiency in aviation operations. By conducting regular inspections and proactive maintenance, we identify potential issues before they escalate, thereby reducing the risk of unexpected failures and costly repairs."
        }
        secondDesc2={
          "  Our team of certified technicians utilizes advanced diagnostic tools and follows stringent protocols to ensure each aircraft component functions optimally. We also maintain detailed maintenance records, facilitating seamless regulatory compliance and providing clients with transparent service histories."
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
                  <span className="font-semibold">Routine Inspections:</span>
                  <span>
                    {" "}
                    Comprehensive checks covering airframe, avionics, and engine
                    systems.
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
                  <span className="font-semibold">Component Replacement:</span>
                  <span> Proactive replacement of wear-prone parts.</span>
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
                  <span className="font-semibold">Performance Testing:</span>
                  <span>
                    {" "}
                    Advanced testing to ensure optimal functionality.
                  </span>
                </div>
              </div>
            </li>
          </ul>
        }
        overviewText={
          "Our Preventative Maintenance services are designed to minimize downtime and enhance aircraft reliability. Through our expertise in regulatory compliance and global network of OEM partners, we ensure all routine inspections, component replacements, and performance evaluations are completed efficiently, keeping your fleet operational.  Preventative Maintenance ensures the continuous airworthiness and reliability of your fleet."
        }
        thirdTitle={" Key Benefits:"}
        thirdCotent={
          <BenefitsSection
            icon1={"/icons/safety.svg"}
            title1={"Enhanced safety and operational readiness."}
            desc1={
              "  Regular inspections and maintenance activities ensure all components are functioning optimally, significantly improving overall safety and reliability of the aircraft."
            }
            icon2={"/icons/reduce.svg"}
            title2={"Reduction in unexpected breakdowns and repairs."}
            desc2={
              "Proactive replacement of wear-prone parts and early detection of issues minimize the risk of unexpected failures, reducing operational disruptions."
            }
            icon3={"/icons/cost_eff.svg"}
            title3={"Improved regulatory compliance and cost-efficiency."}
            desc3={
              "Strict adherence to aviation regulations and efficient maintenance processes help maintain compliance while optimizing costs, ensuring long-term operational savings."
            }
          />
        }
      />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default PreventiveMaintenancePage;
