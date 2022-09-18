import React from "react";
import AboutUs from "../components/AboutUs";
import Navs from "../components/Navs";
import { Footer } from "../components/FooterLanding";

function AboutUsPage() {
  return (
    <div>
      <Navs />
      <div>
        <h1 className="hAbout">About Us</h1>
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}
export default AboutUsPage;
