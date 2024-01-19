import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { FaUser, FaRegIdCard, FaRegEnvelope, FaRegHdd, FaRegClock, FaRegComment, FaRegMoneyBillAlt } from 'react-icons/fa';
import { FaIdCard, FaCrown, FaRegAddressCard, FaChartBar, FaCog, FaLightbulb, FaSignOutAlt, FaHome } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';


const PlanPage = () => {

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

  return (
    <div>
      {isAuthenticated ? (
        <Container className="p-3">
        
        <Container className="p-3" style={{backgroundColor: '#8CDBFF'}}> 
            <img src='images/expense-image.png' alt='' width={300} height={200}/>     
            <h1 className="header">Welcome To Expense Management Application</h1>
            <br/>
            <h4>Telecom Plan For: {userData.user.name}!</h4>
        </Container>

        <Container className="p-3"> 
          <Card>
              <Card.Body>
                <Card.Link>{icons[6]} <Link to="/home">Home</Link></Card.Link>
                <Card.Link>{icons[1]} <Link to="/usage">Usage</Link></Card.Link>
                <Card.Link>{icons[2]} <Link to="/usage-analysis">Usage Analysis</Link></Card.Link>
                <Card.Link>{icons[3]} <Link to="/recommendation">Plan Recommendation</Link></Card.Link>
                <Card.Link>{icons[4]} <Link to="/update-plan">Update Plan</Link></Card.Link>
                <Card.Link>{icons[5]} <Link to="/logout">LogOut</Link></Card.Link>
            </Card.Body>
          </Card>
        </Container>
        
        <Container className="p-3">

        <Container style={{backgroundColor: '#8CDBFF'}} className="p-3">
        <Card className="shadow-lg rounded">
        <Card.Body className="text-center">
        <Card.Title>Plan Details</Card.Title>
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

    <p />

    <Container style={{backgroundColor: '#B4FFC4'}} className="p-3">
    
    <Card className="shadow-lg rounded">
      <Card.Body>

        <Card.Title className="h2 text-primary mb-4"></Card.Title>

        <Container style={{ backgroundColor: '#EEFFF1' }} className="p-3">
          <div className="mb-4">
            <FaRegMoneyBillAlt className="display-4 text-primary" />
          </div>
          <p>Basic Details:</p>
          <Card.Text>
            <strong><FaRegIdCard className="mr-2" /> Plan ID:</strong> {userData.user.plan.planId}
          </Card.Text>

          <Card.Text>
            <strong><FaRegEnvelope className="mr-2" /> Plan Name:</strong> {userData.user.plan.planName}
          </Card.Text>

          <Card.Text>
            <strong><FaRegHdd className="mr-2" /> Data Allowance:</strong> {userData.user.plan.dataAllowanceGB} GB
          </Card.Text>

          <Card.Text>
            <strong><FaRegClock className="mr-2" /> Minutes:</strong> {userData.user.plan.minutes}
          </Card.Text>

          <Card.Text>
            <strong><FaRegComment className="mr-2" /> Text Messages:</strong> {userData.user.plan.textMessages}
          </Card.Text>

          <Card.Text>
            <strong><FaRegMoneyBillAlt className="mr-2" /> Validity: </strong> {userData.user.plan.contractLengthMonths} (Months)
          </Card.Text>

          <Card.Text>
            <strong><FaRegMoneyBillAlt className="mr-2" /> Monthly Cost:</strong> ₹{userData.user.plan.monthlyCost}
          </Card.Text>

        </Container>

        <br />

        <Container style={{ backgroundColor: '#D8F3FF' }} className="p-3">
          <div className="mb-4">
            <FaRegEnvelope className="display-4 text-primary" />
          </div>
          <p>Extended Details:</p>

          <Card.Text>
            <strong><FaRegMoneyBillAlt className="mr-2" /> Additional Fees:</strong> ₹{userData.user.plan.additionalFees}
          </Card.Text>

          <Card.Text>
            <strong><FaRegHdd className="mr-2" /> Data Speed:</strong> {userData.user.plan.dataSpeed}
          </Card.Text>

          <Card.Text>
            <strong><FaRegEnvelope className="mr-2" /> Network Coverage:</strong> {userData.user.plan.networkCoverage}
          </Card.Text>

          <Card.Text>
            <strong><FaRegComment className="mr-2" /> Family Plan Options:</strong> {userData.user.plan.familyPlanOptions ? 'Yes' : 'No'}
          </Card.Text>

          <Card.Text>
            <strong><FaRegComment className="mr-2" /> Device Subsidies:</strong> {userData.user.plan.deviceSubsidies ? 'Yes' : 'No'}
          </Card.Text>

          <Card.Text>
            <strong><FaRegMoneyBillAlt className="mr-2" /> Streaming Services:</strong> {userData.user.plan.streamingServices}
          </Card.Text>

          <Card.Text>
            <strong><FaRegComment className="mr-2" /> Usage Alerts:</strong> {userData.user.plan.usageAlerts ? 'Yes' : 'No'}
          </Card.Text>

          <Card.Text>
            <strong><FaRegComment className="mr-2" /> Early Termination Terms:</strong> {userData.user.plan.earlyTerminationTerms}
          </Card.Text>

          <Card.Text>
            <strong><FaRegMoneyBillAlt className="mr-2" /> Discounts:</strong> ₹{userData.user.plan.discounts}
          </Card.Text>

          <Card.Text>
            <strong><FaRegEnvelope className="mr-2" /> Customer Support:</strong> {userData.user.plan.customerSupport}
          </Card.Text>

        </Container>
      </Card.Body>
    </Card>
      </Container>
      
    </Container>
        
        </Container>
      ) : (
        <p>Please Login First</p>
      )}
    </div>
  );
};

export default PlanPage;