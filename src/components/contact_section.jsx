import React, { useRef, useEffect, useState } from "react";
import ReactGA from "react-ga4";

const ContactUsSection = () => {
  const [inView, setInView] = useState(false); // Track visibility
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
      { threshold: 0.4 } // Trigger when 50% of the element is visible
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

  const sendEmail = async (userEmail, subject, message, fullName) => {
    try {
      const response = await fetch(
        "https://www.aeroguard360services.com/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail,
            subject,
            message,
            fullName,
          }),
        }
      );

      const data = await response.json();
      console.log("Response:", data);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const [userEmail, setUserEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    ReactGA.event({
      category: "engagement",
      action: "form_submission",
      label: "Contact Form",
    });
    setIsLoading(true);
    if (!userEmail || !subject || !message || !fullName) {
      alert("Please fill all fields");
      setIsLoading(false);

      return;
    }
    sendEmail(userEmail, subject, message, fullName).then(() => {
      setIsLoading(false);
    });
  };
  return (
    <div
      ref={sectionRef}
      style={{
        position: "relative",
      }}
      className=" bg-[#004AAD] bg-opacity-50 lg:bg-left w-full min-h-[40vh] px-6 md:px-12"
    >
      <div
        style={{
          // backgroundImage: "url('/grp1.png')",
          backgroundImage: "url('/contactus_hero.webp')",

          // backgroundImage: "url('/amain.jpg')",
          opacity: 0.8,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Make background image fixed
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "black",
          opacity: 0.5,
          zIndex: 1,
        }}
      ></div>
      <div className="container py-16  lg:py-24 mx-auto  md:px-[3rem]  flex flex-col lg:flex-row space-y-6 lg:space-x-[2rem]  lg:space-y-0 lg:justify-between items-center min-h-[70vh]">
        <div className="flex flex-col justify-center lg:items-start items-center lg:justify-start  text-center md:text-left relative z-10">
          {/* Titlasdasde */}
          <h2
            className={`${
              inView ? "ts-fadeInUp" : "opacity-0"
            } text-3xl md:text-4xl font-bold text-white mb-4`}
          >
            Ready to Elevate Your Fleet's Efficiency?
          </h2>
          {/* Subtitle */}
          <p
            className={`${
              inView ? "ts-fadeInUp" : "opacity-0"
            } text-sm  lg:text-[16px]  tracking-wider  leading-6 text-gray-200 mb-2 lg:mb-8`}
          >
            Reach out to explore tailored solutions for defence and commercial
            aviation.
          </p>
          {/* <div className="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start space-y-4 md:space-y-0 w-full">
             <a
              href="#contactus"
              className="inline-block border border-[#004AAD] text-[#fff] text-md font-medium py-3 px-8 rounded-full bg-[#004AAD] transition duration-300"
            >
              Contact Us
            </a>
          </div> */}
          <div
            className={`${
              inView ? "ts-fadeInUp" : "opacity-0"
            }  pt-[2rem] flex flex-col justify-center items-center lg:justify-start lg:items-start w-[100vw] lg:w-[100%]`}
          >
            <div className="flex justify-center  lg:justify-start space-x-2 lg:space-x-4 items-center mb-8">
              <img
                src="/icons/location.svg"
                alt="Sourcing Icon"
                className="w-7 h-7 "
              />
              <p className="text-sm lg:text-[16px] text-gray-200">
                IFZA properties, Dubai Silicon Oasis, UAE
              </p>
            </div>
            {/* <div className="flex justify-center  lg:justify-start space-x-4 items-center mb-8">
              <img
                src="/icons/phone.svg"
                alt="Sourcing Icon"
                className="w-6   h-6   "
              />
              <p className="text-sm lg:text-[16px] text-gray-200">
                977978979879{" "}
              </p>
            </div> */}
            <div className="flex justify-center  lg:justify-start space-x-4 items-center mb-8">
              <img
                src="/icons/email.svg"
                alt="Sourcing Icon"
                className="w-7 h-7 "
              />
              <p className="text-sm lg:text-[16px] text-gray-200">
                aeroguard360services@gmail.com{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${
            inView ? "ts-zoomInOut" : "opacity-0"
          }  flex justify-center items-center  z-20 shadow-2xl`}
        >
          <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold text-white tracking-wider text-center mb-4 uppercase">
              Send us a message
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full name"
                className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200 bg-white bg-opacity-40 text-black font-normal placeholder-gray-800"
              />
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200 bg-white bg-opacity-40 text-black font-normal placeholder-gray-800"
              />
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200 bg-white bg-opacity-40 text-black font-normal placeholder-gray-800"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                rows="4"
                className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200 bg-white bg-opacity-40 text-black font-normal placeholder-gray-800"
              ></textarea>
              <button
                type="submit"
                onClick={onHandleSubmit}
                className="w-full py-2 border hover:border-[#004AAD] border-gray-200 text-white   rounded-md hover:bg-[#004AAD]  transition-all duration-300"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
