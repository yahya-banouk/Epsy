import React from "react";
import "./Landing.css";
import Carousel from "react-bootstrap/Carousel";
import first from "../assets/pxl1.jpg";
import second from "../assets/pxl2.jpg";
import third from "../assets/pxl3.jpg";
const Landing = () => {
  return (
    <>
      <header>
        <Carousel>
          <Carousel.Item>
            <img className="w-100" src={second} alt="First slide" />
            <Carousel.Caption>
              <h2>
                {" "}
                Affordable, private therapy with MiolaPSY
                <br />
                anytime, anywhere.
              </h2>
              <p>
                {" "}
                If you don't feel good and your're always overthinking you're in
                the right path <br /> we are here to help ,listen and talk to
                you ..
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={third} alt="Second slide" />

            <Carousel.Caption>
              <h2>Private practice with no doors & no overhead.</h2>
              <p>
                You are not your illness. You have an individual story to tell.
                <br />
                You have a name, a history, a personality. Staying yourself is
                part of the battle.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={first} alt="Third slide" />

            <Carousel.Caption>
              <h2>ONE HAND to make a better World</h2>
              <p>
                You don’t have to control your thoughts. You just have to stop
                letting them control you.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </header>
    </>
  );
};

export default Landing;
