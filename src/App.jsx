// import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./styles/index.scss";
// import ScrollToTop from "./components/common/ScrollTop";
import "bootstrap/dist/js/bootstrap";
import { Route, Routes } from "react-router-dom";
import Insurance from "./pages/home/insurance";
// import RealEstate from "./pages/home/rashi-granite";
// import AboutUsV2 from "./pages/pages-menu/about-us-v2";
// import ServiceV2 from "./pages/pages-menu/gallery";
// import TeamV1 from "./pages/pages-menu/team-v1";
// import TeamV2 from "./pages/pages-menu/team-v2";
// import LogIn from "./pages/login";
// import TnC from "./pages/TnC";
// import Privacy from "./pages/privacy-policy";
// import SignUp from "./pages/signup";
import NotFound from "./pages/404";
// import PortfolioV1 from "./pages/portfolio/portfolio-v1";
// import PortfolioV2 from "./pages/portfolio/inventory";
// import PortfolioV4 from "./pages/portfolio/portfolio-v4";
// import PortfolioV5 from "./pages/portfolio/portfolio-v5";
// import PortfolioV3 from "./pages/portfolio/portfolio-v3";
// import PortfolioV6 from "./pages/portfolio/portfolio-v6";
// import PortfolioV7 from "./pages/portfolio/portfolio-v7";
// import DynamicPortfolioDetails from "./pages/portfolio/portfolio-single";
import ContactV4 from "./pages/contact/contact-v4";
// import ScrollTopBehaviour from "./components/common/ScrollTopBehavier";
function App() {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 1200,
  //   });
  // }, []);

  return (
      <Routes>
        <Route index element={<Insurance />} />
        {/* <Route path="home/rashi-granite" element={<RealEstate />} />

        <Route path="about-us-v2" element={<AboutUsV2 />} /> */}
        <Route path="test" element={<>test url</>} />
        {/* <Route path="pages-menu/gallery" element={<ServiceV2 />} />
        <Route path="pages-menu/team-v1" element={<TeamV1 />} />
        <Route path="pages-menu/team-v2" element={<TeamV2 />} />

        <Route path="login" element={<LogIn />} />
        <Route path="TnC" element={<TnC />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="404" element={<NotFound />} /> */}

        {/* <Route path="portfolio/portfolio-v1" element={<PortfolioV1 />} />
        <Route path="portfolio/inventory" element={<PortfolioV2 />} />
        <Route path="portfolio/portfolio-v3" element={<PortfolioV3 />} />
        <Route path="portfolio/portfolio-v4" element={<PortfolioV4 />} />
        <Route path="portfolio/portfolio-v5" element={<PortfolioV5 />} />
        <Route path="portfolio/portfolio-v6" element={<PortfolioV6 />} />
        <Route path="portfolio/portfolio-v7" element={<PortfolioV7 />} />
        <Route path="portfolio/:id" element={<DynamicPortfolioDetails />} /> */}


        <Route path="contact/contact-v4" element={<ContactV4 />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <ScrollTopBehaviour /> */}

      {/* <ScrollToTop /> */}
  );
}

export default App;
