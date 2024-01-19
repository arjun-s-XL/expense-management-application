import React from 'react';
import { useSelector } from 'react-redux';
import withDataFetching from '../hocs/withDataFetching';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { FaRegAddressCard, FaChartBar, FaCog, FaLightbulb, FaSignOutAlt} from 'react-icons/fa';
import { FaCalendarAlt, FaDatabase, FaPhone, FaClock, FaHome, FaUser } from 'react-icons/fa';



const UsagePage = ({ data, loading, error }) => {

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
  let email = userData.email;
  console.log("Email:"+email);
  console.log("Data:"+JSON.stringify(data));


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const telecomData = data.telecomPlanUsage;

  return (
    <div>
      {isAuthenticated ? (
      <Container className="p-3">

       <Container className="p-3" style={{backgroundColor: '#8CDBFF'}}> 
            <img src='images/expense-image.png' alt='' width={300} height={200}/>     
            <h1 className="header">Welcome To Expense Management Application</h1>
            <br/>
            <h4 className="mb-4">Telecom Plan Usage for {userData.user.name}</h4>
        </Container>   
        
        <Container className="p-3"> 
          <Card>
              <Card.Body>
                <Card.Link>{icons[6]} <Link to="/home">Home</Link></Card.Link>
                <Card.Link>{icons[0]} <Link to="/plan">My Plan</Link></Card.Link>
                <Card.Link>{icons[2]} <Link to="/usage-analysis">Usage Analysis</Link></Card.Link>
                <Card.Link>{icons[3]} <Link to="/recommendation">Plan Recommendation</Link></Card.Link>
                <Card.Link>{icons[4]} <Link to="/update-plan">Update Plan</Link></Card.Link>
                <Card.Link>{icons[5]} <Link to="/logout">LogOut</Link></Card.Link>
            </Card.Body>
          </Card>
        </Container>

        <br/><br/>

      <div>
        
      <Table striped bordered hover responsive>
      <thead className="thead-dark">
        <tr>
          <th><FaCalendarAlt /> Date</th>
          <th><FaDatabase /> Data Used</th>
          <th><FaClock /> Minutes Used</th>
          <th><FaPhone /> Text Messages Sent</th>
        </tr>
      </thead>
      <tbody>
        {telecomData.map((usage, index) => (
          <tr key={index}>
            <td>{usage.date}</td>
            <td style={{ color: usage.dataUsed > 1024 ? 'red' : 'inherit' }}>{usage.dataUsed}</td>
            <td>{usage.minutesUsed}</td>
            <td>{usage.textMessagesSent}</td>
          </tr>
        ))}
      </tbody>
    </Table>
      </div>
      </Container> ) : (
        <p>Please Login First</p>
      )}
    </div>
  );
};

const apiUrl = 'http://localhost:9010/get-user-plan-usage?email='+sessionStorage.getItem('email');
export default withDataFetching(apiUrl)(UsagePage);
