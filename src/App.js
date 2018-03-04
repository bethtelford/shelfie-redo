import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, withRouter } from 'react-router-dom';

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
    this.deleteProduct = this.deleteProduct.bind(this);
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
  deleteProduct(id) {
    axios.delete(`/api/product/${id}`)
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log('delete product axios error', err))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={_ => {
            return <Dash products={this.state.products} editSelect={this.editSelect} deleteProduct={this.deleteProduct} /> 
          }} />
          <Route path='/add' render={_ => {
            return <Form updateProducts={this.updateProducts} /> 
          }} />
          <Route path='/edit/:id' render={_ => {
            return <Form updateProducts={this.updateProducts} /> 
          }} />
        
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
