import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import User from './components/User';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <main className="container">
          <BrowserRouter>
            <Switch>
              <Route path="/user" component={User} />
              <Redirect from="/" to="/user" />
              <Redirect to="/not-found" />
            </Switch>
          </BrowserRouter>
        </main>
      </Fragment>
    );
  }
}

export default App;
