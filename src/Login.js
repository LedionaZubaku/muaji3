// src/Login.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
    // Simulate a login
    if (values.username === 'admin' && values.password === 'admin') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2 className="text-center">Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              id="username"
              name="username"
              className="form-control"
            />
            <ErrorMessage name="username">
              {(errorMsg) => <div className="text-danger">{errorMsg}</div>}
            </ErrorMessage>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="form-control"
            />
            <ErrorMessage name="password">
              {(errorMsg) => <div className="text-danger">{errorMsg}</div>}
            </ErrorMessage>
          </div>

          <button type="submit" className="btn btn-primary mt-3 w-100"style={{ backgroundColor: '#212529' }}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
