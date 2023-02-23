import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from 'app/store/cart';

import './cart.scss';

export const Cart = () => {
  const [cartActive, setCartActive] = useState(false);
  const cart = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    let totalQuantity: number = 0;
    let totalPrice: number = 0;

    cart.forEach((item: any) => {
      totalQuantity += item.quantity;
      totalPrice += item.item.price * item.quantity;
    });

    return { totalQuantity, totalPrice };
  };

  return (
    <div>
      <div className="cart-btn" onClick={() => setCartActive(!cartActive)}>
        <img src="../../../../../assets/images/cart-icon.png" alt="Cart" />
      </div>
      <div className={cartActive ? 'cart-container active' : 'cart-container'}>
        <div className="cart-content">
          <p>
            {getTotal().totalQuantity === 0
              ? 'Add some products in the cart :)'
              : getTotal().totalQuantity}
          </p>
          {cart.map((elem: any) => {
            const cartItem = elem.item;

            return (
              <div key={elem.id}>
                <img
                  src={`http://54.175.134.132/images/products/${cartItem.sku}-1-cart.webp`}
                  alt="Cart item"
                />
                <div>{cartItem.title}</div>
                <div>{cartItem.style}</div>
                <div>
                  {cartItem.currencyFormat}
                  {cartItem.price}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => dispatch(decrementQuantity(cartItem.id))}
                  >
                    -
                  </button>
                  {elem.quantity}
                  <button
                    type="button"
                    onClick={() => dispatch(incrementQuantity(cartItem.id))}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => dispatch(removeItem(cartItem.id))}
                >
                  x
                </button>
              </div>
            );
          })}
          <p>{getTotal().totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
