import React from 'react';
import Basket from './bucket/Basket';
import ProductCard from './product-cards/ProductCard';
import Sizes from './sizes/Sizes';

const Index = () => {
  return (
    <div>
      <Sizes />
      <ProductCard />
      <Basket />
    </div>
  );
};

export default Index;
