import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { store } from 'app/store/basket';

export const ShoppingBasket: FC = () => {
  const [goodsInBasket, setGoodsInBasket] = useState([]);

  setGoodsInBasket(store.getState());

  const GoodItem: FC = () => {
    return (
      <div>
        <Button variant="dark">+</Button>
        <Button variant="dark">-</Button>
        <Button variant="dark">remove</Button>
      </div>
    );
  };

  return (
    <div className="shopping-basket wrapper">
      <div>
        {goodsInBasket.length > 0 ? (
          <>
            {goodsInBasket.map(item => {
              return <GoodItem key={item} />;
            })}
          </>
        ) : (
          'empty'
        )}
      </div>
    </div>
  );
};
