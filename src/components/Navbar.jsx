import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import '../custom.css';
import SlideShow from './SlideShow';
import CardComponent from './Card';
import AboutUs from './AboutUS';
import ContactUsPage from './ContactUs';


const Action = () => <div>Action Page</div>;
const AnotherAction = () => <div>Another Action Page</div>;
const Something = () => <div>Something Page</div>;
const SeparatedLink = () => <div>Separated Link Page</div>;

const NavbarComponent = () => {
  return (
    <Router>
      <Navbar  bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand as={Link} to="/">MercuryVR</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} to="/features">Products</Nav.Link>
              <Nav.Link as={Link} to="/pricing">About Us</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} as={Link} to="/contactus">Contact us</Nav.Link>
              <Nav.Link as={Link} to="/features">Products</Nav.Link>
              <Nav.Link as={Link} to="/pricing">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<CardComponent />} />
        <Route path="/features" element={<SlideShow />} />
        <Route path="/pricing" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/action" element={<Action />} />
        <Route path="/another-action" element={<AnotherAction />} />
        <Route path="/something" element={<Something />} />
        <Route path="/separated-link" element={<SeparatedLink />} />
      </Routes>
    </Router>
  );
}

export default NavbarComponent;
