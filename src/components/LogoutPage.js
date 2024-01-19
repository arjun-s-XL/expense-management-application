import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/authSlice';
import { useDispatch } from 'react-redux';

const LogoutPage = () => {
  
  const dispatch = useDispatch();
  dispatch(logout());

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
      <div>
      <Container className="p-3">

      <Container className="p-3" style={{backgroundColor: '#B4FFC4'}}> 
       <img src='images/login.png' alt='' width={200} height={200}/>     
        <p className="header">Thank You {sessionStorage.getItem('email')} for Using</p>
        <h1 className="header">Expense Management Application</h1>
        <p>
        Pocket-friendly plans at your fingertips: Revolutionizing telecom expense management for a seamless, cost-effective journey!
        </p>
      </Container>
      <Button variant="link"  onClick={handleHomeClick}>Visit Home</Button>
      <Button variant="link"  onClick={handleButtonClick}>Login Again </Button>
      
      </Container>
    </div>
  );
};

export default LogoutPage;