import React from 'react';

import ProductItem from '../ProductItem';

function ProductList({ items }) {
  return (
    items.map(item => (
      <ProductItem
        key={item.uniqueId}
        imageUrl={item.imageUrl}
        name={item.name}
        price={item.price}
        sellingPrice={item.sellingPrice}
      />
    ))
  );
}

export default ProductList;