import React, { Component } from 'react';
import axios from 'axios'; 

import Header from './components/header/Header';
import Dash from './components/dash/Dash';
import Form from './components/form/Form';

import './base.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this);
  }
  componentDidMount() {
    this.getInventory();
  }
  getInventory() {
    axios.get('/api/inventory')
    .then(res => this.setState({inventory: res.data}))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form getInventory={this.getInventory}/>
        <Dash inventory={this.state.inventory}/>
      </div>
    );
  }
}

export default App;
