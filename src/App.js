import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/User/Login';
import Register from './components/User/Register';
import Dashboard from './components/Dashboard';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/logout" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Router>
  );
}
