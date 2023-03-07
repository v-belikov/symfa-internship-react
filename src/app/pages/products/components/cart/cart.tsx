import React, { useMemo, useState } from 'react';
import { config } from 'app/core/config';
import { useAppDispatch, useAppSelector } from 'app/core/hooks';
import { RootState } from 'app/store';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from 'app/store/cart';
import { ReactComponent as CartLogo } from './cart_icon.svg';

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
        <CartLogo />
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
                  src={`${config.API_URL}images/products/${cartItem.sku}-1-cart.webp`}
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
            <p>Subtotal {total.price.toFixed(2)}</p>
            <button
              type="button"
              onClick={() =>
                alert(
                  total.price === 0
                    ? 'Add some product in the cart!'
                    : `Checkout - subtotal $ ${total.price}`,
                )
              }
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
