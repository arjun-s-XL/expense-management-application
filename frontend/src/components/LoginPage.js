import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../actions/authSlice';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const LoginPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    sessionStorage.setItem('email', email.toString());
    dispatch(loginAsync({ email, password })).then((response) => {
      if (response.meta.requestStatus === 'fulfilled') {
        setTimeout(() => navigate("/home"), 400);
      }
    });
  };

  return (
    <div>
    <Container className="p-3">
    
    <Container className="p-3" style={{backgroundColor: '#B4FFC4'}}> 
       <img src='images/login.png' alt='' width={200} height={200}/>     
        <h1 className="header">Welcome To Expense Management Application</h1>
        <p>
        Pocket-friendly plans at your fingertips: Revolutionizing telecom expense management for a seamless, cost-effective journey!
        </p>
      </Container>
    <p></p>
    <h3>Enter Details to Login</h3>
  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" onClick={handleLogin} style={{background: '#017D69'}}>
        Login
      </Button>
    </Form>
    </Container>
    </div>

  );
};

export default LoginPage;
