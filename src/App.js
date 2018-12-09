import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound';
import Login from './components/login/Login';
import Logout from './components/login/Logout';
import Register from './components/register/Register';
import Home from './components/home/Home';
import ForgotPassword from './components/login/ForgotPassword';
import ResetPassword from './components/login/ResetPassword';
import UserProfile from './components/profile/UserProfile';
import CurrentBidding from './components/bids/CurrentBidding';
import Items from './components/items/Items';
import Auctions from './components/auction/Auction';
import Bids from './components/bids/Bids';
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
              <Route path="/logout" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/reset-password" component={ResetPassword} />
              <Route path="/home" component={Home} />
              <Route path="/profile" component={UserProfile} />
              <Route path="/items" component={Items} />
              <Route path="/auctions" component={Auctions} />
              <Route path="/bids" component={Bids} />
              <Route path="/current-bidding" component={CurrentBidding} />
              <Route path="*" component={NotFound} />
            </Switch>
          </BrowserRouter>
        </main>
      </Fragment>
    );
  }
}

export default App;
