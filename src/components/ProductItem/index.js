import React from 'react';

import './styles.css';

function ProductItem({ imageUrl, name, price, sellingPrice }) {
  return (
    <section id="product-item">
      <img src={imageUrl} alt=""/>
      <div id="info">
        <h1>{name}</h1>
        <span id="price">R$ {price / 100}</span>
        <span id="selling-price">R$ {sellingPrice / 100}</span>
      </div>
     
    </section>
  )
}

export default ProductItem;