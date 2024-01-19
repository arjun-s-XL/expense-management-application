import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {

const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  };

  return (
    
      <div>
      <Container className="p-3">

       <Container className="p-3" style={{backgroundColor: '#8CDBFF'}}> 
       <img src='images/expense-image.png' alt='' width={300} height={200}/>     
        <h1 className="header">Welcome To Expense Management Application</h1>
        <p>
        Pocket-friendly plans at your fingertips: Revolutionizing telecom expense management for a seamless, cost-effective journey!
        </p>
        <p>
          <Button variant="primary" onClick={handleButtonClick}>Click Here to Login</Button>
        </p>
      </Container>

      <Container className="p-3">
          <div class="row">
              <div class="col-md-4 mb-4">
                  <div class="card">
                      <div class="card-body">
                      <img className="a-block w-100" src="images/img1.jpg" alt="First slide" />
                      <p></p>
                          <h5 class="card-title">User Authentication</h5>
                          <p class="card-text">Allow users to log in and authenticate to access personalized usage data and recommendations.</p>
                          <i class="fas fa-user-lock fa-3x"></i>
                      </div>
                  </div>
              </div>

              <div class="col-md-4 mb-4">
                  <div class="card">
                      <div class="card-body">
                      <img className="a-block w-100" src="images/img2.jpg" alt="First slide" />
                      <p></p>
                          <h5 class="card-title">Navigation</h5>
                          <p class="card-text">Smooth navigation between different views, ensuring a seamless user experience.</p>
                          <i class="fas fa-directions fa-3x"></i>
                      </div>
                  </div>
              </div>

              <div class="col-md-4 mb-4">
                  <div class="card">
                      <div class="card-body">
                      <img className="a-block w-100" src="images/img3.jpg" alt="First slide" />
                      <p></p>
                          <h5 class="card-title">Dashboard Overview</h5>
                          <p class="card-text">Comprehensive dashboard providing an overview of historical usage data and current plan details.</p>
                          <i class="fas fa-chart-line fa-3x"></i>
                      </div>
                  </div>
              </div>

              <div class="col-md-4 mb-4">
                  <div class="card">
                      <div class="card-body">
                      <img className="a-block w-100" src="images/img4.jpg" alt="First slide" />
                      <p></p>
                          <h5 class="card-title">Usage Analysis Charts</h5>
                          <p class="card-text">Interactive charts and graphs for visualizing historical usage data, helping users understand their usage patterns.</p>
                          <i class="fas fa-chart-bar fa-3x"></i>
                      </div>
                  </div>
              </div>

              <div class="col-md-4 mb-4">
                  <div class="card">
                      <div class="card-body">
                      <img className="a-block w-100" src="images/img5.jpg" alt="First slide" />
                      <p></p>
                          <h5 class="card-title">Recommendations Section</h5>
                          <p class="card-text">Dedicated section for personalized recommendations based on historical data analysis.</p>
                          <i class="fas fa-lightbulb fa-3x"></i>
                      </div>
                  </div>
              </div>

              <div class="col-md-4 mb-4">
                  <div class="card">
                      <div class="card-body">
                      <img className="a-block w-100" src="images/img6.jpg" alt="First slide" />
                      <p></p>
                          <h5 class="card-title">Plan Adjustment Interface</h5>
                          <p class="card-text">Enable users to adjust their telecom plans directly from the dashboard, providing instant plan customization.</p>
                          <i class="fas fa-cogs fa-3x"></i>
                      </div>
                  </div>
              </div>
          </div>
          </Container>
      </Container>
    </div>
  );
};

export default WelcomePage;