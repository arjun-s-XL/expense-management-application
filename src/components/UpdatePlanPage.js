import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updatePlanAsync } from '../actions/authSlice';
import Badge from 'react-bootstrap/Badge';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaRegHdd, FaIdCard, FaCrown, FaRegAddressCard, FaChartBar, FaUser, FaCog, FaLightbulb, FaSignOutAlt, FaRegMoneyBillAlt } from 'react-icons/fa';
import { FaRegIdCard, FaDatabase, FaPhone, FaClock, FaGlobe, FaMoneyBillAlt } from 'react-icons/fa';

const UpdatePlanPage = () => {

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
  const dispatch = useDispatch(); 

  const [plansData, setPlansData] = useState({ telecomPlans: [] });

  useEffect(() => {
    const fetchPlansData = async () => {
      try {
        const response = await fetch('http://localhost:9010/get-plans');
        const data = await response.json();
        setPlansData(data);
      } catch (error) {
        console.error('Error fetching plans data:', error);
      }
    };

    fetchPlansData();
  }, []);

  const handleUpdatePlan = async (planId) => {
    try {
     // Dispatch the updatePlanAsync thunk to update the plan in Redux store
      await dispatch(updatePlanAsync({ email: sessionStorage.getItem('email'), planId }));

      // Show a success notification
      toast.success('Plan updated successfully to '+planId, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

    } catch (error) {
      console.error('Error updating user plan:', error);
    }
  };

  return (
    <Container className="p-3">

        <Container className="p-3" style={{backgroundColor: '#8CDBFF'}}> 
            <img src='images/expense-image.png' alt='' width={300} height={200}/>     
            <h1 className="header">Welcome To Expense Management Application</h1>
            <h2>Update Plan</h2>
            <h4>Hello, {userData.user.name}!</h4>
        </Container>

        <Container className="p-3"> 
          <Card>
              <Card.Body>
                <Card.Link>{icons[0]} <Link to="/plan">My Plan</Link></Card.Link>
                <Card.Link>{icons[1]} <Link to="/usage">Usage</Link></Card.Link>
                <Card.Link>{icons[2]} <Link to="/usage-analysis">Usage Analysis</Link></Card.Link>
                <Card.Link>{icons[3]} <Link to="/recommendation">Plan Recommendation</Link></Card.Link>
                <Card.Link>{icons[5]} <Link to="/logout">LogOut</Link></Card.Link>
            </Card.Body>
          </Card>
        </Container>


        <Container style={{backgroundColor: '#B4FFC4'}} className="p-3">
        <Card className="shadow-lg rounded">
        <Card.Body className="text-center">
        <Card.Title>Current Plan</Card.Title>
          <div className="mb-4">
            <FaRegHdd className="display-4 text-primary" />
          </div>
          <Card.Title className="h4 mb-3">{icons[2]} {userData.user.email}</Card.Title>
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
            <strong><FaRegMoneyBillAlt className="mr-2" /> Validity: </strong> {userData.user.plan.contractLengthMonths} (Months)
          </Card.Text>

          <Card.Text>
            <strong><FaRegMoneyBillAlt className="mr-2" /> Monthly Cost:</strong> ₹{userData.user.plan.monthlyCost}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>

      <br></br>
      <Container style={{backgroundColor: '#8CDBFF'}} className="p-3">

      <CardGroup>
        {plansData.telecomPlans.slice(0, 3).map((plan) => (
          <Card key={plan.planId}>
            <Card.Body>
              <Card.Title>{plan.planName}</Card.Title>
              <Card.Text><FaRegIdCard color="blue" /> Plan ID: {plan.planId}</Card.Text>
              <Card.Text><FaDatabase color="green" /> Data Allowance: {plan.dataAllowanceGB} GB</Card.Text>
              <Card.Text><FaClock color="orange" /> Minutes: {plan.minutes}</Card.Text>
              <Card.Text><FaPhone color="purple" /> Text Messages: {plan.textMessages}</Card.Text>
              <Card.Text><FaRegMoneyBillAlt color="green"/> Validity: {userData.user.plan.contractLengthMonths} (Months)</Card.Text>
              <Card.Text><FaGlobe color="red" /> International Roaming: {plan.internationalRoaming ? 'Yes' : 'No'}</Card.Text>
              <Card.Text><FaMoneyBillAlt color="black" /> Monthly Cost: ₹{plan.monthlyCost}</Card.Text>
              <Button variant="info" onClick={() => handleUpdatePlan(plan.planId)}>
              Update to {plan.planName}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>

      <CardGroup>
        {plansData.telecomPlans.slice(3).map((plan) => (
          <Card key={plan.planId}>
            <Card.Body>
              <Card.Title>{plan.planName}</Card.Title>
              <Card.Text><FaRegIdCard color="blue" /> Plan ID: {plan.planId}</Card.Text>
              <Card.Text><FaDatabase color="green" /> Data Allowance: {plan.dataAllowanceGB} GB</Card.Text>
              <Card.Text><FaClock color="orange" /> Minutes: {plan.minutes}</Card.Text>
              <Card.Text><FaPhone color="purple" /> Text Messages: {plan.textMessages}</Card.Text>
              <Card.Text><FaGlobe color="red" /> International Roaming: {plan.internationalRoaming ? 'Yes' : 'No'}</Card.Text>
              <Card.Text><FaMoneyBillAlt color="black" /> Monthly Cost: ₹{plan.monthlyCost}</Card.Text>
              <Button variant="info" onClick={() => handleUpdatePlan(plan.planId)}>
                Update to {plan.planName}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>

       {/* ToastContainer for notifications */}
       <ToastContainer />
       </Container>
    </Container>
  );
};

export default UpdatePlanPage;
