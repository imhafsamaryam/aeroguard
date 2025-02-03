import React from "react";
// import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Address Card */}
        <div className="group relative bg-white shadow-lg rounded-lg p-8 flex flex-col items-start hover:bg-blue-100 transition-all duration-300">
          <div className="flex items-center mb-4">
            {/* <MapPinIcon className="h-8 w-8 text-blue-600 group-hover:text-blue-800" /> */}
            <h3 className="ml-4 text-xl font-semibold text-gray-800 group-hover:text-blue-800">
              Address
            </h3>
          </div>
          <p className="text-gray-600 group-hover:text-gray-800">
            123 Aviation Street, Hangar City, TX 56789
          </p>
        </div>

        {/* Email Card */}
        <div className="group relative bg-white shadow-lg rounded-lg p-8 flex flex-col items-start hover:bg-blue-100 transition-all duration-300">
          <div className="flex items-center mb-4">
            {/* <EnvelopeIcon className="h-8 w-8 text-blue-600 group-hover:text-blue-800" /> */}
            <h3 className="ml-4 text-xl font-semibold text-gray-800 group-hover:text-blue-800">
              Email
            </h3>
          </div>
          <p className="text-gray-600 group-hover:text-gray-800">
            contact@aeroguard.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
