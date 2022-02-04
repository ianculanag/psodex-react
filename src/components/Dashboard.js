import React from 'react';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';
// import { Container } from 'react-bootstrap';

const Dashboard = () => {
  return <div className="m-0 p-0 bg-light vw-100 d-flex align-items-stretch">
    <Sidebar></Sidebar>
    <Navbar></Navbar>
  </div>;
};

export default Dashboard;
