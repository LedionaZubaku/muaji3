import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Spinner, Card, Row, Col } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css'; // Import your custom CSS file for animations

const SunTimes = () => {
    const [sunTimes, setSunTimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSunTimes = async () => {
            try {
                const response = await axios.get('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=1990-05-01&formatted=0');
                setSunTimes(response.data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching sun times:', error);
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchSunTimes();
    }, []);

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

            {/* Main content */}
            <Container className="mt-5">
                <h1 className="mb-3">Sunrise & Sunset Teller</h1>
                {loading ? (
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                ) : error ? (
                    <div className="text-danger">{error}</div>
                ) : (
                    <Table striped bordered hover responsive className="fadeIn"> {/* Apply class for animation */}
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Sunrise</th>
                                <th>Sunset</th>
                                <th>First Light</th>
                                <th>Last Light</th>
                                <th>Dawn</th>
                                <th>Dusk</th>
                                <th>Solar Noon</th>
                                <th>Golden Hour</th>
                                <th>Day Length</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{sunTimes.date}</td>
                                <td>{sunTimes.sunrise}</td>
                                <td>{sunTimes.sunset}</td>
                                <td>{sunTimes.civil_twilight_begin}</td>
                                <td>{sunTimes.civil_twilight_end}</td>
                                <td>{sunTimes.nautical_twilight_begin}</td>
                                <td>{sunTimes.nautical_twilight_end}</td>
                                <td>{sunTimes.astronomical_twilight_begin}</td>
                                <td>{sunTimes.astronomical_twilight_end}</td>
                                <td>{sunTimes.day_length}</td>
                            </tr>
                        </tbody>
                    </Table>
                )}

                {/* Cards Section */}
                <h2 className="mt-5 mb-3">Facts</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card className="text-white" style={{ backgroundColor: '#F5D041', borderColor: '#F5D041', height: '300px' }}>
                            <Card.Body>
                                <Card.Title>Scientific Explanation</Card.Title>
                                <Card.Text>
                                    Sunrise and sunset occur due to the Earth's rotation on its axis.
                                    As the Earth spins, different parts of the planet are exposed to sunlight or darkness.
                                    When the Sun appears above the horizon in the morning, it's sunrise,
                                    and when it disappears below the horizon in the evening, it's sunset.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-white" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733', height: '300px' }}>
                            <Card.Body>
                                <Card.Title>Colors and Atmosphere</Card.Title>
                                <Card.Text>
                                    The colors observed during sunrise and sunset are primarily due to the scattering of sunlight in the Earth's atmosphere.
                                    During these times, the Sun's rays travel through a thicker layer of the atmosphere,
                                    scattering shorter blue and green wavelengths more than longer red and orange wavelengths.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-white" style={{ backgroundColor: '#FFC300', borderColor: '#FFC300', height: '300px' }}>
                            <Card.Body>
                                <Card.Title>Photography and Tourism</Card.Title>
                                <Card.Text>
                                    Sunrises and sunsets are popular subjects for photography and attract tourists worldwide.
                                    Locations renowned for their scenic views of sunrise and sunset, such as beaches, mountains, and deserts,
                                    often become tourist spots. Photographers seek to capture the fleeting beauty and unique colors of these natural events.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3 mt-4">
                <Container>
                    <p>Services</p>
                </Container>
            </footer>
        </div>
    );
};

export default SunTimes;
