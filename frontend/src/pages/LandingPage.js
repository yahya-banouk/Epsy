import React from "react";
import Landing from "../components/Landing";
import Navs from "../components/Navs";
import { Footer } from "../components/FooterLanding";

function LandingPage() {
  return (
    <div>
      <Navs />
      <Landing />
      <Footer />
    </div>
  );
}
export default LandingPage;
