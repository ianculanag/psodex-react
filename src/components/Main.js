import React from 'react';
import Navbar from './Common/Navbar';
import Sidebar from './Common/Sidebar';
import Dashboard from './Views/Dashboard';

import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import AddTransaction from './Transaction/AddTransaction';

import authToken from '../utils/authToken';

const Main = () => {
  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken);
  }

  return <BrowserRouter>
    <div className="m-0 p-0 vw-100 d-flex align-items-stretch">
      <Sidebar />
      <div className="w-100 mainDiv bg-light">
        <Navbar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/add-transaction" component={AddTransaction} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>;
};

export default withRouter(Main);
