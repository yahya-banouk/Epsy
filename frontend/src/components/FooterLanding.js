import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <br />
            <h6 className="text-uppercase fw-bold mb-4">Company name</h6>
            <p>
              Here you can find your therapist, your psychologue and your coach.
              We are happy for your visit to our website, Wlecome anytime.
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <br />
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="/Register" className="text-reset">
                SingUp
              </a>
            </p>
            <p>
              <a href="/Login" className="text-reset">
                SignIn
              </a>
            </p>
            <p>
              <a href="/landing" className="text-reset">
                Home
              </a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <br />
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3"></i> MOrocco, Rabat , ENSIAS
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              MiolaPSY@ensias.com
            </p>
            <p>
              <i className="fas fa-phone me-3"></i> +21262154879
            </p>
          </div>
        </div>
      </div>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 MIOLACopyright:
        <a className="text-reset fw-bold" href="/">
          MiolaEPSY.com
        </a>
      </div>
    </MDBFooter>
  );
};
