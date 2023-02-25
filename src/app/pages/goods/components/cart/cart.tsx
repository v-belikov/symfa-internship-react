import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from 'app/core/hooks';
import { RootState } from 'app/store';
import { Products } from '../../goods';
import { OpenCart } from './components/openCart';

import './cart.scss';

interface CartProducts {
  addToCart: (i: Products) => void;
  resPrice: number;
  setResPrice: Dispatch<SetStateAction<number>>;
}
export const Cart: FC<CartProducts> = ({
  addToCart,
  resPrice,
  setResPrice,
}: CartProducts) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const productsInCart = useAppSelector(
    (state: RootState) => state.cart.productsInCart,
  );

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
      <OpenCart
        addToCart={addToCart}
        resPrice={resPrice}
        setResPrice={setResPrice}
      />
    </div>
  );
};
