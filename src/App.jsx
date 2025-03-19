import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home_page";
import AboutUsPage from "./pages/about_us_page";
import ServicesPage from "./pages/services_page";
import PreventiveMaintenancePage from "./pages/preventive_page";
import OverhaulManagementPage from "./pages/overhaul_page";
import AircraftOnGroundPage from "./pages/aircraft_on_ground_page";
import ProductsPage from "./pages/products_page";
import CapabilitiesPage from "./pages/capabilities_page";
import ContactUsPage from "./pages/contact_us_page";
import PlatformsPage from "./pages/platforms_page";
import ReactGA from "react-ga4";

ReactGA.initialize("G-NPBHRRXW8Z");

function App() {
  const updateTracking = () => {
    ReactGA.pageview(window.location.pathname);

    // window.ga("send", "pageview", {
    //   page: window.location.pathname,
    // });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route component={updateTracking} path="/" element={<HomePage />} />
        <Route
          component={updateTracking}
          path={"/aboutus"}
          element={<AboutUsPage />}
        />
        <Route
          component={updateTracking}
          path={"/services"}
          element={<ServicesPage />}
        />
        <Route
          component={updateTracking}
          path={"/contactus"}
          element={<ContactUsPage />}
        />
        <Route
          component={updateTracking}
          path={"/platforms"}
          element={<PlatformsPage />}
        />
        <Route
          component={updateTracking}
          path={"/services/preventative-maintenance"}
          element={<PreventiveMaintenancePage />}
        />
        <Route
          component={updateTracking}
          path={"/services/overhaul-management"}
          element={<OverhaulManagementPage />}
        />
        <Route
          component={updateTracking}
          path={"/services/aircraft-on-ground"}
          element={<AircraftOnGroundPage />}
        />
        <Route
          component={updateTracking}
          path={"/services/products"}
          element={<ProductsPage />}
        />
        <Route
          component={updateTracking}
          path={"/services/capabilities"}
          element={<CapabilitiesPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React, { useEffect } from "react";
// import "./App.css";

// function App() {
//   const handleContactClick = () => {
//     window.location.href = "mailto:rfq@aeroguardfz.com";
//   };
//   return (
//     <div className="bg_clip">
//       <div className="align_center">
//         <h1 className="text_top">Coming soon</h1>
//         <h1 className="bg_clip_text">Exciting Things Are on the Horizon!</h1>
//         <h1 className="text_bottom">
//           Your trusted partner in defence and commercial aviation maintenance,
//           repair, and overhaul (MRO).
//         </h1>
//         <button className="btn" onClick={handleContactClick}>
//           Contact Us
//         </button>
//       </div>
//       <div className="airplane"></div>
//     </div>
//   );
// }

// export default App;
