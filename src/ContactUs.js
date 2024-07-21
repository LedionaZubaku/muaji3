import React from 'react';
import { Container, Navbar, Nav, Button, Form as BootstrapForm } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import './styles.css';

const ContactUs = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        description: '',
        recaptcha: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        age: Yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        description: Yup.string().required('Description is required'),
        recaptcha: Yup.string().required('Please verify that you are human'),
    });

    const onSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    };

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
                            <Nav.Link as={Link} to="/Aboutus">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/Biography">Biography</Nav.Link>
                            <Nav.Link as={Link} to="/Contactus">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="mt-4">
                <h1>Contact Us</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting, setFieldValue }) => (
                        <Form>
                            <BootstrapForm.Group controlId="formFirstName">
                                <BootstrapForm.Label>First Name</BootstrapForm.Label>
                                <Field name="firstName" type="text" className="form-control" />
                                <ErrorMessage name="firstName" component="div" className="text-danger" />
                            </BootstrapForm.Group>

                            <BootstrapForm.Group controlId="formLastName" className="mt-3">
                                <BootstrapForm.Label>Last Name</BootstrapForm.Label>
                                <Field name="lastName" type="text" className="form-control" />
                                <ErrorMessage name="lastName" component="div" className="text-danger" />
                            </BootstrapForm.Group>

                            <BootstrapForm.Group controlId="formAge" className="mt-3">
                                <BootstrapForm.Label>Age</BootstrapForm.Label>
                                <Field name="age" type="number" className="form-control" />
                                <ErrorMessage name="age" component="div" className="text-danger" />
                            </BootstrapForm.Group>

                            <BootstrapForm.Group controlId="formEmail" className="mt-3">
                                <BootstrapForm.Label>Email</BootstrapForm.Label>
                                <Field name="email" type="email" className="form-control" />
                                <ErrorMessage name="email" component="div" className="text-danger" />
                            </BootstrapForm.Group>

                            <BootstrapForm.Group controlId="formDescription" className="mt-3">
                                <BootstrapForm.Label>Description</BootstrapForm.Label>
                                <Field name="description" as="textarea" rows={3} className="form-control" />
                                <ErrorMessage name="description" component="div" className="text-danger" />
                            </BootstrapForm.Group>

                            <BootstrapForm.Group controlId="formRecaptcha" className="mt-3">
                                <ReCAPTCHA
                                    sitekey="6LcNDBUqAAAAAJdCDvCIYrfnxYYvxYRYsbhH5X8L" // Replace with your actual site key
                                    onChange={(value) => setFieldValue('recaptcha', value)}
                                />
                                <ErrorMessage name="recaptcha" component="div" className="text-danger" />
                            </BootstrapForm.Group>

                            <Button variant="primary" type="submit" className="mt-3" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Container>

            <footer className="bg-dark text-white text-center py-3 mt-4">
                <Container>
                    <p>Contact Us</p>
                </Container>
            </footer>
        </div>
    );
};

export default ContactUs;
