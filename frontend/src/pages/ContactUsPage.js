import React from "react";
import ContactUs from "../components/ContactUs";
import Navs from "../components/Navs";
import { Footer } from "../components/FooterLanding";

function ContactUsPage() {
  return (
    <div>
      <Navs />
      <div className="mt-3">
        <h1 className="hAbout">Contact Us</h1>
      </div>
      <br />
      <br />
      <ContactUs />
      <Footer />
    </div>
  );
}
export default ContactUsPage;
