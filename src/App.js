import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Dash from './components/dash/Dash';
import Form from './components/form/Form';

import './base.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Dash} />
          <Route path='/add' component={Form} />
          <Route path='/edit/:id' component={Form} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
