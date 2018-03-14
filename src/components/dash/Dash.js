import React, { Component } from 'react';
import axios from 'axios';

import Product from './Product';
import './Dash.css';

class Dash extends Component {
  constructor(props) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
  }
  deleteProduct(id) {
    axios.delete(`/api/product/${id}`)
      .then(res => this.props.getInventory())
      .catch(err => console.log('delete product axios error', err))
  }
  render() {
    return (
      <div className='Dash'>
        {this.props.inventory.map((el) => {
          return <Product key={el.id} item={el} editSelect={this.props.editSelect} deleteProduct={this.deleteProduct} />
        })}
      </div>
    );
  }
}

export default Dash;