import React from 'react';
import { Cart } from './cart';
import { ProductCards } from './product-cards';
import { Sizes } from './sizes';

import './products.scss';

export const Products = () => {
  return (
    <div>
      <div className="index-container">
        <Sizes />
        <ProductCards />
      </div>
      <Cart />
    </div>
  );
};
