import React, { useRef, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactUsSection from "../components/contact_section";
import AnimatedComponent from "../components/animated_component";
import PlatformsSection from "../components/platforms_section";
const PlatformsPage = () => {
  const [inView, setInView] = useState(false); // Track visibility
  const sectionRef = useRef(null);

  return (
    <div>
      <Navbar />
      <AnimatedComponent
        setInView={setInView}
        sectionRef={sectionRef}
        component={
          <section id="PlatformsHero" className="relative " ref={sectionRef}>
            <div className="h-[80vh] ">
              {/* Background Image */}
              <div
                className={"absolute  inset-0  bg-center bg-cover"}
                style={{
                  backgroundImage: "url('/contactus_hero1.webp')",
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
                  Platforms
                </h1>
                <h1
                  className={`${
                    inView ? "ts-fadeInUp" : "opacity-0"
                  } text-4xl lg:text-6xl font-bold text-white `}
                >
                  Serviced{" "}
                </h1>

                <p
                  className={`${
                    inView ? "ts-fadeInUp delay-200" : "opacity-0"
                  } mt-4 text-md text-gray-200 lg:max-w-[35vw] `}
                >
                  From cutting-edge fighter jets to commercial airliners, we
                  provide expert maintenance, repair, and overhaul solutions to
                  keep your fleet mission-ready.
                </p>
              </div>
            </div>
          </section>
        }
      />
      <PlatformsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default PlatformsPage;
