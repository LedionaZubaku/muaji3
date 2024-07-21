// src/Home.js
import React from 'react';
import { Navbar, Nav, Container, Carousel, Accordion, Card, Row, Col, Footer } from 'react-bootstrap';
import './styles.css';
import foto1 from './foto1.jpg';
import foto2 from './foto2.jpg';
import foto3 from './foto3.jpg';
import foto4 from './foto4.jpg';
import foto5 from './foto5.jpg';
import foto6 from './foto6.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ECLIPSE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Home">Home</Nav.Link> 
              
              <Nav.Link as={Link} to="/Services">Services</Nav.Link> 

              <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>

              <Nav.Link as={Link} to="/Biography">Biography</Nav.Link>

              <Nav.Link as={Link} to="/ContactUs">Contact Us</Nav.Link>



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel */}
      <Container className="mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={foto1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={foto2}
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={foto3}
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Accordion */}
      <Container className="mt-4">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Summer 🌞</Accordion.Header>
            <Accordion.Body>
              Summer Time 🌞: Summer bursts forth with warmth and vibrant energy,
              characterized by long days and short nights. Nature is in full bloom,
              with lush green foliage and colorful flowers decorating the landscape.
              People embrace the sunny weather by engaging in outdoor activities like swimming, hiking,
              and picnics. Beaches and parks are bustling with activity as families and friends gather to enjoy
              the pleasant temperatures. The season brings a lively and carefree atmosphere,
              with festivals, barbecues, and vacations adding to the sense of joy and freedom that summer brings.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Winter ❄️</Accordion.Header>
            <Accordion.Body>
              Winter Time ❄️: Winter transforms the world into a frosty wonderland, with cold temperatures,
              short days, and long, cozy nights. Snow blankets the landscape, creating a serene
              and quiet atmosphere, while ice forms intricate patterns on windows. People bundle
              up in layers of warm clothing, and activities like skiing, snowboarding, and ice skating
              become popular pastimes. The holiday season brings festive decorations and gatherings, adding
              warmth and cheer to the chilly weather. Winter’s beauty and tranquility offer a time for reflection
              and a slower pace of life.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      {/* Cards */}
      <Container className="mt-4">
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={foto4} />
              <Card.Body>
                <Card.Title>Full Moon</Card.Title>
                <Card.Text>
                  The full moon, with its luminous glow, has captivated human imagination for millennia. 🌕
                  It occurs when the moon is directly opposite the sun, fully illuminated from our perspective on Earth.
                  This celestial event not only lights up the night sky but also influences tides and has
                  inspired countless myths and legends.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={foto5} />
              <Card.Body>
                <Card.Title>New Moon</Card.Title>
                <Card.Text>
                  New Moon 🌑: This phase occurs when the moon is positioned between the Earth and the sun.
                  The side of the moon that faces Earth is not illuminated, making the moon invisible in the night sky. /
                  The new moon marks the beginning of the lunar cycle and is often associated with new beginnings
                  and setting intentions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={foto6} />
              <Card.Body>
                <Card.Title>Half Moon</Card.Title>
                <Card.Text>
                  At this stage, half of the moon's surface is illuminated by the sun,
                  creating a striking contrast between light and dark. In the First Quarter
                  ,the right half is lit, symbolizing growth as the moon moves toward fullness.
                  In the Last Quarter, the left half is illuminated,
                  representing reflection and release as the moon moves towards the new moon.🌗🌙
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <Container>
          <p>Home</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
