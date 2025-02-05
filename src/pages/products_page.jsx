import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactUsSection from "../components/contact_section";
import SingleServiceHero from "../components/services/single_service_hero";
import SingleServiceLayout from "../components/services/single_service_layout";
import AboutUsHero from "../components/aboutus/aboutus_hero";
import StickyTabs from "../components/services/services_tabs";

const ProductsPage = () => {
  return (
    <div>
      <Navbar />
      <SingleServiceHero
        pageTitle={"Products "}
        imgSrc={"/stock_images/products_service.webp"}
      />
      {/* <AboutUsHero
        title1={" Delivering 360°"}
        title2={"Aviation Support."}
        desc={
          " Your strategic partner in aircraft maintenance, repair, and overhaul (MRO), ensuring airworthiness for defence and commercial aviation."
        }
        btnText={"Learn More"}
        imgSrc={"/engine12.webp"}
      /> */}
      <SingleServiceLayout
        overviewText={
          "At Aeroguard, we take pride in offering a comprehensive portfolio of high-quality aviation products tailored to meet the diverse needs of commercial fleets. Our product range includes OEM-certified spare parts, machinery, assemblies, and consumables, ensuring that your aircraft remains operational and compliant with industry standards."
        }
        imgSrc={"/stock_images/products_page.webp"}
        secondTitle={"Explore Aviation Essentials"}
        secondDesc1={
          "We offer an extensive inventory of aviation products, including OEM-certified spare parts, consumables, and specialized equipment. Our catalog encompasses a wide range of components, from avionics and landing gear to cabin interiors and engine parts.  We have a well-oiled and updated network for sourcing hard-to-find spares and components, even some that are not listed on the ILS and other sourcing tools. "
        }
        secondDesc2={
          "We pride ourselves on our ability to source even the most hard-to-find items, ensuring that our clients have access to the parts they need to maintain optimal aircraft performance. All products are accompanied by the necessary certifications and warranties, providing assurance of their quality and authenticity."
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
                    Extensive Sourcing Network:
                  </span>
                  <span>
                    {" "}
                    Leveraging a robust global network, we specialize in
                    acquiring even the most challenging-to-find or obsolete
                    components, ensuring operational continuity for our clients.
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
                    Diverse Product Portfolio:
                  </span>
                  <span>
                    {" "}
                    From avionics to hydraulic systems, we supply a wide array
                    of components designed for fixed-wing and rotary-wing
                    aircraft.
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
                    Certified and Reliable Solutions:
                  </span>
                  <span>
                    {" "}
                    All our products, including new, overhauled, and repaired
                    units, come with OEM certification, guaranteeing quality,
                    safety, and reliability.{" "}
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
                    Commitment to Excellence:{" "}
                  </span>
                  <span>
                    {" "}
                    Our mission is to ensure seamless operations by providing
                    reliable products and solutions that enhance aircraft
                    performance, reduce downtime, and deliver cost-effective
                    results. With Aeroguard, you gain a trusted partner
                    committed to the airworthiness of your fleet.
                  </span>
                </div>
              </div>
            </li>
          </ul>
        }
        thirdTitle={" Products Categories:"}
        productsContent={
          <>
            <StickyTabs />
          </>
        }
      />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default ProductsPage;
