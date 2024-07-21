import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Row, Col, Navbar, Nav, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';
import prf from './prf.jpg';
import intro from './intro.mp4';
import mockData from './mockData.json'; // Import mock data

const AboutUs = () => {
    const [astronauts, setAstronauts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAstronauts = async () => {
            try {
                const response = await axios.get('https://api.open-notify.org/astros.json');
                setAstronauts(response.data.people);
            } catch (error) {
                console.error("Error fetching the astronauts data:", error);
                setAstronauts(mockData.people); // Use mock data
                setError('Unable to fetch data at the moment. Using mock data.');
            } finally {
                setLoading(false);
            }
        };

        fetchAstronauts();
    }, []);

    return (
        <div>
            {/* ...Navbar code... */}
            <div className="intro-video-container">
                <video autoPlay muted loop className="intro">
                    <source src={intro} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <Container className="mt-4">
                {loading ? (
                    <div className="text-center">
                        <Spinner animation="border" />
                    </div>
                ) : error ? (
                    <div className="text-center">
                        <p>{error}</p>
                    </div>
                ) : (
                    <Row>
                        {astronauts.map((astronaut, index) => (
                            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                                <Card>
                                    <Card.Img variant="top" src={prf} alt="Astronaut" />
                                    <Card.Body>
                                        <Card.Title>{astronaut.name}</Card.Title>
                                        <Card.Text>
                                            Craft: {astronaut.craft}
                                        </Card.Text>
                                        <Button as={Link} to={`/Biography/${index}`} variant="primary">
                                            Read More
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
            <footer className="bg-dark text-white text-center py-3 mt-4">
                <Container>
                    <p>About Us</p>
                </Container>
            </footer>
        </div>
    );
};

export default AboutUs;
