import React, { useRef, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutUsHero from "../components/aboutus/aboutus_hero";
import WhoWeAre from "../components/aboutus/who_we_are";
import WhatWeDo from "../components/what_we_do";
import WhyChooseUs from "../components/aboutus/why_choose_us";
import ContactUsSection from "../components/contact_section";
import AnimatedComponent from "../components/animated_component";

const AboutUsPage = () => {
  const [inView, setInView] = useState(false); // Track visibility
  const sectionRef = useRef(null);

  return (
    <div>
      <Navbar />
      {/* <AboutUsHero
        title1={" Delivering 360°"}
        title2={"Aviation Support."}
        desc={
          " Your strategic partner in aircraft maintenance, repair, and overhaul (MRO), ensuring airworthiness for defence and commercial aviation."
        }
        imgSrc={"/stock_images/aboutus_hero.webp"}
      /> */}
      <AnimatedComponent
        setInView={setInView}
        sectionRef={sectionRef}
        component={
          <section id="AboutUsHero" className="relative " ref={sectionRef}>
            <div className="h-[80vh] ">
              {/* Background Image */}
              <div
                className={"absolute  inset-0  bg-center bg-cover"}
                style={{
                  backgroundImage: "url('/stock_images/aboutus_hero.webp')",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-start justify-end container pb-[1rem]  mx-auto px-[1rem] md:px-[3rem]">
                <h1
                  className={`${
                    inView ? "ts-fadeInUp" : "opacity-0"
                  } text-4xl lg:text-6xl font-bold text-white text-opacity-70`}
                >
                  Delivering 360°{" "}
                </h1>
                <h1
                  className={`${
                    inView ? "ts-fadeInUp" : "opacity-0"
                  } text-4xl lg:text-6xl font-bold text-white `}
                >
                  Aviation Support.{" "}
                </h1>

                <p
                  className={`${
                    inView ? "ts-fadeInUp delay-200" : "opacity-0"
                  } mt-4 text-md text-gray-200 lg:max-w-[35vw] `}
                >
                  Your strategic partner in aircraft maintenance, repair, and
                  overhaul (MRO), ensuring airworthiness for defence and
                  commercial aviation.
                </p>
              </div>
            </div>
          </section>
        }
      />
      <WhoWeAre />
      <WhatWeDo />
      <WhyChooseUs />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
