import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/core/hooks';
import { RootState } from 'app/store';
import {
  addQuantityCartProduct,
  setCartProducts,
} from 'app/store/products/cart-slice';
import { Cards } from './components/cards/cards';
import { Cart } from './components/cart';
import { Sizes } from './components/sizes';

import './goods.scss';

export type Products = {
  id: number;
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
  amount: number;
};
export const Goods: FC = () => {
  const [filterSizes, setFilterSizes] = useState<string[]>([]);
  const [resPrice, setResPrice] = useState<number>(0);

  const productsInCart = useAppSelector(
    (state: RootState) => state.cart.productsInCart,
  );
  const dispatch = useAppDispatch();

  console.log(productsInCart);

  const addToCart = (i: Products) => {
    setResPrice(resPrice + i.price);

    const isItemInCart = productsInCart.find(item => item.id === i.id);

    if (isItemInCart) {
      dispatch(addQuantityCartProduct(i));
    } else {
      dispatch(setCartProducts(i));
    }
  };

  return (
    <div className="goods">
      <Sizes setFilterSizes={setFilterSizes} />
      <Cards filterSizes={filterSizes} addToCart={addToCart} />
      <Cart
        addToCart={addToCart}
        resPrice={resPrice}
        setResPrice={setResPrice}
      />
    </div>
  );
};
