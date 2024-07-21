// Biography.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Row, Col, Navbar, Nav, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'; // Import useParams for accessing route parameters
import './styles.css';
import space from './space.jpg'; // Ensure this image path is correct

const Biography = () => {
    const { id } = useParams(); // Access the route parameter :id
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await axios.get('http://api.open-notify.org/astros.json');
                setPeople(response.data.people);
            } catch (error) {
                console.error('Error fetching people data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPeople();
    }, []);

    return (
        <div>
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

            <Container className="mt-4">
                {loading ? (
                    <div className="text-center">
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <Row>
                        {id ? ( // Render individual biography if :id is present
                            <Col sm={12}>
                                <Card>
                                <Card.Img variant="top" src={space} className="img-fluid" style={{ maxHeight: '300px', objectFit: 'cover' }}   />
                                    <Card.Body>
                                        <Card.Title>{people[id].name}</Card.Title>
                                        <Card.Text>
                                             
                                        Born into a family of engineers, their fascination with the cosmos began at an early age, gazing at the night sky from their backyard in suburban Houston. Their journey began with a stellar academic record, graduating at the top of their class from MIT with a dual degree in Aerospace Engineering and Physics. They continued their academic pursuits at Stanford University, earning a PhD in Astrophysics with a groundbreaking thesis on cosmic radiation and its impact on spacecraft and human physiology in prolonged space missions.
In 2010, they were selected as one of NASA's elite astronaut candidates from a highly competitive pool of applicants. Their training was rigorous and comprehensive, encompassing everything from advanced robotics to intensive zero-gravity simulations and survival training in extreme environments.
Their first space mission came in 2013 aboard the Space Shuttle Discovery, where they contributed to the assembly of the International Space Station (ISS) and conducted experiments in microgravity physics. Their meticulous work ethic and adaptability in spacewalks earned them accolades from both colleagues and mission control.
Over the years, they have accumulated over 500 days in space, participating in multiple ISS expeditions and serving as a crucial link in the station's maintenance and scientific research. They have led groundbreaking studies on the effects of cosmic radiation on human DNA, pioneering research that is essential for planning future manned missions to Mars and beyond.
Beyond their scientific endeavors, they are a passionate advocate for STEM education and outreach. They regularly engage with schools, inspiring young minds to pursue careers in science, technology, engineering, and mathematics. Their TED Talks on the future of space exploration have garnered millions of views, making them a global ambassador for space science and discovery.
Their contributions to space exploration have been recognized with numerous awards, including the NASA Distinguished Service Medal and the Carl Sagan Award for Science Communication. Their unwavering dedication to pushing the boundaries of human knowledge and their visionary leadership continue to inspire generations of astronauts and scientists worldwide..
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ) : ( // Render all biographies if :id is not present
                            people.map((person, index) => (
                                <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{person.name}</Card.Title>
                                            <Card.Text>
                                                Craft: {person.craft}
                                            </Card.Text>
                                            <Link to={`/biography/${index}`}>Read More</Link> {/* Link to individual biography */}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        )}
                    </Row>
                )}
            </Container>

            <footer className="bg-dark text-white text-center py-3 mt-4">
                <Container>
                    <p>Biography</p>
                </Container>
            </footer>
        </div>
    );
};

export default Biography;
