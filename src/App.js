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
      inventory: [],
      currentProduct: {}
    }
    this.getInventory = this.getInventory.bind(this);
    this.editSelect = this.editSelect.bind(this);
  }
  componentDidMount() {
    this.getInventory();
  }
  getInventory() {
    axios.get('/api/inventory')
      .then(res => this.setState({ inventory: res.data }))
  }
  editSelect(product) {
    this.setState({
      currentProduct: product
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form product={this.state.currentProduct} getInventory={this.getInventory} />
        <Dash inventory={this.state.inventory} editSelect={this.editSelect} getInventory={this.getInventory} />
      </div>
    );
  }
}

export default App;
