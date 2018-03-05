import React from 'react';
import { withRouter } from 'react-router-dom';

import noImg from './../../assets/no_image.jpg';
import './Product.css';

function Product(props) {
  let { id, name, price, img } = props.item;
  img ? null : img = noImg;
  return (
    <div className='Product'>
      <div className='product_img' style={{ backgroundImage: `url(${img})` }}></div>
      <div className='product_box'>
        <p className='product_title'>{name}</p>
        <p className='product_price'>${price}</p>
      </div>
      <div className='product_button_box'>
        <button onClick={_ => props.deleteProduct(id)}>Delete</button>
        <button onClick={_ => props.history.push(`/edit/${props.item.id}`)}>Edit</button>
      </div>
    </div>
  )
}

export default withRouter(Product);