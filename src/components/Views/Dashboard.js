import React from 'react';
import AccountDashboard from '../Account/AccountDashboard';
import TransactionDashboard from '../Transaction/TransactionDashboard';
import JarDashboard from '../Jar/JarDashboard';
import { Row } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <>
            <div className="my-sm-4 mx-sm-5 m-3">
                <AccountDashboard></AccountDashboard>
            </div>
            <div className="my-sm-4 mx-sm-5 m-3 pt-4">
                <Row className="g-4">
                    <TransactionDashboard></TransactionDashboard>
                    <JarDashboard></JarDashboard>
                </Row>
            </div>
        </>
    )
}

export default Dashboard;