import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUsPage = () => {
  return (
    <Container className="contact-us-page">
      <Row>
        <Col>
          <h1 className="contact-header">Contact Us</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form className="contact-form">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={6} placeholder="Your Message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <div className="contact-info">
            <h2>Our Location</h2>
            <p>123 Main Street</p>
            <p>City, State, ZIP Code</p>
            <p>Country</p>
            <h2>Contact Information</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUsPage;
