import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/User/Login';
import Register from './components/User/Register';
import Main from './components/Main';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Main} />
      </Switch>
    </Router>
  );
}
