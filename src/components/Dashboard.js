import React from 'react';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';
import AccountDashboard from './Account/AccountDashboard';
import TransactionDashboard from './Transaction/TransactionDashboard';
import JarDashboard from './Jar/JarDashboard';
import { Row } from 'react-bootstrap';

const Dashboard = () => {
  return <div className="m-0 p-0 vw-100 d-flex align-items-stretch">
    <Sidebar></Sidebar>
    <div className="w-100 mainDiv bg-light">
      <Navbar></Navbar>
      <div className="my-sm-4 mx-sm-5 m-3">
        <AccountDashboard></AccountDashboard>
      </div>
      <div className="my-sm-4 mx-sm-5 m-3 pt-4">
        <Row className="g-4">
          <TransactionDashboard></TransactionDashboard>
          <JarDashboard></JarDashboard>
        </Row>
      </div>
    </div>
  </div>;
};

export default Dashboard;
