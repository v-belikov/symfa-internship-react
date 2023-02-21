import React, { useState } from 'react';

import './cart.scss';

const Cart = () => {
  const [basketActive, setBasketActive] = useState(false);

  return (
    <div>
      <div
        className="basket-btn"
        onClick={() => setBasketActive(!basketActive)}
      >
        <img src="../../assets/images/cart-icon.png" alt="Basket" />
      </div>
      <div
        className={
          basketActive ? 'basket-container active' : 'basket-container'
        }
      >
        <div className="basket-content">Basket content</div>
      </div>
    </div>
  );
};

export default Cart;
