import React from 'react';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';
import AccountContainer from './Account/AccountContainer';
// import { Container } from 'react-bootstrap';

const Dashboard = () => {
  return <div className="m-0 p-0 bg-light vw-100 d-flex align-items-stretch">
    <Sidebar></Sidebar>
    <div className="vh-100 w-100">
      <Navbar></Navbar>
    <AccountContainer></AccountContainer>
    </div>
  </div>;
};

export default Dashboard;
