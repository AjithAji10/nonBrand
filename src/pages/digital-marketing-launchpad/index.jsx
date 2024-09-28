import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/LandingPageComp/HeroSection";
import Placement from "../../components/LandingPageComp/Placements";
import Certification from "../../components/LandingPageComp/Certifications";
import Training from "../../components/LandingPageComp/Training";
import Leaders from "../../components/LandingPageComp/Leaders";
import Projects from "../../components/LandingPageComp/Projects";
import Tools from "../../components/LandingPageComp/Tools";
import Career from "../../components/LandingPageComp/Career";
import Community from "../../components/LandingPageComp/Community";
import NotesFromFounders from "../../components/BuisnessSalesLeadership/Outcomes/NoteFomFounders";
import Alumni from "../../components/LandingPageComp/Alumni";
import About from "../../components/LandingPageComp/About";
import Logo from "../../images/landingPageImages/logo.webp";
import LeadDetailsForm from "../../components/LandingPageComp/LeadDetailsForm";
import "./styles.scss";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const contactUsTimeout = useRef(null);
  const handleClose = () => {
    setIsOpen(false);
    setHeader("");
  };
  const handleBtnClick = (header) => {
    setIsOpen(true);
    setHeader(header);
  };

  useEffect(() => {
    // contactUsTimeout.current = setTimeout(() => {
    //   setContactUsPopup(true);
    // }, 40 * 1000);

    function handleScroll() {
      const currentScrollPosition = window.pageYOffset;

      setIsHidden(currentScrollPosition < 760); // Change 100 to the number of pixels after which you want to hide the element
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (contactUsTimeout.current) clearTimeout(contactUsTimeout.current);
    };
  }, []);

  return (
    <div className="landing-page">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <img src={Logo} className="logo" />
      <HeroSection />
      <Placement />
      <Certification handleBtnClick={handleBtnClick} />
      <Training handleBtnClick={handleBtnClick} />
      <Leaders handleBtnClick={handleBtnClick} />
      <Projects />
      <Tools handleBtnClick={handleBtnClick} />
      <div className="curiculum-divider">
        Get more details of curriculum & projects
        <button
          className="c-d-btn"
          onClick={() =>
            handleBtnClick("Get Details of Curriculum and Projects")
          }
        >
          Download Brochure
        </button>
      </div>
      <Career />
      <NotesFromFounders />
      <Community />
      <Alumni />
      <div className="curiculum-divider-2">
        Want more understanding of Digital Marketing Careers?
        <button
          className="c-d-btn"
          onClick={() =>
            handleBtnClick("Request for a Callback from our Counselors")
          }
        >
          Book a call with a counselor
        </button>
      </div>
      <About />
      <LeadDetailsForm
        isOpen={isOpen}
        handleClose={handleClose}
        header={header}
        isLoading={false}
      />
      {!isHidden && (
        <div className="lp-page-footer">
          <div className="lp-footer-txt">Enquire Now</div>
          <button
            className="footerbtn"
            onClick={() => handleBtnClick("Get more details")}
          >
            Get more details
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
