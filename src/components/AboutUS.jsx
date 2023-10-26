// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function AboutUs() {
//     return (
//         <Card style={{ marginTop: "20px" }} className="bg-dark text-white">
//             <Card.Header>About us</Card.Header>
//             <Card.Body>
//                 <Card.Text>
                    // The concept behind "Revolutionary Fusion: Uniting Virtual Velocity
                    // with Real-world Racing - The Ultimate SimuRCar Experience" is to
                    // create an innovative and exciting racing experience that combines the
                    // thrill of simulator racing with the tangible excitement of
                    // remote-controlled (RC) car racing. In this business, participants will
                    // have the opportunity to control actual RC cars equipped with cameras
                    // and sensors through a virtual simulator interface. The virtual
                    // simulator will offer realistic tracks, challenging obstacles, and
                    // stunning visual effects, providing a high-fidelity racing experience.
                    // The RC cars' movements and actions in the real world will be
                    // replicated in the virtual environment, allowing participants to
                    // immerse themselves in an incredibly lifelike racing adventure.
                    // Participants can compete in exhilarating races against each other,
                    // where their driving skills, strategic maneuvers, and precision control
                    // will be put to the test. The fusion of the virtual and real-world
                    // elements will offer an unprecedented level of engagement, enabling
                    // racers to feel the adrenaline rush of real racing combined with the
                    // convenience and accessibility of a virtual setup. With cutting-edge
                    // technology, seamless integration of virtual and real-world racing, and
                    // a wide range of customizable options, "Revolutionary Fusion: Uniting
                    // Virtual Velocity with Real-world Racing - The Ultimate SimuRCar
                    // Experience" promises to redefine the world of racing entertainment and
                    // attract motorsport enthusiasts and gamers alike.
//                 </Card.Text>
//             </Card.Body>
//         </Card>
//     );
// }

// export default AboutUs;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container style={{ marginTop: "20px" }} className="about-us-page">
      <Row>
        <Col>
          <div className="about-us-header">
            <h1>About Us</h1>
                      <p>
                      The concept behind "Revolutionary Fusion: Uniting Virtual Velocity
                    with Real-world Racing - The Ultimate SimuRCar Experience" is to
                    create an innovative and exciting racing experience that combines the
                    thrill of simulator racing with the tangible excitement of
                    remote-controlled (RC) car racing. In this business, participants will
                    have the opportunity to control actual RC cars equipped with cameras
                    and sensors through a virtual simulator interface. The virtual
                    simulator will offer realistic tracks, challenging obstacles, and
                    stunning visual effects, providing a high-fidelity racing experience.
                    The RC cars' movements and actions in the real world will be
                    replicated in the virtual environment, allowing participants to
                    immerse themselves in an incredibly lifelike racing adventure.
                    Participants can compete in exhilarating races against each other,
                    where their driving skills, strategic maneuvers, and precision control
                    will be put to the test. The fusion of the virtual and real-world
                    elements will offer an unprecedented level of engagement, enabling
                    racers to feel the adrenaline rush of real racing combined with the
                    convenience and accessibility of a virtual setup. With cutting-edge
                    technology, seamless integration of virtual and real-world racing, and
                    a wide range of customizable options, "Revolutionary Fusion: Uniting
                    Virtual Velocity with Real-world Racing - The Ultimate SimuRCar
                    Experience" promises to redefine the world of racing entertainment and
                    attract motorsport enthusiasts and gamers alike.
                      </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div className="about-us-section">
            <h2>Our Story</h2>
            <p>Share the history of your company.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="about-us-section">
            <h2>Our Team</h2>
            <p>Introduce key team members with their photos and brief descriptions.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="about-us-section">
            <h2>Our Values</h2>
            <p>Explain your company's core values and principles.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
