import React, { useState, useEffect, useMemo } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegAddressCard, FaChartBar, FaCog, FaLightbulb, FaSignOutAlt} from 'react-icons/fa';
import { FaHome, FaUser } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';
import { FaIdCard, FaRegHdd, FaCrown, FaRegMoneyBillAlt } from 'react-icons/fa';
import { FaRegIdCard, FaDatabase, FaPhone, FaClock, FaGlobe, FaMoneyBillAlt } from 'react-icons/fa';


const PlanRecommendationPage = () => {

  const icons = [
    <FaRegAddressCard />,
    <FaChartBar />,
    <FaUser />,
    <FaCog />,
    <FaLightbulb />,
    <FaSignOutAlt />,
    <FaHome />,
  ];

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userData = useSelector((state) => state.auth.user);

  console.log("isAuthenticated:"+isAuthenticated);
  console.log("userData:"+userData);

  // State to hold user preferences
  const [userPreferences, setUserPreferences] = useState({
    dataAllowance: 20,
    minutes: 500,
    textMessages: 200,
    internationalRoaming: true,
    contractLengthMonths: 24,
    monthlyCost: 0,
  });

  // State to hold plans data
  const [plansData, setPlansData] = useState({ telecomPlans: [] });

  useEffect(() => {
    // Fetch plans data from the API endpoint
    const fetchPlansData = async () => {
      try {
        const response = await fetch('http://localhost:9010/get-plans');
        const data = await response.json();
        console.log("Plans Data:"+JSON.stringify(data));
        setPlansData(data);
      } catch (error) {
        console.error('Error fetching plans data:', error);
      }
    };

    // Call the fetch function
    fetchPlansData();
  }, []);

  // Function to recommend a plan based on user preferences
  const recommendPlan = useMemo(() => {
    return () => {
      const { dataAllowance, minutes, textMessages, internationalRoaming, contractLengthMonths, monthlyCost } = userPreferences;

      // Filter plans based on user preferences
      const filteredPlans = plansData.telecomPlans.filter((plan) => {
        return (
          plan.dataAllowanceGB >= dataAllowance &&
          plan.minutes >= minutes &&
          plan.textMessages >= textMessages
        );
      });

      // Sort the filtered plans by a scoring system
      const sortedPlans = filteredPlans.sort((a, b) => {
        // Calculate a score for each plan based on how well it matches the preferences
        const scoreA = calculatePlanScore(a);
        const scoreB = calculatePlanScore(b);

        // Sort in descending order of score
        return scoreB - scoreA;
      });

      console.log("sortedPlans:" + JSON.stringify(sortedPlans));

      // Return the recommended plan (the one with the highest score)
      return sortedPlans.length > 0 ? sortedPlans[0] : null;
    };
  }, [userPreferences, plansData]);

  // Function to calculate a score for a plan based on how well it matches the preferences
  const calculatePlanScore = (plan) => {
    const { dataAllowance, minutes, textMessages, internationalRoaming, contractLengthMonths, monthlyCost } = userPreferences;

    // You can adjust the weights based on the importance of each factor
    const weightDataAllowance = 2;
    const weightMinutes = 1.5;
    const weightTextMessages = 1.2;
    const weightInternationalRoaming = 1.5;
    const weightContractLengthMonths = 1;
    const weightMonthlyCost = 2;

    // Calculate the score for the plan
    const score =
      weightDataAllowance * (plan.dataAllowanceGB / dataAllowance) +
      weightMinutes * (plan.minutes / minutes) +
      weightTextMessages * (plan.textMessages / textMessages) +
      weightInternationalRoaming * (plan.internationalRoaming === internationalRoaming ? 1 : 0) +
      weightContractLengthMonths * (contractLengthMonths / plan.contractLengthMonths) +
      weightMonthlyCost * (1 - plan.monthlyCost / monthlyCost);

    return score;
  };

  const recommendedPlan = recommendPlan();
  console.log("recommendedPlan: "+recommendedPlan);
  return (
    <div>
      {recommendedPlan ? (
         <Container className="p-3">

      <Container className="p-3" style={{backgroundColor: '#8CDBFF'}}> 
            <img src='images/expense-image.png' alt='' width={300} height={200}/>     
            <h1 className="header">Welcome To Expense Management Application</h1>
            <br/>
            <h2>Plan Recommendation</h2>
          <br/>
          <h4>Hello, {userData.user.name}!</h4>
        </Container>   

        <Container className="p-3"> 
          <Card>
              <Card.Body>
                <Card.Link>{icons[6]} <Link to="/home">Home</Link></Card.Link>
                <Card.Link>{icons[0]} <Link to="/plan">My Plan</Link></Card.Link>
                <Card.Link>{icons[2]} <Link to="/usage-analysis">Usage Analysis</Link></Card.Link>
                <Card.Link>{icons[4]} <Link to="/update-plan">Update Plan</Link></Card.Link>
                <Card.Link>{icons[5]} <Link to="/logout">LogOut</Link></Card.Link>
            </Card.Body>
          </Card>
        </Container>

        <Container style={{backgroundColor: '#8CDBFF'}} className="p-3">
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

      <Container style={{backgroundColor: '#B4FFC4'}} className="p-3">  
      <Card>
      <Card.Body>
        <h4>We Recommend the following Plan for you:</h4>
        <br />
        <Card.Title>Recommend Plan Details</Card.Title>
        <Card.Text>
          <strong><FaRegIdCard color="blue" /> Plan Name:</strong> {recommendedPlan.planName}
        </Card.Text>
        <Card.Text>
          <strong><FaDatabase color="green" /> Data Allowance:</strong> {recommendedPlan.dataAllowanceGB} GB
        </Card.Text>
        <Card.Text>
          <strong><FaClock color="orange" /> Minutes:</strong> {recommendedPlan.minutes}
        </Card.Text>
        <Card.Text>
          <strong><FaPhone color="purple" /> Text Messages:</strong> {recommendedPlan.textMessages}
        </Card.Text>
        <Card.Text>
          <strong><FaGlobe color="red" /> International Roaming:</strong> {recommendedPlan.internationalRoaming ? 'Yes' : 'No'}
        </Card.Text>
        <Card.Text>
          <strong><FaMoneyBillAlt color="black" /> Monthly Cost:</strong> ₹{recommendedPlan.monthlyCost}
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
        </Container>
      ) : (
        <p>No plans match your preferences. Please adjust your preferences and try again.</p>
      )}
    </div>
  );
};

export default PlanRecommendationPage;
