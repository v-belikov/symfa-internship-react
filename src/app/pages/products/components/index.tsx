import React from 'react';
import { Cart } from './cart';
import { ProductCard } from './product-cards';
import { Sizes } from './sizes';

import './index.scss';

export const Index = () => {
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
