import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Products } from '../../goods';
import { OpenCart } from './components/openCart';

import './cart.scss';

interface CartProducts {
  productsAddedCart: Products[];
  setproductsAddedCart: Dispatch<SetStateAction<Products[]>>;
}
export const Cart: FC<CartProducts> = ({
  productsAddedCart,
  setproductsAddedCart,
}: CartProducts) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className={menuActive ? 'cart active' : 'cart'}>
      <button
        type="button"
        className="cart_button"
        onClick={() => setMenuActive(!menuActive)}
      >
        <FontAwesomeIcon icon={faCartShopping} color="white" />
        <div className="counts-products">
          <span>{productsAddedCart.length}</span>
        </div>
      </button>
      <OpenCart
        productsAddedCart={productsAddedCart}
        setproductsAddedCart={setproductsAddedCart}
      />
    </div>
  );
};
