import React from 'react';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';
import AccountContainer from './Account/AccountContainer';
import TransactionContainer from './Transaction/TransactionContainer';
// import { Container } from 'react-bootstrap';

const Dashboard = () => {
  return <div className="m-0 p-0 vw-100 d-flex align-items-stretch">
    <Sidebar></Sidebar>
    <div className="w-100 mainDiv bg-light">
      <Navbar></Navbar>
    <AccountContainer></AccountContainer>
    <TransactionContainer></TransactionContainer>
    </div>
  </div>;
};

export default Dashboard;
