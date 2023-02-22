import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
} from '../../store/cart/cartSlice';

import './cart.scss';

const Cart = () => {
  const [cartActive, setCartActive] = useState(false);
  const cart = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="cart-btn" onClick={() => setCartActive(!cartActive)}>
        <img src="../../assets/images/cart-icon.png" alt="Cart" />
      </div>
      <div className={cartActive ? 'cart-container active' : 'cart-container'}>
        <div className="cart-content">
          {cart.map((elem: any) => {
            const cartItem = elem.item;

            return (
              <div>
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
                    onClick={() => dispatch(decrementQuantity(cartItem))}
                  >
                    -
                  </button>
                  {elem.quantity}
                  <button
                    type="button"
                    onClick={() => dispatch(incrementQuantity(cartItem))}
                  >
                    +
                  </button>
                </div>
                {/* <button type="button" onClick={()=>{dispatch(removeItem())}>x</button> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
