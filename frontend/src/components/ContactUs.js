import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col sm={6}>
          <p className="cardTx">
            Do you have a question, concern, idea, feedback, or problem? U can
            send your question to one of these emails and please specify your
            type of contact for example if you are a registered client and u
            need support mention it or you are a current MiolaPSY therapist and
            you need support or maybe a therapist interested in joining or a
            current applicantion... and we'd be happy to help!
          </p>
        </Col>
        <Col>
          <Card border="primary" style={{ width: "39rem" }}>
            <Card.Body>
              <Card.Title className="cardT">Miola PSY</Card.Title>
              <Card.Text className="cardTx">
                MiolaPSY Website <br />
                <h6 class="text-danger">Emails</h6>
                <a href="https://www.google.com/">Nadiamofid@gmail.com</a>
                <br />
                <a href="https://www.google.com/">HibaBoutarkha@gmail.com</a>
                <br />
                <a href="https://www.google.com/">
                  FatimaZarhraZaglami@gmail.com
                </a>
                <br />
                <a href="https://www.google.com/">NouhailaFahsi@gmail.com</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
