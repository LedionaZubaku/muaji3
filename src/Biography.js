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
                // Change http to https
                const response = await axios.get('https://api.open-notify.org/astros.json');
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
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/biography">Biography</Nav.Link>
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
                                    <Card.Img variant="top" src={space} className="img-fluid" style={{ maxHeight: '300px', objectFit: 'cover' }} />
                                    <Card.Body>
                                        <Card.Title>{people[id].name}</Card.Title>
                                        <Card.Text>
                                            {/* ... biography text ... */}
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
