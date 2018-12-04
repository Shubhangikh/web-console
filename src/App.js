import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound';
import Login from './components/login/Login';
import Logout from './components/login/Logout';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import ForgotPassword from './components/login/ForgotPassword';
import ResetPassword from './components/login/ResetPassword';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <main className="container">
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" render={() => <Redirect to="/login" />} />
              <Route path="/logout" component={Logout} />
              <Route path="/register" component={Register} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/reset-password" component={ResetPassword} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="*" component={NotFound} />
            </Switch>
          </BrowserRouter>
        </main>
      </Fragment>
    );
  }
}

export default App;
