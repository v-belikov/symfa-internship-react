import React, { FC, useState } from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from 'app/core/hooks';
import { getProductsInCart } from 'app/store/products/cart-slice';
import { OpenCart } from './components/openCart';

import './cart.scss';

export const Cart: FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const productsInCart = useAppSelector(getProductsInCart);

  return (
    <div className={menuActive ? 'cart' : 'cart active'}>
      <button
        type="button"
        className="cart_button"
        onClick={() => setMenuActive(!menuActive)}
      >
        <FontAwesomeIcon icon={faCartShopping} color="white" />
        <div className="cart_button-counts-products">
          <span>{productsInCart.length}</span>
        </div>
      </button>
      <OpenCart />
    </div>
  );
};
