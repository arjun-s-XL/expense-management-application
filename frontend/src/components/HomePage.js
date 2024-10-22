import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { FaIdCard, FaCrown, FaRegAddressCard, FaChartBar, FaUser, FaCog, FaLightbulb, FaSignOutAlt, FaRegMoneyBillAlt } from 'react-icons/fa';

const HomePage = () => {
  
  const icons = [
    <FaRegAddressCard />,
    <FaChartBar />,
    <FaUser />,
    <FaCog />,
    <FaLightbulb />,
    <FaSignOutAlt />,
  ];

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userData = useSelector((state) => state.auth.user);
  console.log("Authentication:"+isAuthenticated);
  console.log("User Data:"+JSON.stringify(userData));

  return (
    <div>
      {isAuthenticated ? (
        <Container className="p-3">
            
        <Container className="p-3" style={{backgroundColor: '#8CDBFF'}}> 
            <img src='images/expense-image.png' alt='' width={300} height={200}/>     
            <h1 className="header">Welcome To Expense Management Application</h1>
            <br/>
            <h4>Welcome, {userData.user.name}!</h4>
        </Container>   
        
        <Container className="p-3"> 
          <Card>
              <Card.Body>
                <Card.Link>{icons[0]} <Link to="/plan">My Plan</Link></Card.Link>
                <Card.Link>{icons[1]} <Link to="/usage">Usage</Link></Card.Link>
                <Card.Link>{icons[2]} <Link to="/usage-analysis">Usage Analysis</Link></Card.Link>
                <Card.Link>{icons[3]} <Link to="/recommendation">Plan Recommendation</Link></Card.Link>
                <Card.Link>{icons[4]} <Link to="/update-plan">Update Plan</Link></Card.Link>
                <Card.Link>{icons[5]} <Link to="/logout">LogOut</Link></Card.Link>
            </Card.Body>
          </Card>
        </Container>

        <Container style={{backgroundColor: '#8CDBFF'}} className="p-3">
        <Card className="shadow-lg rounded">
      <Card.Body className="text-center">
        <div className="mb-4">
          <FaUser className="display-4 text-primary" />
        </div>
        <Card.Title className="h4 mb-3">{userData.user.email}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <FaIdCard className="mr-2" /> Plan ID: {userData.user.plan.planId}
        </Card.Subtitle>
        <Card.Text className="lead">
          <Badge variant="success" className="mr-2">
            <FaCrown className="mr-1" />
            {userData.user.plan.planName}
          </Badge>
        </Card.Text>

        <Card.Text>
          <strong><FaRegMoneyBillAlt className="mr-2 text-info" /> Validity: </strong> {userData.user.plan.contractLengthMonths} (Months)
        </Card.Text>

        <Card.Text>
          <strong><FaRegMoneyBillAlt className="mr-2 text-success" /> Monthly Cost:</strong> ₹{userData.user.plan.monthlyCost}
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
        </Container>
      ) : (
        <p>Please Login First</p>
      )}
    </div>
  );
};

export default HomePage;