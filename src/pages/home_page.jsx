import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/home_hero";
import WhatWeDo from "../components/what_we_do";
import AboutUs from "../components/about_us";
import OurServices from "../components/our_services";
import Footer from "../components/footer";
import ContactUs from "../components/contact_us";
import ContactUsSection from "../components/contact_section";
import BrandsList from "../components/brands_list";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <div className="sticky top-0   bg-cover bg-top">
         <div
          className={"  absolute inset-0 bg-fixed bg-center bg-cover "}
          style={{
            backgroundImage: "url('/stock_images/bg-1.jpg')",
          }}
        >
           <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-2 lg:px-4"></div> */}
      <AboutUs />
      <WhatWeDo />
      <BrandsList />
      <OurServices />
      <ContactUsSection />
      <Footer />
      {/* </div> */}
    </div>
  );
};

export default HomePage;
