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
      products: [],
      currentProduct: {}
    }
    this.getProducts = this.getProducts.bind(this);
    this.updateProducts = this.updateProducts.bind(this);
    this.editSelect = this.editSelect.bind(this);
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    axios.get('/api/products')
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log('get all products axios error', err))
  }
  updateProducts(productArr) {
    this.setState({ products: productArr })
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
        <Form product={this.state.currentProduct} updateProducts={this.updateProducts} />
        <Dash products={this.state.products} editSelect={this.editSelect} updateProducts={this.updateProducts} />
      </div>
    );
  }
}

export default App;
