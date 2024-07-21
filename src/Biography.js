import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Row, Col, Navbar, Nav, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './styles.css';
import space from './space.jpg';
import mockData from './mockData.json'; // Import mock data

const Biography = () => {
    const { id } = useParams();
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await axios.get('https://api.open-notify.org/astros.json');
                setPeople(response.data.people);
            } catch (error) {
                console.error('Error fetching people data:', error);
                setPeople(mockData.people); // Use mock data
                setError('Unable to fetch data at the moment. Using mock data.');
            } finally {
                setLoading(false);
            }
        };

        fetchPeople();
    }, []);

    return (
        <div>
            {/* ...Navbar code... */}
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
                        {id ? (
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
                        ) : (
                            people.map((person, index) => (
                                <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{person.name}</Card.Title>
                                            <Card.Text>
                                                Craft: {person.craft}
                                            </Card.Text>
                                            <Link to={`/biography/${index}`}>Read More</Link>
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
