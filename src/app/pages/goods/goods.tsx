import React, { FC, useState } from 'react';
import { Cards } from './components/cards/cards';
import { Cart } from './components/cart';
import { Sizes } from './components/sizes';

import './goods.scss';

export type Products = {
  availableSizes: string[];
  currencyFormat: string;
  currencyId: string;
  description: string;
  installments: number;
  isFreeShipping: boolean;
  price: number;
  sku: number;
  style: string;
  title: string;
};
export const Goods: FC = () => {
  const [filterSizes, setFilterSizes] = useState<string[]>([]);
  const [productsAddedCart, setproductsAddedCart] = useState<Products[]>([]);

  return (
    <div className="goods">
      <Sizes setFilterSizes={setFilterSizes} />
      <Cards
        filterSizes={filterSizes}
        setproductsAddedCart={setproductsAddedCart}
      />
      <Cart
        productsAddedCart={productsAddedCart}
        setproductsAddedCart={setproductsAddedCart}
      />
    </div>
  );
};
