import React, { useRef, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactUsSection from "../components/contact_section";
import AnimatedComponent from "../components/animated_component";
const ContactUsPage = () => {
  const [inView, setInView] = useState(false); // Track visibility
  const sectionRef = useRef(null);

  return (
    <div>
      <Navbar />
      <AnimatedComponent
        setInView={setInView}
        sectionRef={sectionRef}
        component={
          // <section id="ContactUsHero" className="relative " ref={sectionRef}>
          //   <div className="h-[35vh] ">
          //     {/* Background Image */}
          //     {/* <div
          //       className={"absolute  inset-0  bg-center bg-cover"}
          //       style={{
          //         backgroundImage: "url('/contactus_hero1.webp')",
          //       }}
          //     >
          //        <div className="absolute inset-0 bg-black opacity-60"></div>
          //     </div> */}

          //     {/* Content */}
          //     <div className="absolute inset-0 flex flex-col items-start justify-end container pb-[1rem]  mx-auto px-[1rem] md:px-[3rem]">
          //       <h1
          //         className={`${
          //           inView ? "ts-fadeInUp" : "opacity-0"
          //         } text-3xl lg:text-6xl font-bold text-black text-center `}
          //       >
          //         Contact Us{" "}
          //       </h1>
          //     </div>
          //   </div>
          // </section>
          <section id="ContactUsHero" className="relative " ref={sectionRef}>
            <div className="h-[80vh] ">
              {/* Background Image */}
              <div
                className={"absolute  inset-0 bg-center lg:bg-top bg-cover"}
                style={{
                  backgroundImage: "url('/stock_images/contact_us_heroo.webp')",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-start justify-end container pb-[1rem]  mx-auto px-[1rem] md:px-[3rem]">
                <h1
                  className={`${
                    inView ? "ts-fadeInUp" : "opacity-0"
                  } text-4xl lg:text-6xl font-bold text-white `}
                >
                  Contact Us{" "}
                </h1>
              </div>
            </div>
          </section>
        }
      />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
