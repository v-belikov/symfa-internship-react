import React from 'react';
import Cart from './cart/Cart';
import ProductCard from './product-cards/ProductCard';
import Sizes from './sizes/Sizes';

import './index.scss';

const Index = () => {
  return (
    <div>
      <div className="index-container">
        <Sizes />
        <ProductCard />
      </div>
      <Cart />
    </div>
  );
};

export default Index;
