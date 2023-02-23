import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';

export const ShoppingBasket: FC = () => {
  return (
    <div className="shopping-basket wrapper">
      <div>
        <Button variant="dark">+</Button>
        <Button variant="dark">-</Button>
        <Button variant="dark">remove</Button>
      </div>
    </div>
  );
};
