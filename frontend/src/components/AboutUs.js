import React from "react";
import { Card, Row, Col } from "react-bootstrap";
const AboutUs = () => {
  return (
    <>
      <br />
      <Card border="primary" style={{ width: "30rem", marginLeft: "550px" }}>
        <Card.Body>
          <Card.Title className="cardT">Our Mission</Card.Title>
          <Card.Text className="cardTx">
            Our Mission Making professional therapy accessible, affordable, and
            convenient — so anyone who struggles with life’s challenges can get
            help, anytime and anywhere.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="primary" style={{ width: "30rem", marginLeft: "550px" }}>
        <Card.Body>
          <Card.Title className="cardT">Our Team</Card.Title>
          <Card.Text className="cardTx">
            We are MIOLIST girls, We are passionate and compassionate Students,
            driven by the mission of helping more people live a better and
            happier life every day. We are always looking to improve ourselves
            in programming that's why we're always open to do like these
            projects. we tried in this project to work with the scrum framework
            to be more agile and to practice it mooore .
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default AboutUs;
