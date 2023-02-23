import React, { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/core/hooks';
import { RootState } from 'app/store';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from 'app/store/cart';

import './cart.scss';

export const Cart = () => {
  const [isCartActive, setCartActive] = useState<boolean>(false);
  const cart = useAppSelector((state: RootState) => state.cart.cart);
  const dispatch = useAppDispatch();

  const total = useMemo(
    () =>
      cart.reduce(
        (acc, { quantity, item: { price } }) => {
          acc.quantity += quantity;
          acc.price += quantity * price;

          return acc;
        },
        { quantity: 0, price: 0 },
      ),
    [cart],
  );

  return (
    <div className="cart">
      <div className="cart-btn" onClick={() => setCartActive(!isCartActive)}>
        <img src="../../../../../assets/images/cart-icon.png" alt="Cart" />
      </div>
      <div
        className={isCartActive ? 'cart-container active' : 'cart-container'}
      >
        <div className="cart-content">
          <p>
            {total.quantity === 0
              ? 'Add some products in the cart :)'
              : total.quantity}
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
                  <p>Quantity: {elem.quantity}</p>
                  <button
                    type="button"
                    onClick={() => dispatch(decrementQuantity(cartItem.id))}
                  >
                    -
                  </button>
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
          <div className="subtotal">
            <p>Subtotal {total.price}</p>
            <button
              type="button"
              onClick={() => alert(`Checkout - subtotal $ ${total.price}`)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
